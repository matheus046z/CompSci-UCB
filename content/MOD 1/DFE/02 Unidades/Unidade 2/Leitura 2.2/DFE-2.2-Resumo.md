---
publish: true
---
# Criação de Páginas com CSS3

## 1. CSS3 e a separação entre estrutura e apresentação

> [!info] Conceito
> CSS3 é usado para formatar elementos HTML, separando a estrutura do conteúdo da aparência visual da página.

As páginas HTML são criadas para apresentar dados na Web. O HTML organiza a estrutura do documento, enquanto o CSS define a aparência dos elementos. Essa separação torna o código mais organizado, evita repetição de estilos e aumenta a produtividade, pois um mesmo arquivo CSS pode ser reaproveitado em várias páginas.

Com o avanço do HTML5, deixou de ser boa prática misturar comandos de aparência diretamente no HTML, como antigas instruções de fonte e cor. A responsabilidade do HTML passou a ser estrutural, com elementos como `<header>`, `<nav>`, `<section>`, `<article>` e outros. Já o CSS ficou responsável pela estilização, como cores, fontes, tamanhos, espaçamentos, bordas e posicionamentos.

> [!tip] Resumindo
> HTML organiza o conteúdo; CSS3 define como esse conteúdo será exibido visualmente.

---

## 2. Uso de arquivo CSS externo

> [!info] Conceito
> Um arquivo CSS externo concentra as regras de estilo em um único documento, que é chamado pelo HTML.

A forma mais adequada de usar CSS é por meio de um arquivo externo. Nesse modelo, o HTML chama o arquivo de estilos na seção `<head>` por meio da tag `<link>`. Assim, as regras de formatação ficam separadas do conteúdo da página.

Exemplo de chamada correta:

```html
<link rel="stylesheet" href="estilo.css">
```

Essa instrução indica que o documento HTML deve usar o arquivo `estilo.css` como folha de estilos. Quando um arquivo CSS é incorporado a uma página, todos os elementos que correspondem aos seletores definidos recebem automaticamente a formatação determinada.

> [!warning] Atenção
> Se mais de um arquivo CSS for incorporado, é preciso cuidado para não repetir regras conflitantes, pois o navegador pode aplicar a definição do arquivo chamado por último.

> [!tip] Resumindo
> O CSS externo permite alterar o visual de várias páginas modificando apenas um arquivo.

---

## 3. Formatação de textos com CSS3

> [!info] Conceito
> CSS3 permite formatar textos por meio de propriedades como fonte, tamanho, cor, alinhamento e indentação.

Qualquer elemento que contenha texto pode receber formatação com CSS. Isso inclui o corpo da página, parágrafos, títulos, linhas de tabelas e outros elementos. Para isso, define-se um seletor e, dentro dele, as propriedades desejadas.

As principais propriedades de texto apresentadas no material são:

- `font-family`: define a fonte do texto. Como o navegador depende das fontes instaladas no computador do usuário, é recomendado indicar mais de uma opção.
- `font-size`: define o tamanho da fonte, podendo usar medidas como `px`, `em`, `%` ou constantes como `small`, `medium` e `large`.
- `text-align`: define o alinhamento do texto, como `left`, `right`, `center` ou `justify`.
- `color`: define a cor do texto, que pode ser indicada por nome em inglês, código RGB ou valor hexadecimal.
- `text-indent`: define a indentação da primeira linha do parágrafo.

Exemplo:

```css
p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  text-align: justify;
  color: black;
  text-indent: 50px;
}
```

> [!tip] Resumindo
> A formatação textual melhora a leitura, a organização visual e a padronização da página.

---

## 4. Cores em CSS3

> [!info] Conceito
> As cores em CSS podem ser indicadas por nomes, valores RGB ou códigos hexadecimais.

A propriedade `color` define a cor do texto. Já propriedades como `background` ou `background-color` definem a cor de fundo de um elemento. O material mostra que a cor pode ser declarada por nomes em inglês, como `black`, por valores RGB, como `rgb(0, 0, 0)`, ou por códigos hexadecimais, como `#000000`.

Exemplo:

```css
h1 {
  color: white;
}

.caixa {
  background: rgb(102, 58, 87);
}
```

