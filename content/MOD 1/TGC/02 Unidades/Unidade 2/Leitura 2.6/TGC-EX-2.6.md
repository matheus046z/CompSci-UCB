---
publish: true
---

### 1
> [!question] Exercício 1
> Considere os seguintes valores iniciais para as variáveis: **a = 3, b = 2, c = 2 e d = 4**. Realize o teste de mesa e obtenha o valor da variável inteira **x** dos trechos de programa a seguir.
>
> **I**
> ```text
> x <- 0
> se (a = 3) ou (b < 2) entao
>     x = (a / 2) * quad(d)
> fimse
> ```
>
> **II**
> ```text
> x <- 1
> se (não(a >= 2) ou não(b < 6)) entao
>     x = c + d\b
> fimse
> x <- x + 2
> ```
>
> **III**
> ```text
> x <- 2
> se (a + 2 <> b + 2) e não(a > b) entao
>     x <- raizq(d) + exp(a, b)
>     x <- x + a mod d
> fimse
> x <- 0
> ```
>
> São corretos os valores das alternativas I, II e III, respectivamente, em:
>
> **A.**  
> 24, 3 e 0.
>
> **B.**  
> 24, 0 e 0.
>
> **C.**  
> 24, 6 e 0.
>
> **D.**  
> 24, 4 e 0.
>
> **E.**  
> 24, 4 e 11.
>> [!question]- Resposta
>>
>> **Alternativa correta: A.**
>>
>> **Teste de mesa:**
>>
>> **Trecho I**
>> - x começa com **0**
>> - A condição é: **(a = 3) ou (b < 2)**
>> - Como **a = 3**, a condição é **verdadeira**
>> - Então executa: **x = (a / 2) * quad(d)**
>> - **a / 2 = 3 / 2 = 1,5**
>> - **quad(d) = 4² = 16**
>> - **x = 1,5 × 16 = 24**
>>
>> **Trecho II**
>> - x começa com **1**
>> - A condição é: **não(a >= 2) ou não(b < 6)**
>> - **a >= 2** é verdadeiro, então **não(a >= 2)** é falso
>> - **b < 6** é verdadeiro, então **não(b < 6)** é falso
>> - Logo: **falso ou falso = falso**
>> - O comando dentro do **se** não executa
>> - Depois disso: **x <- x + 2**
>> - **x = 1 + 2 = 3**
>>
>> **Trecho III**
>> - x começa com **2**
>> - A condição é: **(a + 2 <> b + 2) e não(a > b)**
>> - **a + 2 = 5** e **b + 2 = 4**, então **5 <> 4** é verdadeiro
>> - **a > b** é verdadeiro, pois **3 > 2**
>> - **não(a > b)** é falso
>> - Assim: **verdadeiro e falso = falso**
>> - O bloco do **se** não executa
>> - Em seguida, o algoritmo faz **x <- 0**
>> - Portanto, o valor final é **0**
>>
>> **Resultado final:** **24, 3 e 0**
>>
>> **Análise das alternativas:**
>>
>> **A.** Correta.  
>> Apresenta exatamente os valores encontrados: **24, 3 e 0**.
>>
>> **B.** Errada.  
>> O valor do trecho II não é **0**, porque x começa em **1** e depois recebe **+2**, ficando **3**.
>>
>> **C.** Errada.  
>> O valor do trecho II não é **6**. A condição é falsa, então o resultado final continua sendo **3**.
>>
>> **D.** Errada.  
>> O valor do trecho II também não é **4**; ele termina em **3**.
>>
>> **E.** Errada.  
>> O trecho III termina com **x <- 0**, então o valor final não pode ser **11**.


