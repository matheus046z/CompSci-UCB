---
publish: true
---
# Manipulando BOM, Cookies e Temporizadores em JavaScript

## 1. Conceito de BOM

> [!info] Conceito
> BOM significa *Browser Object Model*, ou Modelo de Objeto do Navegador. Ele representa os objetos e recursos do navegador que podem ser acessados por JavaScript.

O BOM é o modelo que permite ao JavaScript interagir com elementos do navegador, e não apenas com o conteúdo da página. Por meio dele, é possível acessar informações da janela, do histórico, da tela, da localização da página, do navegador, dos quadros, dos temporizadores e de outros recursos disponíveis no ambiente do navegador.

Diferentemente de outras tecnologias da Web, o BOM não possui um padrão formal único. Cada navegador pode implementar seus próprios recursos, embora exista uma grande convergência entre os principais navegadores modernos. Por isso, muitas funções e propriedades são semelhantes entre eles, mesmo sem uma padronização oficial.

> [!warning] Atenção
> O BOM não é padronizado formalmente. Assim, alguns comportamentos podem variar entre navegadores.

> [!tip] Resumindo
> O BOM permite que o JavaScript acesse e manipule recursos do navegador, como janela, histórico, localização, tela, cookies e temporizadores.

---

## 2. Diferença entre BOM e DOM

> [!info] Conceito
> O BOM trata dos objetos do navegador; o DOM trata da página carregada no navegador.

O BOM abrange elementos que pertencem ao navegador, como janela, histórico, localização, tela e informações do próprio aplicativo de navegação. Já o DOM, ou *Document Object Model*, está vinculado diretamente ao documento HTML carregado na página.

O objeto `document`, embora faça parte do ambiente acessível pelo BOM, representa especificamente a página Web. Por meio dele, é possível acessar e modificar o conteúdo exibido, como textos, formulários, imagens e tabelas.

> [!tip] Resumindo
> BOM é o modelo do navegador; DOM é o modelo do documento HTML.

---

## 3. Objeto `window`

> [!info] Conceito
> `window` é o principal objeto usado para acessar o BOM na maioria dos navegadores.

Na maior parte dos navegadores, o BOM é acessado por meio do objeto `window`. Esse objeto fica no topo da hierarquia e representa a janela do navegador. Ele reúne propriedades e métodos relacionados à janela, aos temporizadores, aos diálogos, à navegação e a outros objetos filhos.

Variáveis, funções e objetos globais criados em JavaScript podem ser tratados como elementos vinculados ao objeto `window`. Por isso, em muitos casos, é possível acessar uma propriedade diretamente pelo nome ou usando a notação com `window`.

Exemplo:

```javascript
window.obj = { prop1: 1 }

console.log(obj.prop1)
console.log(window.obj.prop1)
```

Nos dois casos, o valor acessado é o mesmo, pois o objeto foi criado no contexto global da janela.

> [!warning] Atenção
> BOM e `window` não são exatamente sinônimos, mas `window` costuma ser a principal implementação do BOM nos navegadores.

> [!tip] Resumindo
> `window` é o ponto de partida para acessar muitos recursos do navegador com JavaScript.

---

## 4. Manipulação da janela

> [!info] Conceito
> O objeto `window` possui métodos para controlar tamanho, posição, rolagem e foco da janela.

O BOM permite manipular características da janela do navegador. O redimensionamento pode ser feito com `resizeTo`, para definir um tamanho absoluto, ou `resizeBy`, para alterar o tamanho de forma relativa. A posição da janela pode ser modificada com `moveTo`, para posição absoluta, ou `moveBy`, para deslocamento relativo.

Também é possível controlar a rolagem da página com `scrollTo`, que move a visualização para uma posição absoluta, ou `scrollBy`, que desloca a rolagem de forma relativa. Além disso, existem métodos para controlar foco, como `focus`, que direciona o foco à janela, e `blur`, que retira o foco da janela atual.

> [!tip] Resumindo
> O BOM permite controlar aspectos da janela, como tamanho, posição, rolagem e foco.

---

## 5. Diálogos e abertura de janelas

> [!info] Conceito
> O objeto `window` permite exibir mensagens, receber dados do usuário e abrir ou fechar janelas.

Entre os métodos mais comuns do objeto `window`, estão os diálogos `alert`, `confirm` e `prompt`. O método `alert` exibe uma mensagem simples ao usuário. O método `confirm` exibe uma mensagem com botões de confirmação e cancelamento, retornando `true` ou `false`. O método `prompt` abre uma janela para receber um valor digitado pelo usuário.

