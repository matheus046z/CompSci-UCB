---
publish: true
---

### 1
> [!question] Exercício 1
> Desenvolva um algoritmo que solicite ao usuário informar dois números inteiros (**A** e **B**), realize o somatório dos números no intervalo **[A,B]** e mostre o resultado na tela.
>
> Por exemplo, se **A = 1** e **B = 5**, o algoritmo realizará a soma:
>
> **1 + 2 + 3 + 4 + 5 = 15**
>
> e mostrará o resultado na tela.
>
> Qual das soluções abaixo representa uma solução correta para a resolução do algoritmo acima?
>
> **A.**
>
> ```text
> algoritmo "somatorio"
> var A, B, L, S : inteiro
> inicio
>    escreva("Digite um valor para A: ")
>    leia(A)
>    escreva("Digite um valor para B: ")
>    leia(B)
>    S <- 0
>    para L de A ate B faca
>       S <- S + L
>    fimpara
>    escreval("Somatorio: ",S)
> fimalgoritmo
> ```
>
> **B.**
>
> ```text
> algoritmo "somatorio"
> var A, B, L, S : inteiro
> inicio
>    escreva("Digite um valor para A: ")
>    leia(A)
>    escreva("Digite um valor para B: ")
>    leia(B)
>    S <- 0
>    para L de A ate B passo 1 faca
>       S <- S + 1
>    fimpara
>    escreval("Somatorio: ",S)
> fimalgoritmo
> ```
>
> **C.**
>
> ```text
> algoritmo "somatorio"
> var A, B, L, S : inteiro
> inicio
>    escreva("Digite um valor para A: ")
>    leia(A)
>    escreva("Digite um valor para B: ")
>    leia(B)
>    para L de A ate B faca
>       S <- 0
>       S <- S + 1
>    fimpara
>    escreval("Somatorio: ",S)
> fimalgoritmo
> ```
>
> **D.**
>
> ```text
> algoritmo "somatorio"
> var A, B, L, S : inteiro
> inicio
>    escreva("Digite um valor para A: ")
>    leia(A)
>    escreva("Digite um valor para B: ")
>    leia(B)
>    S <- 0
>    para L de A ate B passo 2 faca
>       S <- S + L
>    fimpara
>    escreval("Somatorio: ",S)
> fimalgoritmo
> ```
>
> **E.**
>
> ```text
> algoritmo "somatorio"
> var A, B, L, S : inteiro
> inicio
>    escreva("Digite um valor para A: ")
>    leia(A)
>    escreva("Digite um valor para B: ")
>    leia(B)
>    para L de A ate B faca
>       S <- S + A * B
>    fimpara
>    escreval("Somatorio: ",S)
> fimalgoritmo
> ```
>> [!question]- Resposta
>> **Alternativa correta: A.**
>>
>> O enunciado pede o **somatório de todos os números inteiros do intervalo [A,B]**.  
>> Portanto, o algoritmo correto precisa:
>>
>> - ler **A** e **B**;
>> - iniciar **S** com **0**;
>> - percorrer os valores de **A até B**;
>> - somar cada valor de **L** em **S**.
>>
>> **Exemplo com A = 1 e B = 5:**
>>
>> - S = 0
>> - S = 0 + 1 = 1
>> - S = 1 + 2 = 3
>> - S = 3 + 3 = 6
>> - S = 6 + 4 = 10
>> - S = 10 + 5 = 15
>>
>> **Resultado final: 15**
>>
>> **Análise das alternativas:**
>>
>> **A.** Correta.  
>> Essa alternativa faz exatamente o que o problema pede: inicializa **S = 0**, percorre de **A até B** e acumula com **S <- S + L**.
>>
>> **B.** Errada.  
>> Ela soma sempre **1** em cada repetição, em vez de somar o valor da variável **L**. Assim, conta quantas iterações existem, mas não faz o somatório do intervalo.
>>
>> **C.** Errada.  
>> Dentro do laço, ela reinicializa **S <- 0** a cada repetição. Com isso, perde as somas anteriores e não acumula corretamente os valores do intervalo.
>>
>> **D.** Errada.  
>> Usa **passo 2**, então pula valores do intervalo. Em vez de somar todos os números entre **A** e **B**, soma apenas de dois em dois.
>>
>> **E.** Errada.  
>> Em vez de somar os valores do intervalo, ela soma repetidamente o produto **A * B**. Isso não corresponde ao somatório pedido no enunciado.



