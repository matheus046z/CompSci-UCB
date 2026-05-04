---
publish: true
---
# DOM — Document Object Model

## 1. Conceito de DOM

> [!info] Conceito
> DOM significa *Document Object Model*, ou Modelo de Objeto de Documento. Ele representa a estrutura e o conteúdo de uma página HTML ou XML na memória do computador.

O DOM é uma interface que permite ao navegador representar uma página Web como uma estrutura organizada de objetos. Quando o navegador lê um documento HTML, ele cria internamente um modelo desse documento, no qual cada parte da página pode ser acessada e manipulada por linguagens de script, especialmente JavaScript.

Por meio do DOM, é possível alterar elementos HTML, modificar estilos CSS, adicionar ou remover atributos, criar novos elementos, responder a eventos e atualizar partes da página sem precisar recarregá-la completamente.

> [!tip] Resumindo
> O DOM é a ponte entre o documento HTML e a manipulação dinâmica feita por JavaScript.

---

## 2. Relação entre HTML, CSS, JavaScript e DOM

> [!info] Conceito
> HTML estrutura a página, CSS define a aparência e JavaScript adiciona comportamento por meio da manipulação do DOM.

No desenvolvimento front end, o HTML é responsável por organizar os elementos da página, como títulos, parágrafos, links, listas e tabelas. O CSS define a aparência desses elementos, como cores, tamanhos, espaçamentos e estilos. Já o JavaScript permite adicionar interatividade, manipulando os elementos representados no DOM.

Depois que a página HTML é carregada, o navegador cria uma representação em memória. Essa representação é o DOM. A partir dela, o JavaScript pode acessar elementos, alterar textos, mudar cores, criar novos nós, remover partes da página e responder às ações do usuário.

> [!tip] Resumindo
> O DOM permite que o JavaScript acesse e altere a estrutura criada pelo HTML e estilizada pelo CSS.

---

## 3. Importância do DOM no desenvolvimento front end

> [!info] Conceito
> O DOM é essencial para criar páginas Web dinâmicas, interativas e capazes de responder às ações dos usuários.

O desenvolvimento front end busca criar interfaces amigáveis, compreensíveis, visualmente agradáveis e funcionais. Para isso, não basta estruturar a página com HTML e aplicar estilos com CSS. É necessário adicionar comportamento, como validação de formulários, filtros de pesquisa, alteração de dados apresentados e respostas a eventos.

Com o DOM, o desenvolvedor pode modificar a página em tempo real. Por exemplo, ao clicar em um botão, o usuário pode alterar a cor de um título, inserir um novo item em uma tabela ou exibir uma mensagem. Tudo isso ocorre porque o JavaScript acessa a árvore DOM e modifica os nós correspondentes.

> [!tip] Resumindo
> Sem o DOM, o JavaScript não teria um modelo organizado da página para manipular.

---

## 4. DOM como representação em árvore

> [!info] Conceito
> A estrutura do DOM é representada como uma árvore de objetos, na qual cada elemento da página é um nó.

O DOM organiza a página em formato hierárquico. No topo está o objeto `window`, que representa a janela do navegador. Abaixo dele aparecem objetos como `location`, `document` e `history`. O objeto `document` representa o documento da página e dá acesso à estrutura HTML.

Dentro de `document`, encontra-se o elemento raiz `<html>`. Esse elemento possui filhos como `<head>` e `<body>`. O `<head>` pode conter elementos como `<meta>` e `<title>`, enquanto o `<body>` contém os elementos visíveis da página, como `<h1>`, `<p>`, `<div>`, listas, links, tabelas e outros.

> [!tip] Resumindo
> A árvore DOM organiza a página em relações de pai e filho, permitindo localizar e modificar cada elemento.

---

## 5. Objeto `window`

> [!info] Conceito
> `window` representa a janela do navegador e é o objeto principal do ambiente de execução da página.

O objeto `window` está no topo da estrutura. Ele representa o navegador ou a janela onde a página está sendo exibida. A partir dele, é possível acessar outros objetos importantes, como `location`, `document` e `history`.

O objeto `location` pode ser usado para obter a URL atual ou redirecionar o navegador para outra página. O objeto `history` está relacionado ao histórico de navegação. O objeto `document`, por sua vez, representa a página Web carregada e permite acessar seus elementos.

> [!warning] Atenção
> Elementos como `<html>`, `<body>` e `<header>` não são filhos diretos de `window`; eles pertencem à estrutura interna de `document`.

