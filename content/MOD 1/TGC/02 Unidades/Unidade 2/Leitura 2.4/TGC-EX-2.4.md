---
publish: true
---

### 1
> [!question] Exercício 1  
> **Observe o algoritmo:**
> 
> ```
> Algoritmo "calculo"  
> var  
>     num1, num2, num3, total: real  
> inicio  
>     leia(num1, num2, num3)  
>     total <- (quad(num1) + exp(num2, 2) + raizq(num3))  
>     escreva("Resultado = ", total)  
> fimalgoritmo
> ```
>
>
> Se, no comando de entrada **Leia**, forem fornecidos os valores:
> 
> - num1 = 2
>     
> - num2 = 6
>     
> - num3 = 4
>     
> 
> Qual será o valor da variável **total** apresentado no comando de saída **Escreva**?
> 
> **A.**  
> 46,0
> 
> **B.**  
> 56,0
> 
> **C.**  
> 55,2
> 
> **D.**  
> 54,0
> 
> **E.**  
> 42,0
> 
> > [!question]- Resposta  
> > **Alternativa correta: E.**
> > 
> > Vamos calcular cada parte da expressão:
> > 
> > - `quad(num1)` = quadrado de 2 = **4**
> >     
> > - `exp(num2,2)` = 6² = **36**
> >     
> > - `raizq(num3)` = raiz quadrada de 4 = **2**
> >     
> > 
> > Então:
> > 
> > `total = 4 + 36 + 2 = 42`
> > 
> > **A. Errada.**  
> > O valor **46,0** não corresponde à soma correta das três operações.
> > 
> > **B. Errada.**  
> > O valor **56,0** é maior que o resultado real do cálculo e não bate com a expressão do algoritmo.
> > 
> > **C. Errada.**  
> > O valor **55,2** não pode ser obtido a partir dessas operações, já que todas resultam em valores inteiros nesse caso.
> > 
> > **D. Errada.**  
> > O valor **54,0** também não corresponde ao cálculo correto da fórmula.
> > 
> > **E. Certa.**  
> > Somando corretamente o quadrado de 2, o quadrado de 6 e a raiz quadrada de 4, o resultado é **42,0**.
>>
>>total <- (quad (num1) + exp(num2,2) + raizq(num3) )
>>total <- ( quad(2) + exp(6,2) + raiz(4))
>>total <- (4,0 + 36,0 + 2,0)
>>total <- 42,0

### 2
> [!question] Exercício 2  
> Considerando os operadores lógicos, relacionais e de atribuição utilizados na ferramenta de desenvolvimento de algoritmos em pseudocódigo VisuAlg, analise cada uma das seguintes afirmações e classifique em V (verdadeira) ou F (falsa).
> 
> I – Os conectivos “e”, “ou” e “não” são operadores lógicos.
> 
> II – O operador aritmético para realizar a divisão de inteiros é o símbolo “/”; para o resto da divisão, é Mod ou “^”.
> 
> III – Os operadores relacionais utilizados são >, <, >=, <=, =, !=.
> 
> IV – O símbolo que representa uma atribuição é o “<-”.
> 
> **A.**  
> V, V, F, F.
> 
> **B.**  
> V, F, F, V.
> 
> **C.**  
> F, V, F, V.
> 
> **D.**  
> V, F, V, F.
> 
> **E.**  
> V, V, V, V.
> 
> > [!question]- Resposta  
> > **Alternativa correta: B.**
> > 
> > **I. Verdadeira.**  
> > Os termos **“e”**, **“ou”** e **“não”** são realmente **operadores lógicos**, usados para combinar ou negar condições.
> > 
> > **II. Falsa.**  
> > O símbolo **“/”** representa a divisão comum. Para **divisão inteira**, usa-se outro operador, e **“^”** não representa resto da divisão, mas sim potenciação. O resto da divisão é representado por **mod**.
> > 
> > **III. Falsa.**  
> > Embora vários operadores listados estejam corretos, o **“!=”** não é o operador relacional padrão do VisuAlg para diferente. Por isso, a afirmação fica incorreta.
> > 
> > **IV. Verdadeira.**  
> > O símbolo **“<-”** é usado para **atribuição**, isto é, para guardar um valor em uma variável.
> > 
>>As alternativas I e IV são verdadeiras; 
>>II e III são falsas. 
>>A alternativa II é falsa porque o operador da divisão de inteiros é “\” no VisuAlg, e o resto da divisão é Mod ou “%”. 
>>A alternativa III é falsa porque o operador de diferente é o símbolo “<>” , não “!=”.

