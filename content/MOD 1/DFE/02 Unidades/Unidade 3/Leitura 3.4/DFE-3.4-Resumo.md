---
publish: true
---
# Princípios de Usabilidade e Acessibilidade eMAG

## 1. Conceito geral do eMAG

> [!info] Conceito
> eMAG significa **Modelo de Acessibilidade em Governo Eletrônico** e é a principal referência brasileira para orientar o desenvolvimento de páginas e sistemas digitais acessíveis no âmbito público.

O eMAG orienta a criação de aplicações Web que possam ser utilizadas por todos os cidadãos de forma autônoma, segura e eficiente, incluindo pessoas com deficiência visual, auditiva, motora ou cognitiva. Ele está alinhado às diretrizes internacionais da WCAG, mas é adaptado ao contexto brasileiro, considerando aspectos técnicos, legais e sociais.

A proposta do eMAG é integrar acessibilidade, usabilidade, qualidade do código e experiência do usuário. Assim, uma página acessível não deve apenas “funcionar visualmente”; ela precisa ser compreensível por pessoas, navegadores e tecnologias assistivas.

> [!tip] Resumindo
> O eMAG ajuda desenvolvedores e gestores públicos a criarem sistemas digitais mais acessíveis, inclusivos e alinhados às boas práticas da Web.

---

## 2. Usabilidade e acessibilidade no desenvolvimento Web

> [!info] Conceito
> Usabilidade está relacionada à facilidade, eficiência e satisfação no uso; acessibilidade busca garantir que pessoas com diferentes capacidades possam acessar e compreender os conteúdos digitais.

A usabilidade envolve a forma como o usuário interage com o sistema. Uma interface usável é clara, previsível, organizada e permite que o usuário realize suas tarefas com menor esforço. Já a acessibilidade preocupa-se em remover barreiras que impedem o acesso de pessoas com deficiência ou limitações temporárias.

No desenvolvimento Web, esses dois conceitos são complementares. Um sistema acessível tende a ser mais usável, pois melhora a navegação, a clareza dos elementos e a autonomia do usuário. Da mesma forma, uma interface usável contribui para reduzir dificuldades cognitivas, técnicas e funcionais durante a interação.

> [!tip] Resumindo
> Acessibilidade garante acesso; usabilidade melhora a qualidade da interação. Juntas, tornam a experiência digital mais inclusiva.

---

## 3. Acessibilidade como requisito transversal

> [!info] Conceito
> A acessibilidade deve estar presente em todas as camadas do sistema, desde o código até a interação final com o usuário.

O material destaca que a acessibilidade não deve ser tratada como uma etapa isolada ou como uma correção feita apenas ao final do projeto. Ela precisa estar presente desde a concepção da interface, passando pela estrutura do HTML, pela apresentação visual em CSS, pelos comportamentos em JavaScript e pela experiência real do usuário.

Isso significa que uma aplicação Web deve ser avaliada como um sistema completo. Não basta uma página isolada estar acessível se a navegação geral, os componentes reutilizáveis, os formulários ou os fluxos principais apresentam barreiras.

> [!warning] Atenção
> Páginas acessíveis isoladamente não garantem que o sistema inteiro seja acessível.

> [!tip] Resumindo
> A acessibilidade deve ser pensada de forma sistêmica e contínua, não apenas como ajuste pontual.

---

## 4. Estrutura semântica da página

> [!info] Conceito
> Estrutura semântica é o uso correto das tags HTML para indicar o significado e a função de cada parte da página.

A semântica em HTML significa usar elementos que expressem claramente o papel do conteúdo. Tags como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>` ajudam navegadores e leitores de tela a entenderem a organização da página.

Uma página pode parecer igual visualmente mesmo quando o código está mal estruturado. Porém, para tecnologias assistivas, a diferença é grande. Um código com semântica permite que o usuário navegue por regiões, compreenda a hierarquia do conteúdo e encontre as informações com mais facilidade.

Exemplo recomendado:

```html
<section>
  <h2>Serviços de Saúde</h2>
  <p>Informações sobre consultas e vacinação.</p>
</section>

<section>
  <h2>Educação</h2>
  <p>Acesso a matrículas online e boletins escolares.</p>
</section>
```

Exemplo inadequado:

```html
<div>
  <h2>Serviços de Saúde</h2>
  Informações sobre consultas e vacinação.
  <h2>Educação</h2>
  Acesso a matrículas online e boletins escolares.