Também é possível abrir novas janelas ou abas com `open`, dependendo da implementação do navegador, e fechar a janela atual com `close`.

Exemplos conceituais:

```javascript
window.alert("Mensagem de alerta")

let resposta = window.confirm("Deseja continuar?")

let nome = window.prompt("Digite seu nome")
```

> [!tip] Resumindo
> `alert`, `confirm` e `prompt` são recursos simples de interação com o usuário via navegador.

---

## 6. Principais propriedades do objeto `window`

> [!info] Conceito
> O objeto `window` possui propriedades que dão acesso a informações da janela, da página, da tela e do navegador.

O material apresenta diversas propriedades associadas ao objeto `window`. A propriedade `closed` indica se a janela está fechada. A propriedade `console` dá acesso ao console do navegador. A propriedade `document` retorna o objeto que representa a página carregada. A propriedade `history` acessa o histórico de navegação. A propriedade `location` retorna a localização da janela, ou seja, o endereço da página.

Também há propriedades relacionadas ao tamanho da janela, como `innerHeight`, `innerWidth`, `outerHeight` e `outerWidth`. As propriedades `pageXOffset` ou `scrollX` indicam a quantidade de pixels rolados horizontalmente, enquanto `pageYOffset` ou `scrollY` indicam a rolagem vertical. A propriedade `screen` retorna o objeto referente à tela, e `navigator` retorna informações sobre o navegador.

> [!tip] Resumindo
> `window` reúne propriedades que permitem conhecer e manipular o ambiente de navegação.

---

## 7. Principais objetos do BOM

> [!info] Conceito
> Os principais objetos do BOM incluem `document`, `frames`, `history`, `screen`, `navigator` e `location`.

O BOM pode ser entendido como uma hierarquia de objetos relacionados ao navegador. O objeto `window` está no topo, e a partir dele é possível acessar objetos como `document`, `frames`, `history`, `screen`, `navigator` e `location`.

Cada um desses objetos representa uma parte específica do navegador ou da página atual. O `document` representa o documento HTML. O `frames` lista os quadros da página. O `history` mantém o histórico de navegação. O `screen` fornece informações sobre a tela. O `navigator` traz informações sobre o navegador. O `location` trabalha com o endereço da página.

> [!tip] Resumindo
> Cada objeto do BOM representa uma área do navegador ou da página em execução.

---

## 8. Objeto `document`

> [!info] Conceito
> `document` representa a página HTML carregada na janela do navegador.

O objeto `document` é de grande importância no desenvolvimento Web, pois representa o conteúdo da página exibida ao usuário. Ele está relacionado ao DOM e permite acessar e modificar elementos HTML.

Por meio de `document`, o programador pode localizar elementos, alterar textos, modificar estilos, trabalhar com formulários e manipular cookies. Embora o BOM trate do navegador como um todo, o `document` concentra as informações referentes à página em si.

> [!tip] Resumindo
> `document` é o objeto usado para manipular o conteúdo da página carregada.

---

## 9. Objeto `frames`

> [!info] Conceito
> `frames` lista os quadros existentes dentro da janela do navegador.

O objeto `frames` contém todos os quadros existentes em `window`, organizados como um array de objetos. Cada quadro pode ser acessado por índice, conforme a ordem em que aparece na página.

Exemplo:

```javascript
const quadros = window.frames

for (let i in quadros) {
  console.log(quadros[i])
}
```

Os quadros estão relacionados às tags `<frame>` e `<iframe>`. No HTML5, a tag `<frame>` deixou de existir, permanecendo o uso de `<iframe>`.

> [!warning] Atenção
> No padrão HTML5, `<frame>` deixou de ser usado; o elemento mantido é `<iframe>`.

> [!tip] Resumindo
> `frames` permite acessar os quadros incorporados à janela.

---

## 10. Objeto `history`

> [!info] Conceito
> `history` armazena o histórico de páginas acessadas pela janela do navegador.

O objeto `history` permite trabalhar com as páginas visitadas durante a navegação. Com ele, é possível voltar para páginas anteriores usando `back()`, avançar para páginas mais recentes usando `forward()` e carregar páginas a partir de um endereço usando `go()`.

A propriedade `length` retorna a quantidade de páginas já acessadas no histórico da janela.

