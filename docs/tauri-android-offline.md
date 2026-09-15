---
title: Aplicativo Android offline com Tauri
---

# Aplicativo Android offline com Tauri

Este branch prepara o projeto Quartz para ser empacotado como um aplicativo Android offline usando Tauri v2.

A ideia do projeto e simples: o Quartz continua gerando um site estatico em `public/`, e o Tauri embute essa pasta dentro do app. Assim, o conteudo, a busca, os estilos, os scripts, KaTeX e Mermaid ficam disponiveis sem internet depois que o aplicativo for instalado.

## Objetivo

- Transformar o site Quartz em um app Android instalavel.
- Manter o conteudo funcionando offline.
- Evitar dependencias de CDN no build usado pelo app.
- Preservar o fluxo atual de publicacao web do Quartz quando `QUARTZ_OFFLINE` nao estiver ativo.

## Estrutura adicionada

```text
src-tauri/
  Cargo.toml
  build.rs
  tauri.conf.json
  src/
    lib.rs
    main.rs

scripts/
  build-offline.mjs
  prepare-offline-assets.mjs

quartz/static/vendor/
  katex/
  mermaid/
```

## Como o app carrega o Quartz

O arquivo `src-tauri/tauri.conf.json` aponta o Tauri para a saida estatica do Quartz:

```json
{
  "build": {
    "beforeBuildCommand": "npm run build:offline",
    "beforeDevCommand": "npm run build:offline",
    "frontendDist": "../public"
  }
}
```

Quando o Tauri compilar o aplicativo, ele executa `npm run build:offline`, gera `public/` e embute esses arquivos no app.

## Modo offline do Quartz

O modo offline e ativado pela variavel:

```bash
QUARTZ_OFFLINE=1
```

O script `npm run build:offline` ja define essa variavel automaticamente antes de chamar o Quartz.

No arquivo `quartz.config.ts`, quando `QUARTZ_OFFLINE=1`:

- `analytics` vira `null`, removendo Plausible do app.
- `baseUrl` vira `undefined`, evitando URLs absolutas de GitHub Pages no build offline.
- `theme.fontOrigin` muda para `local`, evitando Google Fonts.
- `theme.cdnCaching` muda para `false`, evitando links remotos de fontes.

Sem `QUARTZ_OFFLINE=1`, o comportamento normal do site permanece o mesmo.

## Assets locais

O script `scripts/prepare-offline-assets.mjs` copia dependencias de runtime para `quartz/static/vendor/`.

Ele copia:

- CSS, fontes e `copy-tex` do KaTeX.
- Bundle ESM do Mermaid.
- Chunks dinamicos do Mermaid, necessarios para renderizar tipos diferentes de diagrama.

Esses arquivos entram no build porque o emissor `Plugin.Static()` copia `quartz/static/` para `public/static/`.

## Alteracoes no Quartz

### KaTeX

O plugin de LaTeX foi ajustado em `quartz/plugins/transformers/latex.ts`.

No modo normal ele continua usando jsDelivr. No modo offline ele usa:

```text
/static/vendor/katex/katex.min.css
/static/vendor/katex/contrib/copy-tex.min.js
```

### Mermaid

O script de Mermaid foi ajustado em `quartz/components/scripts/mermaid.inline.ts`.

Antes, ele importava Mermaid do CDN:

```text
https://cdnjs.cloudflare.com/ajax/libs/mermaid/...
```

Agora ele importa do pacote local:

```text
/static/vendor/mermaid/mermaid.esm.min.mjs
```

Os chunks de Mermaid tambem precisam estar presentes em:

```text
/static/vendor/mermaid/chunks/mermaid.esm.min/
```

### Head/metadados

`quartz/components/Head.tsx` foi ajustado para nao gerar metadados remotos desnecessarios quando nao existe `baseUrl`.

Tambem foi removido, no modo offline, o `preconnect` para cdnjs.

### RSS

`quartz/plugins/emitters/contentIndex.tsx` foi ajustado para so adicionar o link RSS no `<head>` quando `baseUrl` estiver configurado.

Isso evita gerar:

```text
https://undefined/index.xml
```

no build offline.

## Scripts npm

Foram adicionados estes scripts:

```json
{
  "prepare:offline": "node scripts/prepare-offline-assets.mjs",
  "build:offline": "node scripts/build-offline.mjs",
  "tauri": "tauri",
  "android:init": "npm run prepare:offline && tauri android init",
  "android:build": "tauri android build"
}
```

Uso esperado:

```bash
npm run prepare:offline
npm run build:offline
npm run android:init
npm run android:build
```

Depois que o projeto Android for inicializado, normalmente o fluxo principal sera:

```bash
npm run prepare:offline
npm run android:build
```

## Dependencias adicionadas

`mermaid` foi adicionado como dependencia para permitir renderizacao offline dos diagramas.

`@tauri-apps/cli` foi adicionado como dependencia de desenvolvimento para disponibilizar o comando `tauri` pelo npm.

## GitHub Actions

Os workflows existentes nao foram alterados.

O workflow `.github/workflows/deploy-pages.yml` continua publicando o site normal em `main` com:

```bash
npm run build:pages
```

Ou seja, o deploy web continua separado do build offline do app.

Esta branch `tauri-android-offline` nao dispara o deploy do GitHub Pages em push direto, porque o workflow de Pages esta configurado apenas para `main`.

Ponto de atencao: se essas mudancas forem mergeadas em `main`, o workflow de Pages ainda vai usar `build:pages`, nao `build:offline`. Isso e desejado se o site web deve continuar normal.

## Verificacao feita

O build offline foi executado com sucesso:

```bash
npm run build:offline
```

Resultado observado:

```text
Emitted 843 files to public
Done processing 193 files
```

Tambem foi feita uma busca por chamadas externas comuns de runtime:

```bash
rg "https?://(fonts\.googleapis|fonts\.gstatic|cdn\.jsdelivr|cdnjs\.cloudflare|plausible|googletagmanager|analytics\.umami)" public -n
```

A unica ocorrencia encontrada foi uma URL de Bootstrap dentro de um bloco de codigo de uma nota, nao um recurso carregado pelo aplicativo.

## Pontos de atencao

- O app offline embute o conteudo gerado em `public/`. Para atualizar o conteudo no app, e preciso gerar uma nova versao do APK/AAB.
- Links externos dentro das notas continuam sendo links externos. Eles nao funcionarao sem internet.
- Imagens ou arquivos referenciados por URL remota nas notas tambem nao ficam offline automaticamente.
- O Tauri para Android precisa do ambiente Android configurado: Android Studio, SDK, NDK/JDK compativeis e dispositivo/emulador.
- Para publicar na Play Store, ainda sera necessario configurar assinatura, icones, nome final, package identifier definitivo e gerar AAB.
- O `npm audit` reportou vulnerabilidades no grafo de dependencias. Nao foi executado `npm audit fix` porque isso pode alterar dependencias alem do necessario.

## Proximos passos

1. Rodar `npm run android:init` para criar a estrutura Android do Tauri.
2. Testar em emulador ou aparelho fisico.
3. Verificar navegacao, busca, grafo, LaTeX e diagramas Mermaid em modo aviao.
4. Ajustar icones, splash/name/identifier do app.
5. Gerar APK/AAB com `npm run android:build`.
