---
publish: true
---

# Resumo — Estrutura de Repetição `enquanto...faça`

## 1. Visão geral

> [!info] Conceito  
> Um **laço** é a execução repetida de um mesmo conjunto de comandos.

Os materiais apresentam a repetição como uma estrutura fundamental da programação, usada quando uma ação precisa acontecer várias vezes. A unidade estuda especialmente a estrutura **`enquanto`** (*while*), que executa comandos **enquanto uma condição for verdadeira**. O objetivo é identificar problemas que exigem repetição, construir pseudocódigos com `enquanto` e resolver situações práticas por meio de algoritmos.

> [!tip] Resumindo  
> A repetição é útil quando o programa precisa continuar fazendo algo até que uma condição deixe de ser verdadeira.

---

## 2. O que é a estrutura `enquanto`

> [!info] Conceito  
> O comando `enquanto...faça` é uma repetição **por avaliação prévia da condição**.

No conteúdo do livro, o comando `enquanto...faça` é definido como uma estrutura em que a execução de um comando simples ou composto depende do resultado de uma **expressão lógica**, isto é, uma condição que pode ser avaliada como **verdadeira** ou **falsa**. Enquanto essa condição for verdadeira, o bloco continua sendo executado. Quando ela se torna falsa, a repetição termina. A sintaxe básica é apresentada como `enquanto <expressão lógica> faça <comando>`.

Esse funcionamento também aparece na unidade de aprendizagem: o teste é feito antes da execução do bloco. Se o resultado for verdadeiro, o programa entra no laço; se for falso, ele sai da repetição e continua o fluxo normal do algoritmo.

> [!tip] Resumindo  
> No `enquanto`, a condição é testada primeiro. Só há repetição se o teste for verdadeiro.

> [!warning] Atenção  
> Diferentemente do `repita...até`, o `enquanto` **pode não executar nenhuma vez**, caso a condição já comece falsa.

---

## 3. Como o `enquanto` funciona na prática

> [!info] Conceito  
> Para o laço funcionar corretamente, a condição precisa ser controlada por variáveis que mudem ao longo da repetição.

Os anexos mostram que não basta escrever uma condição: é necessário garantir que algum valor usado nela seja alterado dentro do laço. No exemplo em que a variável `a` começa em 1, ela é incrementada de 1 em 1 enquanto `a < 5`. Quando `a` chega a 5, a condição deixa de ser verdadeira e o laço termina. Isso mostra que a repetição depende de duas coisas: uma **inicialização correta** e uma **atualização durante o laço**.

Outro exemplo importante usa uma variável lógica chamada `segue <- verdadeiro`. Ela começa com o valor verdadeiro e muda para falso quando o usuário informa o valor zero. Isso mostra que a condição do `enquanto` também pode ser controlada por uma variável lógica, e não apenas por comparações numéricas.

> [!warning] Atenção  
> Se a condição nunca se tornar falsa, ocorre um **loop infinito**, ou seja, o programa repete para sempre.

Os exercícios reforçam esse ponto. Eles deixam claro que é preciso cuidado, porque o `enquanto` continuará executando indefinidamente se a condição permanecer verdadeira. Também destacam que a variável testada precisa ter um valor inicial, pois o comando `enquanto` não faz essa inicialização automaticamente.

> [!tip] Resumindo  
> Para usar `enquanto` corretamente, é preciso: inicializar variáveis, testar uma condição e modificar algo dentro do laço.

---

## 4. Quando usar repetição

> [!info] Conceito  
> A repetição é indicada quando não se sabe previamente quantas vezes um conjunto de comandos precisará ser executado.

Os materiais usam situações do cotidiano para explicar isso: caminhar enquanto não se chega ao destino, esperar enquanto o semáforo não abre, ou encher balões enquanto ainda houver balões vazios. Essas comparações mostram que a estrutura de repetição modela ações que dependem de uma condição, e não de uma quantidade fixa de repetições.

Nos exercícios, essa ideia aparece de forma direta: a estrutura `enquanto...faça` é adequada justamente quando não se sabe exatamente quantas repetições serão necessárias. O laço continua até a condição deixar de ser satisfeita.

> [!tip] Resumindo  
> O `enquanto` é apropriado para problemas cujo fim depende de uma condição, e não de um número fixo de vezes.

---

## 5. Exemplos básicos de uso do `enquanto`

