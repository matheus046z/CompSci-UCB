---
publish: true
---
# Comportamento com JavaScript

## 1. Papel do JavaScript no desenvolvimento Web

> [!info] Conceito
> JavaScript é a linguagem usada para controlar o comportamento das páginas Web, adicionando interatividade e dinamismo ao HTML e ao CSS.

JavaScript permite que uma página responda às ações do usuário e execute comportamentos em tempo real. Com ele, é possível validar formulários, alterar textos, modificar estilos, animar elementos, ocultar ou mostrar objetos e executar pequenas operações diretamente no navegador.

Enquanto o HTML organiza a estrutura da página e o CSS define sua aparência visual, o JavaScript fica responsável pelo comportamento. Por isso, ele é essencial para criar páginas mais interativas, responsivas e funcionais.

> [!tip] Resumindo
> HTML estrutura, CSS apresenta e JavaScript controla o comportamento da página.

---

## 2. JavaScript como linguagem da Web

> [!info] Conceito
> JavaScript é uma linguagem de script criada para controlar conteúdos dinâmicos em sites.

O JavaScript foi criado pela Netscape em 1995 com o objetivo de adicionar mais recursos de interatividade às páginas HTML e CSS. Ele se tornou uma das linguagens mais importantes do desenvolvimento Web moderno, pois permite criar páginas que reagem a eventos do usuário sem precisar recarregar toda a página.

O material caracteriza JavaScript como uma linguagem dinâmica, baseada em objetos, orientada a eventos e capaz de executar ações em tempo real. Isso significa que a página pode reagir a cliques, movimentos do mouse, envio de formulários, carregamento de documentos e outras interações.

> [!tip] Resumindo
> JavaScript torna as páginas Web mais dinâmicas, permitindo respostas imediatas às ações do usuário.

---

## 3. Diferença entre JavaScript e Java

> [!warning] Atenção
> JavaScript e Java são linguagens diferentes, apesar da semelhança no nome.

O material destaca que muitos usuários confundem JavaScript com Java, mas elas têm propósitos distintos. Java é uma linguagem de programação completa, usada para criar aplicações executadas em uma máquina virtual ou em um navegador. Já JavaScript é uma linguagem de scripts usada principalmente em conjunto com HTML para criar interatividade em páginas Web.

Outra diferença importante é que o código Java precisa ser compilado, enquanto o código JavaScript é escrito em texto e executado pelo navegador. O Java foi criado pela Sun Microsystems e atualmente é mantido pela Oracle. O JavaScript foi criado pela Netscape e é padronizado pela ECMA.

> [!tip] Resumindo
> Java é uma linguagem de programação completa e compilada; JavaScript é uma linguagem de script executada no navegador.

---

## 4. Estrutura básica do JavaScript

> [!info] Conceito
> A estrutura básica do JavaScript envolve variáveis, tipos de dados, operadores e estruturas de controle.

Para escrever códigos em JavaScript, é necessário compreender seus elementos fundamentais. As variáveis armazenam dados, os tipos de dados indicam a natureza dessas informações, os operadores realizam operações e comparações, e as estruturas de controle definem o fluxo de execução do programa.

Esses elementos formam a base para scripts mais complexos. A partir deles, é possível criar decisões, repetições, interações com o usuário e manipulações de elementos HTML.

> [!tip] Resumindo
> Variáveis, dados, operadores e controle de fluxo são a base da programação em JavaScript.

---

## 5. Variáveis em JavaScript

> [!info] Conceito
> Variáveis são usadas para armazenar dados que podem ser manipulados durante a execução do código.

Uma variável guarda uma informação que pode mudar ao longo do programa ou ser inserida pelo usuário. Em JavaScript, variáveis podem armazenar diferentes tipos de dados, como números, textos, listas e objetos.

O material apresenta três formas de declarar variáveis: `var`, `let` e `const`.

```javascript
var x = 10;
let idade = 30;
const pi = 3.14;
```