</div>
```

No exemplo inadequado, o uso genérico de `<div>` não informa a função de cada bloco. Além disso, a ausência de parágrafos e seções compromete a organização lógica do conteúdo.

> [!warning] Atenção
> O fato de duas páginas parecerem iguais na tela não significa que sejam igualmente acessíveis.

> [!tip] Resumindo
> HTML semântico melhora a acessibilidade, a usabilidade, a navegação por leitores de tela e a organização do conteúdo.

---

## 5. Elementos genéricos e elementos semânticos

> [!info] Conceito
> Elementos genéricos, como `<div>` e `<span>`, não transmitem significado; elementos semânticos indicam a função real do conteúdo.

O eMAG recomenda evitar o uso excessivo de elementos genéricos quando existem tags semânticas adequadas. O elemento `<div>` pode agrupar visualmente elementos, mas não informa se aquele trecho é um cabeçalho, um menu, um conteúdo principal ou um rodapé.

Substituições importantes incluem:

```html
<div class="topo">
  <h1>Portal Institucional</h1>
</div>
```

por:

```html
<header>
  <h1>Portal Institucional</h1>
</header>
```

Outro exemplo é substituir um menu feito com `<div>` por `<nav>`:

```html
<nav>
  <a href="#">Início</a>
  <a href="#">Contato</a>
</nav>
```

O mesmo vale para conteúdos principais, seções, artigos e rodapés. O elemento `<main>` identifica o conteúdo principal; `<section>` organiza blocos temáticos; `<article>` representa conteúdo independente; `<footer>` identifica informações finais ou institucionais.

> [!tip] Resumindo
> Use a tag que representa o significado do conteúdo, e não apenas uma tag genérica para organizar visualmente a página.

---

## 6. Importância semântica: `<strong>`, `<em>` e `<button>`

> [!info] Conceito
> A semântica também deve ser aplicada em destaques, ênfases e elementos interativos.

Quando se usa apenas estilo visual, como negrito ou itálico aplicado a um `<span>`, a aparência pode mudar, mas o significado não é comunicado às tecnologias assistivas. Por isso, quando uma informação é importante, deve-se usar `<strong>`. Quando há ênfase no significado de uma palavra ou trecho, deve-se usar `<em>`.

Exemplo inadequado:

```html
<span style="font-weight: bold;">Atenção</span>
```

Exemplo recomendado:

```html
<strong>Atenção</strong>
```

Também é inadequado simular botões com `<div>` clicável:

```html
<div onclick="enviarFormulario()">Enviar</div>
```

A correção recomendada é usar um botão real:

```html
<button type="submit">Enviar</button>
```

O elemento `<button>` é interpretado corretamente por navegadores, leitores de tela e teclado, garantindo maior operabilidade.

> [!warning] Atenção
> Funcionar visualmente não significa ser acessível. Um `<div>` clicável pode não receber foco pelo teclado e pode não ser anunciado corretamente por leitores de tela.

> [!tip] Resumindo
> A semântica comunica significado, importância e função para usuários e tecnologias assistivas.

---

## 7. Textos alternativos e descrições

> [!info] Conceito
> Texto alternativo é uma descrição textual que transmite o conteúdo ou a função de uma imagem para quem não consegue visualizá-la.

O atributo `alt` é essencial para imagens informativas. Ele permite que leitores de tela descrevam o conteúdo visual para usuários com deficiência visual. Também ajuda quando a imagem não carrega ou quando o conteúdo precisa ser interpretado em outro formato.

Exemplo recomendado:

```html
<img src="vacina.jpg" alt="Pessoa recebendo vacina em posto de saúde">
```

Sem o atributo `alt`, a imagem pode não transmitir nenhuma informação útil. Textos genéricos, como “imagem” ou “figura”, também não são adequados, pois não explicam a função ou o conteúdo da imagem.

> [!warning] Atenção
> O texto alternativo deve ser significativo. Ele deve descrever a informação importante da imagem, não apenas sua aparência genérica.

> [!tip] Resumindo
> Imagens informativas precisam de `alt` claro, útil e equivalente ao conteúdo visual.

---

## 8. Tecnologias assistivas e NVDA

> [!info] Conceito
> Tecnologias assistivas são ferramentas que ajudam pessoas com deficiência a acessar conteúdos digitais com mais autonomia.

O material apresenta o NVDA, sigla de *NonVisual Desktop Access*, como exemplo de tecnologia assistiva gratuita. Esse leitor de tela interpreta o código HTML das páginas, lê textos, identifica elementos e anuncia em voz alta o conteúdo para o usuário.

Quando uma imagem possui `alt`, o NVDA consegue ler a descrição fornecida. Quando a página usa HTML semântico, o leitor de tela consegue identificar regiões como cabeçalho, navegação, conteúdo principal e rodapé.

> [!tip] Resumindo
> Leitores de tela dependem de código bem estruturado e descrições adequadas para transmitir corretamente a informação ao usuário.

---

## 9. Links acessíveis

> [!info] Conceito
> Links acessíveis são aqueles que informam claramente ao usuário qual será o destino ou a ação realizada.

O eMAG recomenda evitar textos genéricos como “clique aqui” ou “saiba mais”. Esses termos não indicam o destino do link e dificultam a navegação, principalmente para usuários de leitores de tela, que podem percorrer apenas a lista de links da página.

Exemplo recomendado:

```html
<a href="servicos.html">Acessar lista de serviços disponíveis</a>
```

Esse link é mais claro porque informa exatamente o que será acessado. A descrição objetiva reduz dúvidas, melhora a navegação e diminui a carga cognitiva do usuário.

> [!warning] Atenção
> Um link deve fazer sentido mesmo quando lido fora do contexto do parágrafo.

> [!tip] Resumindo
> Bons links dizem ao usuário para onde ele vai ou o que acontecerá ao clicar.

---

## 10. Navegação clara e consistente

> [!info] Conceito
> Navegação acessível é aquela que permite ao usuário localizar e acessar conteúdos de forma previsível, inclusive por teclado.

A navegação é um elemento central da experiência do usuário. Ela deve manter estrutura e posição consistentes ao longo das páginas do site. Isso ajuda o usuário a criar familiaridade com a interface e reduz o esforço para encontrar informações.

Menus devem ser construídos com HTML semântico, especialmente com a tag `<nav>`, que indica às tecnologias assistivas que aquele bloco é uma região de navegação.

Exemplo recomendado:

```html
<nav>
  <ul>
    <li><a href="#saude">Serviços de Saúde</a></li>
    <li><a href="#educacao">Educação</a></li>
    <li><a href="#tributos">Tributos</a></li>
  </ul>
