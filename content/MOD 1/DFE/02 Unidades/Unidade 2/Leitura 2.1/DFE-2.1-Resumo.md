---
publish: true
---
# Folhas de Estilo em Cascata (CSS)

> [!info] Conceito
> CSS significa *Cascading Style Sheets*, ou “folhas de estilo em cascata”, e é usado para definir a aparência visual de páginas HTML.

CSS é uma linguagem de estilos utilizada para formatar documentos Web. Enquanto o HTML organiza o conteúdo da página, como textos, imagens, links, tabelas e divisões, o CSS define como esse conteúdo será apresentado visualmente. Com CSS, é possível controlar cores, fontes, tamanhos, espaçamentos, margens, bordas, fundos e posicionamento dos elementos.

> [!tip] Resumindo
> HTML estrutura o conteúdo. CSS define a aparência desse conteúdo.

---

## 1. Finalidade e importância do CSS

> [!info] Conceito
> A principal função do CSS é separar o conteúdo da aparência de uma página Web.

Nos primeiros sites, era comum colocar estilos diretamente no HTML. Isso tornava o código repetitivo e difícil de manter, principalmente em sites com muitas páginas. O CSS surgiu para resolver esse problema, permitindo que os estilos fossem armazenados em arquivos próprios, separados dos arquivos HTML.

Essa separação facilita a manutenção do site. Por exemplo, em um site de notícias com várias seções, se todos os títulos estiverem formatados diretamente em cada página HTML, qualquer alteração de cor exigirá editar todos os arquivos manualmente. Com um arquivo CSS externo, basta alterar uma única regra para que todas as páginas vinculadas sejam atualizadas.

> [!tip] Resumindo
> Usar CSS externo evita repetição de código e facilita alterações globais no visual do site.

---

## 2. Funcionamento do CSS no navegador

> [!info] Conceito
> O navegador lê o HTML, carrega os arquivos CSS vinculados, interpreta as regras de estilo e exibe a página formatada.

O funcionamento de uma página com CSS envolve algumas etapas. Primeiro, o navegador carrega o documento HTML, que contém a estrutura da página. Depois, ele transforma esse documento em uma representação interna chamada DOM. Em seguida, carrega recursos vinculados, como imagens, vídeos e folhas de estilo CSS.

Após carregar o CSS, o navegador analisa os seletores e as declarações de estilo. Com isso, ele combina a estrutura do HTML com as regras CSS, construindo a página final que será exibida na tela.

> [!info] Conceito
> DOM significa *Document Object Model*, ou modelo de objeto de documento.

O DOM pode ser entendido como uma árvore de elementos. A tag `<html>` é o elemento principal; dentro dela ficam `<head>` e `<body>`; dentro de `<body>` podem existir elementos como `<div>`, `<p>`, `<img>` e outros. O CSS atua sobre esses elementos para definir sua aparência.

> [!tip] Resumindo
> O navegador une HTML, CSS e outros recursos para montar visualmente a página.

---

## 3. Regra de estilização CSS

> [!info] Conceito
> Uma regra CSS é formada por um seletor e uma ou mais declarações.

A regra CSS indica quais elementos serão estilizados e quais propriedades serão aplicadas a eles. O seletor aponta o elemento HTML que receberá o estilo. A declaração informa a propriedade e o valor que serão aplicados.

Exemplo:

```css
p {
  color: blue;
}
````

Nesse exemplo, `p` é o seletor. Ele indica que a regra será aplicada a todos os parágrafos da página. A propriedade `color` define a cor do texto, e o valor `blue` indica que o texto será azul.

> [!tip] Resumindo  
> Seletor indica “quem” será estilizado; propriedade e valor indicam “como” será estilizado.

---

## 4. Seletores CSS

> [!info] Conceito  
> Seletores são usados para indicar quais elementos HTML receberão determinada regra CSS.

O CSS permite selecionar elementos de diferentes formas. É possível aplicar estilos diretamente a uma tag, a uma classe, a um identificador ou a todos os elementos da página.

O seletor de tag aplica o estilo a todos os elementos daquele tipo. Por exemplo, `p` estiliza todos os parágrafos. O seletor de classe usa ponto (`.`) antes do nome e pode ser reutilizado várias vezes em uma mesma página. O seletor de identificador usa cerquilha (`#`) antes do nome e deve ser usado para um elemento único. Já o seletor universal `*` aplica regras a todos os elementos.

