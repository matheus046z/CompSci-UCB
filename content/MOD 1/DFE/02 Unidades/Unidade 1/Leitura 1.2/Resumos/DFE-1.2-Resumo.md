---
publish: true
---
# Resumo — HTML básico, estrutura de páginas e principais tags

## Visão geral do HTML

> [!info] Conceito
> HTML é uma **linguagem de marcação de hipertexto** usada para estruturar páginas web exibidas em navegadores.

Os materiais mostram que o HTML é a base do desenvolvimento web no lado **front-end**, isto é, na parte visível da página. Sua função principal não é programar comportamentos complexos, mas **organizar o conteúdo** de forma compreensível para o navegador. Isso inclui títulos, parágrafos, links, imagens, listas, tabelas, formulários e outros elementos que compõem um site. O HTML trabalha em conjunto com o **CSS**, que cuida da aparência visual, e com o **JavaScript**, que acrescenta interatividade.

> [!tip] Resumindo
> O HTML estrutura o conteúdo da página; o CSS estiliza; o JavaScript adiciona comportamento.

---

## O papel do HTML no desenvolvimento web

> [!info] Conceito
> O HTML funciona como o **esqueleto** de uma página web.

Os anexos explicam que o desenvolvimento web envolve a criação de sites e páginas acessadas por navegadores. Nesse contexto, o HTML tem a função de definir a estrutura básica da informação. Ele permite que o navegador entenda o que é um título, o que é um parágrafo, onde está um menu, onde começa uma seção e como um conteúdo se relaciona com outro. Isso torna a página organizada, acessível e mais fácil de manter.

Além disso, o HTML viabiliza a exibição de diferentes tipos de conteúdo, como texto, imagem, áudio, vídeo e links. Essa flexibilidade é uma das razões para sua importância no desenvolvimento web moderno.

> [!tip] Resumindo
> Sem HTML, o navegador não teria uma estrutura clara para montar a página.

---

## HTML não é linguagem de programação

> [!info] Conceito
> HTML é uma linguagem de **marcação**, não de programação.

Os materiais reforçam que o HTML não foi criado para executar lógica de programação, cálculos ou regras complexas. Ele marca e organiza o conteúdo, definindo sua estrutura e seu significado. Essa distinção é importante porque muitos iniciantes confundem HTML com linguagens como JavaScript, Python ou Java. No HTML, a ideia principal é indicar ao navegador o papel de cada elemento do documento.

> [!warning] Atenção
> HTML não substitui linguagens de programação. Ele organiza o conteúdo, mas não cria sozinho funcionalidades dinâmicas complexas.

> [!tip] Resumindo
> HTML descreve a estrutura da página; não executa a lógica da aplicação.

---

## Arquivo HTML e funcionamento no navegador

> [!info] Conceito
> Um documento HTML é um arquivo de texto com extensão `.html` ou `.htm`.

Os anexos explicam que, ao abrir esse arquivo em um navegador, o conteúdo é interpretado e renderizado visualmente. Isso significa que o navegador lê as marcações e as transforma em uma página compreensível para o usuário. Para criar ou editar um HTML, basta um editor de texto simples, embora ferramentas mais adequadas ao desenvolvimento facilitem o trabalho. Também aparecem ambientes online de teste, úteis para quem está aprendendo, pois permitem escrever código e ver imediatamente o resultado.

> [!tip] Resumindo
> O navegador lê o código HTML e o transforma na página visível.

---

## Estrutura básica de um documento HTML

> [!info] Conceito
> Todo documento HTML segue uma estrutura fundamental que organiza o conteúdo e as informações do arquivo.

A base apresentada nos materiais inclui a declaração do tipo de documento, a tag raiz `<html>`, a área de metadados `<head>` e a área visível `<body>`. Essa organização é essencial para que o navegador interprete o documento corretamente. A tag `<html>` envolve toda a página. A tag `<head>` reúne informações técnicas, como título e metadados. Já a tag `<body>` contém tudo aquilo que será exibido ao usuário.

Também aparece a recomendação de usar o atributo `lang` na tag `<html>` para indicar o idioma principal da página, o que melhora a interpretação por navegadores, buscadores e tecnologias assistivas.