Exemplo conceitual:

```javascript
window.history.back()
window.history.forward()
window.history.go()
console.log(window.history.length)
```

> [!tip] Resumindo
> `history` permite navegar pelo histórico da janela atual.

---

## 11. Objeto `screen`

> [!info] Conceito
> `screen` armazena informações sobre a tela do usuário.

O objeto `screen` fornece dados relacionados à tela em que a página está sendo exibida. Ele pode informar a largura e a altura disponíveis, excluindo elementos como a barra de tarefas do sistema operacional, por meio de `availWidth` e `availHeight`.

Também fornece informações sobre resolução de cores, como `pixelDepth` e `colorDepth`, além da largura e altura totais da tela, por meio de `width` e `height`.

> [!tip] Resumindo
> `screen` informa características da tela usada pelo usuário.

---

## 12. Objeto `navigator`

> [!info] Conceito
> `navigator` fornece informações sobre o navegador utilizado pelo usuário.

O objeto `navigator` contém dados sobre o aplicativo de navegação. Entre as informações citadas no material estão o nome do navegador (`appName`), a versão (`appVersion`), a plataforma (`platform`) e o motor utilizado pelo aplicativo (`product`).

Ele também permite verificar configurações e condições, como se os cookies estão habilitados (`cookieEnabled`), a localização geográfica do usuário (`geoLocation`), o idioma usado (`language`), se o navegador está on-line (`onLine`) e o cabeçalho de identificação enviado ao servidor (`userAgent`).

> [!warning] Atenção
> O objeto `navigator` fornece informações sobre o navegador, mas os dados podem variar conforme a implementação.

> [!tip] Resumindo
> `navigator` ajuda a identificar características e configurações do navegador.

---

## 13. Objeto `location`

> [!info] Conceito
> `location` contém informações sobre o endereço da página acessada.

O objeto `location` fornece dados sobre a URL da página atual. Ele permite acessar informações como protocolo, nome do servidor, porta, caminho, endereço completo, fragmentos e parâmetros de consulta.

Entre suas propriedades estão `origin`, que retorna protocolo, nome e porta; `host`, que retorna nome e porta; `hostname`, que retorna apenas o nome; `protocol`, que retorna o protocolo; `port`, que retorna a porta; `pathname`, que retorna o caminho; `href`, que retorna o endereço completo; `hash`, que retorna valores após `#`; e `search`, que retorna parâmetros após `?`.

Exemplo de uso de `search`:

```javascript
// http://www.sagah.com.br/index.html?valor=20

const resultado = window.location.search
let valor = 0

const splitted = resultado.split("=")

if (splitted[0] === "?valor") {
  valor = Number.parseInt(splitted[1])
}

console.log(valor + 5)
```

Nesse exemplo, a URL possui o parâmetro `?valor=20`. O código separa o parâmetro e converte o valor para número, permitindo realizar uma operação com ele.

> [!warning] Atenção
> `search` lê parâmetros após `?`; `hash` lê a parte da URL após `#`.

> [!tip] Resumindo
> `location` permite ler e manipular informações do endereço da página.

---

## 14. Diferença entre `search` e `hash`

> [!info] Conceito
> `search` recupera parâmetros de consulta da URL, enquanto `hash` recupera fragmentos ancorados.

A propriedade `window.location.search` retorna a parte da URL iniciada por `?`. Ela é usada para acessar parâmetros de consulta, como em `index.html?valor=20`.

Já `window.location.hash` retorna a parte da URL iniciada por `#`. Em uma URL como `http://www.sagah.com.br/index.html#teste`, o valor retornado por `hash` será `#teste`.

Exemplo:

```javascript
const resultado = window.location.hash
console.log(resultado)
```

> [!warning] Atenção
> Se a URL usa `#teste`, o correto é usar `hash`, não `search`.

> [!tip] Resumindo
> Use `search` para `?parametro=valor` e `hash` para `#fragmento`.

---

## 15. Cookies

> [!info] Conceito
> Cookies são pequenos arquivos de texto usados para armazenar dados relacionados à navegação do usuário em uma página.

Cookies permitem guardar informações no lado do cliente para que sejam reutilizadas em acessos futuros. Eles podem melhorar a interação entre usuário, servidor e aplicação, pois evitam que determinadas informações precisem ser fornecidas repetidamente.