> [!tip] Resumindo
> `window` representa o navegador; `document` representa o documento HTML carregado.

---

## 6. Objeto `document`

> [!info] Conceito
> `document` é o objeto que dá acesso à árvore DOM da página.

O objeto `document` é um dos mais importantes para a manipulação do DOM. Ele permite acessar, criar, modificar e remover elementos da página. É por meio dele que o JavaScript consegue localizar um título, um parágrafo, um botão, uma tabela ou qualquer outro elemento HTML.

Exemplo:

```javascript
document.getElementById("titulo");
```

Esse comando acessa um elemento da página que possui o identificador `titulo`.

O objeto `document` também permite criar novos elementos, criar textos, inserir elementos filhos e remover elementos existentes.

> [!tip] Resumindo
> Quase toda manipulação de elementos HTML com JavaScript começa pelo objeto `document`.

---

## 7. Nós da árvore DOM

> [!info] Conceito
> Nó é cada item existente dentro da árvore DOM.

Na estrutura DOM, cada parte do documento é tratada como um nó. Um elemento HTML é um nó, um texto pode ser um nó, e um atributo também pode ser representado como nó. Isso permite que o navegador organize todos os componentes da página de maneira estruturada.

Entre os principais tipos de dados relacionados ao DOM estão `Document`, `Node`, `Element`, `NodeList`, `Attribute` e `NamedNodeMap`.

O `Document` é o objeto raiz do documento. O `Node` representa qualquer objeto localizado em um documento HTML. O `Element` representa um elemento HTML específico. O `NodeList` é uma lista de nós que pode ser acessada por índice. O `Attribute` representa atributos de elementos, como `id`, `class`, `href` e outros. O `NamedNodeMap` é uma coleção de nós acessíveis por nome ou índice.

> [!tip] Resumindo
> No DOM, a página é formada por nós, e cada nó pode representar um elemento, texto ou atributo.

---

## 8. Relação pai e filho no DOM

> [!info] Conceito
> A árvore DOM organiza os elementos em relações hierárquicas de pai, filho e descendente.

Na árvore DOM, um elemento pode conter outros elementos. Por exemplo, o elemento `<html>` é pai de `<head>` e `<body>`. O elemento `<body>` pode ser pai de elementos como `<h1>`, `<p>`, `<div>` e listas. Um parágrafo pode conter um elemento `<strong>`, tornando esse `<strong>` filho do parágrafo.

Essa relação permite percorrer e manipular a estrutura da página. É possível localizar o pai de um elemento com `parentNode`, adicionar um filho com `appendChild` ou remover um filho com `removeChild`.

> [!tip] Resumindo
> Entender a relação pai-filho ajuda a manipular corretamente os elementos da página.

---

## 9. Acesso ao DOM com JavaScript

> [!info] Conceito
> JavaScript acessa o DOM por meio de métodos e propriedades disponíveis em objetos como `document` e `window`.

Para manipular uma página, primeiro é necessário acessar os elementos desejados. Isso pode ser feito por meio de métodos como `getElementById()`, `getElementsByTagName()`, `querySelector()` e outros.

Exemplo:

```javascript
document.getElementById("idTituloPagina");
```

Esse método retorna o elemento que possui o identificador informado. Depois de obter o elemento, o desenvolvedor pode alterar seu conteúdo, estilo, atributos ou posição dentro da estrutura da página.

> [!tip] Resumindo
> Antes de alterar um elemento, é preciso localizá-lo na árvore DOM.

---

## 10. Método `getElementById()`

> [!info] Conceito
> `getElementById()` obtém um elemento HTML a partir de seu identificador `id`.

O método `getElementById()` é usado quando se deseja acessar diretamente um elemento específico da página. Como o atributo `id` deve ser único no documento, esse método retorna apenas um elemento.

Exemplo:

```javascript
document.getElementById("idTituloPagina");
```

Esse comando localiza o elemento que possui `id="idTituloPagina"`.

> [!warning] Atenção
> `getElementById()` busca por `id`, não por classe ou por nome de tag.

> [!tip] Resumindo
> Use `getElementById()` quando quiser acessar um elemento único da página.

---

## 11. Métodos de seleção de elementos

> [!info] Conceito
> O DOM oferece diferentes métodos para localizar elementos no documento.

Além de `getElementById()`, existem outros métodos úteis para seleção de elementos. `getElementsByTagName()` retorna uma lista de elementos com determinado nome de tag. `querySelector()` retorna o primeiro elemento que corresponde a um seletor especificado. `getElementsByClassName()` retorna elementos que possuem determinada classe.