### 2
> [!question] Exercício 2
> A aplicação do teste de mesa nos permite validar o algoritmo desenvolvido e, conforme os erros que vão se apresentando, podemos corrigir e testar novamente com novos valores.
>
> Considerando o conceito e as características do **teste de mesa**, assim como os tipos de erros de **sintaxe** e **semântica** encontrados nos algoritmos, analise as sentenças a seguir.
>
> I – O ____________ tem por objetivo verificar a corretude do algoritmo.
>
> II – O erro de _________ representa erros de escrita de comandos.
>
> III – O erro de ____________ pode exibir comportamentos inadequados dos programas.
>
> IV – O erro de _________ impede a execução do algoritmo.
>
> V – O erro de _________ representa erros lógicos.
>
> Complete as sentenças conforme as alternativas apresentadas abaixo. É correta a ordem apresentada apenas em:
>
> **A.**  
> Teste de mesa – semântica – sintaxe – sintaxe - semântica.
>
> **B.**  
> Teste de mesa – sintaxe – semântica – sintaxe - semântica.
>
> **C.**  
> Teste de mesa – semântica – semântica – semântica - sintaxe.
>
> **D.**  
> Teste de mesa – sintaxe – sintaxe – semântica - semântica.
>
> **E.**  
> Teste de mesa – sintaxe – sintaxe – sintaxe - semântica.
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> **Preenchimento correto das sentenças:**
>>
>> **I –** O **teste de mesa** tem por objetivo verificar a corretude do algoritmo.  
>> **II –** O erro de **sintaxe** representa erros de escrita de comandos.  
>> **III –** O erro de **semântica** pode exibir comportamentos inadequados dos programas.  
>> **IV –** O erro de **sintaxe** impede a execução do algoritmo.  
>> **V –** O erro de **semântica** representa erros lógicos.
>>
>> **Explicação rápida:**
>>
>> - **Teste de mesa** serve para simular a execução do algoritmo e verificar se ele está correto.
>> - **Erro de sintaxe** acontece quando o comando foi escrito de forma incorreta, quebrando as regras da linguagem.
>> - **Erro de semântica** ocorre quando o algoritmo até executa, mas produz resultado errado ou comportamento inadequado por falha lógica.
>>
>> **Análise das alternativas:**
>>
>> **A.** Errada.  
>> Troca os conceitos de **sintaxe** e **semântica** na segunda lacuna. Erro de escrita de comandos é de **sintaxe**, não de semântica.
>>
>> **B.** Correta.  
>> A sequência está certa: **teste de mesa – sintaxe – semântica – sintaxe – semântica**.
>>
>> **C.** Errada.  
>> Coloca **semântica** em lacunas que deveriam ser de **sintaxe**, principalmente nos erros de escrita e nos que impedem a execução.
>>
>> **D.** Errada.  
>> A terceira lacuna está incorreta, pois comportamento inadequado do programa é erro de **semântica**, não de sintaxe.
>>
>> **E.** Errada.  
>> A terceira lacuna também está incorreta, porque erro lógico não é de sintaxe; é de **semântica**.
>>
>>O teste de mesa tem por objetivo verificar se o algoritmo está funcionando, sua eficácia. O erro de sintaxe representa erro de comandos e pode impedir a execução do algoritmo. O erro de semântica representa erros lógicos (operadores) e atribuições erradas e pode exibir comportamentos inadequados dos programas.


### 3
> [!question] Exercício 3
> Observe o algoritmo em fluxograma.
>
> **Fluxograma (transcrito):**
> ```text
> INICIO
>   LEIA Valor, Taxa_Mes, Dias
>   Taxa_dia <- (Taxa_Mes/100)/30
>   Valor_juro <- Valor * Taxa_dia * Dias
>   Total <- Valor_juro + Valor
>   ESCREVA "Valor do juro em R$: ", Valor_juro
>   ESCREVA "Valor da parcela: ", Total
> FIM
> ```
>
> Realize o teste de mesa com os seguintes valores de entrada:
>
> - Valor = 2.500,00
> - Taxa_mes = 22%
> - Dias = 12
>
> O valor total será?
>
> **A.**  
> 220,00
>
> **B.**  
> 9.100,00
>
> **C.**  
> 2.280,00
>
> **D.**  
> 2.720,00
>
> **E.**  
> 2.500,00
>> [!question]- Resposta
>>
>> **Alternativa correta: D.**
>>
>> **Teste de mesa:**
>>
>> - **Valor = 2.500,00**
>> - **Taxa_mes = 22**
>> - **Dias = 12**
>>
>> **1. Cálculo da taxa diária**
>> - Taxa_dia ← (Taxa_Mes/100)/30
>> - Taxa_dia ← (22/100)/30
>> - Taxa_dia ← 0,22/30
>> - Taxa_dia ← **0,007333...**
>>
>> **2. Cálculo do juro**
>> - Valor_juro ← Valor * Taxa_dia * Dias
>> - Valor_juro ← 2500 * 0,007333... * 12
>> - Valor_juro ← **220,00**
>>
>> **3. Cálculo do total**
>> - Total ← Valor_juro + Valor
>> - Total ← 220,00 + 2500,00
>> - Total ← **2.720,00**
>>
>> **Resposta final:** **2.720,00**
>>
>> **Análise das alternativas:**
>>
>> **A.** Errada.  
>> **220,00** é apenas o valor do juro, não o valor total.
>>
>> **B.** Errada.  
>> **9.100,00** não corresponde aos cálculos do fluxograma.
>>
>> **C.** Errada.  
>> **2.280,00** seria o valor do principal menos alguma quantia, mas o algoritmo manda somar o juro ao valor inicial.
>>
>> **D.** Correta.  
>> O total calculado é **2.720,00**, pois **2500,00 + 220,00 = 2720,00**.
>>
>> **E.** Errada.  
>> **2.500,00** é apenas o valor inicial, sem acrescentar os juros.


