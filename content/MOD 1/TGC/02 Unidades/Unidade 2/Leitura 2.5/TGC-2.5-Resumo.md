---
publish: true
---

# Resumo — Estruturas condicionais simples em pseudocódigo

## 1. Visão geral da unidade

> [!info] Conceito
> Esta unidade estuda as **estruturas condicionais simples**, que permitem alterar o fluxo normal de um algoritmo conforme o resultado de uma condição.

Os materiais mostram que muitos problemas não podem ser resolvidos apenas com execução sequencial, isto é, com comandos rodando sempre na mesma ordem e sem desvios. Em várias situações, uma ação só deve acontecer se determinada condição for verdadeira. Por isso, a unidade introduz o uso de comandos condicionais simples em pseudocódigo, com foco na ferramenta VisuAlg e em exemplos práticos de tomada de decisão.

> [!tip] Resumindo
> A estrutura condicional simples serve para **executar uma ação somente quando uma condição for satisfeita**.

---

## 2. O que é uma estrutura condicional simples

> [!info] Conceito
> Um **comando de seleção simples** ou **comando condicional simples** vincula a execução de um comando ao resultado de uma expressão lógica.

O livro explica que esse tipo de estrutura é usado quando o algoritmo precisa decidir se executa ou não uma ação. A base da decisão é uma **expressão lógica**, isto é, uma condição que será avaliada como verdadeira ou falsa. Se o resultado for verdadeiro, o comando associado será executado. Se o resultado for falso, nada é executado naquele ponto.

Essa ideia aproxima o algoritmo de decisões do cotidiano. Assim como uma pessoa age de forma diferente conforme o resultado de uma escolha, o programa também pode desviar seu fluxo e executar ações específicas dependendo da condição analisada.

> [!tip] Resumindo
> A condicional simples responde à pergunta: **“se isso for verdadeiro, então faça aquilo”**.

---

## 3. Diferença entre algoritmo sequencial e algoritmo com condição

> [!info] Conceito
> Em um algoritmo **sequencial**, todas as instruções são executadas em ordem. Em um algoritmo com **condicional**, algumas instruções podem ser executadas ou ignoradas.

Os materiais destacam que os algoritmos estudados anteriormente eram puramente sequenciais, ou seja, toda instrução era executada, uma após a outra, sem exceção. Com a introdução dos condicionais, passa a existir a possibilidade de um trecho do programa só acontecer em certos casos.

Isso significa que o fluxo deixa de ser totalmente fixo. A sequência continua existindo, mas alguns comandos passam a depender do resultado de um teste lógico. Essa mudança é importante porque amplia muito a capacidade dos algoritmos de representar situações reais.

> [!warning] Atenção
> O comando condicional simples **não substitui** a execução sequencial; ele apenas acrescenta um ponto de decisão dentro dela.

> [!tip] Resumindo
> O algoritmo sequencial sempre executa tudo. O algoritmo com condição **testa primeiro e executa depois, se for o caso**.

---

## 4. Expressão lógica: o centro da decisão

> [!info] Conceito
> A **expressão lógica** é a condição que o algoritmo avalia para decidir se um comando será executado.

A dica do professor afirma que o ponto-chave do comando de seleção simples é construir corretamente a expressão lógica. Ela pode ser **simples**, quando envolve uma única comparação, ou **composta**, quando usa operadores lógicos para combinar várias condições. Em ambos os casos, o resultado final precisa ser verdadeiro ou falso.

Nos exemplos apresentados, aparecem condições como `média >= 6`, `diferenca >= 18`, `venda < 55000` e combinações como `(nota1 >= 6) e (nota2 >= 6) e (nota3 >= 6)`. Essas expressões mostram como o algoritmo transforma regras do problema em testes formais e objetivos.

> [!warning] Atenção
> Se a expressão lógica estiver errada, o algoritmo poderá tomar uma decisão errada, mesmo que o restante do código esteja correto.

> [!tip] Resumindo
> A expressão lógica é a **regra de decisão** que controla o comportamento do algoritmo.

---

## 5. Sintaxe básica do comando de seleção simples

> [!info] Conceito
> A forma básica da seleção simples é representada pela estrutura `se ... então`.

O livro apresenta a sintaxe conceitual como:

`se <expressão lógica> então <comando>`

Já a dica do professor mostra a escrita em pseudocódigo no estilo do VisuAlg, usando `se`, `entao` e `fimse`. Em termos práticos, o algoritmo lê dados, avalia a condição e, somente se ela for verdadeira, executa a ação ligada a esse teste.