Exemplos:

```javascript
document.getElementsByTagName("p");
document.querySelector(".classe");
document.getElementsByClassName("destaque");
```

Cada método atende a uma forma diferente de localização. A escolha depende de como o elemento está identificado no HTML.

> [!warning] Atenção
> Alguns métodos retornam um único elemento, enquanto outros retornam listas de elementos.

> [!tip] Resumindo
> O método de seleção deve ser escolhido conforme o tipo de referência: `id`, classe, tag ou seletor CSS.

---

## 12. Alteração de estilos pelo DOM

> [!info] Conceito
> JavaScript pode alterar estilos CSS dos elementos por meio da propriedade `style`.

Depois de selecionar um elemento, é possível alterar sua aparência usando a propriedade `style`. Por exemplo, para mudar a cor de um texto para azul, pode-se acessar o elemento pelo `id` e definir a propriedade `color`.

Exemplo:

```javascript
document.getElementById("idTituloPagina").style.color = "blue";
```

Esse comando localiza o elemento com o identificador `idTituloPagina` e altera a cor do texto para azul.

> [!warning] Atenção
> Alterar `innerHTML` para `"blue"` mudaria o texto do elemento para a palavra “blue”, mas não mudaria sua cor.

> [!tip] Resumindo
> Para mudar aparência, usa-se `style`; para mudar conteúdo, usa-se propriedades como `innerHTML`.

---

## 13. Alteração de conteúdo com `innerHTML`

> [!info] Conceito
> `innerHTML` permite modificar o conteúdo interno de um elemento HTML.

Quando se deseja alterar o texto ou o conteúdo de um elemento, pode-se usar a propriedade `innerHTML`. Essa propriedade substitui o conteúdo interno do elemento selecionado.

Exemplo:

```javascript
document.getElementById("valorDigitado").innerHTML = "Texto capturado";
```

No exemplo apresentado no material, um texto digitado pelo usuário em um campo é capturado e colocado dentro de um elemento `<p>`. Isso mostra como o JavaScript pode ler dados de uma página e apresentá-los dinamicamente em outro ponto do documento.

> [!tip] Resumindo
> `innerHTML` altera aquilo que aparece dentro de uma tag HTML.

---

## 14. Criação de elementos com `createElement()`

> [!info] Conceito
> `createElement()` cria um novo elemento HTML na memória.

O método `createElement()` permite criar dinamicamente um elemento HTML. No entanto, criar o elemento não significa inseri-lo automaticamente na página. Para que ele apareça no documento, é necessário adicioná-lo à árvore DOM.

Exemplo:

```javascript
var heading = document.createElement("h1");
```

Esse comando cria um elemento `<h1>`, mas ele ainda precisa receber conteúdo e ser inserido no documento.

> [!tip] Resumindo
> `createElement()` cria o elemento, mas ele só aparece na página depois de ser anexado ao DOM.

---

## 15. Criação de texto com `createTextNode()`

> [!info] Conceito
> `createTextNode()` cria um nó de texto para ser inserido em um elemento.

Depois de criar um elemento, pode ser necessário criar o conteúdo textual que será colocado nele. Para isso, usa-se `createTextNode()`.

Exemplo:

```javascript
var headingText = document.createTextNode("Texto do Título");
```

Esse texto pode ser adicionado a um elemento com `appendChild()`.

> [!tip] Resumindo
> `createTextNode()` cria o texto; `appendChild()` insere esse texto dentro de um elemento.

---

## 16. Inserção de elementos com `appendChild()`

> [!info] Conceito
> `appendChild()` adiciona um nó como filho de outro nó.

O método `appendChild()` é usado para inserir elementos ou textos dentro de outros elementos. Ele adiciona o novo nó ao final da lista de filhos do elemento pai.

Exemplo:

```javascript
var heading = document.createElement("h1");
var headingText = document.createTextNode("Texto do Título");

heading.appendChild(headingText);
document.body.appendChild(heading);
```

Nesse exemplo, primeiro é criado um título `<h1>`, depois é criado um texto, o texto é inserido no título e, por fim, o título é adicionado ao corpo da página.

> [!tip] Resumindo
> `appendChild()` é usado para colocar um elemento ou texto dentro da árvore DOM.

---

## 17. Remoção de elementos com `removeChild()`

> [!info] Conceito
> `removeChild()` remove um elemento filho de um nó pai.

Assim como é possível adicionar elementos, também é possível removê-los. O método `removeChild()` exclui um nó filho a partir de seu nó pai.

