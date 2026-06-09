---
publish: true
---
# Exercicios 1.4 - Circuitos logicos sequenciais
# 1
> [!question] Exercício 1
> Os circuitos lógicos combinacionais são limitados em sua utilização, já que não possuem memória, ou seja, não podem armazenar bits e lê-los depois. Por sua vez, um circuito lógico sequencial é composto de um circuito lógico combinacional acrescido de um elemento de memória.
>
> Com base em sua estrutura, o circuito lógico sequencial pode ter diferentes comportamentos, originando modelos distintos. Qual a diferença entre esses modelos?
>
> **A.**  
> No modelo de Moore, as saídas dependem unicamente do estado no qual o circuito se encontra. No modelo de Mealy, as saídas não dependem apenas do estado atual do circuito, mas também do valor atual das entradas externas.
>
> **B.**  
> No modelo de Moore, as entradas dependem do estado no qual o circuito se encontra. No modelo de Mealy, as entradas não dependem apenas do estado atual do circuito, mas também do valor atual das entradas externas.
>
> **C.**  
> No modelo de Moore, as saídas dependem exclusivamente das entradas do circuito. No modelo de Mealy, as saídas não dependem apenas do estado atual do circuito, mas também do valor atual das entradas externas.
>
> **D.**  
> No modelo de Moore, as saídas dependem unicamente do estado no qual o circuito se encontra. No modelo de Mealy, as entradas dependem apenas do estado atual do circuito.
>
> **E.**  
> No modelo de Moore, as saídas dependem unicamente do estado anterior no qual o circuito se encontrava. No modelo de Mealy, as saídas dependem apenas do valor atual das entradas externas.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A.**
>>
>> No **modelo de Moore**, as saídas dependem apenas do **estado atual** do circuito. Já no **modelo de Mealy**, as saídas dependem tanto do **estado atual** quanto das **entradas externas atuais**.
>>
>> **A. Correta.** Define corretamente a diferença entre os modelos de Moore e Mealy.  
>> **B. Incorreta.** O erro está em dizer que as entradas dependem do estado; o correto é analisar as saídas.  
>> **C. Incorreta.** No modelo de Moore, as saídas não dependem exclusivamente das entradas, mas sim do estado atual.  
>> **D. Incorreta.** A primeira parte está correta, mas a segunda erra ao dizer que as entradas dependem do estado.  
>> **E. Incorreta.** Moore depende do estado atual, não apenas do estado anterior; Mealy também depende do estado atual, além das entradas.
>>
>> No **modelo de Moore** (ou modelo dependente dos estados), as saídas dependem unicamente do estado no qual o circuito se encontra; desse modo, a próxima borda do _clock_ será responsável na mudança dos valores de entrada. Já no **modelo de Mealy** (ou modelo dependente das entradas), as saídas não dependem apenas do estado atual do circuito, mas também do valor atual das entradas externas, de forma que, se as mesmas forem alteradas antes da troca de estados, as saídas do circuito poderão ser alteradas.