### 4
> [!question] Exercício 4
> Dado o seguinte algoritmo:
>
> ```text
> Algoritmo "exercicio_teste"
> Var
>    i, m : inteiro
>    a : real
>
> inicio
>    leia(m)
>    se (m <> 0) entao
>       i <- m \ 5
>       a <- m / 12
>    fimse
>    se (m mod 2 >= 6) entao
>       i <- i + 1
>    se (m mod 2 < 6) entao
>       i <- i - 1
>    fimse
>    Escreva(a, i)
> fimalgoritmo
> ```
>
> Realize o teste de mesa e identifique que valores serão escritos como saída para as variáveis **a** e **i**, sendo lido **12** para a variável **m**.
>
> **A.**  
> a = 0 e i = 2.
>
> **B.**  
> a = 1 e i = 1.4.
>
> **C.**  
> a = 1 e i = 2.
>
> **D.**  
> a = 0 e i = -1.
>
> **E.**  
> a = 1 e i = 1.
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> **Teste de mesa com m = 12:**
>>
>> **1. Primeiro teste**
>> - Verifica: **m <> 0**
>> - Como **12 <> 0**, a condição é **verdadeira**
>> - Então:
>>   - **i <- m \ 5**
>>   - **i <- 12 \ 5**
>>   - A barra invertida **\** indica divisão inteira
>>   - Logo, **i = 2**
>> - Depois:
>>   - **a <- m / 12**
>>   - **a <- 12 / 12 = 1**
>>
>> **2. Segundo teste**
>> - Verifica: **m mod 2 >= 6**
>> - **12 mod 2 = 0**
>> - Então: **0 >= 6** é **falso**
>> - Portanto, **i** não recebe **+1**
>>
>> **3. Terceiro teste**
>> - Verifica: **m mod 2 < 6**
>> - Como **12 mod 2 = 0**, temos **0 < 6**, que é **verdadeiro**
>> - Então:
>>   - **i <- i - 1**
>>   - **i <- 2 - 1**
>>   - **i = 1**
>>
>> **Saída final:**
>> - **a = 1**
>> - **i = 1**
>>
>> **Análise das alternativas:**
>>
>> **A.** Errada.  
>> **a** não é 0, porque **12/12 = 1**. Além disso, ao final **i** não permanece 2.
>>
>> **B.** Errada.  
>> **a = 1** está certo, mas **i = 1,4** está errado, porque **i** é variável inteira e termina com valor **1**.
>>
>> **C.** Errada.  
>> **a = 1** está certo, mas **i** não termina em 2, pois no último teste ele recebe **i - 1**.
>>
>> **D.** Errada.  
>> **a** não é 0 e **i** também não fica em **-1**.
>>
>> **E.** Correta.  
>> O algoritmo escreve ao final **a = 1** e **i = 1**.


### 5
> [!question] Exercício 5
> Dado o algoritmo:
>
> ```text
> Algoritmo "teste"
> var
>    l, area : real
> Inicio
>    Escreval("Digite o lado do quadrado:")
>    Leia(l)
>    area <- l * l
>    Escreva("A área do quadrado é = ", area)
> fimalgoritmo
> ```
>
> Analise as alternativas de construção do teste de mesa para calcular a área de um quadrado.
>
> **Alternativa I**
>
> ```text
> Em execução | Variáveis | Saída
> Nº Linha    | l | area  |
> 5           |   |       | Digite o lado do quadrado:
> 6           | [4] |     |
> 7           |     | 16   |
> 8           |     | {16} | A Área do quadrado é = 16
> ```
>
> **Alternativa II**
>
> ```text
> Em execução | Variáveis | Saída
> Nº Linha    | l | área  |
> 5           |   |       | Digite o lado do quadrado:
> 6           | [4] |     |
> 7           | 4   | 16  |
> 8           | 4   | {16}| A Área do quadrado é = 16
> ```
>
> **Alternativa III**
>
> ```text
> Variáveis
> l | área
> 4 |
>   | 16
> ```
>
> É correto o teste de mesa representado em:
>
> **A.**  
> I.
>
> **B.**  
> I e II.
>
> **C.**  
> I e III.
>
> **D.**  
> II e III.
>
> **E.**  
> Todas as alternativas.
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> **Justificativa geral:**
>>
>> O algoritmo lê o valor do lado do quadrado, calcula a área com a fórmula **area <- l * l** e depois exibe o resultado.
>>
>> Considerando **l = 4**:
>> - **area = 4 * 4**
>> - **area = 16**
>>
>> Assim, qualquer representação que registre corretamente esses valores pode ser aceita como teste de mesa.
>>
>> **Análise das alternativas:**
>>
>> **A alternativa I está correta.**  
>> É um modelo de teste de mesa mais detalhado, mostrando as linhas executadas, a entrada do valor, o cálculo da variável e a saída final.
>>
>> **A alternativa II está correta.**  
>> Também representa corretamente o teste de mesa, mas com um preenchimento mais completo dos campos das variáveis ao longo da execução.
>>
>> **A alternativa III está correta.**  
>> Embora seja uma forma mais simples e resumida, ela registra os valores essenciais das variáveis e atende ao objetivo do teste de mesa.
>>
>> **Por que as opções ficam assim:**
>>
>> **A.** Errada.  
>> A alternativa I está correta, mas não é a única.
>>
>> **B.** Errada.  
>> I e II estão corretas, mas a III também pode ser aceita.
>>
>> **C.** Errada.  
>> I e III estão corretas, mas a II também está correta.
>>
>> **D.** Errada.  
>> II e III estão corretas, mas a I também está correta.
>>
>> **E.** Correta.  
>> As três alternativas representam, em níveis diferentes de detalhamento, um teste de mesa válido.
