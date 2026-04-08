---
publish: true
---

### 1
> [!question] Exercício 1
> A estrutura de repetição **enquanto** é uma das formas de controlar o fluxo de um programa em linguagens de programação. Ela permite que um bloco de código seja executado repetidamente.
>
> Sobre a estrutura de repetição **enquanto**, analise as afirmações a seguir:
>
> **I.** A estrutura de repetição **enquanto** permite que um bloco de código seja executado várias vezes enquanto uma condição especificada seja falsa.
>
> **II.** A estrutura de repetição **enquanto** repetirá ao menos uma vez o bloco de código, independentemente se a condição for verdadeira ou falsa.
>
> **III.** É preciso cuidado ao usar a estrutura **enquanto**, pois se a condição especificada nunca se tornar falsa, o loop continuará executando indefinidamente, resultando em um "loop infinito".
>
> É correto o que se afirma em:
>
> **A.**  
> I, II e III.
>
> **B.**  
> I e III, apenas.
>
> **C.**  
> III, apenas.
>
> **D.**  
> I e II, apenas.
>
> **E.**  
> II e III, apenas.
>> [!question]- Resposta
>> **Alternativa correta: C.**
>>
>> **Análise das afirmações:**
>>
>> **I. Errada.**  
>> A estrutura **enquanto** executa o bloco **enquanto a condição for verdadeira**, e não falsa.
>>
>> **II. Errada.**  
>> A estrutura **enquanto** pode não executar nenhuma vez, caso a condição já comece falsa. Quem normalmente executa pelo menos uma vez é a estrutura **repita... até**.
>>
>> **III. Correta.**  
>> Se a condição do **enquanto** nunca deixar de ser verdadeira, o laço continuará para sempre, gerando um **loop infinito**.
>>
>> **Conclusão:**  
>> Apenas a afirmação **III** está correta.
>>
>>Apenas a afirmação III está correta.
>>A estrutura de repetição enquanto permite que um bloco de código seja executado várias vezes enquanto uma condição especificada seja verdadeira, o que torna a afirmação I falsa. Ela não repetirá ao menos uma vez o bloco de código. A entrada na estrutura enquanto depende do resultado da condição especificada, o que torna a afirmação II falsa. Sa condição especificada na estrutura enquanto nunca se tornar falsa, o loop continuará executando infinitamente. Isso pode travar o programa ou causar um consumo excessivo de recursos do sistema, o que torna a afirmação III correta.