O material explica que cookies podem armazenar dados de navegação e até informações relacionadas a login, como nome de usuário e senha, permitindo que o usuário não precise informar esses dados toda vez que acessa a página.

Cada cookie é identificado por um nome e fica associado a um endereço de página específico. Embora seja armazenado no lado do cliente, pode ser acessado e manipulado também pelo lado do servidor por meio da troca de dados entre cliente e servidor.

> [!warning] Atenção
> Cookies armazenam dados no cliente e devem ser usados com cuidado, pois ficam associados à navegação e podem conter informações relevantes para a interação com o site.

> [!tip] Resumindo
> Cookies guardam informações simples para melhorar a continuidade da navegação e a interação com o sistema.

---

## 16. Criação de cookies em JavaScript

> [!info] Conceito
> Cookies são criados ou modificados por meio da propriedade `window.document.cookie`.

A manipulação de cookies é feita pela leitura ou escrita da propriedade `window.document.cookie`. Antes de criar cookies, é possível verificar se o navegador permite esse recurso por meio de `window.navigator.cookieEnabled`.

Exemplo:

```javascript
if (window.navigator.cookieEnabled === true) {
  window.document.cookie = "login=alberto"
  window.document.cookie = "pass=14bis"
}
```

Nesse exemplo, se os cookies estiverem habilitados, são criados dois cookies: `login` e `pass`. Caso já existam cookies com os mesmos nomes vinculados ao endereço da página, eles serão substituídos.

> [!tip] Resumindo
> Para criar ou atualizar cookies, atribui-se uma string no formato `nome=valor` a `document.cookie`.

---

## 17. Tempo de vida dos cookies

> [!info] Conceito
> Cookies podem ter prazo de validade definido por atributos como `expires` e `max-age`.

Por padrão, cookies duram apenas enquanto a mesma sessão do navegador existir. Para fazer com que persistam por mais tempo, pode-se definir um prazo de expiração.

O atributo `expires` determina uma data de validade. Depois que essa data passa, o cookie é eliminado automaticamente. O atributo `max-age` define o tempo de vida em segundos.

Exemplo com `expires`:

```javascript
if (window.navigator.cookieEnabled === true) {
  let hoje = new Date()
  let expira = new Date(hoje.getTime() + 3600000)

  window.document.cookie = "idioma=português; expires=" + expira.toUTCString()
}
```

Nesse exemplo, o cookie `idioma=português` expira após uma hora.

> [!tip] Resumindo
> `expires` usa uma data de expiração; `max-age` usa um tempo em segundos.

---

## 18. Exclusão de cookies

> [!info] Conceito
> Não existe um método direto para remover cookies, mas é possível fazê-los expirar imediatamente.

O material explica que não há um método ou função específica para apagar cookies. Para removê-los, altera-se seu prazo de validade para que já esteja esgotado.

Uma forma apresentada nos exercícios é recriar o cookie com `max-age=0`, fazendo com que ele expire imediatamente.

Exemplo:

```javascript
window.document.cookie = "nome=valor; max-age=0"
```

> [!warning] Atenção
> `delete=true` não é um atributo válido para apagar cookies. Também não se apaga cookie apenas escrevendo a palavra `delete`.

> [!tip] Resumindo
> Para excluir um cookie, defina seu tempo de vida como expirado, por exemplo com `max-age=0`.

---

## 19. Atributo `path` em cookies

> [!info] Conceito
> O atributo `path` indica em qual caminho da URL o cookie deve ser enviado.

Além de definir validade, os cookies podem receber um caminho. Esse caminho determina em quais URLs o cookie estará disponível. Assim, é possível restringir o uso do cookie a partes específicas de um site.

O material cita `path` como um dos atributos que podem ser usados junto aos cookies, permitindo controlar em quais caminhos o cookie será enviado.

> [!tip] Resumindo
> `path` ajuda a limitar onde um cookie será usado dentro do site.

---

## 20. Limitações dos cookies e uso de `encodeURI()`

> [!info] Conceito
> Cookies têm limitações quanto ao uso de espaços em branco e caracteres especiais.

O material informa que cookies são úteis para armazenar informações simples de forma rápida, mas possuem restrições. Espaços em branco e caracteres especiais não podem ser utilizados livremente, o que limita o armazenamento de textos mais complexos.

Para contornar essa limitação, valores podem ser codificados com a função `encodeURI()`. Essa função substitui caracteres especiais por seus respectivos valores hexadecimais, permitindo armazenar textos que não poderiam ser usados diretamente no cookie.