</nav>
```

Além disso, o usuário deve conseguir navegar pelos menus usando teclado, como a tecla Tab e setas direcionais, sem depender exclusivamente do mouse.

> [!tip] Resumindo
> Navegação clara, consistente e acessível por teclado aumenta a autonomia do usuário.

---

## 11. Navegação por teclado

> [!info] Conceito
> Navegação por teclado é a possibilidade de usar a interface sem depender do mouse.

Muitos usuários utilizam apenas o teclado para navegar, seja por deficiência motora, preferência pessoal ou uso de tecnologias assistivas. Por isso, todos os elementos interativos precisam receber foco, ser acionáveis e ter função compreensível.

Um erro comum é criar elementos clicáveis com `<div>` ou `<span>`, pois eles não são naturalmente operáveis por teclado. A correção é usar elementos apropriados, como `<button>` para ações e `<a>` para links.

> [!warning] Atenção
> A navegação dependente exclusivamente do mouse cria barreiras para usuários com limitações motoras.

> [!tip] Resumindo
> Elementos interativos devem funcionar com teclado, mouse, toque e tecnologias assistivas.

---

## 12. Avaliação de conformidade com o eMAG

> [!info] Conceito
> Avaliar conformidade com o eMAG é verificar se uma aplicação Web atende aos critérios de acessibilidade recomendados pelo modelo.

A avaliação de conformidade é um processo sistemático. Seu objetivo é identificar barreiras de acesso e verificar se pessoas com diferentes deficiências conseguem perceber, compreender, navegar e interagir com a aplicação de forma autônoma, segura e eficiente.

Essa avaliação considera aspectos como marcação semântica, alternativas textuais, contraste adequado, navegação por teclado, compatibilidade com leitores de tela, consistência da navegação, clareza de rótulos e adaptação a diferentes dispositivos.

> [!tip] Resumindo
> A conformidade com o eMAG mede o quanto a aplicação segue boas práticas de acessibilidade e usabilidade.

---

## 13. Eixos de análise da conformidade

> [!info] Conceito
> A avaliação com o eMAG envolve aspectos técnicos, qualidade do código, experiência do usuário, usabilidade, responsividade e mobile-first.

O material apresenta a avaliação do eMAG como um processo multidimensional. A estrutura técnica do sistema deve incorporar acessibilidade desde as camadas iniciais do desenvolvimento, com HTML semântico, separação entre conteúdo e apresentação via CSS, comportamentos acessíveis em JavaScript e aderência a padrões Web.

A qualidade do código também importa, pois a acessibilidade não depende apenas da interface visual. É necessário verificar clareza estrutural, padronização e compatibilidade com tecnologias assistivas.

A experiência do usuário deve ser clara e previsível, com rótulos compreensíveis, instruções adequadas e ausência de barreiras desnecessárias. Já o design responsivo amplia o acesso em múltiplos dispositivos, garantindo adaptação a smartphones, tablets e desktops.

> [!tip] Resumindo
> Avaliar acessibilidade é analisar código, interação, conteúdo, navegação, responsividade e experiência de uso.

---

## 14. Acessibilidade e design responsivo

> [!info] Conceito
> Design responsivo contribui para a acessibilidade ao adaptar o conteúdo a diferentes telas e contextos de uso.

Uma aplicação acessível deve funcionar bem em diferentes dispositivos. Isso inclui desktops, tablets e smartphones. O design responsivo permite que o conteúdo se adapte a diferentes tamanhos de tela, evitando perda de legibilidade e dificuldades de interação.

O material também relaciona acessibilidade com mobile-first. Nessa abordagem, a aplicação é pensada primeiro para dispositivos móveis, priorizando clareza, desempenho, tamanho adequado dos elementos e redução de componentes desnecessários.

> [!warning] Atenção
> Responsividade sozinha não garante acessibilidade, mas uma interface que não se adapta bem a telas menores pode criar barreiras importantes.

> [!tip] Resumindo
> Uma aplicação acessível deve ser clara, operável e legível em múltiplos dispositivos.

---

## 15. Avaliação do sistema como um todo

> [!info] Conceito
> O grau de acessibilidade deve ser analisado considerando a experiência completa de uso, não apenas elementos isolados.

O material enfatiza que a conformidade com o eMAG deve ser avaliada no funcionamento do sistema como um todo. Isso inclui páginas, fluxos de navegação, componentes reutilizáveis, formulários, conteúdos dinâmicos, mecanismos de autenticação e integração com tecnologias assistivas.

Um sistema pode ter páginas aparentemente acessíveis, mas ainda falhar por falta de consistência na navegação, por padrões de interação confusos ou por componentes que se comportam de maneira diferente em cada parte do sistema.

> [!warning] Atenção
> Inconsistências na navegação e nos padrões de interação comprometem a autonomia do usuário.

> [!tip] Resumindo
> Acessibilidade precisa ser contínua, coerente e presente em todo o sistema.

---

## 16. Avaliação automática, manual e com tecnologias assistivas

> [!info] Conceito
> Uma avaliação adequada combina ferramentas automáticas, inspeção manual e testes práticos com tecnologias assistivas.

As ferramentas automáticas ajudam a identificar problemas recorrentes, como ausência de semântica adequada, contrastes insuficientes e falhas de rotulagem em formulários. Elas são úteis, mas não conseguem avaliar tudo.

A avaliação manual é indispensável para verificar se os elementos semânticos foram usados corretamente, se a navegação por teclado funciona, se os componentes dinâmicos são acessíveis e se o sistema mantém consistência estrutural.

Os testes com usuários reais e tecnologias assistivas, como leitores de tela e navegação por teclado, são fundamentais para validar se a aplicação realmente funciona na prática.

> [!warning] Atenção
> Ferramentas automáticas não substituem a análise humana nem os testes com tecnologias assistivas.

> [!tip] Resumindo
> A avaliação mais completa combina validação automática, inspeção manual e testes reais de uso.

---

## 17. Verificação eMAG: regiões semânticas

> [!info] Conceito
> A página deve ter regiões semânticas identificáveis para facilitar a navegação estrutural.

Uma das verificações do eMAG consiste em perguntar se a página possui regiões identificáveis e se o usuário consegue navegar por elas usando leitor de tela.

Exemplo inadequado:

```html
<div class="topo">Portal Institucional</div>
<div class="menu">Início | Serviços | Contato</div>
<div class="conteudo">Conteúdo principal</div>
<div class="rodape">© 2026</div>
```

Correção recomendada:

```html
<header>
  <h1>Portal Institucional</h1>