> [!tip] Resumindo
> A estrutura básica do HTML separa o que é informação técnica do que é conteúdo visível.

---

## DOCTYPE e declaração do documento

> [!info] Conceito
> O `DOCTYPE` é uma **declaração** colocada no início do arquivo para indicar ao navegador como interpretar o documento.

Os materiais mostram que o `DOCTYPE` não é uma tag HTML. Historicamente, ele servia para identificar a DTD, isto é, a definição formal do tipo de documento. No HTML moderno, sua principal função prática é fazer o navegador usar o **modo padrão de renderização**, evitando comportamentos antigos de compatibilidade. No HTML5, essa declaração foi simplificada para `<!DOCTYPE html>`, que é o formato recomendado atualmente.

Os anexos também apresentam uma visão histórica dos principais tipos de `DOCTYPE`. Entre eles estão variantes do HTML 4.01, do XHTML e do HTML5. As versões **Strict** eram mais rígidas, as **Transitional** permitiam recursos antigos para facilitar a migração, as **Frameset** davam suporte a molduras, e o XHTML introduziu uma sintaxe mais rigorosa inspirada no XML. O HTML5 simplificou tudo isso.

> [!warning] Atenção
> Muitos tipos antigos de `DOCTYPE` aparecem em materiais históricos ou sistemas legados, mas o formato moderno e recomendado é apenas `<!DOCTYPE html>`.

> [!tip] Resumindo
> Hoje, o `DOCTYPE` serve principalmente para garantir a renderização correta no padrão moderno.

---

## Metadados e elementos do cabeçalho

> [!info] Conceito
> A seção `<head>` reúne informações sobre o documento que não aparecem diretamente no corpo da página.

Nessa área ficam elementos como `<title>`, `<meta>`, `<link>`, `<style>` e, em alguns casos, scripts. O `<title>` define o texto exibido na aba do navegador. A metatag de `charset` informa o conjunto de caracteres, normalmente UTF-8, garantindo a leitura correta de acentos e símbolos. Já a tag `<meta>` permite incluir informações adicionais sobre a página. Os anexos também mostram que folhas de estilo e outros recursos externos podem ser vinculados a partir dessa área.

> [!tip] Resumindo
> O `<head>` guarda informações técnicas e descritivas do documento.

---

## O que são tags HTML

> [!info] Conceito
> As tags são os elementos usados para marcar, estruturar e organizar o conteúdo da página.

Os materiais explicam que as tags ficam entre sinais angulares e geralmente aparecem em pares: uma tag de abertura e uma de fechamento. Há também elementos que não exigem fechamento tradicional. Além disso, as tags podem receber **atributos**, que modificam sua função, aparência ou comportamento. Assim, HTML é construído a partir da combinação entre elementos e atributos.

> [!tip] Resumindo
> As tags dizem ao navegador o que cada parte do conteúdo representa.

---

## Atributos das tags

> [!info] Conceito
> Atributos são informações adicionais colocadas nas tags para personalizar sua função.

Os anexos apresentam exemplos importantes, como `class`, `id`, `lang`, `title`, `src`, `href`, `alt`, `width` e `height`. O `href` define o destino de um link. O `src` indica o caminho de uma imagem, áudio ou vídeo. O `alt` fornece uma descrição alternativa para imagens, algo importante para acessibilidade e também útil quando a imagem não pode ser carregada. Os atributos ajudam a tornar os elementos mais específicos e mais úteis dentro da página.

> [!warning] Atenção
> Alguns atributos antigos ligados à aparência foram abandonados ou perderam importância com a adoção do CSS.

> [!tip] Resumindo
> Atributos complementam as tags e permitem configurar melhor cada elemento.

---

## Tags básicas essenciais

> [!info] Conceito
> Algumas tags formam o núcleo mínimo de uma página HTML.

Os exercícios e textos reforçam como essenciais as tags `<html>`, `<head>`, `<body>` e `<title>`. Essas tags aparecem em praticamente qualquer documento HTML básico e garantem a organização inicial do arquivo. Sem elas, o documento fica incompleto ou perde clareza estrutural.