> [!warning] Atenção
> Os nomes das cores devem seguir valores reconhecidos pelo CSS. Palavras em português, como “preto” ou “laranja”, não são valores válidos.

> [!tip] Resumindo
> CSS aceita diferentes formas de representar cores, mas é necessário usar sintaxe válida.

---

## 5. Modelo de caixa em CSS3

> [!info] Conceito
> Em HTML, cada elemento pode ser entendido como uma caixa retangular que contém conteúdo, espaçamento, borda e margem.

O modelo de caixa é um dos conceitos fundamentais do CSS. Cada elemento da página ocupa uma área retangular composta por quatro partes principais: o conteúdo, o espaçamento interno, a borda e a margem externa.

O `content` corresponde ao conteúdo exibido dentro da caixa. O `padding` é o espaço entre o conteúdo e a borda. A `border` representa a borda da caixa. A `margin` define o espaço externo entre a caixa e outros elementos da página.

Exemplo:

```css
.caixa {
  width: 550px;
  height: 70px;
  padding: 1px;
  border: 0;
  margin: 0;
}
```

> [!warning] Atenção
> A largura total de uma caixa pode ser maior que o valor de `width`, pois `padding` e `border` também podem influenciar suas dimensões.

> [!tip] Resumindo
> O modelo de caixa é formado por conteúdo, preenchimento interno, borda e margem externa.

---

## 6. Propriedade `box-sizing`

> [!info] Conceito
> `box-sizing` altera a forma como o navegador calcula a largura e a altura de uma caixa.

Sem ajustes, o navegador pode somar `width`, `padding` e `border` para calcular o tamanho final de uma caixa. Isso pode exigir cálculos manuais. O CSS3 apresenta a propriedade `box-sizing`, que permite controlar esse comportamento.

Quando se usa `box-sizing: border-box`, a largura e a altura definidas passam a considerar também o preenchimento e a borda. Assim, a caixa respeita melhor o tamanho indicado, reduzindo o conteúdo interno quando necessário.

Exemplo:

```css
.caixa {
  width: 550px;
  height: 70px;
  padding: 1px;
  border: 0;
  box-sizing: border-box;
}
```

> [!tip] Resumindo
> `box-sizing` facilita o controle das dimensões dos elementos e evita cálculos manuais.

---

## 7. Estilização avançada de caixas

> [!info] Conceito
> CSS3 permite aplicar efeitos visuais em caixas, como sombra, gradiente, rotação e preenchimento.

Além das propriedades básicas do modelo de caixa, o CSS3 possui recursos que permitem criar apresentações mais elaboradas. Entre eles estão `box-shadow`, `background`, `transform`, `width`, `height`, `top`, `left`, `border`, `position` e `padding`.

A propriedade `box-shadow` cria sombra ao redor de um elemento. A propriedade `background` define o preenchimento, podendo incluir cores e efeitos. A propriedade `transform` permite transformações visuais, como rotação. As propriedades `top` e `left`, quando combinadas com posicionamento, ajudam a definir a localização da caixa na página.

> [!tip] Resumindo
> As caixas em CSS3 não servem apenas para organizar conteúdo; também permitem criar efeitos visuais mais sofisticados.

---

## 8. Classes em CSS3

> [!info] Conceito
> Seletores de classe permitem aplicar estilos diferentes a elementos HTML do mesmo tipo.

As classes são usadas quando se deseja aplicar estilos específicos a um ou mais elementos. Elas são declaradas no CSS com ponto antes do nome, como `.titulo`, `.paragrafo` ou `.caixa`. No HTML, são chamadas pelo atributo `class`.

Exemplo de CSS:

```css
.paragrafo {
  font-family: Arial;
  font-size: 14px;
  text-align: justify;
  color: black;
}
```

Exemplo de HTML:

```html
<p class="paragrafo">Texto do parágrafo.</p>
```

As classes podem ser específicas para determinado tipo de elemento ou genéricas. Uma classe específica pode ser declarada para parágrafos, por exemplo. Já uma classe genérica pode ser usada em diferentes elementos, desde que suas propriedades sejam compatíveis.

