---
publish: true
---

### 1
> [!question] Exercício 1  
> Compreender os fundamentos da lógica de programação e dos algoritmos é essencial para o desenvolvimento de soluções computacionais eficientes. Dominar esses conceitos também envolve reconhecer as formas de representação e a relação com os componentes básicos de um computador.
> 
> Com base nos conceitos de algoritmos e lógica de programação, assinale a alternativa que explica corretamente por que o pseudocódigo é mais utilizado que a descrição narrativa na criação de algoritmos:
> 
> **A.**  
> Porque o pseudocódigo permite ao programador escrever diretamente na linguagem de máquina.
> 
> **B.**  
> Porque o pseudocódigo utiliza símbolos gráficos, facilitando a visualização do processo lógico.
> 
> **C.**  
> Porque o pseudocódigo é menos detalhado, por isso mais simples que um fluxograma.
> 
> **D.**  
> Porque o pseudocódigo é semelhante a uma linguagem de programação, mas mais compreensível.
> 
> **E.**  
> Porque a descrição narrativa é a única forma que permite ambiguidade na execução do programa.
> 
> > [!question]- Resposta  
> > **Alternativa correta: D.**
> > 
> > **A. Errada.**  
> > O pseudocódigo **não é linguagem de máquina**. Linguagem de máquina é a linguagem binária entendida diretamente pelo computador.
> > 
> > **B. Errada.**  
> > Quem utiliza **símbolos gráficos** é o **fluxograma**, não o pseudocódigo.
> > 
> > **C. Errada.**  
> > O problema dessa alternativa é que ela não explica corretamente a principal vantagem do pseudocódigo. Ele não é mais usado por ser “menos detalhado”, mas por organizar a lógica de forma clara e próxima da programação.
> > 
> > **D. Certa.**  
> > O pseudocódigo é muito utilizado porque fica **parecido com uma linguagem de programação**, mas ainda é **mais fácil de entender**, permitindo descrever a lógica do algoritmo com clareza.
> > 
> > **E. Errada.**  
> > A descrição narrativa realmente pode gerar ambiguidade, mas ela **não é a única forma** em que isso pode acontecer. Além disso, a alternativa não explica corretamente a principal razão do uso do pseudocódigo.
>>
>>O pseudocódigo tem estrutura próxima às linguagens de programação, mas usa linguagem natural e facilita o entendimento. O pseudocódigo não é executável diretamente pela máquina, pois não é uma linguagem de máquina. O uso de símbolos gráficos está relacionado ao fluxograma, não ao pseudocódigo. O pseudocódigo é mais detalhado que o fluxograma, incluindo declarações e tipos de dados. Embora a descrição narrativa possa ser ambígua, outras representações também exigem clareza para evitar ambiguidades.

### 2
> [!question] Exercício 2  
> A construção de algoritmos exige não apenas o domínio de estruturas lógicas como também a capacidade de traduzir problemas reais em soluções computacionais. Compreender corretamente o fluxo de entrada, processamento e saída de dados é essencial para representar o raciocínio de forma clara e precisa, principalmente quando se utiliza o pseudocódigo.
> 
> Você é encarregado de desenvolver um algoritmo em pseudocódigo para um programa que leia duas notas, calcule a média aritmética e informe se o aluno está aprovado (média ≥ 7). Para isso, deve utilizar corretamente as etapas: entrada, processamento e saída.
> 
> Qual das alternativas representa corretamente a lógica desse algoritmo em pseudocódigo?
> 
> **A.**  
> Início  
> ler nota1  
> ler nota2  
> se nota1 + nota2 ≥ 7 então  
>     escrever "Aprovado"  
> senão  
>     escrever "Reprovado"  
> Fim
> 
> **B.**  
> Início  
> ler nota1, nota2  
> média ← nota1 + nota2 / 2  
> escrever média  
> se média ≥ 7 então  
>     escrever "Aprovado"  
> senão  
>     escrever "Reprovado"  
> Fim
> 
> **C.**  
> Início  
> ler nota1, nota2  
> média ← (nota1 + nota2) / 2  
> escrever média  
> se média ≥ 7 então  
>     escrever "Aprovado"  
> senão  
>     escrever "Reprovado"  
> Fim
> 
> **D.**  
> Início  
> ler nota1, nota2  
> média ← soma / 2  
> escrever média  
> se média > 7 então  
>     escrever "Aprovado"  
> senão  
>     escrever "Reprovado"  
> Fim
> 
> **E.**  
> Início  
> nota1 ← entrada  
> nota2 ← entrada  
> média ← nota1 + nota2  
> se média > 7  
>     escrever "Aprovado"  
> Fim
> 
> > [!question]- Resposta  
> > **Alternativa correta: C.**
> > 
> > **A. Errada.**  
> > Essa alternativa **não calcula a média aritmética**. Ela apenas soma as duas notas e compara o resultado com 7, o que não atende ao enunciado.
> > 
> > **B. Errada.**  
> > Aqui há um erro na fórmula. Sem os parênteses, a operação é interpretada como `nota1 + (nota2 / 2)`, e não como a média das duas notas.
> > 
> > **C. Certa.**  
> > Essa é a alternativa correta porque segue corretamente as três etapas: **entrada** das notas, **processamento** da média com a fórmula `(nota1 + nota2) / 2` e **saída** da média e da situação do aluno com base em `média ≥ 7`.
> > 
> > **D. Errada.**  
> > A variável `soma` **não foi definida** no algoritmo. Além disso, a condição usa `média > 7`, mas o enunciado pede **média ≥ 7**.
> > 
> > **E. Errada.**  
> > Essa alternativa não calcula a média, apenas soma as notas. Também não trata corretamente o caso de reprovação e usa `> 7` em vez de `≥ 7`.