A palavra-chave `var` declara variáveis com escopo global ou de função. A palavra-chave `let` declara variáveis com escopo de bloco, o que significa que elas só existem dentro do bloco onde foram criadas. A palavra-chave `const` também tem escopo de bloco, mas é usada para valores que não devem ser alterados depois da atribuição inicial.

> [!warning] Atenção
> `const` não deve ser usada para valores que precisam mudar durante a execução do programa.

> [!tip] Resumindo
> Use `const` para valores fixos, `let` para valores que mudam e tenha cuidado com `var`, pois seu escopo pode causar comportamentos inesperados.

---

## 6. Escopo de variáveis

> [!info] Conceito
> Escopo é a região do código onde uma variável pode ser acessada.

O escopo define onde uma variável existe e pode ser usada. Variáveis declaradas com `var` podem ter escopo global ou de função. Isso significa que podem ser acessadas fora de blocos como `if` ou `for`, o que pode gerar comportamentos menos previsíveis.

Já `let` e `const` têm escopo de bloco. Isso significa que, se forem declaradas dentro de um bloco, só poderão ser acessadas dentro dele.

Exemplo com `let`:

```javascript
let idade = 30;

if (true) {
  let nome = "Ana";
  console.log(idade);
  console.log(nome);
}

// console.log(nome); // Erro: nome is not defined
```

Nesse exemplo, a variável `nome` só existe dentro do bloco `if`.

> [!tip] Resumindo
> O escopo controla onde uma variável pode ser usada dentro do código.

---

## 7. Tipos de dados em JavaScript

> [!info] Conceito
> Tipos de dados representam as diferentes formas de informação que podem ser armazenadas e manipuladas.

JavaScript permite trabalhar com vários tipos de dados. O tipo `String` armazena textos, como nomes ou frases. O tipo `Number` armazena números inteiros ou decimais. O tipo `Boolean` representa valores verdadeiro ou falso. O tipo `Array` armazena listas ordenadas de valores. O tipo `Object` armazena coleções de propriedades no formato chave-valor.

Exemplos:

```javascript
let nome = "Fulano";
let idade = 30;
let ativo = true;
let frutas = ["banana", "maçã", "laranja"];
let carro = { marca: "Honda", modelo: "Civic", ano: 2023 };
```

Cada tipo de dado serve a uma finalidade. Textos são usados para mensagens, números para cálculos, booleanos para decisões, arrays para listas e objetos para representar entidades mais complexas.

> [!tip] Resumindo
> Tipos de dados indicam que tipo de informação o JavaScript está manipulando.

---

## 8. Operadores em JavaScript

> [!info] Conceito
> Operadores são símbolos ou palavras-chave que realizam operações sobre valores.

Os operadores permitem fazer cálculos, atribuir valores, comparar informações e combinar condições. O material apresenta operadores aritméticos, de atribuição, de comparação e lógicos.

Operadores aritméticos realizam operações matemáticas, como soma, subtração, multiplicação e divisão. Operadores de atribuição armazenam valores em variáveis. Operadores de comparação verificam relações entre valores e retornam verdadeiro ou falso. Operadores lógicos combinam condições.

Exemplos:

```javascript
let soma = 10 + 20;
let x = 10;
let comparacao = 10 == 10;
let resultado = true && false;
```

> [!tip] Resumindo
> Operadores permitem calcular, comparar, atribuir e combinar condições no código.

---

## 9. Controle de fluxo

> [!info] Conceito
> Controle de fluxo define a ordem e as condições em que os blocos de código serão executados.

O controle de fluxo permite que o programa tome decisões e execute tarefas repetitivas. Isso é feito por meio de instruções condicionais, como `if...else` e `switch`, e laços de repetição, como `for`, `while` e `do...while`.

Sem controle de fluxo, o código seria executado apenas de cima para baixo, sem capacidade de tomar decisões ou repetir ações conforme uma condição.

> [!tip] Resumindo
> Controle de fluxo permite criar decisões e repetições dentro do programa.

---

## 10. Estruturas condicionais

> [!info] Conceito
> Estruturas condicionais executam diferentes blocos de código com base em uma condição.