> [!warning] Atenção
> O nome de uma classe deve evitar espaços em branco e caracteres especiais. Também não é recomendável nomear classes com base em cores, pois a cor pode mudar no futuro e gerar confusão.

> [!tip] Resumindo
> Classes são úteis para reutilizar estilos e criar variações visuais em elementos semelhantes.

---

## 9. Uso de várias classes em um elemento

> [!info] Conceito
> Um mesmo elemento HTML pode receber mais de uma classe ao mesmo tempo.

O material mostra que, embora seja comum aplicar apenas uma classe por elemento, é possível usar mais de uma classe no mesmo elemento HTML. Isso permite combinar estilos e reaproveitar regras CSS.

Exemplo:

```html
<h1 class="titulo titulo_classico">Seletores com CSS3</h1>
```

Nesse caso, o elemento recebe as regras associadas às duas classes. Se houver sobreposição de propriedades, o navegador decidirá qual regra aplicar conforme a ordem e os critérios de interpretação do CSS.

> [!warning] Atenção
> Espaços dentro do atributo `class` separam classes diferentes. Por isso, o nome de uma classe não deve conter espaço.

> [!tip] Resumindo
> Várias classes podem ser combinadas para compor estilos mais flexíveis.

---

## 10. Seletores de ID em CSS3

> [!info] Conceito
> O seletor de ID identifica um elemento único dentro da página HTML.

O seletor de ID é declarado no CSS com o símbolo `#`. No HTML, ele é chamado pelo atributo `id`. Diferentemente da classe, que pode ser repetida em vários elementos, o ID deve ser usado apenas uma vez em cada documento.

Exemplo de CSS:

```css
#titulo_principal {
  font-family: Arial;
  font-size: 26px;
  text-align: center;
}
```

Exemplo de HTML:

```html
<h1 id="titulo_principal">Seletores de ID com CSS3</h1>
```

Além de aplicar formatação, o ID também é importante porque identifica um elemento de forma única. Isso permite que linguagens como JavaScript manipulem elementos específicos da página.

> [!warning] Atenção
> O seletor de ID usa `#`, e não `@`. Além disso, deve ser usado apenas uma vez dentro da mesma página.

> [!tip] Resumindo
> Classe é reutilizável; ID é único e também pode auxiliar na manipulação por JavaScript.

---

## 11. Uso simultâneo de ID e classe

> [!info] Conceito
> Um elemento HTML pode chamar um ID e uma ou mais classes ao mesmo tempo.

Embora o ID seja único, ele pode ser combinado com classes para complementar ou padronizar o layout. Isso permite que um elemento tenha uma identificação exclusiva e, ao mesmo tempo, receba estilos reutilizáveis.

Exemplo:

```html
<h1 id="titulo_principal" class="titulo_classico">Seletores com CSS3</h1>
```

Nesse exemplo, o elemento possui um identificador único e também utiliza uma classe para receber uma formatação compartilhada.

> [!tip] Resumindo
> ID e classe não são recursos excludentes; eles podem ser usados juntos no mesmo elemento.

---

## 12. Media Types

> [!info] Conceito
> Media types permitem aplicar estilos conforme o tipo de dispositivo ou meio de acesso.

O HTML foi criado para ser portável, ou seja, para permitir a apresentação do conteúdo em diferentes dispositivos. Entretanto, uma página visualizada em um computador pode não funcionar bem em um smartphone ou em uma impressão em papel.

Os media types ajudam a aplicar estilos de acordo com o tipo de mídia, como `screen` para telas, `print` para impressão e outros tipos de dispositivo. Assim, é possível ter uma folha de estilos para tela e outra para impressão, por exemplo.

Exemplo:

```html
<link rel="stylesheet" href="estilo_screen.css" media="screen">
<link rel="stylesheet" href="estilo_print.css" media="print">
```

> [!tip] Resumindo
> Media types permitem adaptar a apresentação da página ao meio em que ela será exibida.

---

## 13. Media Query

> [!info] Conceito
> Media query é um recurso do CSS3 que aplica estilos conforme características do dispositivo, como largura da tela, orientação e resolução.

Com o avanço dos dispositivos móveis, apenas identificar o tipo de dispositivo deixou de ser suficiente. Smartphones, tablets e computadores podem ter telas coloridas e de alta resolução. Por isso, o CSS3 utiliza media queries para avaliar características específicas do dispositivo.