> [!info] Conceito  
> Um bom modo de entender o `enquanto` é observar algoritmos simples que contam, acumulam ou convertem valores.

Um exemplo apresentado na unidade é o algoritmo que escreve os números de 1 até um limite informado pelo usuário. O processo é: ler o limite, iniciar a variável `numero` com 1, mostrar seu valor e somar 1 a cada repetição enquanto `numero <= limite`. Esse exemplo mostra claramente a lógica do laço: começar em um valor inicial, repetir a ação e avançar passo a passo até a condição falhar.

Outro exemplo prático é a conversão monetária. O algoritmo lê a taxa de câmbio, depois lê um valor em dólar e calcula o correspondente em reais. A consulta continua enquanto o valor digitado em dólar for diferente de zero. Aqui, o `enquanto` é usado para transformar uma ação pontual em uma consulta repetitiva e prática.

> [!tip] Resumindo  
> O `enquanto` é muito útil em tarefas como contagem, leitura de dados e repetição de cálculos.

---

## 6. Sinalização de final de dados

> [!info] Conceito  
> Quando a quantidade de dados é desconhecida, o algoritmo precisa de uma regra clara para saber quando parar.

O livro apresenta três formas de encerrar um processamento com `enquanto`. A primeira é a **marca de parada no último dado válido**. Nesse caso, existe um valor que ainda faz parte dos dados corretos, mas que indica que aquele é o último item a ser processado. No exemplo dos alunos, isso pode ser o código do último aluno.

A segunda forma é a **marca de parada após os dados válidos**. Nela, o valor de parada não deve ser processado, servindo apenas como sinal de encerramento. No exemplo do livro, uma nota negativa indica que não há mais dados válidos para ler. Esse modelo exige atenção, porque é necessário fazer uma leitura antes de entrar no `enquanto`, para que o primeiro teste seja feito corretamente.

A terceira forma é a **parada solicitada pelo usuário**. Ao final de cada repetição, o usuário informa se deseja continuar ou não. Assim, a continuação do laço fica sob controle explícito de quem está usando o programa.

> [!warning] Atenção  
> Em alguns casos, é necessário ler dados antes do `enquanto`, pois a condição é testada antes da primeira execução.

> [!tip] Resumindo  
> O encerramento de um laço pode ser controlado por um último valor válido, por um valor especial de parada ou pela decisão do usuário.

---

## 7. Contadores e repetição aninhada

> [!info] Conceito  
> Um **contador** é uma variável usada para registrar quantas vezes o laço foi executado.

Quando o número de repetições é desconhecido, mas ainda assim se deseja saber quantas iterações aconteceram, usa-se uma variável contadora. O livro mostra isso no algoritmo que calcula médias de alunos: a variável `cont_al` começa em zero e é incrementada a cada aluno processado. Esse valor depois é usado para calcular a média geral da turma. Assim, o contador não apenas conta repetições, mas também ajuda em cálculos posteriores.

Outro conceito importante é o de **comandos aninhados**, ou seja, uma repetição dentro de outra. O material mostra um `enquanto` que continua até o usuário digitar `N` e, dentro dele, um `para...faça` que escreve números de 1 até um limite. Isso ensina que o comando dentro do laço pode ser qualquer outro comando, inclusive outra repetição.

> [!tip] Resumindo  
> O contador mede quantas iterações ocorreram, e o aninhamento permite resolver problemas mais complexos com laços dentro de laços.

---

## 8. Fatorial com `enquanto`

> [!info] Conceito  
> **Fatorial** é o produto de um número inteiro positivo por todos os seus antecessores até 1.

Na parte “Na prática”, o material usa o cálculo do fatorial para mostrar como a repetição resolve multiplicações sucessivas. O algoritmo começa com `Fatorial <- 1`, que é o elemento neutro da multiplicação, e com `multiplicador <- numero`. Depois, enquanto o multiplicador for maior que zero, o valor do fatorial é atualizado pela multiplicação e o multiplicador é decrementado em 1. Isso segue até chegar a zero.

O teste de mesa do caso em que `numero = 5` mostra a evolução das variáveis e evidencia a lógica do algoritmo. O valor final obtido é 120, confirmando que `5! = 120`. O mais importante nesse exemplo é perceber a dinâmica do laço: a variável de controle vai diminuindo, e a condição deixa de ser verdadeira no momento certo.