### 3
> [!question] Exercício 3
> A arquitetura de um computador é composta por diversos componentes que, de forma interligada, permitem a execução de algoritmos traduzidos em programas. O correto funcionamento do fluxo de entrada, processamento e saída é essencial para que os resultados sejam entregues com precisão.
>
> Sobre a relação entre os algoritmos e os componentes internos do computador, analise as afirmações e assinale a alternativa correta:
>
> **A.**
> A unidade aritmética e lógica é a responsável por armazenar os dados que serão utilizados pelos algoritmos.
>
> **B.**
> A unidade de controle tem como função principal realizar operações matemáticas com dados fornecidos pelo usuário.
>
> **C.**
> O algoritmo precisa ser escrito em pseudocódigo para ser compreendido diretamente pela CPU.
>
> **D.**
> A memória secundária é responsável por executar o processamento dos algoritmos juntamente com a unidade lógica.
>
> **E.**
> A CPU coordena a execução das instruções de um algoritmo, realizando operações por meio de suas unidades internas.
>
> > [!question]- Resposta
> > **Alternativa correta: E.**
> >
> > **A. Errada.**
> > A **ULA (Unidade Lógica e Aritmética)** não tem a função de armazenar dados. Ela é responsável por realizar **operações matemáticas e lógicas**.
> >
> > **B. Errada.**
> > A **unidade de controle** não executa cálculos matemáticos. Sua função é **coordenar e controlar** a execução das instruções dentro do computador.
> >
> > **C. Errada.**
> > O **pseudocódigo** é uma forma de representação para humanos compreenderem a lógica do algoritmo. A CPU não entende pseudocódigo diretamente, mas sim **linguagem de máquina**.
> >
> > **D. Errada.**
> > A **memória secundária** serve para armazenamento de dados e arquivos, como HD ou SSD. Ela **não executa** o processamento dos algoritmos.
> >
> > **E. Certa.**
> > A **CPU** é o componente responsável por **coordenar a execução das instruções** de um algoritmo, utilizando suas unidades internas, como a **unidade de controle** e a **ULA**.
> > 
>> - A CPU executa as instruções do algoritmo por meio da unidade de controle e da unidade aritmética e lógica.
>> - O armazenamento de dados é responsabilidade da memória (primária ou secundária), e não da unidade aritmética e lógica.
>> - A execução de operações matemáticas é função da unidade aritmética e lógica, não da unidade de controle.
>> - O pseudocódigo é uma forma de representação compreensível por humanos, não pela CPU.
>> - A memória secundária não realiza processamento, apenas armazena dados de forma permanente.

