---
publish: true
---
# Exercícios 1.3 - Aritmética digital: operações e circuitos

# 1
> [!question] Exercício 1
> Um sistema de aquisição de dados realiza a medição de duas temperaturas e as converte para números digitais com sinal, em que cada número é representado com um total de 8 bits. Têm-se os valores T1 = 123º e T2 = 35º, e se deseja conhecer ∆T = T2 – T1.
>
> Qual é o valor digital de ∆T, se o resultado é apresentado em complemento de 2?
>
> **A.**  
> ∆T = 0 1011000.
>
> **B.**  
> ∆T = 1 1011000.
>
> **C.**  
> ∆T = 1 0101000.
>
> **D.**  
> ∆T = 1 0100111.
>
> **E.**  
> ∆T = 0 0100111.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C.**
>>
>> O cálculo é ∆T = T2 – T1 = 35 – 123 = –88.  
>> Em 8 bits, o número +88 é `01011000`. Para representar –88 em complemento de 2, invertem-se os bits e soma-se 1:
>>
>> `01011000 → 10100111 + 1 = 10101000`
>>
>> Portanto, o resultado é `1 0101000`.
>>
>> **A. Incorreta.** `0 1011000` representa um número positivo, não –88.  
>> **B. Incorreta.** `1 1011000` não corresponde ao complemento de 2 de –88.  
>> **C. Correta.** `1 0101000` é a representação de –88 em complemento de 2 com 8 bits.  
>> **D. Incorreta.** `1 0100111` representa outro valor negativo.  
>> **E. Incorreta.** `0 0100111` representa um número positivo.
>>
>>
>>Por se tratar de um número negativo, é necessária a utilização da forma de complemento de 2; assim, ∆T = T2 – T1= –(88) = –(0 1011000). Realizando o complemento de 2:
>>
>>
>>|     | `0` | `1` | `0` | `1` | `1` | `0` | `0` | `0` |
>>| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
>>|     | `1` | `0` | `1` | `0` | `0` | `1` | `1` | `1` |
>>| `+` |     |     |     |     |     |     |     | `1` |
>>|     | `1` | `0` | `1` | `0` | `1` | `0` | `0` | `0` |
>>
>>Portanto, o número correto é 1 0101000, indicando que é negativo.

# 2
> [!question] Exercício 2
> Você é programador e utiliza a plataforma Arduino para realizar atividades que envolvam eletrônica e programação e, assim, tarefas de automação e controle. Durante um ensaio, você pretende testar um conversor digital analógico (DAC) com resolução de 12 bits (0-1023 em binário), escrevendo valores no compilador para medir a voltagem de saída do conversor DAC. De acordo com a folha de dados do conversor, ele trabalha de 0-5 V; portanto, não aceita valores de referências de entrada negativa. Quando a entrada é 1023, a saída é 5 V; quando escreve 511, a saída é 2,5 V; e quando escreve 0, a saída é 0 V.
>
> Agora, em vez de escrever valores em decimal, você deve escrevê-los em hexadecimal, já que o compilador somente aceita entradas em hexadecimal.
>
> Assim, qual é o valor que deve ser escrito, para que a saída apresente uma tensão o mais próxima de 1 V?
>
> **A.**  
> FF.
>
> **B.**  
> CD.
>
> **C.**  
> 200.
>
> **D.**  
> 64.
>
> **E.**  
> 14 A.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> Como 1023 corresponde a 5 V, para obter aproximadamente 1 V fazemos:
>>
>> `1023 / 5 = 204,6`
>>
>> O valor decimal mais próximo é 205. Convertendo 205 para hexadecimal:
>>
>> `205 = CD`
>>
>> Portanto, o valor a ser escrito é `CD`.
>>
>> **A. Incorreta.** `FF` em hexadecimal equivale a 255 decimal, gerando tensão maior que 1 V.  
>> **B. Correta.** `CD` equivale a 205 decimal, valor mais próximo do necessário para 1 V.  
>> **C. Incorreta.** `200` em hexadecimal equivale a 512 decimal, próximo de 2,5 V.  
>> **D. Incorreta.** `64` em hexadecimal equivale a 100 decimal, gerando tensão menor que 1 V.  
>> **E. Incorreta.** `14A` em hexadecimal equivale a 330 decimal, gerando tensão maior que 1 V.
>>
>> O valor que produz um valor mais próximo é o CD em hexadecimal. Isso é possível de comprovar mediante a utilização da seguinte relação matemática:  
>>   
>> 5 V – 1023  
>> 1 V – x  
>>   
>> x = 1 V * 1023/5 V = 204,6  ≅ 205  
>>   
>> O valor de 205, em decimal, equivale a CD em hexadecimal, ou 205(base 10) = CD (base16).


