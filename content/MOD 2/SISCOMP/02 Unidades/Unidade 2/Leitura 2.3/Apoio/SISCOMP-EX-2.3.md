---
publish: true
---
# Exercicios 2.3 - Fundamentos e estrutura dos Sistemas Operacionais
# 1
> [!question] Exercício 1
> Os sistemas operacionais foram desenvolvidos para controlar os recursos do computador e coordenar a execução dos programas de forma organizada e segura. Um dos seus papéis centrais é estabelecer mecanismos de proteção e gerenciamento, evitando que instruções incorretas interfiram diretamente no funcionamento do hardware. Essa estrutura garante estabilidade, integridade dos dados e melhor aproveitamento dos dispositivos. Segundo Tanenbaum e Bos (2016), essa separação entre o usuário e o núcleo do sistema é fundamental para manter a confiabilidade do ambiente computacional.
>
> Durante a execução de programas no computador, os usuários interagem com diferentes dispositivos de entrada e saída, como o teclado. Quando um programa precisa capturar um dado digitado, essa leitura não ocorre diretamente do hardware, mas sim por meio do sistema operacional, que faz a mediação entre o software e o dispositivo físico. Essa intermediação é necessária porque:
>
> **A.**  
> o programa do usuário é executado em modo núcleo e não pode acessar diretamente o hardware do teclado, pois esse acesso é exclusivo do sistema operacional.
>
> **B.**  
> o programa do usuário é executado em modo usuário e não tem permissão para comunicar-se diretamente com o hardware, devendo realizar essa operação por meio do sistema operacional.
>
> **C.**  
> o programa do usuário é executado em modo usuário e depende das rotinas do sistema operacional para interagir com dispositivos de entrada e saída, garantindo segurança e controle no uso dos recursos.
>
> **D.**  
> o programa do usuário tem permissão para ler diretamente o teclado, mas essa prática é evitada para simplificar o desenvolvimento e aumentar o desempenho do sistema.
>
> **E.**  
> o programa do usuário executa em modo núcleo, compartilhando o acesso aos dispositivos com o sistema operacional, o que evita erros de comunicação e bloqueios de hardware.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C.**
>>
>> **A. Errada:** programas de usuário normalmente não executam em modo núcleo. O modo núcleo é reservado ao sistema operacional e a componentes privilegiados.
>>
>> **B. Parcialmente correta:** a ideia de que o programa executa em modo usuário e não acessa diretamente o hardware está correta. Porém, a alternativa C é mais completa, pois explicita o uso das rotinas do sistema operacional para entrada e saída e a finalidade de segurança e controle.
>>
>> **C. Correta:** programas em modo usuário não devem acessar diretamente dispositivos como teclado, disco ou impressora. Eles solicitam essas operações ao sistema operacional, que controla o acesso ao hardware.
>>
>> **D. Errada:** o programa do usuário não tem permissão direta para ler o teclado. A mediação do sistema operacional não é apenas uma simplificação, mas uma exigência de proteção e controle.
>>
>> **E. Errada:** programas de usuário não executam em modo núcleo nem compartilham diretamente o controle dos dispositivos com o sistema operacional.
>>
>> O programa executado em modo usuário depende do sistema operacional para acessar dispositivos de entrada e saída, como o teclado, pois não tem permissão para interagir diretamente com o _hardware_. Essa separação garante segurança e estabilidade, evitando que instruções incorretas comprometam o funcionamento do sistema.
>>
>>As demais alternativas estão incorretas porque descrevem situações que não ocorrem no modelo real de operação: o programa não é executado em modo núcleo, nem tem acesso direto ao _hardware_, já que essas funções são exclusivas do sistema operacional. Além disso, o compartilhamento direto de dispositivos entre programas e o núcleo não é permitido, pois isso eliminaria as camadas de proteção que impedem falhas e conflitos entre processos.

