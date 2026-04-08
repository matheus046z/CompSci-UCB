---
publish: true
---

# Resumo — Teste de Mesa

## Visão geral da unidade

> [!info] Conceito
> O teste de mesa é uma técnica usada para verificar se um algoritmo realmente executa a tarefa para a qual foi criado.

O material apresenta o **teste de mesa** como uma etapa essencial da validação de algoritmos. Ele pode ser feito manualmente ou com apoio de ferramentas, em formatos mais detalhados ou mais resumidos. O ponto principal não é o modelo escolhido, mas sim a capacidade de **acompanhar a execução do algoritmo passo a passo**, observando como os dados entram, como as variáveis mudam e qual saída é produzida.

A unidade tem como foco reconhecer a importância do teste de mesa, aplicá-lo em **pseudocódigo** e **fluxogramas** e distinguir os erros de **sintaxe** e **semântica**.

> [!tip] Resumindo
> Teste de mesa é a simulação da execução de um algoritmo para confirmar sua corretude antes da implementação definitiva.

---

## O que é teste de mesa e por que ele é importante

> [!info] Conceito
> O teste de mesa, também chamado no material de teste exaustivo, serve para verificar a corretude do algoritmo.

Segundo os anexos, o teste de mesa permite acompanhar o algoritmo **linha por linha**, registrando o conteúdo das variáveis e identificando possíveis falhas. Isso é especialmente importante para programadores iniciantes, porque ajuda a visualizar a lógica do programa e a entender se os resultados obtidos correspondem ao que foi planejado.

O livro reforça que o teste deve ser feito, sempre que possível, **antes da implementação em uma linguagem de programação**, usando vários conjuntos de dados de entrada. A ideia é cobrir o maior número possível de situações reais e também casos-limite, para aumentar a confiança no funcionamento do algoritmo.

> [!tip] Resumindo
> A principal função do teste de mesa é validar o algoritmo antes de transformá-lo em programa executável.

---

## Erros encontrados durante o teste

> [!info] Conceito
> Os erros observados no teste de mesa podem ser de sintaxe ou de semântica.

Os materiais explicam que, na informática, falhas em programas são chamadas de **bugs**, e o processo de correção recebe o nome de **debugging**. Durante o teste de mesa, esses problemas podem aparecer de duas formas principais.

O **erro de sintaxe** acontece quando o comando foi escrito fora das regras da linguagem. É o caso, por exemplo, de um comando escrito incorretamente ou da ausência de um fechamento esperado, como um `fimse`. Esse tipo de erro costuma **impedir a execução do algoritmo**.

Já o **erro de semântica** é mais difícil de perceber, porque o algoritmo pode até executar, mas produz um resultado inadequado. Ele está ligado a **falhas lógicas**, como uso incorreto de operadores aritméticos, relacionais ou lógicos, ou ainda atribuições erradas às variáveis. Nessa situação, o programa funciona, mas o comportamento final não é o desejado.

> [!warning] Atenção
> Erro de sintaxe impede a execução; erro de semântica permite executar, mas pode gerar resultado errado.

> [!tip] Resumindo
> Sintaxe está ligada à forma de escrever o algoritmo; semântica está ligada ao significado da lógica usada.

---

## Como montar um teste de mesa

> [!info] Conceito
> Construir o teste de mesa significa preparar uma forma de registrar, passo a passo, a execução do algoritmo.

A orientação apresentada nos anexos é começar pela leitura do algoritmo, identificando todas as **variáveis declaradas**. Em seguida, monta-se uma tabela com colunas para essas variáveis e, quando necessário, uma coluna para a **saída de dados** na tela. Depois disso, acompanha-se a execução linha a linha, registrando cada alteração nos valores das variáveis ao longo do processamento.

Nos exemplos do professor, aparecem também convenções visuais: os **colchetes** representam as **entradas** fornecidas ao algoritmo, e as **chaves** representam as **saídas** produzidas. Isso ajuda a separar claramente o que o usuário informa do que o programa devolve.

O material também mostra que existem modelos **detalhados** e **simplificados**. No modelo detalhado, registram-se as linhas executadas, as variáveis e a saída. No simplificado, anotam-se apenas os valores essenciais das variáveis conforme elas mudam. Ambos podem ser válidos, desde que permitam verificar corretamente o comportamento do algoritmo.

> [!tip] Resumindo
> Para fazer um teste de mesa, é preciso observar entradas, processamento, mudanças nas variáveis e saídas do algoritmo.

---

## Critérios para construir algoritmos melhores

> [!info] Conceito
> O teste de mesa fica mais claro quando o algoritmo foi construído de forma simples e bem organizada.