Exemplo conceitual:

```javascript
let valorCodificado = encodeURI("texto com espaços e caracteres especiais")
```

> [!tip] Resumindo
> `encodeURI()` ajuda a adaptar textos complexos para armazenamento em cookies.

---

## 21. Temporizadores em JavaScript

> [!info] Conceito
> Temporizadores permitem executar funções depois de um intervalo de tempo ou repetidamente em intervalos definidos.

Os temporizadores fazem parte dos recursos vinculados ao objeto `window`. O material apresenta dois principais: `setTimeout` e `setInterval`.

O método `setTimeout` executa uma função uma única vez após determinado tempo. O método `setInterval` executa uma função repetidamente a cada intervalo definido. Nos dois casos, o tempo é informado em milissegundos.

> [!tip] Resumindo
> `setTimeout` executa uma vez; `setInterval` executa repetidamente.

---

## 22. Método `setTimeout`

> [!info] Conceito
> `setTimeout` agenda a execução de uma função após um tempo determinado.

O método `setTimeout` recebe dois parâmetros principais. O primeiro é a função que será executada. O segundo é o tempo de espera, informado em milissegundos.

Exemplo:

```javascript
function mostrarTeste() {
  console.log("Teste")
}

window.setTimeout(mostrarTeste, 5000)
```

Nesse exemplo, a função `mostrarTeste` será executada depois de cinco segundos, pois `5000` milissegundos equivalem a cinco segundos.

> [!warning] Atenção
> O tempo dos temporizadores é informado em milissegundos.

> [!tip] Resumindo
> `setTimeout(funcao, tempo)` executa a função uma única vez depois do tempo indicado.

---

## 23. Método `setInterval`

> [!info] Conceito
> `setInterval` executa uma função repetidamente em intervalos de tempo definidos.

O método `setInterval` usa os mesmos tipos de parâmetros de `setTimeout`: uma função e um tempo em milissegundos. A diferença é que a função não será executada apenas uma vez, mas repetidamente a cada intervalo.

Exemplo:

```javascript
function mostrarTeste() {
  console.log("Teste")
}

let timer1 = setInterval(mostrarTeste, 1000)
```

Nesse exemplo, a função `mostrarTeste` será chamada a cada 1000 milissegundos, ou seja, a cada segundo.

> [!tip] Resumindo
> `setInterval` é usado para ações periódicas, como contadores e atualizações automáticas.

---

## 24. Interrupção de temporizadores

> [!info] Conceito
> Temporizadores podem ser interrompidos com `clearTimeout` e `clearInterval`.

Quando um temporizador é criado, ele pode ser armazenado em uma variável. Essa referência pode ser usada depois para cancelar sua execução. O método `clearTimeout` cancela um temporizador criado por `setTimeout`, e `clearInterval` cancela um temporizador criado por `setInterval`.

Exemplo:

```javascript
function mostrarTeste() {
  console.log("Teste")
}

let timer1 = setInterval(mostrarTeste, 1000)

let timer2 = setTimeout(function teste() {
  clearInterval(timer1)
  console.log("Fim")
}, 5100)
```

Nesse exemplo, `mostrarTeste` é executada repetidamente a cada segundo. Depois de pouco mais de cinco segundos, `clearInterval` interrompe o temporizador periódico e exibe `Fim`.

> [!tip] Resumindo
> Guarde a referência do temporizador para conseguir cancelá-lo depois.

---

## 25. Contador com `setInterval`

> [!info] Conceito
> `setInterval` pode ser usado para implementar contadores de tempo.

Nos exercícios, o temporizador periódico é usado para montar um contador de hora, minuto e segundo. A cada segundo, os segundos são incrementados. Quando chegam a 59, são zerados e os minutos aumentam. Quando os minutos chegam a 59, são zerados e as horas aumentam.

Exemplo com a lógica corrigida usando `let`:

```javascript
let hor = 0
let min = 0
let seg = 0

function segundo() {
  if (seg < 59) {
    seg++
  } else {
    seg = 0

    if (min < 59) {
      min++
    } else {
      min = 0
      hor++
    }
  }

  console.log(`${hor}:${min}:${seg}`)
}

setInterval(segundo, 1000)
```

> [!warning] Atenção
> Para alterar valores como `hor`, `min` e `seg`, deve-se usar `let`, e não `const`.