# 2
> [!question] Exercício 2
> Os sistemas operacionais oferecem um conjunto de mecanismos que permitem aos programas interagir de forma controlada com os recursos do computador. Essa interação é necessária para que o software possa realizar tarefas como gravar dados, acessar dispositivos e utilizar a memória, sempre sob supervisão do sistema. Segundo Silberschatz, Galvin e Gagne (2018), essa mediação garante segurança, padronização e estabilidade na execução das operações entre os programas e o hardware.
>
> Em determinadas situações, um programa precisa se comunicar com o sistema operacional para solicitar o uso de um recurso, como memória, arquivos ou dispositivos de entrada e saída. Essa solicitação é enviada pelo programa e tratada pelo sistema operacional, que executa a tarefa em nome do processo em execução. O nome dado a esse tipo de solicitação é:
>
> **A.**  
> rotina de execução.
>
> **B.**  
> chamada de sistema.
>
> **C.**  
> bloqueio do programa.
>
> **D.**  
> chamada de E/S.
>
> **E.**  
> interrupção de programa.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> **A. Errada:** rotina de execução é uma expressão genérica e não representa o mecanismo formal usado para solicitar serviços ao sistema operacional.
>>
>> **B. Correta:** chamada de sistema é o mecanismo pelo qual um programa solicita ao sistema operacional serviços como acesso a arquivos, memória e dispositivos.
>>
>> **C. Errada:** bloqueio do programa ocorre quando um processo precisa aguardar algum evento ou recurso, mas não é o nome da solicitação feita ao sistema operacional.
>>
>> **D. Errada:** chamada de E/S pode indicar uma operação de entrada e saída, mas o termo correto e mais abrangente é chamada de sistema.
>>
>> **E. Errada:** interrupção é um evento que altera o fluxo normal de execução, geralmente associado a hardware ou sinais do sistema, não à solicitação formal de serviço feita por um programa.
>>
>> A comunicação entre um programa e o sistema operacional ocorre por meio de chamadas de sistema, que permitem que o _software_ solicite serviços como leitura, escrita, alocação de memória ou acesso a dispositivos. Essas chamadas funcionam como pontos de entrada controlados, garantindo que o programa utilize os recursos de forma segura e organizada.
>>
>> As demais opções estão incorretas porque descrevem ações distintas: uma rotina de execução não envolve comunicação com o sistema operacional, o bloqueio de programa representa uma suspensão temporária do processo, a chamada de E/S é apenas um tipo específico de operação e a interrupção de programa está relacionada à sinalização de eventos, e não à solicitação de serviços.

