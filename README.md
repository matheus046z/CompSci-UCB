# Quartz for CompSci_UCB

Este Quartz foi configurado para publicar diretamente as notas de `../CompSci_UCB`.

## Como funciona

- `CompSci_UCB` continua sendo a fonte original das notas.
- O Quartz nao copia Markdown para `public`.
- Apenas notas com frontmatter `publish: true` entram no site.
- A pasta `public` continua sendo apenas a saida gerada do build.
- Para deploy no GitHub Pages, as notas publicadas sao exportadas para `content/`, que e a pasta versionada pelo repositorio do site.

## Padrao de publicacao

Adicione este frontmatter no topo das notas que devem ser publicadas:

```yaml
---
publish: true
---
```

Notas sem `publish: true` ficam fora do site por padrao.

## Comandos

Preview local com hot reload:

```bash
npm run preview:ucb
```

Build estatico:

```bash
npm run build:ucb
```

Auditoria rapida das notas publicadas:

```bash
npm run audit:publish
```

Exportar notas publicadas para `content/`:

```bash
npm run sync:publish
```

Preview da versao que vai para o GitHub Pages:

```bash
npm run preview:pages
```

## Observacoes

- O filtro atual usa `publish: true`, nao `draft: true`.
- A pasta `.github` do vault foi adicionada aos ignores para nao entrar no build.
- O ideal e ter `../CompSci_UCB/index.md` com `publish: true` para servir como pagina inicial.
- O deploy do GitHub Pages usa `content/`, nao `../CompSci_UCB`, porque o GitHub Actions so enxerga os arquivos do proprio repositorio `quartz/`.
- O `baseUrl` e preenchido automaticamente no GitHub Actions com base em `owner/repo`.

## Publicacao no GitHub Pages

Antes do primeiro push:

```bash
npm run sync:publish
```

Depois:

1. Crie um repositorio novo no GitHub para este `quartz/`.
2. Troque o `origin` atual para o seu repositorio.
3. Faça push da branch principal.
4. No GitHub, abra `Settings > Pages` e confirme `Source: GitHub Actions`.

Com isso, o workflow `.github/workflows/deploy-pages.yml` fara o deploy automaticamente a cada push na `main`.