Media queries podem ser aplicadas diretamente na chamada do arquivo CSS ou dentro do próprio arquivo de estilos.

Exemplo na chamada do CSS:

```html
<link rel="stylesheet" href="estilo.css" media="(max-width: 800px)">
```

Exemplo dentro do arquivo CSS:

```css
@media (max-width: 800px) {
  body {
    background-color: blue;
  }
}
```

> [!tip] Resumindo
> Media query permite criar páginas responsivas, adaptadas a diferentes tamanhos e configurações de tela.

---

## 14. Operadores lógicos em Media Query

> [!info] Conceito
> Operadores lógicos permitem montar expressões mais complexas em media queries.

O material apresenta os operadores `only`, `not`, `or` e `and`. Eles servem para combinar condições e definir quando determinado estilo deve ser aplicado.

O operador `only` aplica estilos apenas em navegadores que suportam media query. O operador `not` nega uma condição. O operador `or` aplica o estilo se pelo menos uma condição for verdadeira, podendo ser representado por vírgula. O operador `and` aplica o estilo somente se todas as condições forem verdadeiras.

Exemplo:

```css
@media (min-width: 800px) and (orientation: landscape) {
  body {
    background-color: blue;
  }
}
```

> [!warning] Atenção
> `all` é um tipo de mídia, não um operador lógico de media query.

> [!tip] Resumindo
> Operadores lógicos tornam as media queries mais precisas e flexíveis.

---

## 15. Características usadas em Media Feature

> [!info] Conceito
> Media features são características do dispositivo avaliadas pelas media queries.

As media queries podem avaliar diversas características do dispositivo ou da tela. Entre as apresentadas no material estão `aspect-ratio`, `color`, `color-index`, `device-aspect-ratio`, `device-height`, `device-width`, `grid`, `height`, `monochrome`, `orientation`, `resolution`, `scan` e `width`.

As propriedades mais comuns para comportamento responsivo são `min-width`, `min-height`, `max-width`, `max-height`, `width` e `height`. Com elas, é possível adaptar a apresentação conforme a largura e a altura disponíveis na tela.

Exemplo:

```css
@media screen and (max-width: 640px) {
  body {
    background-color: blue;
  }
}

@media screen and (max-width: 480px) {
  body {
    background-color: red;
  }
}
```

Nesse exemplo, telas com até 640 pixels recebem fundo azul, enquanto telas com até 480 pixels recebem fundo vermelho. Acima de 640 pixels, a página mantém o comportamento padrão.

> [!tip] Resumindo
> Media features permitem adaptar a página com base nas características reais do dispositivo.

---

## 16. Desafio: formatação de página institucional

> [!info] Conceito
> O desafio propõe criar uma página HTML e um arquivo CSS usando seletores de classe para formatar títulos, parágrafos e uma caixa de destaque.

O desafio apresenta uma página sobre Educação a Distância e define especificações de layout. O título principal deve usar fonte Arial, tamanho 26, alinhamento centralizado, cor branca e sem indentação. Os títulos secundários devem usar Arial, tamanho 18, alinhamento à esquerda, cor laranja escuro e sem indentação. Os parágrafos devem usar Arial, tamanho 14, alinhamento justificado, cor preta e indentação de 50px.

A caixa superior deve ter largura de 550px, altura de 70px, posição relativa, topo e esquerda em 0px, borda 0px, preenchimento de 1px e fundo em RGB `(102, 58, 87)`. O objetivo é separar a estrutura do conteúdo no HTML e a aparência no CSS.

Exemplo de classe para o título:

```css
.titulo_principal {
  font-family: Arial;
  font-size: 26px;
  text-align: center;
  color: white;
  text-indent: 0px;
}
```

> [!tip] Resumindo
> O desafio reforça o uso de classes CSS para aplicar formatação padronizada aos elementos HTML.

---

## 17. CSS aplicado a tabelas

> [!info] Conceito
> CSS pode melhorar a apresentação de tabelas, tornando os dados mais organizados e legíveis.

