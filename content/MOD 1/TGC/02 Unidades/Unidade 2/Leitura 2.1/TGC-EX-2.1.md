---
publish: true
---
### 1
> [!question] Exercício 1  
> Entender a estrutura e a funcionalidade de programas monolíticos é fundamental para a ciência da computação. Esses programas são caracterizados por uma sequência linear de instruções que são executadas de forma sequencial, sem a necessidade de loops ou chamadas recursivas.
> 
> Qual das seguintes opções melhor define um programa monolítico?
> 
> **A.**  
> Um programa que utiliza apenas instruções recursivas.
> 
> **B.**  
> Um programa que repete um conjunto de instruções até que uma condição seja atendida.
> 
> **C.**  
> Um programa que executa instruções em uma sequência linear com base somente em estruturas de desvio condicional e incondicional.
> 
> **D.**  
> Um programa que é escrito em uma única linha de código.
> 
> **E.**  
> Um programa que pode ser dividido em múltiplos módulos.
> 
> > [!question]- Resposta
> > 
> > **Alternativa correta: C.**
> > 
> > **A. Errada.** Recursão não define programa monolítico; ela é uma técnica específica de programação.  
> > **B. Errada.** Isso descreve repetição por laço, não um programa monolítico/sequencial simples.  
> > **C. Certa.** Essa alternativa melhor representa a ideia de execução linear das instruções, sem modularização ou estruturas mais complexas.  
> > **D. Errada.** “Monolítico” não quer dizer escrito em uma única linha, mas sim organizado como um bloco único de execução.  
> > **E. Errada.** Divisão em múltiplos módulos é justamente o oposto da ideia de programa monolítico.
> > 
> > Programas monolíticos têm como característica principal a execução de instruções em uma ordem sequencial estrita, utilizando-se apenas de estruturas de desvio condicional ou incondicional. Ao contrário de algumas concepções errôneas, **a ausência de _loops_ e chamadas recursivas é o que define sua natureza**, e não o número de linhas de código ou a modularização. É um equívoco considerar que um programa escrito em uma única linha de código é monolítico, assim como a ideia de que ele não pode ser dividido em módulos. A verdadeira essência de um programa monolítico está em sua **execução linear e contínua**.


### 2
> [!question] Exercício 2  
> Os programas iterativos são fundamentais em computação, permitindo a execução de blocos de código repetidamente até que uma condição seja satisfeita.
> 
> Qual das alternativas a seguir representa a estrutura básica de um programa iterativo?
> 
> **A.**  
> Execução sequencial de instruções sem repetição.
> 
> **B.**  
> Um conjunto de instruções que se chama repetidamente.
> 
> **C.**  
> Um bloco de instruções que é executado continuamente independentemente de condições.
> 
> **D.**  
> Uma sequência de instruções que é repetida enquanto uma condição específica for verdadeira.
> 
> **E.**  
> Uma instrução que chama a si mesma.
> 
> > [!question]- Resposta
> > 
> > **Alternativa correta: D.**
> > 
> > **A. Errada.** Isso descreve um programa sequencial, não iterativo.  
> > **B. Errada.** Isso se aproxima mais de chamada de função ou recursão, não da estrutura básica de iteração.  
> > **C. Errada.** Em programas iterativos, a repetição normalmente depende de uma condição de controle.  
> > **D. Certa.** Essa é a definição básica de iteração: repetir instruções enquanto uma condição for verdadeira.  
> > **E. Errada.** Isso descreve recursão, quando uma instrução ou função chama a si mesma.
> > 
> > Programas iterativos são uma parte vital da computação, pois permitem realizar operações repetidas com base em determinadas condições. Em vez de simplesmente seguir uma sequência linear de comandos, como alguns programas fazem, os iterativos continuam a executar um bloco específico de código até que a condição estabelecida seja satisfeita ou deixe de ser verdadeira. Enquanto algumas opções podem sugerir execuções contínuas ou chamadas autorreferentes, **o núcleo dos programas iterativos está na repetição condicional**, o que os torna essenciais para tarefas que exigem verificações e repetições consistentes.


### 3
> [!question] Exercício 3  
> A recursividade é uma abordagem poderosa na programação, permitindo que funções ou procedimentos chamem a si mesmos para resolver problemas complexos.
> 
> Qual das alternativas a seguir descreve corretamente um programa recursivo?
> 
> **A.**  
> Um programa que executa instruções linearmente sem repetições.
> 
> **B.**  
> Uma função que chama outras funções até que uma condição seja atendida.
> 
> **C.**  
> Um programa que repete um bloco de instruções indefinidamente.
> 
> **D.**  
> Um programa que utiliza apenas loops para resolver problemas.
> 
> **E.**  
> Um programa que chama a si mesmo para resolver subproblemas de uma tarefa maior.
> 
> > [!question]- Resposta  
> > **Alternativa correta: E.**
> > 
> > **A. Errada.** Isso descreve execução sequencial, não recursão.  
> > **B. Errada.** Chamar outras funções não caracteriza, por si só, recursividade; o ponto central é a função chamar a si mesma.  
> > **C. Errada.** Isso descreve repetição indefinida, não recursão.  
> > **D. Errada.** Loops são estruturas iterativas, diferentes de chamadas recursivas.  
> > **E. Certa.** A recursão acontece quando uma função ou programa chama a si mesmo para resolver partes menores do problema principal.
> > 
> > A recursividade, na programação, é uma técnica que permite a uma função ou a um procedimento **autorreferenciar-se para decompor problemas complexos em versões menores e mais tratáveis do mesmo problema**. Essa abordagem se manifesta quando um programa chama a si mesmo, muitas vezes com diferentes argumentos, para resolver subproblemas até que um caso base seja alcançado e a solução possa ser construída a partir das chamadas anteriores. Enquanto outras opções mencionam repetições, _loops_ ou chamadas a diferentes funções, **a essência da recursividade reside na autorreferência**, que é uma ferramenta poderosa para simplificar e resolver questões complexas em computação.