A estrutura `if...else` avalia uma expressão booleana. Se a condição for verdadeira, executa um bloco de código; caso contrário, executa outro bloco.

Exemplo:

```javascript
if (idade > 18) {
  console.log("Adulto");
} else {
  console.log("Menor");
}
```

A estrutura `switch` é útil quando uma variável precisa ser comparada com vários valores possíveis. Ela pode deixar o código mais organizado do que vários `if...else`.

Exemplo:

```javascript
let fruta = "maçã";

switch (fruta) {
  case "maçã":
    console.log("A fruta é uma maçã.");
    break;
  case "banana":
    console.log("A fruta é uma banana.");
    break;
  default:
    console.log("Fruta desconhecida.");
}
```

> [!tip] Resumindo
> `if...else` é usado para decisões gerais; `switch` é útil quando há vários valores possíveis para comparar.

---

## 11. Laços de repetição

> [!info] Conceito
> Laços de repetição executam um bloco de código várias vezes.

JavaScript possui estruturas de repetição que ajudam a executar tarefas repetitivas de forma eficiente. O laço `for` é usado quando se sabe previamente quantas vezes o código deve ser repetido.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

O laço `while` executa o bloco enquanto a condição for verdadeira. Ele é útil quando não se sabe antecipadamente quantas repetições serão necessárias.

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

O laço `do...while` garante que o bloco seja executado pelo menos uma vez antes de testar a condição.

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

> [!warning] Atenção
> É importante garantir que a condição do laço possa se tornar falsa, para evitar repetições infinitas.

> [!tip] Resumindo
> `for`, `while` e `do...while` permitem repetir ações de acordo com a necessidade do programa.

---

## 12. Sensibilidade a maiúsculas e minúsculas

> [!warning] Atenção
> JavaScript diferencia letras maiúsculas e minúsculas.

Em JavaScript, identificadores escritos de formas diferentes são tratados como elementos diferentes. Por exemplo, `var`, `Var` e `VAR` não são a mesma coisa. Isso vale para variáveis, palavras-chave, funções e outros nomes usados no código.

Esse cuidado é importante porque pequenos erros de digitação podem impedir o funcionamento correto do script.

> [!tip] Resumindo
> Em JavaScript, a escrita exata dos nomes importa.

---

## 13. Métodos comuns de JavaScript

> [!info] Conceito
> Métodos são funções incorporadas que executam tarefas específicas.

O material apresenta alguns métodos comuns usados em JavaScript. O método `alert()` exibe uma mensagem de alerta. O método `confirm()` mostra uma caixa de diálogo com as opções OK e Cancelar. O método `prompt()` solicita que o usuário insira um valor. O método `parseInt()` converte uma string em número inteiro. O método `parseFloat()` converte uma string em número decimal.

Exemplos:

```javascript
alert("Olá, mundo!");

let resposta = confirm("Você quer continuar?");

let nome = prompt("Qual é o seu nome?");

let numeroInteiro = parseInt("10");

let numeroDecimal = parseFloat("10.5");
```

Esses métodos permitem interações simples com o usuário e conversões básicas de dados.

> [!tip] Resumindo
> `alert`, `confirm` e `prompt` interagem com o usuário; `parseInt` e `parseFloat` convertem textos em números.

---

## 14. Eventos em JavaScript

> [!info] Conceito
> Evento é uma ação ou ocorrência capturada pelo navegador e tratada pelo JavaScript.

Eventos permitem que a página responda às ações do usuário ou do próprio navegador. Um clique em um botão, o envio de um formulário, o carregamento da página, a digitação no teclado ou o movimento do mouse podem ser tratados como eventos.

Segundo os exercícios do material, uma ação em JavaScript pode ser dividida em dois elementos básicos: evento e função. O evento dispara a ação, e a função executa o comportamento desejado.

> [!tip] Resumindo
> Evento é o que acontece; função é o que será executado em resposta.

---

## 15. Ouvintes de eventos