Exemplo conceitual:

```javascript
elementoPai.removeChild(elementoFilho);
```

Esse tipo de manipulação permite modificar a estrutura da página de forma dinâmica, retirando elementos que não devem mais ser exibidos.

> [!tip] Resumindo
> `removeChild()` retira um nó da árvore DOM.

---

## 18. Manipulação de atributos

> [!info] Conceito
> Atributos são informações associadas a elementos HTML, como `id`, `class`, `href` e `src`.

O DOM também permite criar, modificar ou remover atributos dos elementos. O material cita `createAttribute()` como método para criar um novo nó de atributo. Atributos fazem parte da estrutura do DOM, embora sejam usados com menos frequência do que os elementos.

Essa manipulação é útil quando se deseja alterar características de elementos, como o destino de um link, a classe CSS aplicada ou algum identificador.

> [!tip] Resumindo
> Atributos também fazem parte do DOM e podem ser manipulados por JavaScript.

---

## 19. Eventos e comportamento da página

> [!info] Conceito
> Eventos permitem que a página execute ações em resposta a interações do usuário ou do navegador.

Com JavaScript e DOM, é possível associar comportamentos a eventos. Um exemplo simples é executar uma mensagem de alerta quando o corpo da página termina de carregar.

Exemplo:

```html
<body onload="window.alert('Hello DOM World!');">
```

Outro exemplo é usar um botão para chamar uma função JavaScript. No material, um campo de texto recebe um valor digitado pelo usuário, e um botão executa uma função que captura esse valor e o exibe em um parágrafo.

```html
<input type="text" id="valor">
<input type="submit" onclick="capturar()" value="Clique aqui!">
<p id="valorDigitado"></p>
```

> [!tip] Resumindo
> Eventos são gatilhos que permitem executar funções e alterar a página dinamicamente.

---

## 20. Exemplo de captura de valor digitado

> [!info] Conceito
> JavaScript pode capturar dados inseridos pelo usuário e exibi-los em outro elemento da página.

O material apresenta um exemplo em que o valor digitado em um campo de texto é capturado por uma função e inserido em um parágrafo. A função acessa o campo pelo `id`, lê sua propriedade `value` e depois altera o `innerHTML` do parágrafo.

Exemplo:

```javascript
var capturado = "";

function capturar() {
  capturado = document.getElementById("valor").value;
  document.getElementById("valorDigitado").innerHTML = capturado;
}
```

Esse exemplo mostra como o DOM permite que o JavaScript leia e escreva informações na página.

> [!tip] Resumindo
> O DOM permite capturar dados de entrada e mostrar esses dados em outros elementos HTML.

---

## 21. Exemplo de alteração de cor por clique

> [!info] Conceito
> Um botão pode alterar o estilo de um elemento ao ser clicado.

O material apresenta um exemplo em que um título aparece com a cor padrão e, ao clicar em um botão, sua cor muda para vermelha. Isso é feito acessando o título pelo `id` e alterando a propriedade `style.color`.

Exemplo:

```html
<h1 id="id1">Meu Cabeçalho 1</h1>

<button type="button" onclick="document.getElementById('id1').style.color = 'red'">
  Clique em mim!
</button>
```

Esse exemplo resume bem a relação entre HTML, evento, JavaScript e DOM. O botão dispara o evento, o JavaScript acessa o elemento e o DOM permite alterar a aparência do título.

> [!tip] Resumindo
> Clique no botão → JavaScript acessa o DOM → estilo do título é alterado.

---

## 22. Propriedades e métodos do objeto `document`

> [!info] Conceito
> O objeto `document` possui propriedades e métodos usados para manipular a página.

Entre os recursos citados no material estão:

- `documentElement`: recupera o elemento raiz `<html>`;
- `getElementById`: retorna um elemento pelo atributo `id`;
- `createElement`: cria um novo nó de elemento;
- `createAttribute`: cria um novo nó de atributo;
- `createTextNode`: cria um novo nó de texto;
- `getElementsByTagName`: recupera uma lista de elementos por nome de tag;
- `appendChild`: insere um novo elemento filho;
- `removeChild`: remove um elemento filho;
- `parentNode`: retorna o nó pai de um nó.

Esses recursos permitem construir, acessar e modificar a estrutura da página por meio do JavaScript.

> [!tip] Resumindo
> O objeto `document` concentra os principais caminhos para acessar e alterar a página HTML.

---

## 23. Interfaces do DOM