Os exercícios também reforçam esse conceito ao apresentar um algoritmo cuja finalidade correta é calcular o fatorial de um número. O reconhecimento do padrão `Y <- Y * Z` com incremento de `Z` mostra como a repetição representa o produto sequencial dos inteiros de 1 até `X`.

> [!tip] Resumindo  
> O fatorial é um exemplo clássico de problema resolvido com `enquanto`, porque exige repetições sucessivas até um limite.

---

## 9. Combinação simples e aplicação matemática da repetição

> [!info] Conceito  
> A **combinação simples** calcula quantos grupos diferentes podem ser formados sem considerar a ordem dos elementos.

O material usa o exemplo dos balões de quatro cores para introduzir a combinação simples. Como se deseja formar grupos de dois balões com cores diferentes, aplica-se a fórmula `C(m,p) = m!/[(m-p)! p!]`. No exemplo, com `m = 4` e `p = 2`, o resultado é 6 agrupamentos distintos.

A relação com a programação aparece porque, para calcular a combinação, é necessário calcular três fatoriais: `m!`, `(m-p)!` e `p!`. O algoritmo apresentado resolve isso repetindo o mesmo processo de multiplicação sucessiva para cada caso, sempre com a estrutura `enquanto multiplicador > 0`. Assim, a repetição serve como base para construir uma solução algorítmica de um problema matemático maior.

> [!tip] Resumindo  
> A repetição não serve apenas para tarefas operacionais; ela também permite implementar fórmulas matemáticas, como a combinação simples.

---

## 10. Diferença entre `enquanto` e `repita...até`

> [!info] Conceito  
> `Enquanto` testa antes; `repita...até` testa depois.

Os materiais deixam essa diferença muito clara. No `enquanto...faça`, a condição é avaliada antes da execução do bloco; por isso, o laço pode não acontecer nenhuma vez. Já no `repita...até`, a execução começa primeiro e a condição só é verificada no final. Como consequência, o bloco é executado **pelo menos uma vez**.

Essa distinção também aparece nos exercícios, que descartam a ideia de que o `enquanto` sempre executa pelo menos uma vez. O conteúdo mostra que essa característica pertence ao `repita...até`, e não ao `enquanto`.

> [!warning] Atenção  
> Confundir `enquanto` com `repita...até` é um erro comum: o primeiro é de **pré-teste**, e o segundo é de **pós-teste**.

> [!tip] Resumindo  
> Use `enquanto` quando a condição precisa ser verificada antes de entrar no laço; use `repita...até` quando o bloco deve executar ao menos uma vez.

---

## 11. O que os exercícios reforçam

> [!info] Conceito  
> Os exercícios consolidam os comportamentos essenciais da estrutura `enquanto`.

Pelos exercícios, ficam reforçadas algumas ideias centrais: o `enquanto` executa enquanto a condição for verdadeira; pode não executar nenhuma vez; exige inicialização adequada das variáveis; pode gerar loop infinito se a condição nunca mudar; e é especialmente útil quando o número de repetições não é conhecido antecipadamente.

Também aparece a importância de observar detalhes na construção do algoritmo, como começar a variável no valor correto, usar a condição adequada (`<= 10` em vez de `< 10`) e aplicar a operação pedida pelo enunciado. No exercício da tabuada, a alternativa correta é justamente a que inicializa `valor` com 1, usa multiplicação e repete até 10. Isso mostra que pequenos erros na condição ou na operação mudam completamente o resultado do algoritmo.

> [!tip] Resumindo  
> Os exercícios mostram que programar bem com `enquanto` depende de entender a lógica do laço e cuidar dos detalhes da condição, da inicialização e da atualização.

---

## 12. Síntese final

> [!summary] Síntese  
> A estrutura `enquanto...faça` é um recurso essencial para construir algoritmos que repetem comandos com base em uma condição. Ela é uma repetição por avaliação prévia, isto é, a condição é testada antes da execução do bloco, podendo inclusive impedir a primeira entrada no laço. Para funcionar corretamente, o algoritmo precisa inicializar as variáveis envolvidas, atualizar a condição dentro da repetição e definir claramente o critério de parada. Os materiais mostram essa lógica em exemplos simples, como contagem e conversão monetária, e em aplicações mais elaboradas, como cálculo de fatorial, médias e combinações simples. Também destacam que o `enquanto` é especialmente útil quando não se sabe antecipadamente quantas repetições serão necessárias, mas exigem cuidado para evitar loops infinitos e erros de lógica.
