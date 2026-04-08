---
publish: true
---

### 1
> [!question] Exercício 1  
> **Considerando os valores para as variáveis** `cont = 20`, `vinicial = 12`, `n = 1` e `p = 4`, analise e teste os trechos condicionais dos algoritmos nas sentenças a seguir:
> 
> **I**  
> `x <- falso`  
> `se (cont >= vinicial + p) e nao(n < p) entao`  
> `x <- verdadeiro`  
> `escreval(x)`  
> `fimse`
> 
> **II**  
> `x <- falso`  
> `se (cont < vinicial) ou (n < p) entao`  
> `x <- verdadeiro`  
> `escreval(x)`  
> `fimse`
> 
> **III**  
> `x <- falso`  
> `se (cont > vinicial + n) entao`  
> `x <- verdadeiro`  
> `escreval(x)`  
> `fimse`
> 
> **Pode-se afirmar que:**
> 
> **A.**  
> Apenas os trechos condicionais I e II escrevem "Verdadeiro".
> 
> **B.**  
> Apenas o trecho condicional III escreve "Verdadeiro".
> 
> **C.**  
> Apenas o trecho condicional I não escreve "Verdadeiro".
> 
> **D.**  
> Todos os trechos condicionais escrevem "Falso".
> 
> **E.**  
> Todos os trechos condicionais escrevem "Verdadeiro".
> 
> > [!question]- Resposta  
> > **Alternativa correta: C.**
> > 
> > Analisando os trechos:
> > 
> > **I.**  
> > `cont >= vinicial + p` → `20 >= 16` = **verdadeiro**  
> > `n < p` → `1 < 4` = **verdadeiro**  
> > `nao(n < p)` = **falso**  
> > Logo: `verdadeiro e falso` = **falso**.  
> > Portanto, o trecho **I não escreve "Verdadeiro"**.
> > 
> > **II.**  
> > `cont < vinicial` → `20 < 12` = **falso**  
> > `n < p` → `1 < 4` = **verdadeiro**  
> > Logo: `falso ou verdadeiro` = **verdadeiro**.  
> > Portanto, o trecho **II escreve "Verdadeiro"**.
> > 
> > **III.**  
> > `cont > vinicial + n` → `20 > 13` = **verdadeiro**.  
> > Portanto, o trecho **III escreve "Verdadeiro"**.
> > 


### 2
> [!question] Exercício 2  
> Dado o problema: Ler dois valores **L1** e **L2** que representam os lados de um retângulo. Verifique se os lados podem formar um retângulo, sabendo que, para formar um retângulo, os dois lados devem ser **diferentes**. Caso possa formar um retângulo, exiba a mensagem **“Forma um retângulo”**.
> 
> Analise as alternativas de comandos de seleção simples apresentadas:
> 
> **Alternativa I** 
> ```
> Var  
>     L1, L2: real  
> Inicio  
>     Leia(L1,L2)  
>     se (L1 + L2 = L1) entao  
>         Escreval("Forma um retângulo")  
>     fimse  
> fimalgoritmo
> 
> ```
> **Alternativa II**  
> ```Var  
>     L1, L2: real  
> Inicio  
>     Leia(L1,L2)  
>     se (L1 <> L2) entao  
>         Escreval("Forma um retângulo")  
>     fimse  
> fimalgoritmo
> ```
> 
> **Alternativa III**  
> ```
> Var  
>     L1, L2: real  
> Inicio  
>     Leia(L1,L2)  
>     se (L1 = L2) entao  
>         Escreval("Forma um retângulo")  
>     fimse  
> fimalgoritmo
> ```
> 
> Selecione quais comandos de seleção simples com a expressão lógica apresentada atendem à solução do problema.
> 
> **A.**  
> Alternativa I.
> 
> **B.**  
> Alternativa II.
> 
> **C.**  
> Alternativas II e III.
> 
> **D.**  
> Alternativas I e III.
> 
> > [!question]- Resposta  
> > **Alternativa correta: B.**
> > 
> > **Alternativa I: errada.**  
> > A condição `L1 + L2 = L1` não verifica se os lados são diferentes. Na prática, isso só faria sentido em um caso inconsistente, como `L2 = 0`, então não resolve o problema.
> > 
> > **Alternativa II: certa.**  
> > A condição `L1 <> L2` significa **L1 diferente de L2**, que é exatamente o que o enunciado pede para formar o retângulo.
> > 
> > **Alternativa III: errada.**  
> > A condição `L1 = L2` verifica se os lados são **iguais**, mas o problema diz que os lados devem ser **diferentes**.
> > 
> > **A. Errada.**  
> > A alternativa I não atende à lógica pedida.
> > 
> > **B. Certa.**  
> > A alternativa II é a única que usa a condição correta: lados diferentes.
> > 
> > **C. Errada.**  
> > A III está incorreta, então essa opção não pode ser a resposta.
> > 
> > **D. Errada.**  
> > Nem a I nem a III resolvem corretamente o problema.