</header>

<nav>
  <a href="#">Início</a>
  <a href="#">Serviços</a>
  <a href="#">Contato</a>
</nav>

<main>
  <p>Conteúdo principal</p>
</main>

<footer>
  <p>© 2026</p>
</footer>
```

Essa correção facilita a identificação das partes principais da página e permite acesso mais direto ao conteúdo.

> [!tip] Resumindo
> Cabeçalho, navegação, conteúdo principal e rodapé devem ser identificados com tags semânticas.

---

## 18. Verificação eMAG: elementos interativos

> [!info] Conceito
> Elementos interativos devem ser acessíveis por teclado e compreensíveis por tecnologias assistivas.

A verificação pergunta se todos os elementos interativos podem ser acessados e acionados sem mouse. Um problema comum é usar `<div>` com evento de clique para simular um botão.

Exemplo inadequado:

```html
<div onclick="abrirMenu()">Menu</div>
```

Correção recomendada:

```html
<button onclick="abrirMenu()">Menu</button>
```

O elemento `<button>` é semanticamente correto e naturalmente operável por teclado.

> [!tip] Resumindo
> Para ações, use `<button>`; para navegação, use `<a>`.

---

## 19. Verificação eMAG: conteúdo não textual

> [!info] Conceito
> Conteúdos não textuais devem ter alternativa textual equivalente.

Uma das verificações pergunta se imagens, gráficos, ícones ou outros elementos visuais transmitem informação por meio de descrição textual. Quando uma imagem é informativa, ela precisa de `alt`.

Exemplo inadequado:

```html
<img src="grafico.png">
```

Correção recomendada:

```html
<img src="grafico.png" alt="Gráfico de vendas mensais de 2025">
```

Com isso, usuários de leitores de tela conseguem compreender o conteúdo representado pela imagem.

> [!tip] Resumindo
> Toda imagem informativa deve ter descrição textual equivalente.

---

## 20. Verificação eMAG: formulários

> [!info] Conceito
> Campos de formulário devem ter rótulos associados e mensagens claras.

Um campo com apenas `placeholder` pode não ser suficiente para acessibilidade. O rótulo deve estar programaticamente associado ao campo, permitindo que tecnologias assistivas identifiquem corretamente sua função.

Exemplo inadequado:

```html
<input type="text" placeholder="E-mail">
```

Correção recomendada:

```html
<label for="email">E-mail</label>
<input type="email" id="email">
```

Essa prática melhora a compreensão, a usabilidade e a acessibilidade do formulário.

> [!warning] Atenção
> `placeholder` não substitui um rótulo acessível.

> [!tip] Resumindo
> Formulários acessíveis precisam de rótulos claros, instruções e mensagens compreensíveis.

---

## 21. Verificação eMAG: informação apenas visual

> [!info] Conceito
> Informações importantes não devem depender apenas da aparência visual.

Quando a importância de um conteúdo é transmitida apenas por negrito, itálico, cor ou estilo visual, tecnologias assistivas podem não identificar esse significado. Por isso, devem ser usadas tags semânticas.

Exemplo inadequado:

```html
<span style="font-weight: bold;">Importante</span>
```

Correção recomendada:

```html
<strong>Importante</strong>
```

O elemento `<strong>` comunica importância semântica, não apenas destaque visual.

> [!tip] Resumindo
> Use HTML semântico para comunicar significado, não apenas CSS para alterar aparência.

---

## 22. Verificação eMAG: conteúdo independente

> [!info] Conceito
> Conteúdos independentes devem ser marcados de forma que possam ser compreendidos isoladamente.

Quando um bloco representa uma notícia, postagem, card ou conteúdo autônomo, é recomendável usar `<article>`. Isso ajuda leitores de tela e outras ferramentas a compreenderem que aquele bloco forma uma unidade independente.

Exemplo inadequado:

```html
<div>
  <h2>Notícia</h2>
  <p>Texto da notícia</p>