> [!info] Conceito
> As interfaces do DOM definem formas padronizadas de acessar e manipular documentos HTML, XML e estilos CSS.

O DOM possui interfaces que permitem trabalhar com diferentes partes do documento. O material destaca as interfaces Core, HTML e CSS. Essas interfaces fornecem recursos para acessar elementos, manipular conteúdos, trabalhar com documentos e alterar estilos.

Muitos objetos DOM implementam várias interfaces ao mesmo tempo. Por exemplo, um elemento de formulário pode ter propriedades ligadas a uma interface específica de formulário e também propriedades mais gerais de elementos HTML.

> [!tip] Resumindo
> As interfaces do DOM funcionam como conjuntos de recursos usados para manipular documentos e estilos.

---

## 24. Interface Core

> [!info] Conceito
> A interface Core fornece funcionalidades básicas para acessar e manipular documentos HTML e XML.

A API Core do DOM permite que desenvolvedores de software e scripts manipulem conteúdos de documentos HTML e XML. Ela fornece uma base comum para criar, acessar e modificar elementos, atributos e textos.

Essa interface é importante porque o DOM foi pensado para ser independente de uma linguagem específica. Embora JavaScript seja a linguagem mais usada para manipular o DOM, o modelo em si não depende exclusivamente dela.

> [!tip] Resumindo
> A interface Core reúne recursos fundamentais de manipulação do DOM.

---

## 25. Interface HTML

> [!info] Conceito
> A interface HTML descreve recursos próprios dos documentos HTML.

Um documento com código HTML é descrito por interfaces relacionadas ao HTML, como `HTMLDocument` e elementos HTML específicos. Essas interfaces permitem acessar e manipular elementos e propriedades próprias de páginas Web.

Por meio delas, o JavaScript consegue trabalhar com títulos, formulários, tabelas, links, imagens e outros elementos do documento HTML.

> [!tip] Resumindo
> A interface HTML permite manipular os elementos próprios de uma página HTML.

---

## 26. Interface CSS

> [!info] Conceito
> A interface CSS permite associar e manipular estilos dos elementos da página.

A aparência dos elementos normalmente é definida em CSS. Por meio do DOM e de interfaces relacionadas a estilo, o JavaScript pode alterar características visuais da página, como cor, tamanho, visibilidade e outros estilos.

Um exemplo simples é alterar a cor de um título com:

```javascript
document.getElementById("id1").style.color = "red";
```

Essa linha acessa o elemento HTML pelo DOM e modifica uma propriedade visual associada ao CSS.

> [!tip] Resumindo
> A interface CSS permite que o JavaScript altere a aparência dos elementos da página.

---

## 27. Padrões W3C e WHATWG

> [!info] Conceito
> W3C e WHATWG são padrões relacionados à definição e evolução de tecnologias Web, incluindo o DOM.

O material informa que existem dois padrões implementados pela maioria dos navegadores recentes: W3C DOM e WHATWG DOM. Esses padrões ajudam a definir como os navegadores devem representar e permitir a manipulação de documentos Web.

Também é destacado que muitos navegadores estendem esses padrões. Por isso, é importante ter cuidado, pois documentos podem ser processados de formas diferentes em ambientes distintos.

> [!warning] Atenção
> HTTP, FTP e SSH são protocolos, não padrões de DOM.

> [!tip] Resumindo
> W3C e WHATWG ajudam a padronizar o funcionamento do DOM nos navegadores modernos.

---

## 28. DOM e AJAX

> [!info] Conceito
> AJAX permite atualizar partes da página sem recarregá-la completamente, frequentemente em conjunto com manipulação do DOM.

O material menciona que JavaScript pode enviar requisições para determinadas URLs e trabalhar com as respostas sem precisar recarregar a página. Esse método é conhecido como AJAX. Em conjunto com o DOM, ele permite atualizar dados apresentados ao usuário de forma dinâmica.

Assim, uma página pode buscar novas informações, alterar uma lista, atualizar uma tabela ou mostrar resultados filtrados sem que o usuário tenha que carregar outra página inteira.

> [!tip] Resumindo
> AJAX busca ou envia dados; o DOM permite mostrar esses dados dinamicamente na página.

---

## 29. Semântica, SEO e acessibilidade

> [!info] Conceito
> Uma boa estrutura HTML facilita o entendimento da página, melhora a manutenção, favorece a acessibilidade e contribui para SEO.

O material destaca que a semântica, isto é, o sentido dos elementos usados no HTML, é uma boa prática no desenvolvimento Web. Elementos bem escolhidos ajudam usuários, navegadores e mecanismos de busca a entenderem melhor a página.