Exemplos:

```css
p {
  color: green;
}

.azul {
  color: cyan;
}

#vermelho {
  color: red;
}

* {
  margin: 0;
  padding: 0;
}
```

> [!warning] Atenção  
> `id` deve ser único na página. `class` pode ser repetida em vários elementos.

> [!tip] Resumindo  
> Use classes para estilos reutilizáveis e IDs para elementos únicos.

---

## 5. Diferença entre `id` e `class`

> [!info] Conceito  
> `id` identifica um elemento único; `class` identifica um grupo de elementos que podem compartilhar o mesmo estilo.

O atributo `id` deve ser usado quando um elemento precisa ter uma identificação exclusiva dentro da página. No CSS, ele é chamado com o símbolo `#`. Já o atributo `class` pode ser usado em vários elementos, permitindo aplicar o mesmo estilo a diferentes partes da página. No CSS, classes são chamadas com o símbolo `.`.

Exemplo de HTML:

```html
<p class="azul">Estilo múltiplo</p>
<p id="vermelho">Estilo único</p>
<p class="azul">Estilo múltiplo</p>
```

Exemplo de CSS:

```css
.azul {
  color: cyan;
}

#vermelho {
  color: red;
}
```

Nesse caso, todos os elementos com `class="azul"` receberão a cor ciano, enquanto o elemento com `id="vermelho"` receberá a cor vermelha.

> [!tip] Resumindo  
> Classe é para reutilização. ID é para identificação única.

---

## 6. Formas de declarar CSS

> [!info] Conceito  
> O CSS pode ser declarado de forma inline, incorporada ou importada.

A declaração inline é feita diretamente na tag HTML, usando o atributo `style`. Embora funcione, essa prática dificulta a manutenção, pois mistura conteúdo e aparência.

Exemplo:

```html
<p style="color: blue;">Meu texto</p>
```

A declaração incorporada é feita dentro da tag `<style>`, geralmente no cabeçalho da página HTML. Ela organiza melhor que o inline, mas ainda mantém o CSS dentro do HTML.

Exemplo:

```html
<style>
  p {
    color: blue;
  }
</style>
```

A declaração importada, ou externa, é a mais recomendada. Nesse caso, as regras ficam em um arquivo `.css`, vinculado ao HTML por meio da tag `<link>`.

Exemplo:

```html
<link rel="stylesheet" href="estilo.css">
```

> [!warning] Atenção  
> Estilos inline e incorporados devem ser evitados quando o objetivo é manter um site organizado e fácil de atualizar.

> [!tip] Resumindo  
> A forma mais recomendada é usar um arquivo CSS externo vinculado ao HTML com `<link>`.

---

## 7. Efeito cascata e prioridade dos estilos

> [!info] Conceito  
> O efeito cascata define qual regra CSS será aplicada quando houver mais de uma regra para o mesmo elemento.

O nome “folha de estilo em cascata” está relacionado à forma como o navegador decide quais estilos aplicar. Quando existem regras conflitantes, algumas têm prioridade sobre outras. De modo geral, estilos inline têm prioridade sobre estilos incorporados, que têm prioridade sobre estilos importados de arquivos externos.

Além disso, regras mais específicas podem se sobrepor a regras mais gerais. Por exemplo, uma regra aplicada a uma classe pode sobrescrever uma regra aplicada apenas à tag, e uma regra aplicada a um ID pode ter mais força que uma classe, dependendo do caso.

