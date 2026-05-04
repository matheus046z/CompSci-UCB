---
publish: true
---
### 1
> [!question] Exercício 1
> Indique a opção que representa a maneira correta de chamar um arquivo externo CSS em uma página HTML:
>
> **A.**  
> `<link rel="text/css" href="estilo.css">`
>
> **B.**  
> `<link css="text/css" href="estilo.css">`
>
> **C.**  
> `<link type="stylesheet/text" file="estilo.css">`
>
> **D.**  
> `<link rel="stylesheet" href="estilo.css">`
>
> **E.**  
> `<link type="stylesheet" file="estilo.css">`
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D.**
>>
>> **A.** Errada. `rel="text/css"` está incorreto, porque `rel` deve indicar o relacionamento do arquivo com o documento, como `stylesheet`.
>>
>> **B.** Errada. O atributo `css` não existe nessa tag. Para CSS externo, usa-se normalmente `rel` e `href`.
>>
>> **C.** Errada. `type="stylesheet/text"` está invertido e `file` não é o atributo correto para indicar o arquivo. O correto seria `href`.
>>
>> **D.** Certa. `<link rel="stylesheet" href="estilo.css">` é a forma correta de vincular um arquivo CSS externo em HTML.
>>
>> **E.** Errada. `type="stylesheet"` está incorreto, e `file` também não é um atributo válido para esse uso.


### 2
> [!question] Exercício 2
> Marque a opção que indica a alternativa correta em relação às propriedades de uma caixa em CSS3:
>
> **A.**  
> Box-sizing, box-shadow, border e media.
>
> **B.**  
> Top, left, position e perspective.
>
> **C.**  
> Content, padding, border e margin.
>
> **D.**  
> Transform, reform, width e height.
>
> **E.**  
> Box-starting, box-shadow, box-gradient e box-square.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C.**
>>
>> **A.** Errada. `box-sizing`, `box-shadow` e `border` são propriedades CSS válidas, mas `media` não é uma propriedade de caixa; está ligada a regras de mídia, como `@media`.
>>
>> **B.** Errada. `top`, `left` e `position` estão relacionadas a posicionamento, e `perspective` a efeitos 3D, não aos componentes básicos da caixa CSS.
>>
>> **C.** Certa. `content`, `padding`, `border` e `margin` representam o modelo de caixa do CSS, isto é, a estrutura fundamental de uma caixa.
>>
>> **D.** Errada. `transform`, `width` e `height` são propriedades válidas, mas `reform` não existe em CSS, e a alternativa não descreve o modelo de caixa.
>>
>> **E.** Errada. `box-starting`, `box-gradient` e `box-square` não são propriedades CSS válidas.
>>
>>A resposta correta é _Content_, _padding_, _border_ e _margin_, pois uma caixa pode ter as seguintes propriedades - conteúdo (_content_), espaçamento (_padding_), borda (_border_) e _margin_ (_margin_) que definem um item das dimensões da caixa:
>>
>>![[Pasted image 20260417135639.png]]
>>
>>​​​​​​​As demais propriedades válidas do _CSS_ têm as seguintes funcionalidades: Box-_sizing_ é utilizada para alterar a propriedade padrão da caixa, usada para calcular larguras (_widths_) e alturas (_heights_) dos elementos. O _box-shadow_ é utilizado para adicionar efeitos de sombra em volta de um elemento. A regra Média permitia a aplicação condicional de estilos, dependendo do tipo de dispositivo/mídia (média _types_) acessado. A propriedade position especifica o tipo de método de posicionamento usados para um elemento (_static_, _relative_, _fixed_, _absolute_ _or_ _sticky_). A propriedade perspective determina a distância entre o plano z = 0 e o usuário para dar uma perspectiva a um elemento posicionado em 3D. Top, _left_ afetam a posição de um elemento, enquanto que _width_ e _height_ a largura e altura. A propriedade “_transform_” aplica uma transformação 2D ou 3D a um elemento.
### 3
> [!question] Exercício 3
> Em relação aos seletores de classe, marque a alternativa correta:
>
> **A.**  
> Pode-se aplicar mais de um estilo de seletor de classe para um elemento HTML.
>
> **B.**  
> Cada elemento HTML pode conter apenas um estilo de seletor de classe.
>
> **C.**  
> O nome de um seletor de classe deve iniciar com a palavra reservada “sel”, seguida de um identificador.
>
> **D.**  
> Seletores de classe não podem ser nomeados porque são identificados por um Id.
>
> **E.**  
> Nomes de seletores de classe podem conter quaisquer caracteres, inclusive espaços em branco.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A.**
>>
>> **A.** Certa. Um mesmo elemento HTML pode receber várias classes ao mesmo tempo, separadas por espaço no atributo `class`.
>>
>> **B.** Errada. Um elemento não fica limitado a uma única classe; ele pode ter várias.
>>
>> **C.** Errada. Não existe regra exigindo que o nome da classe comece com “sel”.
>>
>> **D.** Errada. Classe e `id` são coisas diferentes. Seletores de classe podem, sim, ser nomeados normalmente.
>>
>> **E.** Errada. Nomes de classes não podem conter espaços em branco, porque o espaço separa uma classe da outra.
>> 
>> Seletores de classe permitem aplicar mais de um estilo para um elemento HTML. No caso de sobreposição de estilos, o navegador aplicará o estilo que for chamado primeiro. O nome de um seletor de classe deve ser definido pelo usuário, podendo conter quaisquer caracteres, excetuando-se caracteres especiais e espaços em branco.