# 2
> [!question] Exercício 2
> Os diferentes tipos de _flip-flops_ podem ser diferenciados pelo número de entradas, pelas quais o estado atual dos circuitos de memória é modificado. Os tipos mais comuns de _flip-flops_ são os _latches_. Os _latches_ têm dois níveis de sinais de entrada e são utilizados na construção de _flip-flops_ mais complexos.
>
> Qual das alternativas a seguir apresenta a tabela de transição de estados correta para o _latch_ RS?
>
> **A.**  
>
> | **R** | **S** | **Qt+1** |
> |---|---|---|
> | 0 | 0 | 0 |
> | 0 | 1 | 1 |
> | 1 | 0 | 0 |
> | 1 | 1 | - |
>
> **B.**  
>
> | **R** | **S** | **Qt+1** |
> |---|---|---|
> | 0 | 0 | Qt |
> | 0 | 1 | 0 |
> | 1 | 0 | 1 |
> | 1 | 1 | 0 |
>
> **C.**  
>
> | **R** | **S** | **Qt+1** |
> |---|---|---|
> | 0 | 0 | 0 |
> | 0 | 1 | 0 |
> | 1 | 0 | 1 |
> | 1 | 1 | - |
>
> **D.**  
>
> | **R** | **S** | **Qt+1** |
> |---|---|---|
> | 0 | 0 | Qt |
> | 0 | 1 | 0 |
> | 1 | 0 | 1 |
> | 1 | 1 | 1 |
>
> **E.**  
>
> | **R** | **S** | **Qt+1** |
> |---|---|---|
> | 0 | 0 | Qt |
> | 0 | 1 | 1 |
> | 1 | 0 | 0 |
> | 1 | 1 | - |
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> No _latch_ RS, quando `R = 0` e `S = 0`, o circuito mantém o estado anterior, ou seja, `Qt`. Quando `S = 1`, a saída é setada para `1`. Quando `R = 1`, a saída é resetada para `0`. Quando `R = 1` e `S = 1`, ocorre uma condição proibida ou inválida.
>>
>> **A. Incorreta.** Erra ao indicar `0` para `R = 0` e `S = 0`; nessa condição, o estado deve ser mantido como `Qt`.  
>> **B. Incorreta.** Inverte os efeitos de `R` e `S`: `S = 1` deveria setar a saída para `1`, e `R = 1` deveria resetar para `0`.  
>> **C. Incorreta.** Também erra a condição de memória e inverte os efeitos de set e reset.  
>> **D. Incorreta.** Apresenta valores incorretos para as condições de set, reset e para a entrada proibida.  
>> **E. Correta.** Representa corretamente a tabela do _latch_ RS.
>>
>>Se R e S iguais a 0 (zero), o _latch_ mantém o estado anterior.
>> 
>> Se R igual a 0 (zero) e S igual a 1 (um), o _latch_ entra em estado _set_.
>> 
>> Se R igual a 1 (um) e S igual a 0 (zero), o _latch_ entra em estado _reset_.
>> 
>> E por último, se R igual a 1 (um) e S igual a 1 (um), o _latch_ entra em estado proibido, já que não são possíveis mais de dois valores válidos em binário, penas 0 (zero) e 1 (um).

# 3
> [!question] Exercício 3
> O tempo de ciclo equivale ao sinal de clock, ou seja, o mesmo indica quando uma atividade é inicializada por um circuito digital sequencial.
>
> Por curiosidade, após realizar a leitura do conteúdo e compreender o cálculo de frequência, você resolveu descobrir qual o tempo de ciclos que o processador do seu computador pessoal pode inicializar em nanossegundos. Sabendo que o mesmo tem a capacidade 2.4GHz de processamento, você chegou ao seguinte cálculo: 1 / 2.4 x 10⁹ =
>
> A resposta para esse cálculo é:
>
> **A.**  
> 42 x 10⁻⁹s = 42ns
>
> **B.**  
> 0,24 x 10⁻⁹s = 0,24ns
>
> **C.**  
> 0,42 x 10⁻⁹s = 0,42ns
>
> **D.**  
> 4,2 x 10⁻⁹s = 4,2ns
>
> **E.**  
> 2,4 x 10⁻⁹s = 2,4ns
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C.**
>>
>> A frequência é `2,4 GHz`, ou seja, `2,4 x 10⁹ Hz`. O tempo de ciclo é o inverso da frequência:
>>
>> `T = 1 / (2,4 x 10⁹)`
>>
>> `T ≈ 0,42 x 10⁻⁹ s`
>>
>> Como `1 ns = 10⁻⁹ s`, o tempo de ciclo é aproximadamente `0,42 ns`.
>>
>> **A. Incorreta.** `42 ns` é muito maior que o período correspondente a `2,4 GHz`.  
>> **B. Incorreta.** `0,24 ns` não corresponde ao inverso de `2,4 x 10⁹`.  
>> **C. Correta.** `0,42 x 10⁻⁹ s = 0,42 ns`, valor aproximado correto.  
>> **D. Incorreta.** `4,2 ns` seria compatível com uma frequência menor, não com `2,4 GHz`.  
>> **E. Incorreta.** `2,4 ns` confunde o valor da frequência com o período.
>>
>> Refazendo o cálculo, temos: 1 (um) dividido por 2.4 é igual a 0,416666... (uma dízima periódica). Se arredondarmos o resultado para cima a fim de facilitar nosso cálculo, chegamos ao valor 0,42. Então, temos 0,42 x 10-9 (o sinal da potência inverte quando tiramos a mesma da fração) = 0,42 x 10-9 = 0,42 x 1 = 0,42ns (nanossegundos).