### 3
> [!question] Exercício 3  
> Dado o algoritmo em pseudocódigo que testa se um número é negativo, positivo ou zero:
> 
> Algoritmo "teste_numero"  
>```
> var  
>     n: inteiro  
> Inicio  
>     escreva("Informe um numero inteiro:")  
>     leia(n)  
>     se(n<0) entao  
>         escreva("O numero informado é negativo.")  
>     fimse  
>     se(n>0) entao  
>         escreva("O numero informado é positivo.")  
>     fimse  
>     se(n=0) entao  
>         escreva("O numero informado é zero.")  
>     fimse  
> fimalgoritmo
>```
> 
> Marque a alternativa correta.
> 
> **A.**  
> Funciona corretamente para qualquer valor.
> 
> **B.**  
> Funciona somente para números maiores que zero.
> 
> **C.**  
> Funciona para números menores ou iguais a zero.
> 
> **D.**  
> Funciona para números maiores ou iguais a zero.
> 
> **E.**  
> Funciona para números diferentes de zero.
> 
> > [!question]- Resposta  
> > **Alternativa correta: A.**
> > 
> > O algoritmo testa separadamente as três possibilidades:
> > 
> > - `n < 0` → número negativo
> >     
> > - `n > 0` → número positivo
> >     
> > - `n = 0` → número zero
> >     
> > 
> > Como essas três condições cobrem todos os casos possíveis para um número inteiro, o algoritmo funciona corretamente.
> > 
> > **A. Certa.**  
> > O algoritmo atende aos três casos possíveis: negativo, positivo e zero.
> > 
> > **B. Errada.**  
> > Ele não funciona somente para números maiores que zero, porque também trata números negativos e zero.
> > 
> > **C. Errada.**  
> > Ele funciona para menores ou iguais a zero, mas não só para isso; também funciona para positivos.
> > 
> > **D. Errada.**  
> > Ele funciona para maiores ou iguais a zero, mas também funciona para negativos.
> > 
> > **E. Errada.**  
> > Não trata apenas números diferentes de zero, pois também possui teste específico para `n = 0`.