> [!warning] Atenção  
> Quando um estilo não aparece como esperado, pode haver outra regra com maior prioridade ou declarada posteriormente.

> [!tip] Resumindo  
> A cascata determina qual estilo vence quando várias regras competem pelo mesmo elemento.

---

## 8. Vinculação de arquivos CSS ao HTML

> [!info] Conceito  
> A tag `<link>` conecta um arquivo CSS externo a uma página HTML.

Para usar CSS externo, cria-se um arquivo HTML e um arquivo CSS separado. O arquivo HTML deve conter uma referência ao arquivo CSS dentro da seção `<head>`.

Exemplo de HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Minha primeira página HTML + CSS</title>
  <link rel="stylesheet" href="estilo.css">
</head>
<body>
  <p>Meu texto</p>
  <p class="azul">Estilo múltiplo</p>
  <p id="vermelho">Estilo único</p>
  <p class="azul">Estilo múltiplo</p>
</body>
</html>
```

Exemplo de CSS:

```css
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: black;
}

p {
  color: green;
}

.azul {
  color: cyan;
}

#vermelho {
  color: red;
}
```

Nesse exemplo, o arquivo `estilo.css` controla a aparência da página. O fundo do corpo da página fica preto, os parágrafos comuns ficam verdes, os elementos com a classe `.azul` ficam ciano e o elemento com o ID `#vermelho` fica vermelho.

> [!tip] Resumindo  
> O HTML chama o CSS externo com `<link rel="stylesheet" href="estilo.css">`.

---

## 9. Comentários em CSS

> [!info] Conceito  
> Comentários são trechos ignorados pelo navegador e usados para documentar o código.

Em CSS, comentários são escritos entre `/*` e `*/`. Eles ajudam o desenvolvedor a explicar partes do código, organizar seções e registrar observações sem afetar a página.

Exemplo:

```css
/* Este é um comentário CSS */
p {
  color: blue;
}
```

Os comentários HTML são diferentes:

```html
<!-- Este é um comentário HTML -->
```

> [!warning] Atenção  
> Comentário CSS e comentário HTML usam sintaxes diferentes.

> [!tip] Resumindo  
> Comentários ajudam a documentar o código sem interferir no funcionamento da página.

---

## 10. Propriedades de tipografia

> [!info] Conceito  
> Propriedades tipográficas controlam a aparência dos textos na página.

O CSS permite formatar textos por meio de propriedades como cor, tamanho, estilo, família da fonte, peso, alinhamento, espaçamento entre linhas e decoração.

A propriedade `color` define a cor do texto. A propriedade `font-size` altera o tamanho da fonte. A propriedade `font-style` pode deixar o texto em itálico. A propriedade `font-family` define a família da fonte. A propriedade `font-weight` controla o peso da fonte, como o negrito. A propriedade `text-align` define o alinhamento do texto. A propriedade `line-height` altera o espaçamento entre linhas. A propriedade `text-decoration` permite adicionar ou remover sublinhado e outras decorações.

Exemplos:

```css
p {
  color: #FFFFFF;
  font-size: 40px;
  font-style: italic;
  font-family: helvetica, arial;
  font-weight: bold;
  text-align: center;
  line-height: 2;
  text-decoration: none;
}
```

> [!tip] Resumindo  
> As propriedades de texto permitem controlar a leitura, o destaque e a organização visual do conteúdo escrito.

---

## 11. Backgrounds

> [!info] Conceito  
> Background é o plano de fundo de um elemento.

O CSS permite configurar planos de fundo com cores ou imagens. A propriedade `background-color` define uma cor de fundo. A propriedade `background-image` insere uma imagem como fundo. A propriedade `background-repeat` define se essa imagem será repetida. A propriedade `background-position` controla a posição da imagem. A propriedade `background-attachment` permite definir se o fundo ficará fixo ou acompanhará a rolagem da página.

Exemplos:

```css
body {
  background-color: #0000FF;
}

div {
  background-image: url("imagem.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}
```