### 2
> [!question] Exercício 2
> Uma **progressão aritmética** é uma sequência de valores (termos), em que os termos, a partir do segundo, são obtidos adicionando-se um valor constante ao termo anterior. Esse valor constante é chamado de **razão** da progressão aritmética.
>
> Por exemplo, na progressão aritmética **1, 5, 9, 13, 17, 21, ...**, a razão é **4**.
>
> Deseja-se construir um algoritmo que leia o **primeiro termo** da progressão aritmética, o valor da **razão** e a **quantidade de termos** que devem ser gerados. A partir dessas informações, o algoritmo deve listar os termos da progressão aritmética.
>
> Exemplo:
> - primeiro termo = **4**
> - razão = **2**
> - quantidade de termos = **5**
>
> Saída esperada:
> **4, 6, 8, 10, 12**
>
> Analise as alternativas a seguir e selecione a que apresenta a implementação correta desse algoritmo.
>
> **A.**
>
> ```text
> algoritmo "progressao"
>    var primeiro, razao, termos, novo, L : inteiro
> inicio
>    escreval("Progressão Aritmética")
>    escreva("Digite o primeiro termo:")
>    leia(primeiro)
>    escreva("Digite a razão: ")
>    leia(razao)
>    escreva("Digite a quantidade de termos: ")
>    leia(termos)
>    novo <- primeiro
>    para L de 1 ate termos passo 1 faca
>       escreval(novo)
>       novo <- novo + razao
>    fimpara
> fimalgoritmo
> ```
>
> **B.**
>
> ```text
> algoritmo "progressao"
>    var primeiro, razao, termos, novo, L : inteiro
> inicio
>    escreval("Progressão Aritmética")
>    escreva("Digite o primeiro termo:")
>    leia(primeiro)
>    escreva("Digite a razão: ")
>    leia(razao)
>    escreva("Digite a quantidade de termos: ")
>    leia(termos)
>    novo <- primeiro
>    para L de primeiro ate termos passo 1 faca
>       escreval(novo)
>       novo <- novo + razao
>    fimpara
> fimalgoritmo
> ```
>
> **C.**
>
> ```text
> algoritmo "progressao"
>    var primeiro, razao, termos, novo, L : inteiro
> inicio
>    escreval("Progressão Aritmética")
>    escreva("Digite o primeiro termo:")
>    leia(primeiro)
>    escreva("Digite a razão: ")
>    leia(razao)
>    escreva("Digite a quantidade de termos: ")
>    leia(termos)
>    novo <- primeiro
>    para L de 1 ate termos passo 1 faca
>       novo <- novo + razao
>       escreval(novo)
>    fimpara
> fimalgoritmo
> ```
>
> **D.**
>
> ```text
> algoritmo "progressao"
>    var primeiro, razao, termos, novo, L : inteiro
> inicio
>    escreval("Progressão Aritmética")
>    escreva("Digite o primeiro termo:")
>    leia(primeiro)
>    escreva("Digite a razão: ")
>    leia(razao)
>    escreva("Digite a quantidade de termos: ")
>    leia(termos)
>    novo <- 0
>    para L de primeiro ate termos passo 1 faca
>       escreval(novo)
>       novo <- novo + razao
>    fimpara
> fimalgoritmo
> ```
>
> **E.**
>
> ```text
> algoritmo "progressao"
>    var primeiro, razao, termos, novo, L : inteiro
> inicio
>    escreval("Progressão Aritmética")
>    escreva("Digite o primeiro termo:")
>    leia(primeiro)
>    escreva("Digite a razão: ")
>    leia(razao)
>    escreva("Digite a quantidade de termos: ")
>    leia(termos)
>    novo <- primeiro
>    para L de primeiro ate termos passo 1 faca
>       escreval(novo)
>    fimpara
> fimalgoritmo
> ```
>> [!question]- Resposta
>> **Alternativa correta: A.**
>>
>> Para o algoritmo estar correto, ele precisa:
>> - ler o **primeiro termo**, a **razão** e a **quantidade de termos**;
>> - iniciar a variável **novo** com o valor do **primeiro termo**;
>> - repetir exatamente a quantidade informada em **termos**;
>> - exibir o valor atual;
>> - depois atualizar com **novo <- novo + razao**.
>>
>> **Teste com o exemplo do enunciado:**
>> - primeiro = 4
>> - razão = 2
>> - termos = 5
>>
>> Na alternativa correta, a saída será:
>> - 4
>> - 6
>> - 8
>> - 10
>> - 12
>>
>> **Análise das alternativas:**
>>
>> **A.** Correta.  
>> Inicia **novo** com o primeiro termo, repete de **1 até termos**, exibe o valor atual e depois soma a razão. Gera exatamente a progressão pedida.
>>
>> **B.** Errada.  
>> O laço vai de **primeiro até termos**. Isso está incorreto, porque a repetição deve ocorrer pela **quantidade de termos**, e não começar no valor do primeiro termo.
>>
>> **C.** Errada.  
>> Atualiza **novo** antes de exibir. Assim, o primeiro termo informado não aparece primeiro na saída. No exemplo, começaria em **6**, e não em **4**.
>>
>> **D.** Errada.  
>> Inicializa **novo** com **0**, quando deveria começar com o **primeiro termo**. Além disso, o laço também usa limites incorretos.
>>
>> **E.** Errada.  
>> Embora comece com **novo <- primeiro**, ela não atualiza o valor com a razão dentro do laço. Assim, repetiria sempre o mesmo valor.