Essa sintaxe expressa claramente a lógica da decisão. Primeiro vem a condição, depois a consequência da condição verdadeira. Não existe, nesse modelo simples, uma ação específica para o caso falso. Se a condição falhar, o programa apenas segue adiante.

> [!tip] Resumindo
> A estrutura básica é: **testar uma condição e executar um comando apenas se ela for verdadeira**.

---

## 6. O que acontece quando a condição é verdadeira ou falsa

> [!info] Conceito
> Na seleção simples, a ação acontece **somente no caso verdadeiro**.

O material enfatiza que, se a condição for verdadeira, o comando associado é executado. Se a condição for falsa, nada acontece naquele bloco. Esse comportamento aparece tanto nas explicações teóricas quanto nos fluxogramas anexados. No primeiro diagrama, vê-se claramente que o caminho “verdadeiro” leva ao bloco de comando, enquanto o caminho “falso” apenas segue o fluxo normal sem executar a ação.

Essa é a principal característica da seleção simples: ela não define uma resposta alternativa para o caso falso. Ela apenas cria uma oportunidade de execução condicional quando a regra for atendida.

> [!warning] Atenção
> Na seleção simples, o caso falso **não executa um comando alternativo**. Ele apenas ignora o bloco e continua o fluxo do programa.

> [!tip] Resumindo
> Verdadeiro: executa. Falso: **não executa nada naquele bloco**.

---

## 7. Fluxograma da seleção simples

> [!info] Conceito
> O fluxograma ajuda a visualizar como a condição interfere no caminho do algoritmo.

Os diagramas anexados mostram que o teste lógico é representado por um losango. A partir dele, o fluxo pode seguir por dois caminhos: um para o caso verdadeiro e outro para o caso falso. No caso verdadeiro, o comando ou bloco de comandos é executado. No caso falso, o fluxo apenas retorna ao caminho principal.

Esse tipo de representação visual é útil porque deixa claro que a decisão não interrompe o programa, apenas define se uma ação deve acontecer naquele momento. Nos exemplos com notas, o fluxograma mostra com clareza como a média é calculada, exibida e, dependendo da condição, complementada com a informação de aprovação.

> [!tip] Resumindo
> O fluxograma mostra visualmente que a condicional é um **ponto de bifurcação temporária** no fluxo do algoritmo.

---

## 8. Exemplo clássico: aprovação por média

> [!info] Conceito
> Um dos exemplos centrais da unidade é usar a condicional simples para informar se o aluno foi aprovado.

O livro retoma o problema da média aritmética de três notas e o estende: além de calcular a média, o algoritmo deve informar “Aprovado” quando a média for igual ou superior a 6. Nesse caso, a média continua sendo calculada e exibida de forma sequencial, mas a mensagem de aprovação só aparece quando a condição é verdadeira.

Os diagramas ilustram isso de forma clara. Primeiro, o algoritmo lê `nota1`, `nota2` e `nota3`, depois calcula a média e a exibe. Em seguida, testa se `média >= 6`. Se a condição for verdadeira, aparece a saída “Aprovado”. Se for falsa, o programa termina sem mostrar essa mensagem.

> [!tip] Resumindo
> O algoritmo sempre calcula a média, mas só informa “Aprovado” **se a média atender à condição exigida**.

---

## 9. Comando composto dentro da seleção simples

> [!info] Conceito
> Quando mais de um comando precisa ser executado sob a mesma condição, usa-se um **comando composto**.

O livro explica que a seleção simples, em sua forma mais básica, associa a condição a um único comando. Porém, em muitos problemas, é necessário executar várias ações quando a condição for verdadeira. Para isso, utiliza-se um bloco delimitado por `início` e `fim`, tratado como um único comando composto.

Esse recurso aparece no exemplo em que a média do aluno só deve ser calculada e exibida se as três notas forem maiores ou iguais a 6. Nesse caso, o cálculo da média e sua exibição ficam dentro do mesmo bloco condicional. O fluxograma anexado mostra isso ao ligar a condição verdadeira a dois passos sucessivos: calcular e depois informar a média.

> [!warning] Atenção
> O comando composto não muda a lógica da seleção simples. Ele apenas permite executar **vários comandos como um único bloco condicionado**.

> [!tip] Resumindo
> Se a condição controlar mais de uma ação, usa-se um **bloco de comandos** dentro da estrutura condicional.

---

## 10. Expressões lógicas compostas

> [!info] Conceito
> Uma expressão lógica composta combina várias condições em uma única decisão.

Nos materiais, aparecem expressões compostas usando conectivos como **e**. Um exemplo importante é o teste `(nota1 >= 6) e (nota2 >= 6) e (nota3 >= 6)`, usado para verificar se todas as notas atendem ao critério mínimo. Nesse caso, a condição só será verdadeira se todas as comparações forem verdadeiras ao mesmo tempo.