> [!warning] Atenção  
> Algumas propriedades de background dependem da existência prévia de uma imagem definida em `background-image`.

> [!tip] Resumindo  
> Backgrounds permitem definir cores e imagens de fundo para os elementos da página.

---

## 12. Dimensão dos elementos e modelo de caixa

> [!info] Conceito  
> Elementos HTML podem ter largura, altura, margem, borda e preenchimento definidos por CSS.

O CSS permite controlar o tamanho e os espaços dos elementos. A propriedade `width` define a largura, enquanto `height` define a altura. Também existem `max-width`, `min-width`, `max-height` e `min-height`, úteis para páginas responsivas.

O modelo de caixa pode ser entendido em camadas: no centro está o conteúdo do elemento; ao redor dele fica o `padding`, que é a margem interna; depois vem a `border`, que é a borda; por fim, existe a `margin`, que é a margem externa.

Exemplo:

```css
div {
  width: 800px;
  height: 200px;
  padding: 10px;
  border: 1px solid black;
  margin: 10px;
}
```

A propriedade `margin` pode receber um, dois, três ou quatro valores. Quando recebe quatro valores, eles correspondem, nessa ordem, a topo, direita, inferior e esquerda.

Exemplo:

```css
div {
  margin: 5px 0 10px 0;
}
```

> [!tip] Resumindo  
> `padding` é espaço interno; `border` é a linha de contorno; `margin` é o espaço externo.

---

## 13. Unidades de medida em CSS

> [!info] Conceito  
> CSS permite usar diferentes unidades para definir tamanhos e distâncias.

As medidas podem ser expressas em unidades como ponto (`pt`), paica (`pc`), centímetro (`cm`), milímetro (`mm`), polegada (`in`), porcentagem (`%`) e pixel (`px`). A unidade `px` é muito usada porque está relacionada ao pixel, a menor unidade de uma imagem digital.

A porcentagem é especialmente útil em páginas responsivas, pois permite que os elementos se ajustem ao tamanho da tela do usuário.

Exemplo:

```css
img {
  width: 100%;
  max-width: 1000px;
}
```

> [!tip] Resumindo  
> Pixels são muito usados para medidas fixas; porcentagens ajudam em layouts responsivos.

---

## 14. Posicionamento de elementos

> [!info] Conceito  
> A propriedade `position` define como um elemento será posicionado na página.

O CSS permite posicionar elementos com a propriedade `position`. O valor `relative` posiciona o elemento com base em sua posição normal na página. Por padrão, os elementos são organizados um abaixo do outro conforme aparecem no HTML.

O valor `fixed` posiciona o elemento em uma posição fixa na tela, permanecendo visível mesmo durante a rolagem da página. O valor `absolute` posiciona o elemento com base em um elemento de referência, permitindo sobreposições.

As propriedades `top`, `right`, `bottom` e `left` ajudam a definir a distância do elemento em relação às bordas.

Exemplo:

```css
div {
  position: absolute;
  top: 10px;
  left: 20px;
}
```

> [!warning] Atenção  
> O posicionamento `absolute` pode causar sobreposição entre elementos se não for usado com cuidado.

> [!tip] Resumindo  
> `relative` mantém o fluxo da página; `fixed` prende o elemento na tela; `absolute` permite posicionamento mais livre.

---

## 15. Reset básico com seletor universal

> [!info] Conceito  
> O seletor universal `*` pode ser usado para remover estilos padrão aplicados pelos navegadores.

Navegadores diferentes podem aplicar margens e espaçamentos padrão de formas distintas. Isso pode fazer com que uma mesma página apareça de modo diferente no Chrome, Edge ou em outros navegadores. Para reduzir essas diferenças, pode-se usar um reset básico com o seletor universal.

Exemplo:

```css
* {
  margin: 0;
  padding: 0;
}
```

Essa regra remove margens e preenchimentos padrão de todos os elementos, permitindo maior controle sobre o layout.