# 3
> [!question] Exercício 3
> A história dos sistemas operacionais e das linguagens de programação revela a busca por maior eficiência na interação entre homem e máquina. De acordo com Tanenbaum e Bos (2016), cada geração de sistemas representou um avanço na automação e na abstração do hardware, reduzindo a complexidade das tarefas de programação.
>
> Analise a situação a seguir.
>
> Em um laboratório universitário, uma equipe está digitalizando rotinas históricas que rodavam em computadores da década de 1950 e 1960. Os códigos originais eram inseridos por meios manuais e exigiam reconfigurações frequentes do equipamento. O grupo precisa decidir como documentar a transição para práticas que aumentaram a produtividade sem alterar a natureza do hardware. Na discussão, surgem explicações sobre o papel das linguagens de montagem e das primeiras técnicas de organização de trabalhos, bem como a ordem em que essas inovações ocorreram.
>
> Avalie as proposições a seguir à luz desse cenário.
>
> I. As linguagens de montagem aproximaram o programador da máquina por meio de mnemônicos e rótulos simbólicos, mantendo controle detalhado sobre o hardware.
>
> II. As linguagens de alto nível surgiram com o mesmo objetivo das linguagens de montagem e preservaram a mesma dependência de arquitetura, sem ganhos de portabilidade.
>
> III. Os sistemas em lote automatizaram a sequência de trabalhos e reduziram o tempo ocioso da CPU, elevando o throughput operacional.
>
> IV. O tempo compartilhado foi adotado antes da multiprogramação e eliminou a necessidade de filas de trabalhos.
>
> É correto o que se afirma em:
>
> **A.**  
> I e II apenas.
>
> **B.**  
> I e III, apenas.
>
> **C.**  
> III e IV, apenas.
>
> **D.**  
> I, III e IV, apenas.
>
> **E.**  
> I, II e III, apenas.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> **A. Errada:** a proposição I está correta, mas a II está incorreta, pois linguagens de alto nível aumentaram a abstração e a portabilidade em relação à linguagem de montagem.
>>
>> **B. Correta:** a proposição I está correta porque a linguagem de montagem usa símbolos e mnemônicos próximos da máquina. A proposição III também está correta porque os sistemas em lote organizaram a execução sequencial de trabalhos, reduzindo o tempo ocioso da CPU.
>>
>> **C. Errada:** a proposição III está correta, mas a IV está incorreta. O tempo compartilhado não veio antes da multiprogramação e não eliminou completamente a necessidade de organização de trabalhos.
>>
>> **D. Errada:** inclui a proposição IV, que é falsa.
>>
>> **E. Errada:** inclui a proposição II, que é falsa, pois linguagens de alto nível trouxeram maior independência em relação à arquitetura e ganhos de portabilidade.
>>
>> A afirmativa I é correta, pois a linguagem de montagem introduziu mnemônicos e símbolos que tornaram a codificação menos mecânica, mantendo proximidade com o _hardware_.
>>
>>A afirmativa II é incorreta, já que as linguagens de alto nível foram criadas para independência de arquitetura, promovendo maior portabilidade e abstração.
>>
>>A afirmativa III é correta, visto que os sistemas em lote organizaram a execução sequencial de trabalhos, reduzindo o tempo ocioso da CPU e aumentando a eficiência.
>>
>>A afirmativa IV é incorreta, porque a multiprogramação precedeu o tempo compartilhado; este aprimorou a interação interativa, sem eliminar filas de trabalhos.