> [!info] Conceito
> Ouvintes de eventos são mecanismos que associam uma função a um evento específico.

A manipulação de eventos pode ser feita com `addEventListener`. Esse método adiciona a um elemento HTML uma função que será executada quando determinado evento ocorrer.

Sintaxe geral:

```javascript
element.addEventListener(event, function, useCapture);
```

Nessa estrutura, `element` é o elemento HTML selecionado, `event` é o nome do evento, `function` é a função executada quando o evento ocorre e `useCapture` é um parâmetro opcional.

Exemplo:

```javascript
document.getElementById("meuBotao").addEventListener("click", function() {
  alert("Botão clicado!");
});
```

Nesse exemplo, quando o botão com ID `meuBotao` for clicado, uma mensagem de alerta será exibida.

> [!tip] Resumindo
> `addEventListener` conecta um evento a uma função.

---

## 16. Remoção de ouvintes de eventos

> [!info] Conceito
> `removeEventListener` remove uma função associada a um evento.

Para remover um ouvinte de evento, a função precisa estar definida separadamente. Isso ocorre porque o JavaScript precisa saber exatamente qual função deve ser removida.

Exemplo:

```javascript
function showAlert() {
  alert("Botão clicado!");
}

document.getElementById("meuBotao").addEventListener("click", showAlert);

document.getElementById("meuBotao").removeEventListener("click", showAlert);
```

Nesse caso, a função `showAlert` é adicionada como resposta ao clique e depois pode ser removida corretamente.

> [!warning] Atenção
> Para remover um evento com segurança, evite usar função anônima quando a remoção posterior for necessária.

> [!tip] Resumindo
> A mesma função usada em `addEventListener` deve ser usada em `removeEventListener`.

---

## 17. Tipos de eventos

> [!info] Conceito
> JavaScript possui eventos relacionados ao mouse, teclado, objetos, frames e formulários.

Os eventos de mouse incluem ações como clicar, clicar duas vezes, pressionar ou soltar o botão do mouse, mover o ponteiro sobre um elemento ou retirar o ponteiro dele. Exemplos: `onClick`, `onDblClick`, `onMouseDown`, `onMouseOver`, `onMouseOut` e `onMouseUp`.

Os eventos de teclado estão relacionados ao pressionamento e liberação de teclas. Exemplos: `onKeyDown`, `onKeyPress` e `onKeyUp`.

Os eventos de objetos ou frames envolvem carregamento, erro, redimensionamento, rolagem e saída da página. Exemplos: `onLoad`, `onError`, `onResize`, `onScroll` e `onUnload`.

Os eventos de formulários ocorrem quando campos recebem foco, perdem foco, têm conteúdo alterado, são limpos, selecionados ou enviados. Exemplos: `onBlur`, `onChange`, `onFocus`, `onReset`, `onSelect` e `onSubmit`.

> [!tip] Resumindo
> Eventos permitem que o JavaScript responda a ações do usuário e do navegador.

---

## 18. DOM: Document Object Model

> [!info] Conceito
> DOM é a representação hierárquica dos elementos de um documento HTML ou XML.

O DOM transforma a página em uma estrutura de árvore, na qual cada elemento é tratado como um nó. Com JavaScript, é possível selecionar, modificar, adicionar ou remover esses nós, alterando a página sem recarregá-la.

A manipulação do DOM é essencial para criar páginas interativas. Ela permite mudar textos, estilos, atributos e elementos em resposta às ações do usuário.

> [!tip] Resumindo
> O DOM permite que o JavaScript acesse e modifique os elementos da página.

---

## 19. Seleção de elementos no DOM

> [!info] Conceito
> Antes de modificar um elemento HTML, é necessário selecioná-lo no DOM.

JavaScript oferece vários métodos para selecionar elementos. `getElementById` seleciona um elemento pelo ID. `getElementsByClassName` seleciona elementos por classe. `getElementsByTagName` seleciona elementos pelo nome da tag. `querySelector` seleciona o primeiro elemento que corresponde a um seletor CSS. `querySelectorAll` seleciona todos os elementos que correspondem a um seletor CSS.