### 4
> [!question] Exercício 4  
> Dado o algoritmo em pseudocódigo:
> 
> ```
> Algoritmo "maior_idade"  
> var  
>     ano, ano_atual, diferenca: inteiro  
> Inicio  
>     Escreva("Informe o ano do seu nascimento: ")  
>     Leia(ano)  
>     Escreva("Informe o ano atual: ")  
>     Leia(ano_atual)  
>     diferenca <- ano_atual - ano  
>     se (expressão lógica) entao  
>         Escreval("É maior de idade")  
>     fimse  
> fimalgoritmo
> ```
> 
> Selecione a alternativa que preenche corretamente a expressão lógica do comando de controle simples.
> 
> **A.**  
> diferenca > 18
> 
> **B.**  
> diferenca < 18
> 
> **C.**  
> diferenca <= 18
> 
> **D.**  
> diferenca <> 18
> 
> **E.**  
> diferenca >= 18
> 
> > [!question]- Resposta  
> > **Alternativa correta: E.**
> > 
> > A variável `diferenca` representa a **idade da pessoa**, pois é calculada por:
> > 
> > `diferenca <- ano_atual - ano`
> > 
> > Para que o algoritmo escreva **“É maior de idade”**, a idade deve ser **18 anos ou mais**. Por isso, a condição correta é:
> > 
> > `diferenca >= 18`
> > 
> > **A. Errada.**  
> > `diferenca > 18` excluiria quem tem **exatamente 18 anos**, mas essa pessoa já é maior de idade.
> > 
> > **B. Errada.**  
> > `diferenca < 18` indicaria que a pessoa é **menor** de idade, não maior.
> > 
> > **C. Errada.**  
> > `diferenca <= 18` incluiria quem tem menos de 18 anos, o que está incorreto.
> > 
> > **D. Errada.**  
> > `diferenca <> 18` significa “diferente de 18”, o que não define corretamente maioridade.
> > 
> > **E. Certa.**  
> > `diferenca >= 18` representa corretamente que a pessoa tem **18 anos ou mais**.


### 5
> [!question] Exercício 5  
> Dado o algoritmo:
> 
>```
> Algoritmo "teste"  
> var  
>     c: inteiro  
>     a, b, x: real  
> Inicio  
>     Leia(a,b,c)  
>     se (a<1) entao  
>         x <- 0  
>     fimse  
>     se (a>=1) e (a<=10) entao  
>         x <- b^2 - 4 + (c \ 2)  
>     fimse  
>     se (a>10) e (a<=20) entao  
>         x <- quad(a) * raizq(c)  
>     fimse  
>     se (a>20) entao  
>         x <- a + (20 mod 3) - quad(b)  
>     fimse  
>     escreval("x = ", x)  
> fimalgoritmo
>```
> 
> Realize o teste do algoritmo com os valores de entrada para **a = 22**, **b = 3** e **c = 9**. O valor impresso da variável **x** ao término do algoritmo será:
> 
> **A.**  
> 0 (zero)
> 
> **B.**  
> 1452
> 
> **C.**  
> 9
> 
> **D.**  
> 15
> 
> **E.**  
> 22
> 
> > [!question]- Resposta  
> > **Alternativa correta: D.**
> > 
> > Vamos testar as condições:
> > 
> > - `a < 1` → `22 < 1` = **falso**
> >     
> > - `a >= 1 e a <= 10` → **falso**
> >     
> > - `a > 10 e a <= 20` → `22 <= 20` = **falso**
> >     
> > - `a > 20` → `22 > 20` = **verdadeiro**
> >     
> > 
> > Então será executado:
> > 
> > `x <- a + (20 mod 3) - quad(b)`
> > 
> > Calculando:
> > 
> > - `20 mod 3 = 2`
> >     
> > - `quad(b) = 3² = 9`
> >     
> > 
> > Logo:
> > 
> > `x = 22 + 2 - 9 = 15`
> > 
> > **A. Errada.**  
> > O valor 0 só seria atribuído se `a < 1`, o que não acontece.
> > 
> > **B. Errada.**  
> > Esse valor não corresponde a nenhum cálculo executado com `a = 22`.
> > 
> > **C. Errada.**  
> > O resultado final não é 9; o quadrado de `b` é 9, mas ele é apenas uma parte da expressão.
> > 
> > **D. Certa.**  
> > Como `a > 20`, a expressão usada é `a + (20 mod 3) - quad(b)`, resultando em **15**.
> > 
> > **E. Errada.**  
> > O valor de `x` não permanece igual a `a`; ele é alterado pela expressão do último bloco condicional.