### 3
> [!question] Exercício 3  
> Leia as coordenadas de dois pontos no plano cartesiano, calcule e imprima a distância entre esses dois pontos. A fórmula que calcula a distância entre os dois pontos é:
> 
>  
> $$d = \sqrt{(x2-x1)^2 + (y2-y1)^2}$$
> 
> 
> Analise os algoritmos apresentados nas alternativas abaixo e identifique quais representam uma solução para o problema do cálculo da distância entre dois pontos.
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
> I, II e III.
> 
> > [!question]- Resposta  
>> E.
>>As três alternativas estão corretas, utilizam as funções exp(), quad() e o operador “^”, que resolvem o problema proposto.


> [!question] Exercício 3  
> Leia as coordenadas de dois pontos no plano cartesiano, calcule e imprima a distância entre esses dois pontos. A fórmula que calcula a distância entre os dois pontos ((x1,y1)) e ((x2,y2)) é dada por:
> 
> $$(d = \sqrt{(x2-x1)^2 + (y2-y1)^2})$$
> 
> Analise os algoritmos apresentados nas alternativas abaixo.
>```
> **I.**  
> Algoritmo “Alternativa_I”  
> Var  
>     x1,x2,y1,y2,c1,c2,d: real  
> inicio  
>     Leia(x1,y1)  
>     Leia(x2,y2)  
>     c1 <- exp((x2 - x1),2)  
>     c2 <- exp((y2 - y1),2)  
>     d <- raizq(c1+c2)  
>     Escreva("Resultado = ",d)  
> Fimalgoritmo
>```
>
>```
> **II.**  
> Algoritmo “Alternativa_II”  
> Var  
>     x1,x2,y1,y2,c1,c2,d: real  
> inicio  
>     Leia(x1,y1)  
>     Leia(x2,y2)  
>     c1 <- (x2 - x1) ^ 2  
>     c2 <- (y2 - y1) ^2  
>     d <- raizq(c1+c2)  
>     Escreva("Resultado = ",d)  
> Fimalgoritmo
> 
>```
>
>```
>
**III.**  
> Algoritmo “Alternativa_III”  
> Var  
>     x1,x2,y1,y2,d: real  
> inicio  
>     Leia(x1,y1)  
>     Leia(x2,y2)  
>     d <- raizq(quad(x2-x1)+quad(y2-y1))  
>     Escreva("Resultado = ",d)  
> Fimalgoritmo
> 
>```
> Quais alternativas apresentadas representam uma solução para o problema do cálculo da distância entre dois pontos?
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
> I, II e III.
> 
> > [!question]- Resposta  
> > **Alternativa correta: E.**
> > 
> > **I. Correta.**  
> > Calcula os quadrados das diferenças com `exp(...,2)`, soma os resultados e depois aplica a raiz quadrada. Isso corresponde à fórmula da distância.
> > 
> > **II. Correta.**  
> > Também resolve corretamente, pois usa a potenciação `^ 2` para elevar ao quadrado e depois aplica a raiz quadrada da soma.
> > 
> > **III. Correta.**  
> > Também está correta, apenas de forma mais direta, usando `quad(...)` para o quadrado e `raizq(...)` para a raiz quadrada.
> > 
> > **A. Errada.**  
> > A I está correta, mas não é a única.
> > 
> > **B. Errada.**  
> > I e II estão corretas, mas a III também está.
> > 
> > **C. Errada.**  
> > I e III estão corretas, mas a II também está.
> > 
> > **D. Errada.**  
> > II e III estão corretas, mas a I também está.
> > 
> > **E. Certa.**  
> > As três alternativas implementam corretamente a fórmula da distância entre dois pontos.


