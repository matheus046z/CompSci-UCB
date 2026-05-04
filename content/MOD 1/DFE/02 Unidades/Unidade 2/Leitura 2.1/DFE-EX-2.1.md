---
publish: true
---
### 1
> [!question] Exercício 1
> Um programador deseja construir um portfólio de fotografias na Internet. Na página principal de seu site, ele desenvolveu um grid com três imagens em cada linha, armazenada em um `<div>` de propriedade `position` igual a `relative`. As imagens foram inseridas com a propriedade `float: left`, que força imagens a se posicionar à esquerda. Ao todo, 9 imagens foram inseridas na página inicial.
>
> Quais propriedades CSS poderiam ser aplicadas às imagens para inserir um espaçamento de 10px entre as imagens?
>
> **A.**  
> `margin-left: 10px; margin-right: 10px;`
>
> **B.**  
> `margin-left: 10px; margin-top: 10px;`
>
> **C.**  
> `margin-top: 10px; margin-side: 10px;`
>
> **D.**  
> `margin: 10px 10px 10px 10px;`
>
> **E.**  
> `margin-top: 10px; margin-bottom: 10px;`
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> **A.** Errada. Define margem à esquerda e à direita, o que gera espaçamento horizontal maior que o necessário entre imagens lado a lado.
>>
>> **B.** Certa. `margin-left: 10px;` cria o espaçamento lateral, e `margin-top: 10px;` cria o espaçamento superior entre as linhas. Segundo o gabarito proposto, essas duas propriedades já atendem ao espaçamento de 10px entre as imagens.
>>
>> **C.** Errada. `margin-side` não é uma propriedade CSS válida.
>>
>> **D.** Errada. Aplica 10px em todos os lados, o que insere margens maiores do que o necessário segundo o critério da questão.
>>
>> **E.** Errada. Cria apenas espaçamento vertical, sem ajustar o espaçamento lateral entre as imagens.
>> 
>> A propriedade _margin-left_ insere uma margem de 10px da margem esquerda, e a propriedade _margin-top_ insere uma margem em relação ao topo. Apenas essas duas propriedades seriam necessárias para ajustar a margem tanto nas laterais quanto no topo. Todas as outras propriedades inserem margens maiores do que 10px.