### 2
> [!question] Exercício 2
> Uma professora da 2ª série do ensino fundamental encomendou um programa que auxilie a gerar tabelas de tabuadas de multiplicação para seus alunos.
>
> O programa deve ler o número de base da tabuada e gerar a tabela de multiplicação para o intervalo **[1,10]**, conforme o exemplo abaixo (considere que foi lido o número de base **5**):
>
> ```text
> Tabuada do 5
> 5 x 1 = 5
> 5 x 2 = 10
> 5 x 3 = 15
> 5 x 4 = 20
> 5 x 5 = 25
> 5 x 6 = 30
> 5 x 7 = 35
> 5 x 8 = 40
> 5 x 9 = 45
> 5 x 10 = 50
> ```
>
> Analise as alternativas a seguir, que apresentam algoritmos em pseudocódigo que pretendem resolver o problema da professora, e selecione a mais correta em relação à solicitação e ao exemplo de exibição da tabuada.
>
> **A.**
>
> ```text
> Algoritmo "tabuada"
> Var base, valor, resultado : inteiro
> Inicio
>    repita
>       Escreval("Digite a base da tabuada: ")
>       Leia(base)
>    ate (base >= 1)
>    Escreval("Tabuada do ",base)
>    enquanto (valor < 10) faca
>       resultado <- base * valor
>       Escreval(base,"x ",valor," = ",resultado)
>       valor <- valor + 1
>    fimenquanto
> FimAlgoritmo
> ```
>
> **B.**
>
> ```text
> Algoritmo "tabuada"
> Var base, valor, resultado : inteiro
> Inicio
>    repita
>       Escreval("Digite a base da tabuada: ")
>       Leia(base)
>    ate (base >= 1)
>    Escreval("Tabuada do ",base)
>    valor <- 1
>    enquanto (valor < 10) faca
>       resultado <- base * valor
>       Escreval(base,"x ",valor," = ",resultado)
>       valor <- valor + 1
>    fimenquanto
> FimAlgoritmo
> ```
>
> **C.**
>
> ```text
> Algoritmo "tabuada"
> Var base, valor, resultado : inteiro
> Inicio
>    repita
>       Escreval("Digite a base da tabuada: ")
>       Leia(base)
>    ate (base >= 1)
>    Escreval("Tabuada do ",base)
>    valor <- 1
>    enquanto (valor < 10) faca
>       resultado <- base + valor
>       Escreval(base,"x ",valor," = ",resultado)
>       valor <- valor + 1
>    fimenquanto
> FimAlgoritmo
> ```
>
> **D.**
>
> ```text
> Algoritmo "tabuada"
> Var base, valor, resultado : inteiro
> Inicio
>    repita
>       Escreval("Digite a base da tabuada: ")
>       Leia(base)
>    ate (base >= 1)
>    Escreval("Tabuada do ",base)
>    valor <- 1
>    enquanto (valor < 10) faca
>       resultado <- base + valor
>       Escreval(valor,"x ",base," = ",resultado)
>       valor <- valor + 1
>    fimenquanto
> FimAlgoritmo
> ```
>
> **E.**
>
> ```text
> Algoritmo "tabuada"
> Var base, valor, resultado : inteiro
> Inicio
>    repita
>       Escreval("Digite a base da tabuada: ")
>       Leia(base)
>    ate (base >= 1)
>    Escreval("Tabuada do ",base)
>    valor <- 1
>    enquanto (valor <= 10) faca
>       resultado <- base * valor
>       Escreval(base,"x ",valor," = ",resultado)
>       valor <- valor + 1
>    fimenquanto
> FimAlgoritmo
> ```
>> [!question]- Resposta
>> **Alternativa correta: E.**
>>
>> Para atender ao enunciado, o algoritmo precisa:
>> - ler uma **base válida**;
>> - começar a tabuada em **1**;
>> - terminar em **10**;
>> - usar **multiplicação**, e não soma;
>> - exibir no formato **base x valor = resultado**.
>>
>> **Análise das alternativas:**
>>
>> **A. Errada.**  
>> Usa a multiplicação corretamente, mas a variável **valor** não é inicializada antes do `enquanto`. Assim, o algoritmo não garante que a tabuada começará em 1.
>>
>> **B. Errada.**  
>> Inicializa `valor <- 1`, o que está certo, mas a condição `valor < 10` faz a repetição ir apenas até **9**. Portanto, não mostra a multiplicação por **10**.
>>
>> **C. Errada.**  
>> Além de usar `valor < 10`, ainda calcula `resultado <- base + valor`, ou seja, faz **soma** em vez de multiplicação.
>>
>> **D. Errada.**  
>> Também usa **soma** no lugar de multiplicação. Além disso, embora a ordem de exibição `valor x base` ainda gere uma expressão equivalente numericamente, o algoritmo continua incorreto por não calcular a tabuada de multiplicação como pedido.
>>
>> **E. Correta.**  
>> É a alternativa que faz tudo corretamente:
>> - valida a base com `repita ... ate (base >= 1)`;
>> - inicia `valor` em **1**;
>> - usa `valor <= 10`, cobrindo o intervalo **[1,10]**;
>> - calcula `resultado <- base * valor`;
>> - exibe a tabuada no formato esperado.