### 4
> [!question] Exercício 4  
> **São dados três valores que representam as três notas de um aluno na disciplina de Algoritmos; os valores são representados por n1, n2 e n3.** **Calcule e imprima a média harmônica.**
> 
> Sabe-se que a média harmônica entre números reais positivos (x1, x2, ..., xn) é definida como sendo o inverso da média aritmética dos seus inversos, ou seja, o número de termos dividido pela soma do inverso dos termos:
> 
> 
> $$h = \frac{n}{\frac{1}{x1} + \frac{1}{x2} + \frac{1}{x3} + \dots + \frac{1}{xn}}$$  
> 
> 
> Observe:
> 
> - $(x1, x2, \dots, xn)$: representam as notas **n1, n2 e n3**.
>     
> - (n): representa o número de termos, ou seja, a quantidade de notas.
>     
> 
> Selecione a alternativa que contempla corretamente o comando de atribuição para o cálculo da média harmônica em pseudocódigo.
> 
> **A.**  
> h <- n / (1 + (n1 * n2 * n3))
> 
> **B.**  
> h <- n1 + n2 + 1/n3
> 
> **C.**  
> h <- n / (1/n1 + 1/n2 + 1/n3)
> 
> **D.**  
> h <- n/n1 + n/n2 + n/n3
> 
> **E.**  
> h <- n/(1/(n1 + n2 + n3))
> 
> > [!question]- Resposta  
> > **Alternativa correta: C.**
> > 
> > A fórmula da média harmônica é:
> > 
> > `h <- n / (1/n1 + 1/n2 + 1/n3)`
> > 
> > Como existem **três notas**, o valor de **n** representa a quantidade de termos, e o denominador deve ser a **soma dos inversos** dessas notas.
> > 
> > **A. Errada.**  
> > Usa uma expressão que envolve **1 + produto das notas**, o que não tem relação com a fórmula da média harmônica.
> > 
> > **B. Errada.**  
> > Apenas soma duas notas e o inverso da terceira. A média harmônica exige o **número de termos dividido pela soma dos inversos** de todas as notas.
> > 
> > **C. Certa.**  
> > Essa alternativa representa exatamente a fórmula correta da média harmônica para três valores.
> > 
> > **D. Errada.**  
> > Essa expressão distribui `n` separadamente em cada fração e depois soma tudo, o que é diferente de dividir `n` pela soma dos inversos.
> > 
> > **E. Errada.**  
> > Aqui foi colocado o inverso da **soma das notas**, mas a fórmula correta usa a **soma dos inversos** das notas.
> > 
>>A alternativa C é a alternativa correta, onde as operações são executadas de acordo com a precedência correta. As alternativas a,b,d e e apresentam formulas diferentes


### 5
> [!question] Exercício 5  
> Um pedreiro necessita de auxílio para o cálculo de conversão de uma medida recebida em metros para centímetros e milímetros. O valor deve ser informado em metros e exibido para o pedreiro em centímetros e milímetros. Analise as soluções apresentadas nas alternativas e selecione a que representa a solução correta para o problema.
> 
> ```
> **A.**  
> Algoritmo “um”  
> Var m, cm: real  
> inicio  
> Leia(m)  
> cm <- m*100  
> mm <- m * 1000  
> Escreva(cm, mm)  
> fimalgoritmo
> ```
> 
> ```
> **B.**  
> Algoritmo “dois”  
> Var m, cm, mm: real  
> inicio  
> Leia(m)  
> cm <- m*100  
> mm <- m *1000  
> Escreva(cm, mm)  
> fimalgoritmo
> ```
> 
> ```
> **C.**  
> Algoritmo “tres”  
> Var m, cm, mm: inteiro  
> inicio  
> Leia(m)  
> cm <- m*100  
> mm <- m * 1000  
> Escreva(cm, mm)  
> fimalgoritmo
> ```
> 
> ```
> **D.**  
> Algoritmo “quatro”  
> Var m, cm, mm: real  
> inicio  
> cm <- m*100  
> mm <- m * 1000  
> Escreva(cm, mm)  
> fimalgoritmo
> ```
> 
> ```
> **E.**  
> Algoritmo “cinco”  
> Var m, cm, mm: real  
> inicio  
> leia(m)  
> cm <- m*1000  
> mm <- m * 100  
> Escreva(cm, mm)  
> fimalgoritmo
> ```
> 
> > [!question]- Resposta  
> > **Alternativa correta: B.**
> > 
> > **A. Errada.**  
> > O algoritmo até faz os cálculos corretamente, mas a variável **mm** não foi declarada na seção `Var`. Isso torna a solução incompleta.
> > 
> > **B. Certa.**  
> > Essa alternativa está correta porque **declara todas as variáveis**, lê o valor em metros e faz corretamente as conversões:  
> > `cm <- m * 100` e `mm <- m * 1000`.
> > 
> > **C. Errada.**  
> > A lógica está quase correta, mas declarar as variáveis como **inteiro** pode gerar problema, porque uma medida em metros pode ter casas decimais, como 1,75 m.
> > 
> > **D. Errada.**  
> > O algoritmo não possui o comando **Leia(m)**. Sem ler o valor de entrada, não há como fazer a conversão corretamente.
> > 
> > **E. Errada.**  
> > As conversões foram invertidas. O correto é **centímetros = metros × 100** e **milímetros = metros × 1000**, e não o contrário.