### 2
> [!question] Exercício 2
> O vínculo de arquivos externos CSS permite que grandes websites possam ter o leiaute facilmente editado, sem a necessidade de editar página por página.
>
> Qual dos itens a seguir representa uma tag utilizada para vincular arquivos CSS a páginas HTML?
>
> **A.**  
> `<body>`
>
> **B.**  
> `<link>`
>
> **C.**  
> `<style>`
>
> **D.**  
> `style="propriedades: valores"`
>
> **E.**  
> `<css>`
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> **A.** Errada. A tag `<body>` define o corpo da página HTML, mas não serve para vincular arquivos CSS externos.
>>
>> **B.** Certa. A tag `<link>` é usada para relacionar um arquivo externo ao documento HTML, como um arquivo CSS, normalmente dentro da seção `<head>`.
>>
>> **C.** Errada. A tag `<style>` serve para escrever CSS interno na própria página HTML, e não para vincular um arquivo externo.
>>
>> **D.** Errada. `style="propriedades: valores"` é um estilo inline, aplicado diretamente em um elemento HTML, e não um vínculo com arquivo CSS externo.
>>
>> **E.** Errada. A tag `<css>` não existe em HTML.
>>
>> As _tags < style >_ e o método _inline_ com o atributo _style_ permitem a inserção de código HTML. Entretanto, apenas a _tag link_ pode ser utilizada para vincular páginas HTML a arquivos CSS. A _tag < body >_ é usada para inserir o conteúdo da página. A _tag < css >_ não é utilizada para a inserção de _links_.
### 3
> [!question] Exercício 3
> Apresentado o seguinte código CSS:
>
> ```css
> body {
>   background-color: black;
>   color: red;
> }
>
> #div1 {
>   background-color: white;
>   color: blue;
> }
>
> .classe {
>   background-color: green;
>   color: yellow;
> }
> ```
>
> Qual seria a cor do texto em uma `div` com `id = 1` e `class = classe` presente dentro do `body` de uma página?
>
> **A.**  
> Vermelho.
>
> **B.**  
> Amarelo.
>
> **C.**  
> Verde.
>
> **D.**  
> Rosa.
>
> **E.**  
> Preto.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> **A.** Errada. O `body` define `color: red`, mas a `div` possui a classe `.classe`, que aplica uma cor mais específica ao texto.
>>
>> **B.** Certa. Como a `div` tem `class="classe"`, aplica-se `color: yellow`. Além disso, o seletor `#div1` não seria aplicado se o `id` for realmente `1`, e não `div1`.
>>
>> **C.** Errada. Verde é a cor de fundo definida em `.classe`, não a cor do texto.
>>
>> **D.** Errada. Rosa não aparece em nenhuma regra CSS do código.
>>
>> **E.** Errada. Preto é a cor de fundo do `body`, não a cor do texto da `div`.
>>
>> **Atenção:** se o enunciado quisesse dizer `id="div1"` em vez de `id="1"`, a cor correta do texto seria **azul**, pois `#div1` teria maior especificidade que `.classe`.
>>
>> As cores seriam aplicadas em algum momento, mas o conceito por trás da folha de estilo em cascatas prevê a sobreposição de elementos declarados por último. Assim, a última classe declarada é a classe denominada “classe”, logo, a cor do texto seria amarela.
### 4
> [!question] Exercício 4
> Você deseja construir um site com um menu na cor laranja. Que propriedade poderia ser utilizada para colorir o menu dessa cor? Além disso, qual seria a cor mais apropriada para os textos?
>
> Marque a alternativa que contém as propriedades CSS para preencher os requisitos apresentados.
>
> **A.**  
> `background-color: black; color: orange;`
>
> **B.**  
> `background-color: orange; color: white;`
>
> **C.**  
> `background-color: orange; color: orange;`
>
> **D.**  
> `background-color: preto; color: laranja;`
>
> **E.**  
> `background-color: orange; color: yellow;`
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> **A.** Errada. O fundo ficaria preto, e não laranja, portanto não atende ao que o enunciado pede.
>>
>> **B.** Certa. `background-color: orange;` deixa o menu laranja, e `color: white;` fornece bom contraste para a leitura do texto.
>>
>> **C.** Errada. Fundo e texto na mesma cor prejudicam ou até impedem a leitura.
>>
>> **D.** Errada. Em CSS, os nomes das cores devem ser escritos com palavras válidas da linguagem, como `black`, `orange` ou códigos hexadecimais. `preto` e `laranja` não são valores CSS válidos.
>>
>> **E.** Errada. Embora o fundo fique laranja, o texto amarelo tende a ter contraste fraco, prejudicando a legibilidade.
>>
>>Para que haja um contraste de cores é necessário que a cor de fundo seja laranja e o texto seja branco. Texto na cor amarela com fundo laranja dificultaria a leitura. A questão exige claramente que o _background-color_ seja laranja (_orange_), entretanto, o texto na cor laranja impediria a leitura.
### 5
> [!question] Exercício 5
> Você deseja construir um website, entretanto, ele se comporta de maneira diferente em navegadores distintos. No Chrome, uma margem de 10px é inserida na borda esquerda e superior. No Edge, essa margem não aparece.
>
> Qual seletor pode ser utilizado para remover configurações básicas aplicadas por navegadores?
>
> **A.**  
> `*`
>
> **B.**  
> `#`
>
> **C.**  
> `.`
>
> **D.**  
> `all`
>
> **E.**  
> `color`
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A.**
>>
>> **A.** Certa. O seletor universal `*` pode ser usado para aplicar um reset básico em todos os elementos da página, por exemplo: `* { margin: 0; padding: 0; }`. Isso ajuda a remover estilos padrão dos navegadores.
>>
>> **B.** Errada. `#` é usado para selecionar elementos por `id`, não para atingir todos os elementos da página.
>>
>> **C.** Errada. `.` é usado para selecionar elementos por `class`, também não serve para reset global.
>>
>> **D.** Errada. `all` não é um seletor CSS. Existe a propriedade `all`, mas ela não é usada como seletor para esse caso.
>>
>> **E.** Errada. `color` é uma propriedade CSS para definir cor do texto, não um seletor.
>>
>> O seletor universal (*) permite a remoção de propriedades padrões de navegadores. O símbolo de (#) é utilizado para IDs; já o (.), para classes. _Color_ é uma propriedade, não um seletor. E _all_ é uma palavra reservada muito utilizada em diversas linguagens de programação, mas não é um seletor.