Exemplo:

```javascript
var elemento = document.getElementById("meuElemento");
```

Esse código seleciona o elemento que possui o ID `meuElemento`.

> [!tip] Resumindo
> Selecionar elementos é o primeiro passo para manipulá-los com JavaScript.

---

## 20. Alteração de conteúdo e estilo no DOM

> [!info] Conceito
> JavaScript pode alterar o conteúdo e a aparência dos elementos HTML.

Depois de selecionar um elemento, é possível alterar seu conteúdo com `innerHTML`. Essa propriedade modifica o conteúdo interno do elemento.

Exemplo:

```javascript
document.getElementById("meuElemento").innerHTML = "Conteúdo alterado!";
```

Também é possível alterar o estilo do elemento usando a propriedade `style`.

```javascript
document.getElementById("meuElemento").style.color = "blue";
```

Essas alterações acontecem diretamente na página, sem necessidade de recarregamento.

> [!tip] Resumindo
> `innerHTML` altera conteúdo; `style` altera aparência.

---

## 21. Criação e adição de elementos no DOM

> [!info] Conceito
> JavaScript pode criar novos elementos HTML e adicioná-los à página dinamicamente.

O método `createElement` cria um novo elemento HTML, mas ainda não o adiciona ao documento. Para inserir esse elemento na página, usa-se `appendChild`, que adiciona o novo nó como filho de outro elemento.

Exemplo:

```javascript
var novoParagrafo = document.createElement("p");
novoParagrafo.innerHTML = "Este é um novo parágrafo.";
document.body.appendChild(novoParagrafo);
```

Nesse exemplo, um novo parágrafo é criado, recebe um texto e é adicionado ao final do corpo da página.

> [!tip] Resumindo
> `createElement` cria o elemento; `appendChild` insere o elemento na página.

---

## 22. Remoção de elementos do DOM

> [!info] Conceito
> JavaScript pode remover elementos HTML da página.

Para remover elementos do DOM, podem ser usados os métodos `removeChild` ou `remove`. O método `removeChild` remove um nó filho a partir de seu elemento pai. Já `remove` pode ser chamado diretamente no elemento que se deseja remover.

Exemplo com `removeChild`:

```javascript
var elementoParaRemover = document.getElementById("elementoAntigo");
elementoParaRemover.parentNode.removeChild(elementoParaRemover);
```

Essa técnica permite atualizar a estrutura da página dinamicamente.

> [!tip] Resumindo
> A remoção de elementos permite modificar a página conforme as interações do usuário.

---

## 23. Manipulação de atributos

> [!info] Conceito
> Atributos são informações associadas a elementos HTML, como `class`, `id`, `src` e `href`.

JavaScript pode alterar atributos de elementos HTML por meio de métodos específicos. `setAttribute` adiciona ou modifica um atributo. `getAttribute` retorna o valor de um atributo. `removeAttribute` remove um atributo.

Exemplos:

```javascript
document.getElementById("meuParagrafo").setAttribute("class", "novaClasse");

var classeAtual = document.getElementById("meuParagrafo").getAttribute("class");

document.getElementById("meuParagrafo").removeAttribute("class");
```

Esses métodos permitem alterar características dos elementos de forma dinâmica.

> [!tip] Resumindo
> Manipular atributos permite mudar o comportamento e a aparência dos elementos HTML.

---

## 24. Eventos combinados com DOM

> [!info] Conceito
> A combinação de eventos com manipulação do DOM cria páginas interativas.

Eventos podem disparar alterações no DOM. Por exemplo, um clique em um botão pode adicionar um item a uma lista, alterar um texto, mudar uma cor ou remover um elemento.

Exemplo:

```javascript
document.getElementById("meuBotao").addEventListener("click", function() {
  var novoItem = document.createElement("li");
  novoItem.innerHTML = "Novo item da lista";
  document.getElementById("minhaLista").appendChild(novoItem);
});
```