> [!tip] Resumindo
> As tags essenciais definem o documento, o cabeçalho e o corpo da página.

---

## Tags de texto

> [!info] Conceito
> Tags de texto organizam títulos, parágrafos, quebras de linha e ênfases dentro da página.

Os materiais destacam a tag `<p>` para parágrafos e as tags de cabeçalho `<h1>` até `<h6>` para títulos e subtítulos em níveis hierárquicos. O `<h1>` representa o título mais importante, enquanto `<h6>` marca um nível menos importante. Também aparecem `<br>` para quebra de linha, `<strong>` para dar maior importância ao texto e `<em>` para indicar ênfase.

Essas marcações não servem apenas para aparência. Elas ajudam a criar uma organização lógica do conteúdo, o que melhora a legibilidade, a acessibilidade e a compreensão pelos mecanismos de busca.

> [!warning] Atenção
> Não se deve usar títulos apenas pelo tamanho visual. Eles representam níveis de importância dentro do conteúdo.

> [!tip] Resumindo
> As tags de texto estruturam o conteúdo escrito e criam hierarquia de leitura.

---

## Comentários em HTML

> [!info] Conceito
> Comentários são trechos do código escritos para orientar quem está desenvolvendo, mas não aparecem na página.

Os anexos mostram que comentários servem para documentar o código, registrar observações e facilitar futuras alterações. Eles são úteis para organização e manutenção, principalmente em páginas maiores. Embora não alterem o resultado visual, ajudam bastante no entendimento do arquivo por outros desenvolvedores ou pelo próprio autor mais tarde.

> [!tip] Resumindo
> Comentários são anotações internas do código e não aparecem para o usuário final.

---

## Links e navegação

> [!info] Conceito
> A tag `<a>` cria ligações entre páginas, documentos, seções internas ou outros recursos.

Os materiais ressaltam que o link é uma das características centrais da web como ambiente de hipertexto. Com a tag âncora e o atributo `href`, é possível direcionar o usuário para outra página, para outro site ou para uma área específica do mesmo documento. Já a tag `<nav>` é usada para agrupar os links de navegação, geralmente em menus. Isso melhora a organização do conteúdo e torna a estrutura da página mais clara.

Nos exemplos práticos, aparecem menus com links internos apontando para seções da própria página por meio de identificadores, o que mostra uma aplicação simples e útil desse recurso.

> [!tip] Resumindo
> `<a>` cria links; `<nav>` organiza a navegação da página.

---

## Imagens, áudio e vídeo

> [!info] Conceito
> O HTML permite incorporar mídias diretamente na página por meio de tags específicas.

Os materiais apresentam a tag `<img>` para imagens, `<audio>` para arquivos de som e `<video>` para vídeos. A tag de imagem usa principalmente o atributo `src`, que aponta para o arquivo, e o atributo `alt`, que descreve a imagem. Já os elementos de áudio e vídeo podem incluir controles de reprodução, como iniciar, pausar e ajustar volume.

Também é explicado que diferentes formatos de imagem podem ser usados, como GIF, JPG e PNG. A escolha depende das necessidades do conteúdo, como qualidade, tamanho de arquivo e suporte à transparência.

> [!warning] Atenção
> O atributo `alt` em imagens é importante para acessibilidade e não deve ser ignorado.

> [!tip] Resumindo
> HTML permite inserir mídia e enriquecer a experiência da página com conteúdo visual e sonoro.

---

## Listas em HTML

> [!info] Conceito
> As listas servem para organizar itens relacionados de forma ordenada ou não ordenada.

Os anexos mostram dois tipos principais: a lista **não ordenada**, com `<ul>`, e a lista **ordenada**, com `<ol>`. Em ambos os casos, cada item é definido por `<li>`. A lista não ordenada é adequada quando a sequência não importa. A lista ordenada é usada quando há ordem, prioridade ou passo a passo.

Os exercícios reforçam justamente essa distinção, mostrando que essas são as formas corretas de criar listas em HTML.

> [!tip] Resumindo
> Use `<ul>` para itens sem ordem específica e `<ol>` quando a ordem importa.

---

## Tabelas