O trecho do livro destaca alguns critérios importantes para a construção de algoritmos de qualidade. Entre eles estão buscar **soluções simples**, desenvolver o algoritmo por **refinamentos sucessivos**, seguir as etapas necessárias da construção, definir um **nome claro** no cabeçalho e informar também o **objetivo**, as **entradas** e as **saídas**. O material também recomenda evitar desvios incondicionais, como o uso de **GOTO**.

Essas orientações não fazem parte apenas da escrita do algoritmo; elas também ajudam diretamente no teste. Um algoritmo claro, com variáveis compreensíveis e etapas bem separadas, é muito mais fácil de simular e validar.

> [!tip] Resumindo
> Quanto mais claro e organizado for o algoritmo, mais fácil será testá-lo e encontrar erros.

---

## Planejamento dos casos de teste

> [!info] Conceito
> Um bom teste de mesa depende da escolha cuidadosa dos dados de entrada.

Os anexos insistem que não basta testar apenas um exemplo. É necessário usar **diferentes conjuntos de dados**, cobrindo a maior quantidade possível de situações. Quando o algoritmo trabalha dentro de limites definidos, devem ser considerados valores **válidos**, **limítrofes válidos**, **inválidos próximos do limite** e **inválidos fora do intervalo**.

O livro exemplifica isso com um algoritmo que aceita valores inteiros de 1 a 10. Nesse caso, o ideal seria testar valores como **0, 1, 10, 11** e também um **valor negativo**. Em outros exemplos, os testes incluem entradas nulas, positivas, negativas, iguais entre si, diferentes entre si e valores reais. O objetivo é reduzir a chance de um erro passar despercebido.

> [!warning] Atenção
> Testar só casos “bonitos” ou medianos não é suficiente. Também é preciso testar limites, entradas incorretas e situações extremas.

> [!tip] Resumindo
> Bons testes incluem casos normais, casos de borda, casos inválidos e, quando possível, o pior e o melhor cenário.

---

## Testes em algoritmos com seleção e decisão

> [!info] Conceito
> Quando há condições no algoritmo, o teste deve percorrer o maior número possível de caminhos de execução.

Nos trechos sobre estruturas condicionais, o material orienta que programas com comandos `se... então...` ou `se... então... senão...` precisam ser testados com conjuntos de dados que façam a condição resultar tanto em **verdadeiro** quanto em **falso**. Assim, consegue-se verificar se todos os caminhos possíveis do algoritmo estão corretos.

O texto também mostra que, em comandos aninhados, é preciso testar os **intervalos de decisão**, incluindo seus limites. Um exemplo apresentado é a classificação por média, em que diferentes faixas levam a conceitos distintos. Nesse caso, é necessário escolher valores que permitam verificar cada faixa de classificação e também os pontos exatos de mudança entre elas.

Além disso, o material alerta que o programa deve ser testado com **dados incorretos**, para verificar como ele reage. A execução não deveria simplesmente parar; o ideal é que o algoritmo consiga sinalizar o problema ao usuário.

> [!tip] Resumindo
> Em algoritmos com decisão, o teste precisa confirmar tanto o caminho verdadeiro quanto o falso, inclusive nos casos de fronteira.

---

## Depuração com comandos de saída

> [!info] Conceito
> Uma forma de depurar programas é inserir saídas temporárias para acompanhar os valores das variáveis.

O livro mostra que, durante o desenvolvimento, podem ser colocados **comandos de saída auxiliares** ao longo do algoritmo para observar os valores lidos e calculados. Essa prática ajuda a confirmar se os dados estão sendo processados da forma esperada. Depois que os testes forem concluídos, esses comandos devem ser removidos.

Essa ideia reforça o papel do teste de mesa: tanto na simulação manual quanto na depuração do programa, o foco é enxergar claramente o caminho seguido pelos dados.

> [!tip] Resumindo
> Mostrar temporariamente os valores das variáveis ajuda a encontrar onde a lógica pode estar falhando.

---

## Aplicação do teste de mesa em pseudocódigo e fluxograma

> [!info] Conceito
> O teste de mesa pode ser aplicado tanto a algoritmos em pseudocódigo quanto a algoritmos representados em fluxograma.

Os exercícios mostram essa aplicação em diferentes formatos. Em um caso, a análise é feita sobre trechos de pseudocódigo com variáveis, operadores lógicos, resto da divisão, potência e raiz quadrada. Em outro, o teste é aplicado a um fluxograma que calcula juros a partir de valor, taxa mensal e número de dias. Em todos os casos, a lógica é a mesma: acompanhar as entradas, executar as operações na ordem correta e registrar o valor final das variáveis e das saídas.

Também aparece um exemplo simples de cálculo da área de um quadrado, mostrando que o teste pode ser representado de formas diferentes: em tabela detalhada, em tabela mais preenchida ou até em forma bastante resumida. O importante é que a representação permita visualizar corretamente a leitura do valor, o cálculo e o resultado mostrado.