### 4
> [!question] Exercício 4
> Indique a alternativa correta em relação ao seletor de Id:
>
> **A.**  
> O caractere @ indica que o Id é incrementado automaticamente pelo navegador web.
>
> **B.**  
> Um elemento HTML não pode chamar seletores de classe e de Id simultaneamente.
>
> **C.**  
> Utiliza-se o caractere @ para declarar um seletor de Id.
>
> **D.**  
> Não existe limite para uso de seletor de Id dentro de uma página HTML.
>
> **E.**  
> Pode ser usado apenas uma única vez dentro de uma página HTML.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> **A.** Errada. O caractere `@` não é usado para indicar `id` em CSS nem significa incremento automático pelo navegador.
>>
>> **B.** Errada. Um mesmo elemento HTML pode ter ao mesmo tempo um `id` e uma ou mais classes.
>>
>> **C.** Errada. Para declarar um seletor de `id` em CSS, utiliza-se o caractere `#`, e não `@`.
>>
>> **D.** Errada. O `id` deve ser único na página, então não pode ser reutilizado livremente em vários elementos.
>>
>> **E.** Certa. O `id` identifica de forma única um elemento dentro da página HTML, por isso deve aparecer apenas uma vez.
>>
>>Um seletor de Id utiliza o caractere # para declarar seu nome e só pode ser utilizado uma única vez dentro da página HTML, **ou seja, há limitação**. Além disso, um seletor de _Id_ pode ser chamado simultaneamente com um ou mais seletores de classe em um elemento HTML.
>>
>>**O caractere utilizado para sua identificação é o # e não o @.**

### 5
> [!question] Exercício 5
> São operadores lógicos suportados por Media Feature:
>
> **A.**  
> All, empty, and e or.
>
> **B.**  
> Only, and, not e or.
>
> **C.**  
> All, and, not e or.
>
> **D.**  
> Only, equal, not e all.
>
> **E.**  
> Less than, greater than, equals e not equals.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> **A.** Errada. `all` é um tipo de mídia, não um operador lógico, e `empty` não é operador de media query.
>>
>> **B.** Certa. Em media queries, os operadores lógicos trabalhados são `only`, `and` e `not`. O conceito de `or` também é usado, normalmente representado por vírgula entre consultas.
>>
>> **C.** Errada. `all` não é operador lógico; é um tipo de mídia que indica aplicabilidade geral.
>>
>> **D.** Errada. `equal` não é operador lógico de media query, e `all` também não é operador lógico.
>>
>> **E.** Errada. `less than`, `greater than`, `equals` e `not equals` não são os operadores lógicos tradicionais de media queries em CSS.
>>
>> Os operadores lógicos de _Média_ _Feature_ são _only, and, not e or_. Esses operadores lógicos permitem montar expressões complexas para pesquisas em _Média Query_. _Only_ - aplica os estilos em navegadores que suportam média query. _Not_ - indica uma situação de negação a expressão _média query_ aplicada. _Or_ - une diversas expressões e aplica o estilo se apenas uma for verdadeira. _And_ - une diversas expressões e aplica o estilo se todas elas forem verdadeiras. Os outros itens (_all, empty, equal, Less than, greater than, equals e not equals)_ não são operadores lógicos desse recurso.