### 3
> [!question] Exercício 3
> O funcionário de uma empresa de pesquisas precisa fazer a seguinte pergunta para um conjunto de, no mínimo, 50 pessoas:
>
> **O que você mais gosta de fazer nas férias?**
>
> 1 - Viajar  
> 2 - Praticar esportes  
> 3 - Ver televisão  
> 4 - Estar com amigos  
> 5 - Outras coisas
>
> O funcionário precisa registrar a resposta de cada pessoa e, ao final, depois de entrevistar os 50 indivíduos, contabilizar quantos responderam cada alternativa e seu percentual.
>
> Para facilitar seu trabalho, o funcionário encomendou um programa, que deverá ler a alternativa de resposta de cada entrevistado e contar as respostas dadas para cada alternativa. Ele também deseja que o programa mostre qual o número da pessoa que está sendo entrevistada, para que ele saiba quantas faltam para atingir sua meta.
>
> Ao final, depois de atingir a meta, o programa deve mostrar a quantidade de respostas de cada alternativa e seu percentual.
>
> O pseudocódigo a seguir foi construído para atender à solicitação do funcionário da empresa de pesquisas:
>
> ```text
> algoritmo "pesquisa"
> var
>    meta, L, opcao, S1, S2, S3, S4, S5 : inteiro
>    P1, P2, P3, P4, P5 : real
>
> inicio
>    escreval("Férias")
>    escreva("Digite sua meta de pessoas: ")
>    leia(meta)
>    para L de 1 ate meta passo 1 faca
>       limpatela
>       escreval("1 - Viajar ")
>       escreval("2 - Praticar Esportes")
>       escreval("3 - Ver Televisão ")
>       escreval("4 - Estar com amigos ")
>       escreval("5 - Outras coisas ")
>       escreval("Escreva a opcao da pessoa número:",L," -> ")
>       leia(opcao)
>       escolha opcao
>          caso 1
>             S1 <- S1 + 1
>          caso 2
>             S2 <- S2 + 1
>          caso 3
>             S3 <- S3 + 1
>          caso 4
>             S4 <- S4 + 1
>          caso 5
>             S5 <- S5 + 1
>          outrocaso
>             escreval("Opcao inválida")
>       fimescolha
>    fimpara
>    P1 <- 100 * (S1 / meta)
>    P2 <- 100 * (S2 / meta)
>    P3 <- 100 * (S3 / meta)
>    P4 <- 100 * (S4 / meta)
>    P5 <- 100 * (S5 / meta)
>    escreval("1 - Viajar - ",S1," - ",P1,"%")
>    escreval("2 - Praticar Esportes - ",S2," - ",P2,"%")
>    escreval("3 - Ver Televisão - ",S3," - ",P3,"%")
>    escreval("4 - Estar com amigos - ",S4," - ",P4,"%")
>    escreval("4 - Outras coisas - ",S5," - ",P5,"%")
> fimalgoritmo
> ```
>
> Analise o algoritmo e assinale a alternativa verdadeira, dentre as opções a seguir.
>
> **A.**  
> A repetição `"para L de 1 ate meta passo 1 faca"` não está corretamente implementada.
>
> **B.**  
> Se for digitado o valor 10 para a variável **meta**, a variável **L** receberá os seguintes valores durante a execução do algoritmo: **{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}**.
>
> **C.**  
> A expressão de cálculo dos percentuais não está correta.
>
> **D.**  
> As variáveis **P1, P2, P3, P4** e **P5** foram declaradas como sendo do tipo **real**, mas poderiam ter sido declaradas como **inteiro**, já que isso não comprometeria o funcionamento do algoritmo.
>
> **E.**  
> Na estrutura de repetição `"para...faça"`, a instrução **fimpara** é opcional e poderia ser retirada do algoritmo, pois ele continuaria correto.
>> [!question]- Resposta
>> **Alternativa correta: B.**
>>
>> Na estrutura **para L de 1 até meta passo 1**, se **meta = 10**, a variável de controle **L** assume os valores **1 até 10** durante as repetições e, ao encerrar o laço, fica com o valor seguinte, **11**. Por isso, a sequência apresentada na alternativa **B** é a verdadeira.
>>
>> **Análise das alternativas:**
>>
>> **A.** Errada.  
>> A estrutura `para L de 1 ate meta passo 1 faca` está corretamente montada para repetir da pessoa **1** até a pessoa **meta**.
>>
>> **B.** Correta.  
>> Com **meta = 10**, a variável de controle percorre **1, 2, 3, ..., 10** e, ao sair do laço, fica em **11**.
>>
>> **C.** Errada.  
>> O cálculo dos percentuais está correto na forma: **100 × (quantidade / meta)**.
>>
>> **D.** Errada.  
>> As variáveis **P1 a P5** precisam ser do tipo **real**, porque percentuais podem ter casas decimais.
>>
>> **E.** Errada.  
>> O **fimpara** não é opcional nesse pseudocódigo. Ele é necessário para encerrar corretamente a estrutura de repetição.
>>
>> **Observação importante:**  
>> Embora não esteja entre as alternativas, o algoritmo tem um detalhe que mereceria ajuste: as variáveis **S1, S2, S3, S4 e S5** deveriam ser inicializadas com **0** antes do laço, para garantir a contagem correta desde o início.


