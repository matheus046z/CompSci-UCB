---
publish: true
---
# Exercícios 3.1 - Introdução aos sistemas embarcados
# 1
> [!question] Exercício 1
> Até chegar aos clientes, a implantação de um sistema embarcado precisa passar por algumas fases.
>
> A primeira dessas fases é a prototipação e nela acontece:
>
> **A.**  
> a fabricação em série dos sistemas embarcados.
>
> **B.**  
> Apenas o hardware é colocado em funcionamento por simulação.
>
> **C.**  
> Apenas o software é colocado em funcionamento por simulação.
>
> **D.**  
> Apenas as validações são colocadas em funcionamento por simulação.
>
> **E.**  
> Hardware, software e todo conjunto de validações são colocados em funcionamento.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> **A. Errada.** A fabricação em série ocorre em uma etapa posterior, quando o sistema já foi projetado, testado e validado.
>>
>> **B. Errada.** A prototipação não envolve apenas o hardware, pois sistemas embarcados dependem da integração entre hardware e software.
>>
>> **C. Errada.** O software não é analisado isoladamente, pois precisa interagir com o hardware do sistema.
>>
>> **D. Errada.** As validações fazem parte do processo, mas não são o único elemento colocado em funcionamento.
>>
>> **E. Certa.** Na prototipação, hardware, software e validações são colocados em funcionamento para verificar se o sistema atende ao que foi planejado.
>> 
>> É correto afirmar que a primeira fase da prototipação testa, por simulação, o funcionamento do _hardware_, do _software_ e de todo conjunto de validações. Eles serem colocados em funcionamento de modo independente não têm utilidade na prototipação. Fabricar em série é a última fase da implantação.


# 2
> [!question] Exercício 2
> Devido à vasta aplicabilidade dos sistemas embarcados, normatizações e conceitos precisaram ser estabelecidos ao longo dos anos.
>
> Quanto às propriedades funcionais e não funcionais dos sistemas embarcados, é correto afirmar que:
>
> **A.**  
> algoritmo de controle e robustez são funcionais; custo e tempo real são não funcionais.
>
> **B.**  
> integração e portabilidade são funcionais; segurança e tolerância a falhas são não funcionais.
>
> **C.**  
> integração e portabilidade são funcionais; algoritmo de controle e custo são não funcionais.
>
> **D.**  
> tempo real e portabilidade são funcionais; memórias e custo são não funcionais.
>
> **E.**  
> segurança e algoritmo de controle são funcionais; tempo real e tolerância a falhas são não funcionais.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A.**
>>
>> **A. Certa.** O algoritmo de controle está ligado ao funcionamento direto do sistema, enquanto custo e tempo real indicam restrições ou critérios de desempenho do projeto.
>>
>> **B. Errada.** Portabilidade normalmente é tratada como uma propriedade não funcional, pois está relacionada à facilidade de adaptação do sistema a outros ambientes.
>>
>> **C. Errada.** O algoritmo de controle não é uma propriedade não funcional; ele define uma função ou comportamento essencial do sistema.
>>
>> **D. Errada.** Tempo real e portabilidade são geralmente classificados como propriedades não funcionais, pois indicam restrições de execução e adaptação.
>>
>> **E. Errada.** Tolerância a falhas é uma característica de confiabilidade do sistema, normalmente associada a propriedades não funcionais, mas a alternativa mistura classificações de forma inadequada.
>> 
>> É correto afirmar que integração e portabilidade são funcionais e segurança e tolerância a falhas são não funcionais. Algoritmo de controle, interface com o usuário, memória e custo também são funcionais.