</div>
```

Correção recomendada:

```html
<article>
  <h2>Notícia</h2>
  <p>Texto da notícia</p>
</article>
```

> [!tip] Resumindo
> Use `<article>` para conteúdos autônomos e reutilizáveis.

---

## 23. Verificação eMAG: tamanho para toque

> [!info] Conceito
> Elementos interativos devem ter tamanho adequado para toque em dispositivos móveis.

Botões muito pequenos dificultam a interação, especialmente em smartphones e para usuários com limitações motoras. O material recomenda aumentar o espaçamento e definir dimensões mínimas para facilitar o toque.

Exemplo inadequado:

```css
button {
  padding: 4px;
}
```

Correção recomendada:

```css
button {
  padding: 12px;
  min-width: 44px;
  min-height: 44px;
}
```

Essa alteração torna os elementos mais fáceis de tocar, melhora a experiência móvel e reduz erros de interação.

> [!tip] Resumindo
> Elementos clicáveis devem ser grandes o suficiente para uso confortável em telas sensíveis ao toque.

---

## 24. Principais problemas de não conformidade

> [!info] Conceito
> Não conformidade ocorre quando a página apresenta barreiras que dificultam ou impedem o uso por diferentes perfis de usuários.

Entre os problemas destacados no material estão o uso excessivo de `<div>` e `<span>`, ausência de textos alternativos, links genéricos, menus não acessíveis por teclado, campos sem rótulos, contraste inadequado, elementos pequenos para toque e falta de consistência na navegação.

Esses problemas podem prejudicar pessoas com deficiência visual, motora, auditiva ou cognitiva, além de afetar usuários em dispositivos móveis, pessoas idosas e usuários com pouca familiaridade tecnológica.

> [!tip] Resumindo
> Uma barreira de acessibilidade geralmente também se torna um problema de usabilidade.

---

## 25. Classificação da conformidade

> [!info] Conceito
> A conformidade pode ser classificada como conforme, parcialmente conforme ou não conforme, de acordo com o atendimento às recomendações do eMAG.

O desafio do material orienta que a avaliação deve identificar problemas e classificá-los tecnicamente. Uma aplicação pode estar conforme em alguns critérios, parcialmente conforme em outros e não conforme quando há barreiras claras.

Essa classificação deve ser acompanhada de justificativa técnica, relacionando o problema ao impacto real sobre usuários com diferentes necessidades. Por exemplo, uma imagem sem `alt` afeta usuários de leitores de tela; um baixo contraste prejudica pessoas com baixa visão; uma navegação apenas por mouse dificulta o uso por pessoas com limitações motoras.

> [!tip] Resumindo
> Avaliar conformidade exige identificar o problema, classificar o grau de atendimento e justificar o impacto sobre o usuário.

---

## 26. Principais aprendizados dos exercícios

> [!info] Conceito
> Os exercícios reforçam que a acessibilidade exige semântica, alternativas textuais, navegação por teclado e avaliação contínua.

Os exercícios mostram que o eMAG recomenda estruturação semântica em HTML, e não o uso exclusivo de `<div>`. Também reforçam que imagens informativas precisam de textos alternativos que descrevam o conteúdo ou a função da imagem.

Outro aprendizado importante é que a avaliação de conformidade não deve se limitar à página inicial, ao contraste, aos formulários ou à responsividade. Uma análise adequada combina testes automáticos, inspeções manuais e uso de tecnologias assistivas.

Os exercícios também destacam que a acessibilidade é atributo transversal do sistema e que inconsistências de navegação comprometem a autonomia do usuário. Por fim, reforçam que um `<div onclick="enviar()">Enviar</div>` deve ser corrigido para um botão semântico, como `<button type="submit">Enviar</button>`.

> [!tip] Resumindo
> A acessibilidade deve ser aplicada no código, na navegação, na interação e na experiência completa do usuário.

---

## Síntese final

> [!summary] Síntese
> O eMAG é a referência brasileira para orientar a criação e avaliação de páginas e sistemas digitais acessíveis, especialmente no contexto governamental.

O material mostra que acessibilidade e usabilidade são requisitos essenciais no desenvolvimento Web. A acessibilidade garante que diferentes pessoas consigam acessar, compreender e interagir com os serviços digitais. A usabilidade melhora a clareza, a eficiência, a previsibilidade e a satisfação durante o uso.

As recomendações do eMAG envolvem estrutura semântica da página, textos alternativos, links descritivos, navegação clara, uso correto de elementos interativos, formulários acessíveis e compatibilidade com tecnologias assistivas. Elementos como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<strong>`, `<em>` e `<button>` devem ser usados conforme seu significado, substituindo usos inadequados de `<div>` e `<span>` quando houver tags mais apropriadas.

A avaliação de conformidade com o eMAG deve considerar o sistema como um todo, incluindo páginas, componentes, fluxos, formulários, navegação, conteúdo dinâmico e responsividade. Esse processo deve combinar ferramentas automáticas, inspeção manual e testes com tecnologias assistivas, pois nenhuma abordagem isolada é suficiente.

Em resumo, aplicar o eMAG significa desenvolver interfaces mais inclusivas, éticas, claras, usáveis e alinhadas aos padrões nacionais e internacionais de acessibilidade. A acessibilidade deve ser tratada como atributo transversal do sistema, desde a estrutura do código até a experiência final do usuário.