A dica do professor também traz exemplos com duas exigências simultâneas, como verificar sexo e tempo de empresa para decidir se um bônus deve ser exibido. Isso reforça que problemas reais frequentemente dependem de mais de uma informação ao mesmo tempo.

> [!tip] Resumindo
> A expressão lógica composta permite dizer algo como: **“faça isso somente se várias condições forem satisfeitas juntas”**.

---

## 11. Uso prático no VisuAlg

> [!info] Conceito
> O VisuAlg é usado para escrever, testar e validar os algoritmos com condicionais simples.

Os anexos mostram que o pseudocódigo da unidade é desenvolvido na ferramenta VisuAlg. Ela permite criar algoritmos, inserir dados, testar o comportamento das condições e verificar se a saída obtida corresponde ao esperado. Isso é importante porque o estudante não trabalha apenas com a teoria da condição, mas também com sua aplicação prática.

Nos exercícios e desafios, o VisuAlg aparece como ambiente de implementação dos algoritmos de comissão, maioridade, classificação numérica e financiamento. Assim, ele funciona como um laboratório de testes do raciocínio lógico.

> [!tip] Resumindo
> No VisuAlg, o aluno pode **experimentar a condicional simples na prática e confirmar se a decisão do algoritmo está correta**.

---

## 12. Problemas que exigem condicionais simples

> [!info] Conceito
> Estruturas condicionais simples são necessárias quando uma ação só deve ocorrer em circunstâncias específicas.

Os exemplos dos materiais mostram claramente esse tipo de situação. Informar aprovação só faz sentido quando a média atende ao mínimo exigido. Exibir “É maior de idade” depende de a idade ser 18 ou mais. Mostrar uma mensagem de que um número é positivo, negativo ou zero depende do valor informado. Da mesma forma, liberar um financiamento ou conceder um bônus exige verificar regras antes de agir.

Esses casos evidenciam que a seleção simples é adequada sempre que existe uma ação condicionada, sem a necessidade imediata de definir uma alternativa específica para o caso falso.

> [!tip] Resumindo
> Usa-se a condicional simples quando o problema diz, em essência: **“só faça isso se tal condição acontecer”**.

---

## 13. Exemplo: classificação de número

> [!info] Conceito
> Um exercício mostra como identificar se um número é negativo, positivo ou zero usando testes condicionais separados.

Nesse algoritmo, o número inteiro é lido e depois três condições independentes são testadas: `n < 0`, `n > 0` e `n = 0`. Cada condição, quando verdadeira, produz a mensagem correspondente. O exercício destaca que essa abordagem funciona corretamente porque cobre todas as possibilidades para um número inteiro.

Esse exemplo é útil porque mostra que várias seleções simples podem coexistir no mesmo algoritmo, cada uma verificando uma situação diferente. Isso amplia o entendimento de como os condicionais podem ser combinados sem deixar de ser simples.

> [!tip] Resumindo
> Várias seleções simples podem ser usadas no mesmo algoritmo para testar **casos diferentes de um mesmo problema**.

---

## 14. Exemplo: maioridade

> [!info] Conceito
> O problema da maioridade mostra como transformar uma regra do mundo real em uma expressão lógica objetiva.

No exercício, o algoritmo lê o ano de nascimento e o ano atual, calcula a diferença e usa essa diferença como idade aproximada. Depois, testa a condição `diferenca >= 18`. Se ela for verdadeira, o algoritmo exibe a mensagem “É maior de idade”.

Esse caso é importante porque ensina a separar o problema em duas partes: primeiro calcular a informação necessária, depois usar essa informação em uma condição. Assim, a condicional não substitui o processamento; ela depende dele para funcionar corretamente.

> [!tip] Resumindo
> Primeiro o algoritmo calcula a idade; depois usa uma condição para decidir **se informa ou não a maioridade**.

---

## 15. Exemplo: comissão sobre vendas

> [!info] Conceito
> O desafio da unidade usa comandos condicionais simples para calcular a comissão de vendedores conforme faixas de venda.

O problema apresenta três regras: se o vendedor vender entre R$ 55.000,00 e R$ 100.000,00, recebe 2% sobre a venda; se vender menos de R$ 55.000,00, recebe comissão fixa de R$ 100,00; se vender mais de R$ 100.000,00, recebe comissão fixa de R$ 5.000,00. Depois disso, o algoritmo deve calcular o salário final somando salário-base e comissão.