### 4
> [!question] Exercício 4
> Um matemático adora criar e calcular valores de séries, mas, mesmo assim, gostaria que o computador lhe auxiliasse nesse processo com um programa que calcule o valor da seguinte série:
>
> $$
> S = \left(\frac{1}{1}\right) + \left(\frac{3}{2}\right) + \left(\frac{5}{3}\right) + \left(\frac{7}{4}\right) + \dots + \left(\frac{99}{50}\right)
> $$
>
> Perceba a evolução dos valores do numerador e denominador de cada termo da série. Os **numeradores** iniciam em **1** e são incrementados de **2 unidades** a cada novo termo, já o **denominador** inicia em **1** e é incrementado de **1 unidade** a cada novo termo.
>
> Analise as alternativas a seguir e selecione a que possui a melhor solução para calcular a série matemática.
>
> **A.**
>
> ```text
> algoritmo "serie"
>    var denominador : inteiro
>       numerador, serie : real
> inicio
>    escreval("Série Matemática")
>    serie <- 0
>    para denominador de 1 ate 50 passo 1 faca
>       escreval(numerador," / ",denominador)
>       serie <- serie + (numerador / denominador)
>       numerador <- numerador + 2
>    fimpara
>    escreval("Resultado = ", serie)
> fimalgoritmo
> ```
>
> **B.**
>
> ```text
> algoritmo "serie"
>    var denominador : inteiro
>       numerador, serie : real
> inicio
>    escreval("Série Matemática")
>    serie <- 0
>    numerador <- 1
>    para denominador de 1 ate 50 passo 2 faca
>       escreval(numerador," / ",denominador)
>       serie <- serie + (numerador / denominador)
>       numerador <- numerador + 1
>    fimpara
>    escreval("Resultado = ", serie)
> fimalgoritmo
> ```
>
> **C.**
>
> ```text
> algoritmo "serie"
>    var denominador : inteiro
>       numerador, serie : real
> inicio
>    escreval("Série Matemática")
>    serie <- 0
>    numerador <- 1
>    para denominador de 1 ate 50 passo 1 faca
>       escreval(numerador," / ",denominador)
>       serie <- serie + (numerador / denominador)
>       numerador <- numerador + 2
>    fimpara
>    escreval("Resultado = ", serie)
> fimalgoritmo
> ```
>
> **D.**
>
> ```text
> algoritmo "serie"
>    var denominador : inteiro
>       numerador, serie : real
> inicio
>    escreval("Série Matemática")
>    serie <- 0
>    numerador <- 1
>    para denominador de 1 ate 50 passo 1 faca
>       escreval(numerador," / ",denominador)
>       serie <- serie + (numerador / denominador)
>       numerador <- numerador + 2
>    fimpara
> fimalgoritmo
> ```
>
> **E.**
>
> ```text
> algoritmo "serie"
>    var denominador, numerador, serie : real
> inicio
>    escreval("Série Matemática")
>    serie <- 0
>    numerador <- 1
>    para denominador de 1 ate 50 passo 1 faca
>       escreval(numerador," / ",denominador)
>       serie <- serie + (numerador / denominador)
>       numerador <- numerador + 2
>    fimpara
>    escreval("Resultado = ", serie)
> fimalgoritmo
> ```
>> [!question]- Resposta
>> **Alternativa correta: C.**
>>
>> Para resolver corretamente a série, o algoritmo precisa:
>>
>> - iniciar **numerador = 1**;
>> - iniciar **denominador = 1** no laço;
>> - repetir até **50**;
>> - somar cada termo **numerador / denominador** em **serie**;
>> - incrementar o **numerador de 2 em 2**;
>> - incrementar o **denominador de 1 em 1**;
>> - mostrar o resultado final.
>>
>> **Análise das alternativas:**
>>
>> **A.** Errada.  
>> A variável **numerador** não é inicializada antes do laço. Assim, o algoritmo começa a usar um valor indefinido no cálculo da série.
>>
>> **B.** Errada.  
>> O **denominador** está sendo incrementado de **2 em 2**, quando deveria crescer de **1 em 1**. Além disso, o **numerador** cresce de **1 em 1**, mas deveria crescer de **2 em 2**.
>>
>> **C.** Correta.  
>> Inicializa **numerador <- 1**, faz o laço com **denominador de 1 até 50 passo 1**, soma corretamente **numerador / denominador** e depois atualiza o numerador com **+2**. Também exibe o resultado ao final.
>>
>> **D.** Errada.  
>> A lógica de cálculo está praticamente correta, mas falta exibir o **resultado final da série** ao término do algoritmo.
>>
>> **E.** Errada.  
>> Embora a lógica do cálculo esteja próxima da correta, a variável **denominador** foi declarada como **real**, quando o mais adequado para a variável de controle do laço é **inteiro**. Por isso, não é a melhor solução.