# 4
> [!question] Exercício 4
> Os latches originaram os circuitos flip-flops. Uma implementação de dois latches interligados em cascata originou o flip-flop D.
>
> Além do flip-flop D, também foi desenvolvido o flip-flop JK, que tem comportamento parecido com o do latch RS. Entretanto, por que o flip-flop JK direciona ao complemento do estado anterior quando os respectivos valores de entrada são iguais a 1 (um)?
>
> **A.**  
> Para evitar que o flip-flop se mantenha no mesmo estado.
>
> **B.**  
> Para evitar o estado proibido.
>
> **C.**  
> Para que a saída não seja igual a 0 (zero).
>
> **D.**  
> Para evitar que a realimentação do flip-flop seja igual a 0 (zero).
>
> **E.**  
> Para que as entradas não tenham o estado proibido.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> O _flip-flop_ JK foi desenvolvido como uma melhoria em relação ao RS. No RS, a condição em que as duas entradas estão em `1` é proibida. No JK, quando `J = 1` e `K = 1`, o circuito não entra em estado inválido; ele alterna para o complemento do estado anterior.
>>
>> **A. Incorreta.** A alternância realmente impede a permanência no mesmo estado, mas esse não é o motivo principal do projeto do JK.  
>> **B. Correta.** O JK elimina o estado proibido existente no RS.  
>> **C. Incorreta.** A saída pode ser `0` ou `1`, dependendo do estado anterior.  
>> **D. Incorreta.** O problema não é a realimentação ser igual a `0`, mas sim a condição proibida do RS.  
>> **E. Incorreta.** As entradas podem ser `1` e `1`; o que deixa de existir é o estado proibido na saída/comportamento do circuito.
>>
>> O **_flip-flop_ JK** foi desenvolvido com comportamento baseado no _latch_ RS. Porém, o **_latch_ RS** direciona a um **estado proibido** quando suas entradas têm valores iguais a 1 (um). Desse modo, o **_flip-flop_ JK** implementa uma melhoria em relação ao _latch_ RS, que consiste em direcionar ao **complemento do estado anterior** quando os valores de entrada são iguais a 1 (um).

# 5
> [!question] Exercício 5
> Considere as seguintes afirmativas:
>
> I- Os diferentes tipos de flip-flops podem ser diferenciados pelo número de saídas, pelas quais o próximo estado dos circuitos de memória é afetado.
>
> II- O que determina o estado em que um circuito sequencial se encontra é o valor da informação armazenada na memória em um determinado momento.
>
> III- Em um circuito sequencial, a informação recebida e armazenada pelo elemento de memória é codificada em binário (0 e 1).
>
> Quais dessas afirmativas estão corretas?
>
> **A.**  
> Apenas I.
>
> **B.**  
> Apenas I e III.
>
> **C.**  
> Apenas III.
>
> **D.**  
> Apenas II e III.
>
> **E.**  
> Apenas II.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D.**
>>
>> A afirmativa I está incorreta porque os tipos de _flip-flops_ são diferenciados principalmente pelas **entradas** e pelo comportamento de transição de estado, não pelo número de saídas. A afirmativa II está correta, pois o estado de um circuito sequencial depende da informação armazenada na memória. A afirmativa III também está correta, pois os circuitos digitais armazenam e processam informações em binário, usando `0` e `1`.
>>
>> A afirmativa I está incorreta. O correto seria: "Os diferentes tipos de flip-flops podem ser diferenciados pelo número de entradas, pelas quais as respectivas entradas afetam o estado atual dos circuitos de memória”.
>> 
>> A afirmativa II está correta, pois realmente o que determina o estado em que um circuito sequencial se encontra é o valor da informação armazenada na memória em um determinado momento.
>> 
>> A afirmativa III também está correta. As chaves eletrônicas são a base para os circuitos lógicos digitais, porque as mesmas só podem utilizar dois estados (ligado e desligado), adequando-se ao sistema binário, que só utiliza dois valores (0 e 1).