> [!tip] Resumindo
> Um contador usa `setInterval` para executar uma função a cada segundo.

---

## 26. Atualização automática de página

> [!info] Conceito
> A página pode ser atualizada automaticamente usando `location`, `setTimeout` e cookies.

O desafio do material apresenta uma situação em que uma página de monitoramento precisa atualizar valores vindos de um sistema externo. A atualização pode ser feita atribuindo a localização atual novamente ao objeto `location`.

Exemplo:

```javascript
window.location = window.location
```

Para que a atualização ocorra somente quando o usuário desejar, usa-se um cookie para guardar a configuração. Se o cookie indicar que a atualização automática está ativa, o `setTimeout` agenda a função de recarregamento.

Exemplo apresentado:

```javascript
function reload() {
  window.document.cookie = "atualizar=true; max-age=31536000000"
  window.location = window.location
}

const update = (window.document.cookie.indexOf("atualizar=true") >= 0)

if (update) {
  setTimeout(reload, 1000)
}
```

Nesse algoritmo, a configuração do usuário é preservada no cookie, e a página é atualizada automaticamente após o intervalo definido.

> [!tip] Resumindo
> Cookies guardam a preferência; `setTimeout` agenda a ação; `location` recarrega a página.

---

## 27. Armazenamento no navegador

> [!info] Conceito
> Além de cookies, o objeto `window` também possui propriedades de armazenamento como `localStorage` e `sessionStorage`.

O material cita `localStorage` e `sessionStorage` como propriedades do objeto `window`. O `localStorage` permite armazenar dados no formato chave-valor de forma persistente. O `sessionStorage` também armazena dados em formato chave-valor, mas apenas por uma sessão.

Embora o foco da unidade esteja em cookies, esses recursos também fazem parte do conjunto de possibilidades do navegador para armazenar informações no lado do cliente.

> [!tip] Resumindo
> `localStorage` persiste dados; `sessionStorage` mantém dados apenas durante a sessão.

---

## 28. Principais aprendizados dos exercícios

> [!info] Conceito
> Os exercícios reforçam a ausência de padrão formal do BOM, os objetos principais, o uso de `location`, temporizadores e cookies.

Os exercícios indicam que o BOM não possui um padrão formal único. Também reforçam que o objeto `screen` está relacionado às informações da tela, enquanto `location` manipula o endereço da página, `document` controla a página acessada e `navigator` fornece informações sobre o navegador.

Outro ponto importante é a diferença entre `location.hash` e `location.search`. Se a URL contém `#teste`, deve-se usar `window.location.hash`. Se a URL contém parâmetros após `?`, usa-se `window.location.search`.

Os exercícios também destacam que `setInterval` deve receber a função como referência e o tempo em milissegundos. Para excluir um cookie, o caminho apresentado é usar `max-age=0`.

> [!warning] Atenção
> Em `setInterval(segundo, 1000)`, passa-se a função `segundo` como referência. Usar `segundo()` executaria a função imediatamente.

> [!tip] Resumindo
> Os exercícios consolidam o uso prático de BOM, `location`, temporizadores e cookies.

---

## Síntese final

> [!summary] Síntese
> O BOM é o modelo que permite ao JavaScript acessar e manipular recursos do navegador, como janela, tela, histórico, localização, navegador, quadros, cookies e temporizadores.

O objeto `window` é o principal ponto de acesso ao BOM na maioria dos navegadores. A partir dele, é possível usar objetos como `document`, `frames`, `history`, `screen`, `navigator` e `location`. Cada um representa uma parte do ambiente de navegação.

O `document` representa a página carregada; `frames` acessa quadros; `history` controla o histórico; `screen` informa dados da tela; `navigator` fornece informações do navegador; e `location` permite ler e manipular o endereço da página.

Cookies permitem armazenar informações simples no lado do cliente, usando `window.document.cookie`. Eles podem ter validade definida por `expires` ou `max-age`, podem ser limitados por `path` e podem ser removidos ao expirar imediatamente.

Temporizadores permitem executar funções uma vez ou repetidamente. `setTimeout` agenda uma execução única; `setInterval` executa periodicamente; `clearTimeout` e `clearInterval` interrompem temporizadores.

Em resumo, BOM, cookies e temporizadores ampliam o poder do JavaScript no navegador, permitindo criar páginas mais dinâmicas, configuráveis e capazes de interagir com o ambiente de navegação.