# 3
> [!question] Exercício 3
> Você está estudando as operações aritméticas em base binária a serem aplicadas em programação de sistemas digitais e dispõe de uma determinada plataforma de programação que realiza operações aritméticas trabalhando com uma resolução de 8 bits + 1 bit de sinal.
>
> Dessa forma, realizando operações de multiplicação de 25 x (–10), qual é sua representação, em binário, na forma de complemento de 2, do resultado dessa multiplicação?
>
> **A.**  
> 1 11111010.
>
> **B.**  
> 1 00000110.
>
> **C.**  
> 1 11111000.
>
> **D.**  
> 0 10000110.
>
> **E.**  
> 1 11111001.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> Primeiro, calcula-se a multiplicação:
>>
>> `25 × (–10) = –250`
>>
>> Como a plataforma trabalha com 8 bits + 1 bit de sinal, temos 9 bits no total. O número +250 em binário é:
>>
>> `0 11111010`
>>
>> Para representar –250 em complemento de 2, invertem-se os bits e soma-se 1:
>>
>> `0 11111010 → 1 00000101 + 1 = 1 00000110`
>>
>> Portanto, a representação correta é `1 00000110`.
>>
>> **A. Incorreta.** `1 11111010` não representa –250 em complemento de 2 com 9 bits.  
>> **B. Correta.** `1 00000110` é a representação de –250 em complemento de 2.  
>> **C. Incorreta.** `1 11111000` representa outro valor negativo.  
>> **D. Incorreta.** `0 10000110` é positivo, não negativo.  
>> **E. Incorreta.** `1 11111001` também representa outro valor negativo.
>>
>> Primeiramente, é necessário converter ambos os números em binário, mas, por convenção, são trabalhados em forma positiva e, somente após o resultado da multiplicação, se adiciona o _bit_ de sinal.​​​​​​​
>>
>> Portanto, o resultado correto da multiplicação é de 1 00000110.
# 4
> [!question] Exercício 4
> A operação aritmética “mais completa” é a divisão, pois, quando se realizam os cálculos, é necessário utilizar as outras operações anteriores em forma conjunta, para obter o resultado. Isso, inclusive, é válido para operações com números binários com sinal, aplicando sempre as regras preestabelecidas para esses cálculos.
>
> Qual é o resultado da divisão de 506/15?
>
> **A.**  
> 0 100001.
>
> **B.**  
> 1 110100.
>
> **C.**  
> 0 110100.
>
> **D.**  
> 1 100001.
>
> **E.**  
> 0 010110.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A.**
>>
>> A divisão inteira é:
>>
>> `506 ÷ 15 = 33`, com resto 11.
>>
>> O número 33 em binário é:
>>
>> `100001`
>>
>> Como o resultado é positivo, o bit de sinal é `0`. Logo:
>>
>> `0 100001`
>>
>> **A. Correta.** `0 100001` representa o valor positivo 33.  
>> **B. Incorreta.** Começa com bit de sinal `1`, indicando valor negativo.  
>> **C. Incorreta.** `0 110100` representa 52, não 33.  
>> **D. Incorreta.** `1 100001` representa valor negativo.  
>> **E. Incorreta.** `0 010110` representa 22, não 33.
>>
>>A operação manual da divisão binária é a melhor forma de treinar a aritmética de números digitais. A divisão de 506/15 = 33, com um resto de 11. Então, como ambos os números são positivos, não precisa utilizar complemento de 2, e o resultado é a conversão direta de 33 para binário. Veja a operação realizada:​​​​​​​
>> ![[09-06-26_14-54-14_Aritmética_digital_operações_e_circuitos__Platafor.png]]
>> Em cada suboperação de subtração, é necessário fazer cálculos auxiliares; para isso, utiliza-se o complemento de 2 e realiza-se a soma dos dois números binários. O resultado, portanto, é 100001, e o resto é 1011.

# 5
> [!question] Exercício 5
> É possível fazer um somador binário extremamente rápido utilizando Flip-Flops discretos e uma alta velocidade de relógio que os comandam. O circuito apresentado na figura realiza as mesmas operações que você obteria se fizesse uma soma binária manualmente, mas ele as faz em paralelo, de forma simultânea.
>
> ![[SC-1.3-IMG-EX-5.png]]
>
> Agora, a partir de um circuito similar ao da figura que utiliza 5 Flip-Flops, significa que tem 5 bits de resolução, calcule os valores dos carries (C5-C0), sabendo que o valor armazenado no registrador A é +17 e o valor armazenado no registrador B é +15.
>
> **A.**  
> 100000.
>
> **B.**  
> 101010.
>
> **C.**  
> 011111.
>
> **D.**  
> 100011.
>
> **E.**  
> 111110.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> Com 5 bits:
>>
>> `A = +17 = 10001`  
>> `B = +15 = 01111`
>>
>> Considerando `C0 = 0`, somamos bit a bit:
>>
>> - Bit 0: `1 + 1 + C0(0)` gera `C1 = 1`
>> - Bit 1: `0 + 1 + C1(1)` gera `C2 = 1`
>> - Bit 2: `0 + 1 + C2(1)` gera `C3 = 1`
>> - Bit 3: `0 + 1 + C3(1)` gera `C4 = 1`
>> - Bit 4: `1 + 0 + C4(1)` gera `C5 = 1`
>>
>> Assim, os carries de `C5` até `C0` são:
>>
>> `C5 C4 C3 C2 C1 C0 = 111110`
>>
>> **A. Incorreta.** `100000` não representa os carries gerados em todos os estágios da soma.  
>> **B. Incorreta.** `101010` alterna carries que não correspondem à soma bit a bit de 17 e 15.  
>> **C. Incorreta.** `011111` considera `C5 = 0`, mas há carry final.  
>> **D. Incorreta.** `100011` não corresponde à propagação correta dos carries.  
>> **E. Correta.** `111110` representa corretamente os carries de `C5` até `C0`.
>>
>> O _carry_ é o elemento que se translada na soma entre duas colunas. A figura abaixo apresenta essa operação em forma manual. Veja que o _carry_ C0 é 0, devido ao circuito não estar trabalhando em cascata com outros circuitos somadores.
>>
>> ![[Pasted image 20260609145606.png]]
>> Portanto, C = 111110, considerando, inclusive, o _carry_ C0, tal como apresentado na figura.