# 3
> [!question] Exercício 3
> É correto afirmar que os sistemas embarcados, durante a sua concepção, assumem diferentes tipos de processamento.
>
> Quanto ao tipo de processamento dos sistemas embarcados, é correto afirmar que:
>
> **A.**  
> processos que são cadenciados pelo tempo são chamados de aperiódicos.
>
> **B.**  
> estático é um processo que se inicia ao longo do período de execução.
>
> **C.**  
> processos não essenciais têm um tempo limite para terminar, chamado de deadline.
>
> **D.**  
> processo crítico é quando não pode esperar e o fator tempo é fortemente observado.
>
> **E.**  
> processos dinâmicos são aqueles que repetem sua ação em um período regular de tempo.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D.**
>>
>> **A. Errada.** Processos cadenciados pelo tempo são normalmente periódicos, pois ocorrem em intervalos regulares; aperiódicos não seguem uma periodicidade fixa.
>>
>> **B. Errada.** Um processo estático não é caracterizado por iniciar ao longo da execução; essa ideia se aproxima mais de processos definidos dinamicamente.
>>
>> **C. Errada.** Deadline é um limite de tempo para conclusão de uma tarefa, mas não se aplica apenas a processos não essenciais.
>>
>> **D. Certa.** Um processo crítico exige resposta dentro de um tempo determinado, pois atrasos podem comprometer o funcionamento do sistema.
>>
>> **E. Errada.** Processos que repetem sua ação em período regular são periódicos, não simplesmente dinâmicos.
>> 
>> É correto afirmar que um processo crítico não pode esperar e o fator tempo é fortemente observado. Já os periódicos são cadenciados pelo tempo e repetem sua ação em um intervalo de tempo. Processos estáticos iniciam junto ao sistema. Processos essenciais têm tempo limite.

# 4
> [!question] Exercício 4
> Projetar, desenvolver e colocar em produção um sistema microprocessado é muito mais comum do que desempenhar a mesma atividade para sistemas embarcados.
>
> Ao relatar a fase de validação, na fase do desenvolvimento de um projeto, é correto afirmar que:
>
> **A.**  
> acontecem as implementações do hardware projetado.
>
> **B.**  
> acontece a implementação do software projetado.
>
> **C.**  
> hardware e software são testados em conjunto.
>
> **D.**  
> acontece a definição da estrutura dos eventos do mundo externo.
>
> **E.**  
> a execução de todas as tarefas é assegurada.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C.**
>>
>> **A. Errada.** A implementação do hardware pertence à fase de construção ou implementação, não à validação propriamente dita.
>>
>> **B. Errada.** A implementação do software também ocorre antes da validação final do sistema integrado.
>>
>> **C. Certa.** Na validação, hardware e software são testados em conjunto para verificar se o sistema embarcado funciona corretamente como um todo.
>>
>> **D. Errada.** A definição dos eventos do mundo externo está mais ligada à especificação e ao projeto do sistema.
>>
>> **E. Errada.** A validação busca verificar o funcionamento das tarefas, mas dizer que todas são asseguradas é uma afirmação ampla demais.
>>
>> É correto afirmar que a validação acontece quando _hardware_ e _software_ são testados em conjunto. Assegurar a execução de todas as tarefas e definir a estrutura dos eventos do mundo externo fazem parte da fase de especificação estrutural. Implementações do _hardware_ projetado é projeto, e do _software_ é desenvolvimento.


# 5
> [!question] Exercício 5
> Sistemas embarcados normalmente desempenham funções dedicadas às suas especificações.
>
> Assim, é correto afirmar sobre esses sistemas:
>
> **A.**  
> fazem uso de linguagem de programação orientada a objetos.
>
> **B.**  
> usam processadores de propósito geral para atender diferentes demandas.
>
> **C.**  
> usam microcontroladores, pois têm maior desempenho em propósito específico.
>
> **D.**  
> Todos consomem muita energia e precisam de alimentação específica.
>
> **E.**  
> Todos têm atualização simples quanto ao seu software.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C.**
>>
>> **A. Errada.** Sistemas embarcados podem ser programados em diferentes linguagens, não necessariamente em linguagem orientada a objetos.
>>
>> **B. Errada.** Eles normalmente são projetados para funções específicas, e não para atender demandas gerais como um computador de propósito geral.
>>
>> **C. Certa.** Microcontroladores são muito usados em sistemas embarcados porque integram recursos de processamento, memória e entrada/saída para tarefas específicas.
>>
>> **D. Errada.** Nem todos consomem muita energia; muitos sistemas embarcados são projetados justamente para baixo consumo.
>>
>> **E. Errada.** A atualização de software em sistemas embarcados pode ser limitada ou complexa, dependendo do dispositivo e de sua aplicação.
>>
>> É correto afirmar que os sistemas embarcados usam microcontroladores por realizarem funções específicas. Não é utilizada a orientação a objetos no desenvolvimento. Microprocessadores de propósito geral não são utilizados. O consumo de energia é baixo e a atualização de _software_ é complexa.