# 4
> [!question] Exercício 4
> Durante a evolução dos sistemas operacionais, a multiprogramação representou um marco na otimização do uso dos recursos computacionais. Essa técnica, introduzida nos sistemas de terceira geração, permitiu que múltiplos programas fossem carregados na memória ao mesmo tempo, fazendo com que o processador alternasse entre eles de forma organizada e eficiente. Essa abordagem reduziu significativamente o tempo ocioso da CPU e aumentou a taxa de utilização dos dispositivos de entrada e saída, tornando o processamento mais dinâmico e produtivo (Tanenbaum; Bos, 2016).
>
> Assinale a alternativa que mostra um exemplo de estratégia de multiprogramação apresentado pelos sistemas dessa geração.
>
> **A.**  
> A execução simultânea de processos em múltiplos núcleos de processamento.
>
> **B.**  
> A divisão da memória principal entre o sistema operacional e diversos programas em execução concorrente.
>
> **C.**  
> A criação de processos paralelos por meio da utilização de múltiplas threads em nível de usuário.
>
> **D.**  
> A execução de múltiplas threads coordenadas diretamente pelo núcleo do sistema operacional.
>
> **E.**  
> A utilização de mecanismos de interrupção periódica para controle preemptivo do processador.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> **A. Errada:** essa alternativa descreve processamento paralelo em múltiplos núcleos, não a multiprogramação clássica.
>>
>> **B. Correta:** na multiprogramação, vários programas ficam carregados na memória ao mesmo tempo, e a CPU alterna entre eles para reduzir o tempo ocioso.
>>
>> **C. Errada:** o uso de múltiplas threads em nível de usuário é uma técnica posterior e não representa a estratégia clássica de multiprogramação da terceira geração.
>>
>> **D. Errada:** threads coordenadas pelo núcleo pertencem ao contexto de sistemas multitarefa modernos, não ao conceito básico de multiprogramação histórica.
>>
>> **E. Errada:** interrupções periódicas estão mais associadas ao controle preemptivo e ao compartilhamento de tempo, não ao exemplo central de multiprogramação apresentado na questão.
>>
>> A multiprogramação foi um avanço fundamental nos sistemas operacionais de terceira geração, permitindo a execução concorrente de vários programas em memória. Essa técnica buscava otimizar o uso da CPU, alternando entre tarefas quando uma estava em espera por entrada ou saída. A alternativa correta é a que descreve a divisão da memória entre o sistema operacional e múltiplos programas simultaneamente, pois expressa o princípio da multiprogramação: manter diversos processos carregados para reduzir o tempo ocioso do processador. 
>>
>> As demais alternativas representam conceitos de outras gerações; a execução paralela entre núcleos está associada a arquiteturas multiprocessadas modernas; as _threads_ em nível de usuário ou de núcleo pertencem a sistemas multitarefa e não caracterizam a multiprogramação original; e a interrupção preemptiva do relógio relaciona-se aos sistemas de tempo compartilhado, que surgiram posteriormente. Assim, a multiprogramação destacou-se por gerenciar vários programas residentes em memória, alternando o controle da CPU para maximizar sua eficiência.
# 5
> [!question] Exercício 5
> O compartilhamento de tempo surgiu como uma inovação fundamental na evolução dos sistemas operacionais, marcando a transição para ambientes mais interativos e eficientes. De acordo com Silberschatz, Galvin e Gagne (2018), essa técnica permitiu que vários usuários utilizassem o mesmo sistema de forma quase simultânea, alternando rapidamente o uso do processador por meio de fatias de tempo. Essa abordagem ampliou a acessibilidade e o aproveitamento dos recursos computacionais, tornando possível o surgimento dos sistemas multitarefa e multiusuário modernos.
>
> Entre as principais funcionalidades obtidas com a evolução dos sistemas operacionais, o compartilhamento de tempo entre diferentes usuários permite:
>
> **A.**  
> acessar um recurso simultaneamente a outros processos.
>
> **B.**  
> executar processos em paralelo.
>
> **C.**  
> compartilhar a utilização da unidade de processamento entre os usuários ativos.
>
> **D.**  
> a liberação de tempo para outros processos.
>
> **E.**  
> o fatiamento do tempo de processamento para cada processo.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C.**
>>
>> **A. Errada:** o compartilhamento de tempo não significa que todos os processos acessam um recurso exatamente ao mesmo tempo, mas que o uso da CPU é alternado rapidamente.
>>
>> **B. Errada:** executar em paralelo envolve processamento simultâneo real, geralmente com múltiplos processadores ou núcleos. No compartilhamento de tempo, ocorre alternância rápida da CPU entre usuários ou processos.
>>
>> **C. Correta:** o compartilhamento de tempo permite que vários usuários ativos utilizem a mesma unidade de processamento de forma alternada, dando a impressão de uso simultâneo.
>>
>> **D. Errada:** a liberação de tempo para outros processos é uma consequência parcial da alternância, mas não expressa corretamente a funcionalidade principal entre diferentes usuários.
>>
>> **E. Parcialmente correta:** o fatiamento do tempo é o mecanismo usado no compartilhamento de tempo. Porém, a questão pergunta especificamente sobre o compartilhamento entre diferentes usuários, por isso a alternativa C é mais adequada.
>>
>> O compartilhamento de tempo permite que vários usuários utilizem o processador de maneira alternada, distribuindo pequenas fatias de tempo entre os processos ativos. Esse mecanismo cria a sensação de uso simultâneo e aumenta a interatividade do sistema, pois nenhum usuário fica aguardando longos períodos para que suas solicitações sejam atendidas.
>>
>> As opções que mencionam paralelismo, uso simultâneo real dos recursos ou divisão de tarefas em múltiplos núcleos não se aplicam a esse contexto, pois ==o compartilhamento de tempo não envolve execução paralela==, mas sim alternância rápida controlada pelo sistema operacional. Também não se restringe apenas ao conceito técnico de fatiamento de tempo, que é apenas um dos meios utilizados para implementar essa abordagem.