Nesse exemplo, cada clique no botão cria um novo item de lista e o adiciona ao elemento com ID `minhaLista`.

> [!tip] Resumindo
> Eventos dizem quando agir; o DOM permite definir o que será alterado.

---

## 25. Integração entre JavaScript e HTML

> [!info] Conceito
> JavaScript pode ser incluído em páginas HTML para adicionar comportamento e interatividade.

A integração entre JavaScript e HTML é essencial para criar páginas dinâmicas. O desenvolvimento Web moderno segue a separação de responsabilidades: HTML cuida da estrutura, CSS cuida da apresentação e JavaScript cuida da interatividade.

O JavaScript pode ser incluído diretamente no HTML ou em arquivo externo. A prática mais recomendada é usar arquivos externos, pois isso mantém o código organizado, reutilizável e mais fácil de manter.

> [!tip] Resumindo
> Integrar JavaScript ao HTML permite transformar páginas estáticas em páginas interativas.

---

## 26. Métodos de inclusão de JavaScript

> [!info] Conceito
> JavaScript pode ser incluído em uma página HTML de forma inline, por arquivo externo ou por atributos de evento.

O método inline coloca o código diretamente dentro da tag `<script>` no próprio HTML. Ele pode ser útil para scripts curtos, mas dificulta a manutenção quando o código cresce.

```html
<script>
  alert("JavaScript inline!");
</script>
```

O método de arquivo externo usa o atributo `src` da tag `<script>` para chamar um arquivo JavaScript separado. Essa é a forma preferida para manter o código organizado.

```html
<script src="meuscript.js"></script>
```

Também é possível inserir JavaScript diretamente em atributos de evento HTML, como `onclick`. Esse método é prático, mas pode deixar o HTML mais confuso em projetos maiores.

```html
<button onclick="alert('Botão clicado!')">Clique-me</button>
```

> [!warning] Atenção
> Embora todos os métodos funcionem, separar o JavaScript em arquivo externo é a prática mais organizada.

> [!tip] Resumindo
> A melhor prática é manter o JavaScript em arquivo externo sempre que possível.

---

## 27. Uso do atributo `defer`

> [!info] Conceito
> O atributo `defer` faz o script ser executado somente após o carregamento do HTML.

Ao incluir um arquivo JavaScript externo, o atributo `defer` pode melhorar o desempenho da página. Ele garante que o script será executado depois que o documento HTML tiver sido carregado.

Exemplo:

```html
<script src="meuscript.js" defer></script>
```

Isso evita problemas em que o JavaScript tenta acessar elementos HTML que ainda não foram carregados.

> [!tip] Resumindo
> `defer` ajuda a carregar o HTML antes de executar o JavaScript.

---

## 28. Sintaxe da tag `<script>`

> [!info] Conceito
> A tag `<script>` é usada para inserir ou chamar JavaScript em uma página HTML.

Segundo os exercícios, a sintaxe clássica correta para inserir JavaScript é:

```html
<script type="text/javascript">
  // conteúdo do script
</script>
```

O uso de `text/css` está relacionado ao CSS, e não ao JavaScript. Também não existem tags como `<Javascript>` ou `<Java>` para inserir scripts em HTML.

> [!warning] Atenção
> Java e JavaScript são linguagens diferentes; por isso, `type="java"` não é uma forma correta de inserir JavaScript.

> [!tip] Resumindo
> JavaScript é inserido no HTML com a tag `<script>`.

---

## 29. Exemplo prático de interatividade

> [!info] Conceito
> JavaScript pode alterar o conteúdo e o estilo de uma página após uma ação do usuário.

O material apresenta um exemplo em que um botão altera o conteúdo de um parágrafo e muda a cor do texto. A estrutura HTML contém um botão e um parágrafo com identificadores próprios.

HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Exemplo de Interatividade</title>
  <script src="script.js" defer></script>
</head>
<body>
  <h1>Bem-vindo ao meu site</h1>
  <button id="meuBotao">Clique-me</button>
  <p id="meuParagrafo">Texto original</p>