> [!info] Conceito
> Tabelas organizam dados em linhas e colunas para facilitar comparação e leitura estruturada.

Os materiais apresentam as tags `<table>`, `<tr>`, `<th>` e `<td>`. A tabela inteira é criada com `<table>`. Cada linha é definida por `<tr>`. As células de cabeçalho usam `<th>`, enquanto as células comuns usam `<td>`. Esse conjunto permite montar quadros de informação bem organizados, úteis para dados comparativos ou estruturados.

Nos exemplos, as tabelas aparecem associadas a informações como nomes, idades, profissões ou demonstrações de títulos HTML, ajudando a consolidar a compreensão dessas tags.

> [!tip] Resumindo
> Tabelas são apropriadas para dados tabulares, isto é, informações organizadas em linhas e colunas.

---

## Formulários

> [!info] Conceito
> Formulários são usados para coletar dados do usuário.

Os anexos mostram a tag `<form>` como contêiner principal e destacam campos como `<input>` e `<textarea>`. O `<input>` pode receber diferentes tipos, como texto, e-mail e envio. Já o `<textarea>` cria uma área maior para digitação de mensagens. Também aparece o uso de `placeholder`, que exibe um texto temporário enquanto o campo ainda está vazio.

Nos exemplos práticos, os formulários são usados em áreas de contato, permitindo que o usuário informe nome, e-mail e mensagem.

> [!tip] Resumindo
> Formulários permitem interação básica com o usuário por meio de campos de preenchimento.

---

## Iframe

> [!info] Conceito
> O `<iframe>` permite incorporar dentro da página um conteúdo vindo de outra página.

Os materiais mostram esse elemento como uma forma de exibir recursos externos no próprio documento atual. Isso amplia as possibilidades de integração entre páginas, embora deva ser usado com critério para não prejudicar a experiência de navegação.

> [!tip] Resumindo
> O `iframe` insere uma outra página ou recurso externo dentro da página atual.

---

## Tags semânticas

> [!info] Conceito
> Tags semânticas descrevem melhor o papel de cada parte do conteúdo.

Os materiais destacam que o HTML5 introduziu elementos como `<header>`, `<footer>`, `<section>`, `<article>`, `<aside>`, `<main>` e `<nav>`. Essas tags ajudam a estruturar o documento com mais clareza e a reduzir o uso excessivo de divisões genéricas. Antes disso, muitos desenvolvedores usavam `<div>` para praticamente tudo, o que deixava o código menos legível e menos acessível.

Com as tags semânticas, fica mais fácil compreender a organização da página e indicar o significado de cada bloco. Isso ajuda tanto os desenvolvedores quanto os mecanismos de busca e tecnologias assistivas.

> [!warning] Atenção
> `<head>` e `<header>` não são a mesma coisa. O primeiro é uma área técnica do documento; o segundo é uma seção visível do conteúdo.

> [!tip] Resumindo
> Tags semânticas tornam o código mais claro, mais acessível e melhor organizado.

---

## Divisões genéricas e uso de `<div>`

> [!info] Conceito
> A tag `<div>` cria uma divisão genérica no documento.

Os materiais mostram que a `<div>` continua sendo útil, especialmente quando se deseja agrupar elementos sem atribuir um significado semântico específico. No entanto, ela não deve substituir indiscriminadamente elementos mais apropriados, como `<section>` ou `<article>`, quando esses fizerem mais sentido.

> [!tip] Resumindo
> `<div>` é útil para agrupar conteúdo, mas não substitui o valor das tags semânticas.

---

## Classes e IDs

> [!info] Conceito
> `class` e `id` são atributos usados para identificar elementos na página.

Os anexos explicam que uma **classe** pode ser compartilhada por vários elementos, enquanto um **id** deve ser único no documento. Esses atributos são muito importantes para seleção por CSS e JavaScript, além de serem usados em navegação interna por links. Um mesmo elemento pode ter classes e também um id, desde que isso faça sentido na organização da página.

Nos exemplos, os IDs são usados para criar menus com links internos para seções específicas. Já as classes são mostradas como forma de agrupar elementos que compartilham alguma característica.

> [!warning] Atenção
> O `id` deve ser único dentro da página. Já uma `class` pode ser repetida em vários elementos.