### 3
> [!question] Exercício 3
> As estruturas de repetição das linguagens de programação foram concebidas para que seja possível repetir determinados conjuntos de comandos. Essas estruturas são um importante recurso para o desenvolvimento de algoritmos/programas.
>
> Analise as alternativas a seguir relativas à estrutura de repetição **"enquanto...faça"** e assinale a opção correta.
>
> **A.**  
> O bloco de comandos da repetição é sempre executado pelo menos uma vez.
>
> **B.**  
> Não é necessário que a variável que será testada na condição receba um valor (seja inicializada) pois o comando **"enquanto"** faz isso automaticamente.
>
> **C.**  
> Se o resultado da condição for falso, o bloco de repetição é executado novamente; caso contrário, é finalizada a repetição.
>
> **D.**  
> Essa estrutura de repetição pode ser utilizada quando não se sabe exatamente quantas vezes o bloco de repetição deve ser repetido.
>
> **E.**  
> O bloco de repetição não pode ser executado infinitas vezes.
>> [!question]- Resposta
>> **Alternativa correta: D.**
>>
>> **Análise das alternativas:**
>>
>> **A.** Errada.  
>> No **enquanto...faça**, o bloco só executa se a condição for verdadeira. Portanto, ele pode não executar nenhuma vez.
>>
>> **B.** Errada.  
>> A variável usada na condição precisa estar corretamente inicializada. O comando **enquanto** não faz isso automaticamente.
>>
>> **C.** Errada.  
>> Está invertido. Quando a condição é **verdadeira**, o bloco continua executando. Quando é **falsa**, a repetição termina.
>>
>> **D.** Correta.  
>> A estrutura **enquanto...faça** é muito usada justamente quando não se sabe previamente quantas repetições serão necessárias. O laço continua até que a condição deixe de ser verdadeira.
>>
>> **E.** Errada.  
>> O bloco pode, sim, ser executado infinitas vezes, caso a condição nunca se torne falsa, gerando um **loop infinito**.
>>
>>Essa estrutura de repetição pode ser utilizada quando não se sabe exatamente quantas vezes o bloco de repetição deve ser repetido. A estrutura de repetição "enquanto...faça" não define, a priori, a quantidade de vezes que será repetida, pois tal controle depende do resultado da condição. Assim, o bloco de repetição pode não ser executado ou pode ser executado diversas vezes. É necessário que a variável que será testada na condição receba um valor (seja inicializada ou lida antes do comando "enquanto".
>>
>>Vejamos um exemplo:
>>
>>enquanto (dado > 0) faca //comando fimenquanto
>>
>>Para que o computador possa avaliar o teste (dado > 0), a variável dado precisa ter conteúdo (valor).
>>
>>Se o resultado da condição for verdadeiro, o bloco de repetição é executado novamente; caso contrário, é finalizada a repetição. Na estrutura de repetição "enquanto...faça", verifica-se a condição sempre no início do bloco da repetição; enquanto a condição for verdadeira, o bloco de comandos da repetição será executado.
>>
>>Se a estrutura de repetição "enquanto...faça" não for adequadamente construída, ela pode ser repetida infinitamente.
>>
>>Veja o exemplo a seguir:  
>> ```
>> conta <- 0  
>> enquanto (conta < 10) faca  
>> escreva(conta)  
>> fimenquanto
>> ```
>>
>>Perceba que a variável conta é inicializada com o valor 0 (zero), aí é iniciada a repetição, pois 0 (zero) é menor que 10, então é escrito o valor de conta e volta-se ao teste da repetição. O valor de conta não foi alterado e a repetição será executada infinitas vezes.


### 4
> [!question] Exercício 4
> Considere o seguinte algoritmo em pseudocódigo:
>
> ```text
> Algoritmo "faz"
> Var
>    X, Y, Z : inteiro
> Inicio
>    repita
>       Escreval("Digite um numero: ")
>       Leia(X)
>    ate (X >= 0)
>    Y <- 1
>    Z <- 1
>    enquanto (Z <= X) faca
>       Y <- Y * Z
>       Z <- Z + 1
>    fimenquanto
>    Escreva("Resultado: ",Y)
> FimAlgoritmo
> ```
>
> Analise as alternativas a seguir, relativas a esse algoritmo, e assinale a verdadeira.
>
> **A.**  
> O algoritmo calcula a potência de um número.
>
> **B.**  
> O algoritmo calcula o fatorial de um número.
>
> **C.**  
> O algoritmo calcula o seno de um número.
>
> **D.**  
> O algoritmo calcula a raiz quadrada de um número.
>
> **E.**  
> O algoritmo calcula a média dos números.
>> [!question]- Resposta
>> **Alternativa correta: B.**
>>
>> **Explicação do algoritmo:**
>>
>> - Primeiro, o algoritmo lê um valor de **X** e só aceita quando **X >= 0**.
>> - Depois, inicializa:
>>   - **Y <- 1**
>>   - **Z <- 1**
>> - Em seguida, enquanto **Z <= X**, ele faz:
>>   - **Y <- Y * Z**
>>   - **Z <- Z + 1**
>>
>> Isso significa que o algoritmo multiplica todos os números de **1 até X**:
>>
>> $$
>> Y = 1 \times 2 \times 3 \times \dots \times X
>> $$
>>
>> Esse cálculo é exatamente o **fatorial de X**.
>>
>> **Exemplo:**  
>> Se **X = 5**, então:
>> - Y = 1 × 1 = 1
>> - Y = 1 × 2 = 2
>> - Y = 2 × 3 = 6
>> - Y = 6 × 4 = 24
>> - Y = 24 × 5 = 120
>>
>> Logo, **5! = 120**.
>>
>> **Análise das alternativas:**
>>
>> **A.** Errada.  
>> O algoritmo não calcula potência. Potência envolveria uma base elevada a um expoente, o que não ocorre aqui.
>>
>> **B.** Correta.  
>> O algoritmo calcula o **fatorial** de um número, multiplicando os inteiros de **1 até X**.
>>
>> **C.** Errada.  
>> Não há nenhuma fórmula trigonométrica ou operação relacionada ao seno.
>>
>> **D.** Errada.  
>> Não há cálculo de raiz quadrada no algoritmo.
>>
>> **E.** Errada.  
>> O algoritmo não soma valores nem divide pela quantidade, então não calcula média.
>>
>>O fatorial de um número é calculado pelas multiplicações sucessivas do número por todos os seus antecessores até 1.

 

### 5
> [!question] Exercício 5
> Um método simples para realizar o cálculo da raiz quadrada é encontrar a parte inteira, simplesmente subtraindo inteiros ímpares.
>
> Por exemplo, para calcular a parte inteira da raiz quadrada de **19**, calcula-se a sequência:
>
> 1. 19 – 1 = 18  
> 2. 18 – 3 = 15  
> 3. 15 – 5 = 10  
> 4. 10 – 7 = 3
>
> Como **3 é menor que 9**, o processo termina aqui. Como **quatro subtrações** foram efetuadas, a resposta é **4**, ou seja, a raiz quadrada inteira de **19** é **4**.
>
> Analise as alternativas a seguir e selecione a que apresenta a implementação correta em pseudocódigo desse método de cálculo.
>
> **A.**
>
> ```text
> Algoritmo "raizquadrada"
> Var
> m,n,i : inteiro
> Inicio
> repita
> Escreval("Digite um numero: ")
> Leia(m)
> ate (m >= 0)
> n <- 0
> i <- 1
> enquanto (m >= i) faca
>    m <- m - i
>    i <- i + 2
>    n <- n + 1
>    Escreval("m= ",m," i= ",i," n= ",n)
> fimenquanto
> Escreval("Parte inteira da raiz quadrada: ",n)
> FimAlgoritmo
> ```
>
> **B.**
>
> ```text
> Algoritmo "raizquadrada"
> Var
>  m,n,i : inteiro
> Inicio
>  repita
>   Escreval("Digite um numero: ")
>   Leia(m)
>  ate (m >= 0)
>  n <- 0
>  i <- 1
>  enquanto (m >= i) faca
>   m <- m - i
>   i <- i + 2
>   n <- n + 1
>  fimenquanto
>  Escreval("Parte inteira da raiz quadrada: ",i)
> FimAlgoritmo
> ```
>
> **C.**
>
> ```text
> Algoritmo "raizquadrada"
> Var
>  m,n,i : inteiro
> Inicio
>  repita
>   Escreval("Digite um numero: ")
>   Leia(m)
>  ate (m >= 0)
>  n <- 0
>  i <- 1
>  enquanto (m >= i) faca
>   m <- m - i
>   i <- i + 1
>   n <- n + 1
>  fimenquanto
>  Escreval("Parte inteira da raiz quadrada: ",n)
> FimAlgoritmo
> ```
>
> **D.**
>
> ```text
> Algoritmo "raizquadrada"
> Var
>  m,n,i : inteiro
> Inicio
>  repita
>   Escreval("Digite um numero: ")
>   Leia(m)
>  ate (m >= 0)
>  n <- 1
>  i <- 1
>  enquanto (m >= i) faca
>   m <- m - i
>   i <- i + 2
>   n <- n + 1
>  fimenquanto
>  Escreval("Parte inteira da raiz quadrada: ",n)
> FimAlgoritmo
> ```
>
> **E.**
>
> ```text
> Algoritmo "raizquadrada"
> Var
>  m,n,i : inteiro
> Inicio
>  repita
>   Escreval("Digite um numero: ")
>   Leia(m)
>  ate (m >= 0)
>  n <- 0
>  i <- 1
>  enquanto (m <= i) faca
>   m <- m - i
>   i <- i + 2
>   n <- n + 1
>  fimenquanto
>  Escreval("Parte inteira da raiz quadrada: ",n)
> FimAlgoritmo
> ```
>> [!question]- Resposta
>> **Alternativa correta: A.**
>>
>> **Ideia do método:**
>>
>> - começar com **i = 1**
>> - ir subtraindo de **m** os números ímpares: **1, 3, 5, 7, ...**
>> - a cada subtração válida, contar em **n**
>> - ao final, **n** será a parte inteira da raiz quadrada
>>
>> Portanto, a implementação correta precisa:
>> - inicializar **n <- 0**
>> - inicializar **i <- 1**
>> - repetir enquanto **m >= i**
>> - fazer **m <- m - i**
>> - fazer **i <- i + 2** para passar ao próximo ímpar
>> - fazer **n <- n + 1**
>> - exibir **n** no final
>>
>> **Análise das alternativas:**
>>
>> **A. Correta.**  
>> Faz exatamente o que o método pede:
>> - começa com **n = 0** e **i = 1**
>> - subtrai os ímpares com **i <- i + 2**
>> - conta as subtrações em **n**
>> - ao final, mostra **n**, que é a parte inteira da raiz quadrada
>>
>> O `Escreval("m= ...")` dentro do laço apenas mostra o andamento do processo. Não atrapalha o algoritmo.
>>
>> **B. Errada.**  
>> O algoritmo calcula corretamente dentro do laço, mas no final exibe **i** em vez de **n**.  
>> Quem guarda a quantidade de subtrações, e portanto a raiz inteira, é **n**, não **i**.
>>
>> **C. Errada.**  
>> Atualiza **i <- i + 1**, o que gera a sequência **1, 2, 3, 4...**, e não apenas os ímpares **1, 3, 5, 7...**.  
>> Isso foge do método descrito.
>>
>> **D. Errada.**  
>> Inicializa **n <- 1**, mas o contador de subtrações deve começar em **0**.  
>> Assim, o resultado final ficará uma unidade acima do correto.
>>
>> **E. Errada.**  
>> A condição do laço está invertida: usa **enquanto (m <= i)**, quando o certo é continuar **enquanto m >= i**.  
>> Desse jeito, o algoritmo não segue corretamente o processo de subtração.
>>
>>Esse pseudocódigo implementa corretamente o método de cálculo da parte inteira da raiz quadrada de um número. Por exemplo, se for informado o valor 56, o algoritmo terá a seguinte saída de dados:  
>>
>>Digite um numero: 56  
m= 55 i= 3 n= 1  
m= 52 i= 5 n= 2  
m= 47 i= 7 n= 3  
m= 40 i= 9 n= 4  
m= 31 i= 11 n= 5  
m= 20 i= 13 n= 6  
m= 7 i= 15 n= 7  
>>
>>Parte inteira da raiz quadrada: 7.