### 4
> [!question] Exercício 4  
> Durante o desenvolvimento de algoritmos que serão implementados em sistemas computacionais, é importante compreender a função de cada componente envolvido no fluxo de sua execução.
> 
> Sobre o fluxo de execução de um algoritmo em um computador, classifique as afirmações como V (verdadeira) ou F (falsa):
> 
> ( ) A entrada de dados realizada por um teclado é interpretada diretamente pela memória RAM antes de chegar à CPU.  
> ( ) A unidade de saída, como um monitor, exibe apenas os dados inseridos pelo usuário, sem relação com os resultados processados.  
> ( ) A CPU é responsável por executar algoritmos traduzidos em instruções de máquina, obedecendo a uma sequência lógica.  
> ( ) O algoritmo, ao ser escrito em linguagem de alto nível, é automaticamente compreendido pela unidade aritmética.  
> ( ) O fluxo de um algoritmo dentro do computador passa pelas etapas de entrada, processamento e saída.
> 
> Assinale a alternativa que contenha a sequência correta.
> 
> **A.**  
> F – F – V – F – V.
> 
> **B.**  
> V – V – V – F – F.
> 
> **C.**  
> F – F – F – F – V.
> 
> **D.**  
> F – V – V – V – V.
> 
> **E.**  
> V – F – V – F – V.
> 
> > [!question]- Resposta  
> > **Alternativa correta: A.**
> > 
> > **1ª afirmação: Falsa.**  
> > O teclado é um dispositivo de **entrada**. Os dados não são “interpretados diretamente” pela RAM; a memória apenas armazena temporariamente informações para uso do sistema. O processamento e interpretação das instruções cabem à CPU.
> > 
> > **2ª afirmação: Falsa.**  
> > O monitor não exibe apenas o que o usuário digitou. Ele também mostra os **resultados do processamento**, como mensagens, cálculos e saídas geradas pelo programa.
> > 
> > **3ª afirmação: Verdadeira.**  
> > A **CPU** executa instruções de máquina em sequência lógica, sendo o principal componente do processamento dos algoritmos.
> > 
> > **4ª afirmação: Falsa.**  
> > Linguagem de alto nível **não é compreendida diretamente** pela unidade aritmética nem pela CPU. Antes, ela precisa ser traduzida para linguagem de máquina por compilador ou interpretador.
> > 
> > **5ª afirmação: Verdadeira.**  
> > O fluxo básico de execução de um algoritmo realmente segue as etapas de **entrada, processamento e saída**.
> > 
> > **A. Certa.**  
> > Apresenta a sequência correta: **F – F – V – F – V**.
> > 
> > **B. Errada.**  
> > A 1ª e a 2ª afirmações não são verdadeiras, e a 5ª também não pode ser marcada como falsa.
> > 
> > **C. Errada.**  
> > A 3ª afirmação é verdadeira, então essa sequência não pode estar correta.
> > 
> > **D. Errada.**  
> > A 2ª e a 4ª até poderiam gerar dúvida para alguns alunos, mas a 2ª é falsa e a 4ª também é falsa, então a sequência está incorreta.
> > 
> > **E. Errada.**  
> > A 1ª afirmação não é verdadeira, por isso essa alternativa também está incorreta.
> > 
>>(F) A alternativa é falsa, pois a entrada de dados é direcionada à CPU, e não interpretada diretamente pela memória RAM. 
>>(F) A alternativa é falsa, pois a unidade de saída exibe os resultados processados, e não apenas dados inseridos.  
>>(V) A alternativa é verdadeira porque a CPU executa os algoritmos traduzidos em linguagem de máquina em sequência lógica.  
>>(F) A alternativa é falsa, pois a linguagem de alto nível precisa ser compilada ou interpretada para ser compreendida pela CPU.  
>>(V) A alternativa é verdadeira porque  o ciclo básico de um algoritmo no computador é: entrada → processamento → saída.
### 5
> [!question] Exercício 5  
> A validação de um algoritmo é uma etapa crucial, pois garante que as instruções lógicas estejam de acordo com os requisitos definidos. Um dos métodos comuns para essa validação é o teste de mesa, no qual se simulam entradas para verificar se o algoritmo realiza corretamente os cálculos e decisões.
> 
> Dado o seguinte trecho simplificado de um algoritmo de IMC:
> 
> ler (peso, altura)  
> imc ← peso / (altura * altura)  
> se imc < 18.5 então  
>     escrever “Abaixo do peso”  
> senão  
>     se imc >= 18.5 e < 25 então  
>         escrever “Peso normal”  
> senão  
>     escrever “Acima do peso”
> 
> Ao realizar um teste de mesa com os valores: peso = 85 kg e altura = 1.75 m, qual seria a saída exibida pelo algoritmo?
> 
> **A.**  
> IMC = 27.76/classificação: abaixo do peso.
> 
> **B.**  
> IMC = 27.76/classificação: acima do peso.
> 
> **C.**  
> IMC = 24.57/classificação: peso normal.
> 
> **D.**  
> IMC = 25.24/classificação: peso normal.
> 
> **E.**  
> IMC = 26.12/classificação: peso normal.
> 
> > [!question]- Resposta  
> > **Alternativa correta: B.**
> > 
> > Primeiro, fazemos o cálculo do IMC:
> > 
> >  $$IMC = \frac{85}{1.75 \times 1.75} = \frac{85}{3.0625} \approx 27.76$$
> > 
> > Como **27,76 é maior que 25**, o algoritmo exibirá **“Acima do peso”**.
> > 
> > **A. Errada.**  
> > O valor do IMC está correto, mas a classificação está errada. Um IMC de **27,76** não é “abaixo do peso”.
> > 
> > **B. Certa.**  
> > O cálculo do IMC resulta em **27,76** e, como esse valor está acima de **25**, a saída correta é **“acima do peso”**.
> > 
> > **C. Errada.**  
> > O valor **24,57** não corresponde ao cálculo com os dados fornecidos. Além disso, o resultado correto do IMC não fica na faixa de peso normal.
> > 
> > **D. Errada.**  
> > O valor **25,24** também não corresponde ao cálculo correto. Mesmo que estivesse próximo da faixa limite, ainda não seria a saída obtida pelo algoritmo com esses dados.
> > 
> > **E. Errada.**  
> > O valor **26,12** está incorreto e a classificação “peso normal” também está errada, pois esse valor já estaria acima da faixa normal.