</body>
</html>
```

JavaScript:

```javascript
document.getElementById("meuBotao").addEventListener("click", function() {
  document.getElementById("meuParagrafo").innerHTML = "Você clicou no botão!";
  document.getElementById("meuParagrafo").style.color = "red";
});
```

Nesse exemplo, o botão dispara um evento de clique. A função associada altera o texto do parágrafo e muda sua cor para vermelho.

> [!tip] Resumindo
> A interatividade surge quando um evento executa uma função que modifica o DOM.

---

## 30. Desafio: mudar a cor da página

> [!info] Conceito
> Uma chamada JavaScript pode alterar a cor de fundo da página a partir de um botão.

No desafio do material, é solicitado um código HTML com um botão que faz a página ficar azul por meio de JavaScript. O padrão de resposta usa o evento `onClick` para alterar a cor de fundo do documento.

Exemplo apresentado:

```html
<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8"/>
  <title>Mudar Cor</title>
</head>
<body>
  <button onClick="document.bgColor='#00F'">mudar cor</button>
</body>
</html>
```

Esse exemplo mostra uma forma simples de associar um comportamento a um botão usando JavaScript diretamente no atributo de evento.

> [!tip] Resumindo
> Um evento de clique pode acionar JavaScript para modificar a aparência da página.

---

## 31. Validação de formulários

> [!info] Conceito
> JavaScript pode validar dados de formulários HTML antes do envio ao servidor.

A validação de formulários ajuda a garantir que os dados solicitados aos usuários sejam preenchidos de maneira adequada e completa. Com JavaScript, é possível verificar campos de entrada antes de enviar as informações ao servidor.

Essa prática melhora a experiência do usuário e evita o envio de formulários incompletos ou inadequados. O material relaciona esse uso à capacidade do JavaScript de controlar comportamentos da página e manipular dados de entrada.

> [!tip] Resumindo
> JavaScript pode verificar dados do formulário antes que eles sejam enviados.

---

## 32. Principais aprendizados dos exercícios

> [!info] Conceito
> Os exercícios reforçam os conceitos de eventos, funções, métodos, sintaxe e variáveis.

Os exercícios mostram que uma ação em JavaScript envolve função e evento. O evento é o gatilho, como um clique ou carregamento da página, enquanto a função executa a ação programada.

Também são destacados eventos comuns, como `onClick`, `onSubmit` e `onLoad`. Entre os métodos bastante utilizados estão `alert()`, `confirm()` e `prompt()`. A sintaxe correta para inserir JavaScript em HTML usa a tag `<script>`. Por fim, os exercícios reforçam que uma variável serve para armazenar um valor que pode variar ou ser inserido pelo usuário.

> [!warning] Atenção
> Eventos, métodos e estruturas condicionais não são a mesma coisa. `onClick` é evento, `alert()` é método e `if...else` é estrutura condicional.

> [!tip] Resumindo
> Os exercícios consolidam a diferença entre eventos, funções, métodos e variáveis.

---

## Síntese final

> [!summary] Síntese
> JavaScript é a linguagem responsável por adicionar comportamento e interatividade às páginas Web.

O JavaScript permite que páginas HTML respondam a ações do usuário, manipulem elementos do DOM, alterem estilos, validem formulários e executem operações diretamente no navegador. Sua estrutura básica envolve variáveis, tipos de dados, operadores, condicionais e laços de repetição.

A interatividade é construída principalmente pela combinação entre eventos e funções. Eventos, como cliques e envio de formulários, disparam funções que podem alterar o conteúdo, os atributos e a aparência dos elementos da página.

O DOM é a ponte entre o JavaScript e o HTML, pois permite selecionar, modificar, criar e remover elementos. A integração com HTML pode ser feita de várias formas, mas a prática mais organizada é usar arquivos JavaScript externos, preferencialmente com `defer`, mantendo a separação entre estrutura, apresentação e comportamento.

Em resumo, dominar JavaScript é essencial para criar páginas Web modernas, dinâmicas, organizadas e responsivas às ações do usuário.