> [!tip] Resumindo  
> O seletor `*` atinge todos os elementos e pode ajudar a padronizar a aparência entre navegadores.

---

## 16. Contraste e legibilidade

> [!info] Conceito  
> A escolha das cores deve considerar a leitura do conteúdo.

Ao definir cores de fundo e texto, é importante garantir contraste suficiente. Um menu com fundo laranja, por exemplo, pode usar texto branco para melhorar a legibilidade. Usar texto laranja sobre fundo laranja impediria a leitura, e texto amarelo sobre fundo laranja poderia gerar contraste fraco.

Exemplo adequado:

```css
.menu {
  background-color: orange;
  color: white;
}
```

> [!warning] Atenção  
> Cores muito parecidas entre fundo e texto dificultam ou impedem a leitura.

> [!tip] Resumindo  
> CSS não serve apenas para “embelezar” a página; também melhora a usabilidade quando bem aplicado.

---

## 17. Aplicação prática: site de notícias

> [!info] Conceito  
> Um arquivo CSS externo permite controlar o estilo de várias páginas ao mesmo tempo.

No desafio apresentado, um site de notícias possuía seções como clima, culinária e ciências. Os títulos estavam com estilo inline, por exemplo:

```html
<h1 style="color:red">Clima</h1>
```

Essa prática causa retrabalho. Se o cliente quiser mudar a cor dos títulos, será necessário alterar cada página manualmente. A solução é remover os estilos inline e criar uma regra em um arquivo CSS externo.

Exemplo:

```css
h1 {
  color: green;
}
```

Depois, cada página HTML deve importar esse arquivo CSS com a tag `<link>`. Assim, qualquer mudança na cor dos títulos será feita em apenas uma linha do arquivo CSS.

> [!tip] Resumindo  
> Quanto maior o site, mais importante é separar HTML e CSS para facilitar manutenção.

---

## 18. Principais aprendizados dos exercícios

> [!info] Conceito  
> Os exercícios reforçam o uso de margens, vínculo externo, cascata, contraste e seletor universal.

Os exercícios mostram situações práticas de uso do CSS. Para criar espaçamento entre imagens, podem ser usadas propriedades como `margin-left` e `margin-top`. Para vincular arquivos CSS externos, utiliza-se a tag `<link>`. Para definir cores de fundo e texto, usam-se `background-color` e `color`.

Também é reforçada a importância da cascata, pois regras aplicadas a classes, IDs ou declaradas posteriormente podem influenciar o resultado final. Outro ponto importante é o uso do seletor universal `*` para remover margens e espaçamentos padrão dos navegadores.

> [!warning] Atenção  
> Nem toda palavra é uma propriedade ou valor válido em CSS. Por exemplo, `margin-side` não é uma propriedade válida, e cores devem ser escritas com nomes reconhecidos, como `orange`, `black`, `white`, ou códigos como `#FFFFFF`.

> [!tip] Resumindo  
> Os exercícios mostram que CSS exige atenção à sintaxe, à prioridade das regras e à legibilidade visual.

---

## Síntese final

> [!summary] Síntese  
> CSS é a linguagem responsável pela aparência das páginas Web. Seu principal benefício é separar estilo e conteúdo, deixando o HTML responsável pela estrutura e o CSS responsável pela apresentação visual.

O uso de CSS torna o desenvolvimento Web mais organizado, reutilizável e fácil de manter. Com ele, é possível alterar cores, fontes, tamanhos, margens, bordas, fundos e posicionamentos de maneira centralizada. A forma mais recomendada de uso é por meio de arquivos CSS externos vinculados ao HTML com a tag `<link>`.

A linguagem funciona por meio de regras compostas por seletores, propriedades e valores. Os seletores indicam quais elementos serão estilizados, enquanto as declarações definem os estilos aplicados. O efeito cascata determina qual regra prevalece quando há conflitos.

Em resumo, CSS é essencial para transformar uma página HTML simples em uma interface visualmente organizada, legível, responsiva e mais fácil de atualizar.