### 5
> [!question] Exercício 5
> Analise o algoritmo abaixo e marque a alternativa que representa qual função matemática é realizada pelo mesmo:
>
> ```text
> algoritmo "formula matematica"
>    var i, numero, resultado : inteiro
> inicio
>    resultado <- 1
>    escreva("Digite um numero:")
>    leia(numero)
>    para i de 1 ate numero passo 1 faca
>       resultado <- resultado * i
>    fimpara
>    escreval("O resultado da formula eh:", resultado)
> fimalgoritmo
> ```
>
> **A.**  
> Mínimo Denominador Comum
>
> **B.**  
> Somatório
>
> **C.**  
> Combinação
>
> **D.**  
> Fatorial
>
> **E.**  
> Permutação
>> [!question]- Resposta
>> **Alternativa correta: D.**
>>
>> O algoritmo:
>>
>> - inicia **resultado = 1**;
>> - lê um número;
>> - executa um laço de **1 até numero**;
>> - multiplica sucessivamente:
>>   - **resultado <- resultado * i**
>>
>> Isso significa que ele faz:
>>
>> $$
>> 1 \times 2 \times 3 \times \dots \times n
>> $$
>>
>> Essa é exatamente a definição de **fatorial**.
>>
>> **Exemplo:**  
>> Se o número digitado for **5**, o algoritmo calcula:
>>
>> - 1 × 1 = 1
>> - 1 × 2 = 2
>> - 2 × 3 = 6
>> - 6 × 4 = 24
>> - 24 × 5 = 120
>>
>> Logo, **5! = 120**.
>>
>> **Análise das alternativas:**
>>
>> **A.** Errada.  
>> O algoritmo não calcula mínimo denominador comum. Não há frações nem comparação entre denominadores.
>>
>> **B.** Errada.  
>> Não é somatório, porque ele não faz soma sucessiva; ele faz **multiplicação sucessiva**.
>>
>> **C.** Errada.  
>> Combinação envolve fórmula com fatoriais e mais de um valor, o que não ocorre aqui.
>>
>> **D.** Correta.  
>> O algoritmo calcula o **fatorial** do número digitado.
>>
>> **E.** Errada.  
>> Permutação também costuma envolver cálculo fatorial em contextos específicos, mas este algoritmo diretamente calcula apenas **n!**, ou seja, o **fatorial**.