> [!tip] Resumindo
> O formato do algoritmo pode mudar, mas o objetivo do teste permanece o mesmo: verificar a execução passo a passo.

---

## Exemplo prático: cálculo do frete pelos Correios

> [!info] Conceito
> O exemplo prático do material usa o teste de mesa para validar um algoritmo de cálculo de frete com base no peso físico e no peso cúbico.

Na seção “Na prática”, o conteúdo apresenta o cálculo do **peso cúbico** usando a fórmula `C × L × A / 6000`, em que `C` é comprimento, `L` é largura e `A` é altura. O algoritmo proposto lê o peso físico e as dimensões do produto, calcula o peso cúbico e decide qual peso será considerado para a cobrança do frete.

O material explica que, se o **peso físico for menor ou igual a 10 kg**, considera-se diretamente o **peso físico**. Se for **maior que 10 kg**, faz-se a comparação entre o peso físico e o peso cúbico, sendo usado o **maior valor**.

Para validar esse algoritmo, são feitos **três testes**: um com peso físico menor ou igual a 10 kg, outro com peso físico maior que 10 kg e peso cúbico maior que o físico, e um terceiro com peso físico maior que 10 kg e peso cúbico menor ou igual ao físico. O exemplo mostra bem como o teste de mesa serve para cobrir todas as situações relevantes do problema.

> [!warning] Atenção
> Nesse exemplo, não basta testar um único caso. Como há decisões diferentes no algoritmo, é necessário testar todas as possibilidades previstas.

> [!tip] Resumindo
> O exemplo do frete mostra que o teste de mesa confirma se a regra de decisão foi implementada corretamente em cada cenário.

---

## Desafio da unidade: média ponderada e classificação

> [!info] Conceito
> O desafio propõe criar um algoritmo que leia três notas, calcule a média ponderada e classifique o resultado.

Um dos anexos apresenta um desafio em que três notas possuem pesos diferentes: atividade prática em laboratório, prova do semestre e trabalho teórico. O algoritmo deve calcular a **média ponderada**, usando a soma dos produtos entre cada nota e seu peso, dividida pela soma total dos pesos. Depois disso, a média deve ser enquadrada em uma tabela de **classificação**, que vai de **A** a **F**.

Esse exercício reforça dois pontos centrais da unidade. O primeiro é a construção de um algoritmo com regras de decisão. O segundo é a necessidade de realizar vários testes de mesa para contemplar **todas as saídas possíveis**, inclusive valores inválidos, como notas maiores que 10 ou menores que 0, que aparecem no pseudocódigo proposto.

> [!tip] Resumindo
> O desafio da média ponderada mostra como o teste de mesa ajuda a validar fórmulas e classificações por faixa de valores.

---

## O que os exercícios reforçam

> [!info] Conceito
> Os exercícios servem para fixar a lógica do teste de mesa em diferentes contextos.

Os anexos trazem exercícios que exigem calcular valores finais de variáveis, identificar conceitos teóricos e confirmar saídas de algoritmos. Em conjunto, eles reforçam que o teste de mesa não é apenas uma tabela preenchida mecanicamente; ele é uma forma de **entender o comportamento do algoritmo**, verificar expressões lógicas, acompanhar atribuições, interpretar divisões inteiras, restos, cálculos e condições.

Também fica claro que um mesmo algoritmo pode admitir mais de uma forma válida de representação no teste de mesa, desde que a lógica de execução continue sendo mostrada corretamente.

> [!tip] Resumindo
> Os exercícios reforçam a leitura atenta do algoritmo, a ordem das operações e a análise correta das condições.

---

## Síntese final

> [!summary] Síntese
> O teste de mesa é uma técnica de validação que permite simular a execução de um algoritmo antes de implementá-lo. Ele ajuda a verificar a corretude da lógica, acompanhar o valor das variáveis e identificar erros. Os materiais distinguem claramente os erros de sintaxe, que impedem a execução, e os erros de semântica, que produzem comportamentos inadequados mesmo quando o programa executa.
>
> Para montar um bom teste de mesa, é preciso identificar as variáveis, registrar entradas, processamento e saídas, e escolher cuidadosamente os dados de teste. Os melhores testes incluem casos normais, limites, casos inválidos e diferentes caminhos de decisão. Isso vale tanto para pseudocódigo quanto para fluxogramas.
>
> Os exemplos práticos, como o cálculo do frete e a média ponderada, mostram que a validação do algoritmo depende de testar todas as situações previstas. Assim, o teste de mesa aparece no material como uma ferramenta essencial para melhorar a qualidade dos algoritmos e aumentar a confiança em seu funcionamento.