### 4
> [!question] Exercício 4
> Programas recursivos são aqueles que resolvem problemas dividindo-os em subproblemas menores, utilizando chamadas à própria função para alcançar a solução. O fatorial de um número n é o produto de todos os números inteiros positivos menores ou iguais a n. Por exemplo, o fatorial de 5 (representado por 5!) é 5 × 4 × 3 × 2 × 1 = 120.
>
> Agora, considere as seguintes implementações recursivas do fatorial. Determine qual delas está corretamente implementada.
>
> **A.**
> Fatorial(n) é:
> se n == 0 então retorne 1
> senão retorne n * Fatorial(n-1)
>
> **B.**
> Fatorial(n) é:
>
> se n == 1 então retorne 1
>
> senão retorne n + Fatorial(n-1)
>
> **C.**
> Fatorial(n) é:
>
> se n <= 1 então retorne n
>
> senão retorne n * Fatorial(n-1)
>
> **D.**
> Fatorial(n) é:
>
> se n == 0 então retorne 0
>
> senão retorne n * Fatorial(n-1)
>
> **E.**
> Fatorial(n) é:
>
> se n <= 1 então retorne 1
>
> senão retorne n + Fatorial(n-1)
>
> > [!question]- Resposta
> > **Alternativa correta: A.**
> >
> > **A. Certa.** Essa é a forma recursiva correta do fatorial: caso base `n == 0`, retornando `1`, e caso recursivo `n * Fatorial(n-1)`.
> > **B. Errada.** Usa soma em vez de multiplicação, então não calcula fatorial.
> > **C. Errada.** Parece próxima, mas no caso `n = 0` retorna `0`, quando o correto para `0!` é `1`.
> > **D. Errada.** O caso base está incorreto, porque `0!` não é `0`, e sim `1`.
> > **E. Errada.** O caso base está correto, mas a operação recursiva usa soma, não multiplicação.
> > 
> > O cálculo do fatorial de um número se baseia em multiplicar esse número por todos os números inteiros positivos que o precedem até 1. Portanto, a correta implementação do fatorial deve representar essa multiplicação progressiva. A opção que expressa corretamente essa lógica é:  
>>
>>se n == 0, então retorne 1; senão, retorne n * Fatorial(n-1)  
>>
>>A base da recursividade para o cálculo do fatorial é reconhecer que Fatorial(0) é 1, e para outros valores de _n_, o fatorial é _n_ multiplicado pelo fatorial de n-1. As demais opções apresentam erros na lógica, como retornar valores que não se alinham à definição de fatorial ou usar adição em vez de multiplicação, desviando-se da verdadeira natureza da operação de fatorial.


### 5
> [!question] Exercício 5  
> A especificação formal de programas e máquinas é um componente crucial para garantir a precisão e a confiabilidade dos sistemas computacionais.
> 
> Qual das alternativas descreve melhor a finalidade da especificação formal?
> 
> **A.**  
> Escrever código para programas sem erros.
> 
> **B.**  
> Desenvolver gráficos para representar sistemas computacionais.
> 
> **C.**  
> Documentar todos os detalhes de um sistema de software.
> 
> **D.**  
> Definir requisitos para hardware de computadores.
> 
> **E.**  
> Estabelecer uma descrição precisa e matemática de sistemas computacionais para garantir sua corretude.
> 
> > [!question]- Resposta  
> > **Alternativa correta: E.**
> > 
> > **A. Errada.** A especificação formal não é simplesmente escrever código sem erros; ela serve para descrever rigorosamente o sistema antes ou além da implementação.  
> > **B. Errada.** Gráficos podem ajudar na representação, mas não são a finalidade principal da especificação formal.  
> > **C. Errada.** Documentação é importante, mas especificação formal vai além disso, usando linguagem matemática e rigor lógico.  
> > **D. Errada.** A especificação formal não se limita a requisitos de hardware; ela pode ser aplicada a programas, algoritmos, protocolos e sistemas em geral.  
> > **E. Certa.** A finalidade da especificação formal é fornecer uma descrição precisa, rigorosa e matemática do sistema, permitindo analisar e verificar sua corretude.
> > 
> > A especificação formal visa criar uma **descrição rigorosa e matemática de sistemas computacionais** para assegurar sua corretude e funcionamento conforme o esperado. Ela não se concentra apenas em escrever código sem erros ou em documentar cada detalhe de um sistema, mas em estabelecer uma base sólida e formalizada que pode ser **verificada e validada matematicamente**. Essa abordagem ajuda a eliminar ambiguidades, incertezas e potenciais falhas no _design_ ou na implementação de sistemas computacionais, resultando em sistemas mais confiáveis e robustos. As demais opções não capturam adequadamente a essência e o propósito principal da especificação formal.