Esse exemplo é importante porque mostra que as condicionais simples conseguem representar regras de negócio reais. Ele também evidencia o uso de várias verificações para tratar diferentes faixas de valores, sempre controlando a atribuição da comissão conforme a condição adequada.

> [!warning] Atenção
> Em problemas desse tipo, é essencial definir corretamente os limites das faixas numéricas, para evitar erros na comissão calculada.

> [!tip] Resumindo
> O algoritmo da comissão aplica regras diferentes conforme o valor da venda, usando condições para definir **qual bônus será dado**.

---

## 16. Exemplo: financiamento pessoal

> [!info] Conceito
> O caso do financiamento bancário mostra a aplicação de seleção simples com regras sucessivas e encadeadas.

Nesse problema, o financiamento só pode ser concedido se o valor solicitado não ultrapassar quatro vezes o salário líquido. Apenas se essa condição for verdadeira o algoritmo continua calculando juros, total a pagar, número de parcelas e valor de cada parcela. Dentro desse processo, ainda há novas condições: se o cliente tiver mais de três anos na empresa, recebe desconto nos juros; se o valor financiado for maior que R$ 5.000,00, o parcelamento passa a ser em seis vezes.

Esse exemplo mostra que a seleção simples pode ser usada em etapas sucessivas, criando uma lógica de decisões condicionadas. O programa primeiro verifica se o financiamento é permitido; depois, apenas se for permitido, executa outros cálculos que também dependem de condições.

> [!tip] Resumindo
> O financiamento pessoal mostra que a seleção simples pode controlar **várias decisões encadeadas dentro de um mesmo problema**.

---

## 17. Relação entre condição e ação

> [!info] Conceito
> O valor da estrutura condicional está em ligar uma **regra** a uma **ação específica**.

Os materiais deixam claro que o algoritmo com condição não toma decisões “por conta própria”; ele apenas segue regras definidas pelo programador. Quando a expressão lógica é verdadeira, a ação vinculada é executada. Quando é falsa, essa ação não ocorre. Esse vínculo direto entre regra e consequência é o que torna a estrutura condicional útil para representar decisões do mundo real em linguagem algorítmica.

Por isso, aprender condicionais simples significa aprender a traduzir frases como “se isso acontecer, faça aquilo” para pseudocódigo claro, objetivo e testável.

> [!tip] Resumindo
> A condicional simples une **uma condição avaliada** a **uma ação que depende dessa avaliação**.

---

## 18. Cuidados na construção da solução

> [!info] Conceito
> Para que a estrutura condicional funcione corretamente, é necessário escrever bem a condição e posicionar corretamente os comandos.

Os materiais mostram que erros na comparação, no uso de operadores lógicos ou na delimitação do bloco condicional comprometem a solução. Também é importante lembrar que, na seleção simples, o comando ou bloco só roda no caso verdadeiro. Portanto, se o problema exigir tratamento explícito do caso falso, apenas a seleção simples pode não ser suficiente sozinha.

Além disso, os exemplos mostram que os dados devem ser lidos antes da avaliação da condição e que as variáveis usadas na expressão lógica precisam conter valores já calculados corretamente.

> [!warning] Atenção
> Antes de testar uma condição, o algoritmo precisa ter os dados corretos. Uma decisão baseada em valores mal lidos ou mal calculados compromete todo o resultado.

> [!tip] Resumindo
> Para acertar a condicional, é preciso garantir **entrada correta, cálculo correto e expressão lógica bem formulada**.

---

## Síntese final

> [!summary] Síntese
> Os materiais desta unidade apresentam a **estrutura condicional simples** como um recurso que permite alterar o fluxo normal de um algoritmo com base na avaliação de uma **expressão lógica**. Diferentemente do algoritmo puramente sequencial, em que tudo é executado em ordem, a seleção simples faz com que um comando ou um bloco de comandos só seja executado quando a condição for **verdadeira**. Se ela for falsa, nada acontece naquele trecho e o fluxo continua. O conteúdo mostra a sintaxe básica com `se ... então`, o uso do **comando composto** para agrupar várias ações sob a mesma condição, e a importância de construir corretamente expressões lógicas simples ou compostas. Os fluxogramas anexados ajudam a visualizar esse comportamento, especialmente nos exemplos com notas e aprovação. Os exercícios e aplicações práticas, como **classificação de número**, **maioridade**, **comissão de vendedores** e **financiamento pessoal**, mostram que a seleção simples é essencial para representar regras do mundo real em pseudocódigo. Em conjunto, os materiais ensinam que a chave da estrutura condicional simples está em **testar corretamente uma condição e executar a ação certa apenas quando a regra for satisfeita**.