Na atividade prática, o CSS é usado para formatar uma tabela de preços. O arquivo `tabela.css` define borda, fonte, cabeçalho, alinhamentos e efeito zebrado nas linhas. A tabela recebe uma classe principal, o cabeçalho recebe outra classe e as colunas recebem classes específicas conforme o tipo de conteúdo.

Exemplo:

```css
.tabela {
  border: 1px solid black;
  font: 12px verdana;
}

.cabecalho {
  background: gray;
  color: white;
}

.coluna_valor {
  padding: 2px;
  text-align: right;
}

.coluna_geral {
  padding: 2px;
  text-align: left;
}

.zebra tr:nth-child(odd) {
  background: lightgray;
}
```

O efeito zebra é criado com `tr:nth-child(odd)`, que aplica uma cor de fundo às linhas ímpares da tabela. Isso facilita a leitura, especialmente quando há muitas linhas.

> [!tip] Resumindo
> CSS em tabelas melhora a leitura dos dados por meio de bordas, alinhamentos, cabeçalhos destacados e linhas alternadas.

---

## 18. Vinculação do CSS em tabelas HTML

> [!info] Conceito
> A tabela HTML usa classes para receber as regras definidas no arquivo CSS externo.

No arquivo HTML da tabela, a folha de estilos é chamada com:

```html
<link rel="stylesheet" href="tabela.css">
```

Depois disso, as classes são aplicadas aos elementos da tabela. A tag `<table>` recebe a classe principal, o `<thead>` recebe a classe do cabeçalho, e as células recebem classes para alinhar textos ou valores.

Exemplo:

```html
<table class="tabela">
  <thead class="cabecalho">
    <tr>
      <th class="titulo">Código</th>
      <th class="titulo">Descrição</th>
      <th class="titulo">Preço</th>
    </tr>
  </thead>
  <tbody class="zebra">
    <tr>
      <td class="coluna_geral">123</td>
      <td class="coluna_geral">Calça jeans estampadas</td>
      <td class="coluna_valor">230,00</td>
    </tr>
  </tbody>
</table>
```

> [!tip] Resumindo
> As classes permitem aplicar estilos específicos a partes diferentes da tabela.

---

## 19. Principais aprendizados dos exercícios

> [!info] Conceito
> Os exercícios reforçam a sintaxe correta do CSS externo, o modelo de caixa, o uso de classes, IDs e media queries.

Os exercícios destacam que a forma correta de chamar um arquivo CSS externo é `<link rel="stylesheet" href="estilo.css">`. Também reforçam que o modelo de caixa é formado por `content`, `padding`, `border` e `margin`.

Outro ponto importante é que um elemento HTML pode receber mais de uma classe, desde que elas estejam separadas por espaço. Já o ID deve ser único dentro da página e é declarado no CSS com `#`.

Os exercícios também destacam que os operadores lógicos de media query são `only`, `and`, `not` e `or`, sendo usados para criar condições mais específicas de aplicação dos estilos.

> [!warning] Atenção
> Classe e ID não são a mesma coisa. Classe pode ser reutilizada; ID deve identificar apenas um elemento da página.

> [!tip] Resumindo
> A prática com CSS3 exige atenção à sintaxe, ao uso correto de seletores e à adaptação visual para diferentes dispositivos.

---

## Síntese final

> [!summary] Síntese
> CSS3 é uma ferramenta essencial para organizar e estilizar páginas HTML, separando o conteúdo estrutural da apresentação visual.

O material mostra que CSS3 permite formatar textos, caixas, tabelas e layouts de forma padronizada. Com o uso de arquivos externos, a manutenção se torna mais simples, pois uma mesma folha de estilos pode ser reutilizada por várias páginas.

Os seletores de classe permitem aplicar estilos reutilizáveis e flexíveis, enquanto os seletores de ID identificam elementos únicos. O modelo de caixa explica como cada elemento ocupa espaço na página, considerando conteúdo, preenchimento, borda e margem.

As media queries ampliam o poder do CSS3 ao permitir que uma página se adapte a diferentes dispositivos e tamanhos de tela. Assim, o CSS3 não serve apenas para deixar páginas mais bonitas, mas também para torná-las mais funcionais, organizadas, produtivas e adequadas à experiência do usuário.