Uma página com estrutura semântica adequada facilita a manutenção do código, melhora a acessibilidade e pode contribuir para melhor posicionamento em mecanismos de busca.

> [!tip] Resumindo
> Uma boa estrutura HTML torna o DOM mais organizado e facilita sua manipulação.

---

## 30. Desafio: construir HTML a partir da árvore DOM

> [!info] Conceito
> A árvore DOM pode ser usada como referência para montar a estrutura HTML de uma página.

No desafio do material, o desenvolvedor recebe uma árvore DOM e deve transformá-la em código HTML. A estrutura esperada representa uma página de livraria on-line, com título, metadados, cabeçalho, parágrafo com link e lista de livros.

Exemplo apresentado:

```html
<html>
<head>
  <title>Livraria on-line</title>
  <meta name="author" content="Professor Sagah">
  <meta name="keywords" content="Livros, e-books, audiobooks">
</head>
<body>
  <h1>Livros favoritos</h1>
  <p><a href="www.livraria-online.com/biblioteca/">Ver todos os livros</a></p>
  <ul>
    <li>Código Limpo</li>
    <li>Business Model Generation</li>
    <li>Value Proposition Design</li>
  </ul>
</body>
</html>
```

Esse exercício mostra que o DOM é uma representação da própria estrutura HTML, permitindo visualizar as relações entre os elementos.

> [!tip] Resumindo
> A árvore DOM ajuda a compreender como os elementos HTML se organizam hierarquicamente.

---

## 31. Aplicação prática: tabela e manipulação DOM

> [!info] Conceito
> O DOM permite criar e manipular tabelas HTML dinamicamente.

Na prática do material, o aluno é incentivado a programar uma tabela em HTML a partir de sua representação em árvore DOM e a usar métodos de manipulação para adicionar um item ao fim da tabela.

Esse tipo de aplicação mostra a utilidade prática do DOM em sistemas Web. Em vez de escrever manualmente todos os elementos no HTML, o JavaScript pode criar novas linhas, inserir células e atualizar os dados exibidos.

> [!tip] Resumindo
> Tabelas, listas e outros elementos podem ser atualizados dinamicamente com JavaScript e DOM.

---

## 32. Principais aprendizados dos exercícios

> [!info] Conceito
> Os exercícios reforçam os métodos de acesso, alteração de estilo, estrutura da árvore DOM, linguagem de manipulação e padrões do DOM.

Os exercícios destacam que `getElementById()` é o método usado para obter um elemento a partir de seu identificador. Também mostram que, para alterar a cor de um texto, pode-se acessar o elemento pelo `id` e modificar `style.color`.

Outro ponto reforçado é a estrutura do nó `window`, que possui como filhos objetos como `location`, `document` e `history`. Os exercícios também destacam que JavaScript é a linguagem de script mais utilizada para manipular elementos do documento da página Web.

Por fim, os exercícios indicam que W3C e WHATWG são padrões relacionados ao DOM implementados nos navegadores mais recentes.

> [!warning] Atenção
> HTML e XML são linguagens de marcação; CSS é usado para estilo; JavaScript é usado para comportamento e manipulação dinâmica.

> [!tip] Resumindo
> Os exercícios consolidam a função do DOM como modelo manipulável da página Web.

---

## Síntese final

> [!summary] Síntese
> O DOM é o modelo em árvore que representa uma página HTML ou XML na memória do navegador, permitindo que seus elementos sejam acessados e manipulados.

O DOM é fundamental para o desenvolvimento front end porque permite transformar páginas estáticas em interfaces dinâmicas. Ele organiza o documento como uma árvore de objetos, em que cada elemento, texto ou atributo pode ser tratado como um nó.

Por meio do objeto `document`, o JavaScript pode acessar elementos com métodos como `getElementById()`, criar elementos com `createElement()`, criar textos com `createTextNode()`, inserir elementos com `appendChild()`, remover elementos com `removeChild()` e modificar estilos com `style`.

A estrutura do DOM também se relaciona com objetos como `window`, `location`, `history` e `document`. Suas interfaces Core, HTML e CSS oferecem recursos para manipular documentos, elementos e estilos. Os padrões W3C e WHATWG ajudam a definir seu funcionamento nos navegadores modernos.

Em resumo, o DOM é a base que permite ao JavaScript interagir com a página, alterar conteúdos, modificar estilos, responder a eventos e criar experiências Web mais dinâmicas e interativas.