> [!tip] Resumindo
> Classes agrupam elementos semelhantes; IDs identificam elementos específicos.

---

## Tags de estilo e script

> [!info] Conceito
> HTML pode incluir referências ou blocos de CSS e JavaScript.

Os materiais citam a tag `<style>` para inserir CSS diretamente no documento e a tag `<script>` para inserir scripts, normalmente JavaScript. Também aparece a tag `<link>`, usada para conectar folhas de estilo ou outros arquivos externos. Isso mostra como HTML, CSS e JavaScript se relacionam na construção de uma página completa.

> [!tip] Resumindo
> HTML organiza o documento e pode integrar recursos de estilo e comportamento.

---

## Evolução do HTML

> [!info] Conceito
> O HTML evoluiu de uma linguagem simples para uma base robusta do desenvolvimento web moderno.

Os anexos apresentam uma trajetória que começa com o HTML 1.0, mais básico e centrado em texto, links e imagens, passa pelo HTML 2.0 com novos recursos como formulários, avança para versões com tabelas, scripts e estilos, e chega ao HTML5, que introduziu elementos semânticos, suporte nativo a áudio e vídeo e recursos mais modernos para aplicações web. Também é ressaltado o papel do W3C na padronização da linguagem.

Essa evolução ampliou a capacidade do HTML e tornou a web mais organizada, acessível e interativa.

> [!tip] Resumindo
> O HTML deixou de ser apenas uma linguagem simples de textos e links e passou a sustentar páginas e aplicações muito mais ricas.

---

## Exemplos práticos de construção de páginas

> [!info] Conceito
> Os materiais usam exemplos simples para mostrar como diferentes tags trabalham juntas em uma página real.

Nos anexos aparecem páginas com cabeçalho, navegação, seções, artigos, listas, imagens, tabelas, links e formulários. Um exemplo cria uma página introdutória com menu e conteúdo principal. Outro monta uma página com informações e listas. Também há um exemplo didático de site temático, mostrando como organizar títulos, subtítulos, lista de nomes, parágrafo e link.

Esses exemplos mostram que mesmo com poucas tags já é possível construir uma página funcional, clara e significativa.

> [!tip] Resumindo
> A prática evidencia que o HTML básico já permite criar páginas completas e organizadas.

---

## O que os exercícios reforçam

> [!info] Conceito
> Os exercícios consolidam os pontos fundamentais do estudo sobre HTML básico.

Eles reforçam que as quatro tags básicas essenciais são `<html>`, `<head>`, `<body>` e `<title>`. Também confirmam que os cabeçalhos vão de `<h1>` a `<h6>`, que os formatos de imagem comuns em HTML incluem GIF, JPG e PNG, que a quebra de linha é feita com `<br/>`, e que os dois tipos principais de listas são `<ol>` e `<ul>`.

Essas respostas ajudam a fixar os conceitos fundamentais da unidade.

> [!tip] Resumindo
> Os exercícios retomam a base do HTML: estrutura, títulos, imagens, quebra de linha e listas.

---

## Síntese final

> [!summary] Síntese
> Os materiais mostram que o HTML é a linguagem de marcação responsável por estruturar páginas web. Ele organiza títulos, parágrafos, links, listas, tabelas, imagens, formulários e outras partes do conteúdo, funcionando como a base do front-end.  
>  
> A estrutura mínima de um documento HTML inclui `DOCTYPE`, `<html>`, `<head>`, `<title>` e `<body>`. O `DOCTYPE` informa ao navegador como interpretar o documento e, no HTML moderno, o formato recomendado é `<!DOCTYPE html>`.  
>  
> O estudo também destaca a importância das tags de texto, links, listas, tabelas, mídias e formulários, além das tags semânticas introduzidas com HTML5, que tornam o código mais claro e acessível. Classes e IDs complementam essa organização, ajudando na identificação e navegação dos elementos.  
>  
> Em conjunto, os anexos reforçam que HTML não é linguagem de programação, mas sim uma linguagem de marcação essencial para criar páginas bem estruturadas, compreensíveis e prontas para receber estilo com CSS e interatividade com JavaScript.