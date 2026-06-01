---
publish: true
---
# Exercícios 1.2 - Os principais componentes de um computador

# 1
> [!question] Exercício 1
> Entender os níveis hierárquicos de um sistema computacional é essencial para compreender como cada nível contribui para a construção de um sistema eficiente, confiável e escalável.
>
> Considere o seguinte cenário:
>
> Você está desenvolvendo um processador e precisa decidir quais níveis hierárquicos de um sistema computacional devem ser levados em conta para garantir eficiência na execução, flexibilidade de programação e integração com os demais componentes.
>
> Com base nesse contexto, analise as afirmações a seguir e assinale com V quando verdadeiro e com F quando falso:
>
> (  ) O nível de controle é o responsável por definir a interação entre as linguagens de alto nível e os dispositivos de entrada/saída do sistema.
>
> (  ) O nível de unidades funcionais engloba registradores, ULA, memória e barramentos, sendo essencial para a realização e a transferência das operações do sistema.
>
> (  ) O programador que utiliza linguagens como C ou Python está operando diretamente no nível das portas lógicas.
>
> (  ) O nível da linguagem de montagem envolve instruções mais próximas do hardware, associadas às instruções interpretadas e executadas pelo processador.
>
> (  ) O nível do usuário compreende os elementos com os quais o usuário interage diretamente, como programas, partes visíveis do computador e periféricos.
>
> Assinale a alternativa que apresenta a ordem correta:
>
> **A.**  
> F — F — V — V — V.
>
> **B.**  
> V — F — V — F — F.
>
> **C.**  
> F — V — F — V — F.
>
> **D.**  
> V — F — V — F — V.
>
> **E.**  
> F — V — F — V — V.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> A sequência correta é **F — V — F — V — V**.
>>
>> **1. Errada.** O nível de controle não define a interação entre linguagens de alto nível e dispositivos de entrada/saída. Ele é responsável por enviar sinais de controle para coordenar transferências de dados entre registradores, memória e outros componentes, além de selecionar operações na ULA.
>>
>> **2. Correta.** O nível de unidades funcionais engloba registradores, ULA, memória e barramentos. Esses componentes participam da execução das operações e da transferência de dados dentro do sistema computacional.
>>
>> **3. Errada.** O programador que utiliza linguagens como C ou Python atua no nível da linguagem de alto nível, não no nível das portas lógicas. As portas lógicas pertencem a um nível mais baixo, relacionado à estrutura lógica dos componentes do computador.
>>
>> **4. Correta.** O nível da linguagem de montagem está mais próximo do hardware. Nesse nível, as instruções estão em linguagem de montagem ou linguagem de máquina, sendo interpretadas e executadas pelo processador.
>>
>> **5. Correta.** O nível do usuário compreende as partes visíveis do computador e os programas utilizados diretamente pelo usuário, incluindo aplicativos, interfaces e periféricos.
>>
>>Ao desenvolver componentes, como processadores, é fundamental ter uma visão clara de como os níveis hierárquicos se relacionam e cooperam entre si. Sendo assim, a sequência de preenchimento das lacunas é a seguinte:
>> A primeira afirmação é falsa (F), pois o nível de controle coordena a execução de instruções dentro da CPU e não atua na tradução entre linguagens de programação e periféricos. Essa mediação ocorre entre os níveis mais altos e o sistema operacional.
>> A segunda afirmação é verdadeira (V) porque o nível de unidades funcionais abrange a ULA, registradores e barramentos, que são elementos fundamentais no processamento de dados.
>> A terceira afirmação é falsa (F), pois linguagens como C ou Python pertencem ao nível de linguagem de alto nível, não ao nível das portas lógicas, que operam com sinais elétricos e transistores.
>> A quarta afirmação é verdadeira (V) porque a linguagem de montagem (ou _Assembler_) é diretamente interpretada pelo processador, sendo fundamental na tradução entre linguagem humana e máquina.
>> A quinta afirmação é verdadeira (V) porque o nível do usuário engloba a interface direta com o computador (_softwares_, periféricos, telas e sistemas de entrada e saída).


# 2
> [!question] Exercício 2
> Ao projetar ou avaliar sistemas embarcados de alta criticidade, a análise da estrutura interna do sistema computacional é indispensável. Compreender como os níveis hierárquicos interagem para executar instruções e coordenar os subsistemas é crucial para garantir precisão, eficiência e segurança operacional.
>
> Analise a seguinte situação:
>
> Você foi contratado para avaliar falhas de desempenho em um sistema embarcado crítico, como o de um satélite. Sua análise precisa considerar qual das camadas hierárquicas do sistema computacional está sendo mal utilizada.
>
> Sabendo disso, qual das alternativas apresenta corretamente a camada responsável por enviar sinais que ativam funções na ULA e coordenam transferências de dados entre registradores e memória?
>
> **A.**  
> Nível do usuário.
>
> **B.**  
> Nível de unidades funcionais.
>
> **C.**  
> Nível da linguagem de alto nível.
>
> **D.**  
> Nível de controle.
>
> **E.**  
> Nível das portas lógicas.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D.**
>>
>> **A. Errada.** O nível do usuário está relacionado à interação com aplicativos, interfaces e periféricos, não ao envio de sinais internos do processador.
>>
>> **B. Errada.** O nível de unidades funcionais reúne componentes como ULA, registradores e barramentos, mas quem coordena suas ações é o controle.
>>
>> **C. Errada.** A linguagem de alto nível, como C ou Python, está distante da coordenação direta dos sinais internos da CPU.
>>
>> **D. Correta.** O nível de controle é responsável por gerar sinais que ativam funções da ULA e coordenam transferências entre registradores, memória e demais componentes.
>>
>> **E. Errada.** O nível das portas lógicas representa a base física/digital dos circuitos, mas não descreve a coordenação das operações do processador em nível funcional.
>> 
>>O nível de controle emite sinais que coordenam todas as ações internas da CPU, como as trocas de dados entre registradores e as operações realizadas na ULA.
>> O nível do usuário é voltado para a interação com o sistema, como aplicativos e dispositivos, não realiza controle de dados internos.
>> Embora o nível de unidades funcionais contenha registradores e a ULA, ele não é o responsável por coordenar ou controlar sua atividade.
>> A linguagem de alto nível foca a programação de aplicações, não o controle direto das transferências internas de dados no processador.
>> O nível das portas lógicas representa a base física do sistema, mas não exerce papel ativo na coordenação de ações de processamento.

# 3
> [!question] Exercício 3
> Em sistemas computacionais, a precisão na execução de instruções é essencial para a estabilidade e o desempenho do processador.
>
> Analise o seguinte caso:
>
> Você foi convidado a diagnosticar uma anomalia em uma arquitetura computacional. O processador está executando instruções erradas após ciclos de busca aparentemente normais. O erro parece ocorrer entre o armazenamento da instrução e sua execução, mas sem falhas de hardware evidentes.
>
> Com base nessa situação, qual componente e processo provavelmente estão envolvidos nessa falha?
>
> **A.**  
> O registrador de instrução (IR), que armazena a instrução buscada da memória antes da decodificação.
>
> **B.**  
> O barramento de controle, que é responsável por transmitir sinais de clock e reset.
>
> **C.**  
> O contador de programa (PC), que gerencia os dados da ULA em operações lógicas.
>
> **D.**  
> O barramento de endereço, que é responsável por transportar os dados da E/S até a memória.
>
> **E.**  
> O barramento de dados, que interpreta as instruções armazenadas no registrador de instrução.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A.**
>>
>> **A. Correta.** O registrador de instrução, ou **IR**, armazena a instrução buscada da memória antes da etapa de decodificação e execução. Se o erro ocorre entre o armazenamento e a execução, esse componente é o mais provável envolvido.
>>
>> **B. Errada.** O barramento de controle transmite sinais de controle, como leitura, escrita, clock ou reset, mas não armazena nem decodifica instruções.
>>
>> **C. Errada.** O contador de programa, ou **PC**, indica o endereço da próxima instrução a ser buscada, mas não gerencia os dados da ULA.
>>
>> **D. Errada.** O barramento de endereço transporta endereços de memória, não dados da entrada/saída até a memória.
>>
>> **E. Errada.** O barramento de dados transporta dados entre componentes, mas não interpreta instruções.
>>
>> O IR (registrador de instrução) recebe a instrução que é buscada da memória; se ela estiver sendo corrompida ou mal interpretada, esse pode ser o ponto de falha.
>> O barramento de controle envia sinais de comando e sincronização, mas não armazena ou executa instruções.
>> O PC (contador de programa) aponta para a próxima instrução na memória, ele não executa operações na ULA.
>> O barramento de endereço envia endereços, não transporta dados ou instruções.
>> O barramento de dados transfere _bits_ entre componentes, mas não interpreta instruções.
# 4
> [!question] Exercício 4
> John von Neumann revolucionou a computação ao introduzir o conceito de programa armazenado, o que permitiu que as instruções fossem guardadas na memória para execução sequencial.
>
> Qual das alternativas explica corretamente a consequência prática desse conceito para os computadores modernos?
>
> **A.**  
> A execução dos programas tornou-se completamente manual, com cada instrução sendo inserida pelo operador.
>
> **B.**  
> A capacidade de armazenamento de dados foi eliminada, exigindo que os cálculos fossem feitos imediatamente sem referência a instruções predefinidas.
>
> **C.**  
> Foi possível armazenar e acessar rapidamente as instruções na memória, tornando os cálculos e as operações mais eficientes.
>
> **D.**  
> Os computadores passaram a armazenar e executar programas diretamente de cartões perfurados, sem necessidade de memória interna.
>
> **E.**  
> A arquitetura computacional foi abandonada em favor de sistemas exclusivamente analógicos, com base em circuitos elétricos variáveis.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C.**
>>
>> **A. Errada.** O conceito de programa armazenado reduziu a necessidade de inserção manual de instruções, permitindo que programas fossem mantidos na memória.
>>
>> **B. Errada.** A arquitetura de Von Neumann não eliminou o armazenamento; pelo contrário, valorizou o uso da memória para guardar dados e instruções.
>>
>> **C. Correta.** O conceito de programa armazenado permitiu que instruções fossem guardadas e acessadas rapidamente na memória, tornando a execução dos programas mais eficiente e automatizada.
>>
>> **D. Errada.** Cartões perfurados foram usados historicamente, mas a ideia central de Von Neumann é justamente armazenar instruções na memória interna.
>>
>> **E. Errada.** A arquitetura de Von Neumann não substituiu os computadores digitais por sistemas analógicos; ela ajudou a consolidar a base dos computadores digitais modernos.
>>
>> O programa armazenado possibilitou que os computadores guardassem suas instruções e as acessassem rapidamente ao otimizar o desempenho e tornar as operações mais eficazes. O modelo de Von Neumann eliminou a necessidade de inserção manual de cada instrução, o que permitiu que os programas fossem armazenados na memória para execução automática. Isso tornou o processamento muito mais rápido e eficiente.
>> O conceito de programa armazenado não eliminou a capacidade de armazenamento de dados; pelo contrário, ele proporcionou um meio de guardar tanto as instruções quanto os dados necessários para o processamento.
>> Apesar de os cartões perfurados serem usados anteriormente, a inovação trazida por Von Neumann foi justamente permitir que as instruções fossem armazenadas internamente na memória, sem depender desses cartões.
>> A arquitetura de Von Neumann impulsionou os sistemas digitais baseados em memória e processamento lógico sequencial, e não sistemas analógicos.
# 5
> [!question] Exercício 5
> Ao desenvolver um sistema com base na arquitetura do IAS, qualquer variação na lógica de controle pode afetar diretamente o fluxo de execução das instruções armazenadas.
>
> Analise o seguinte caso:
>
> Durante o projeto de uma arquitetura inspirada no modelo de Von Neumann, você decide incorporar uma instrução de desvio condicional complexa. O funcionamento correto dessa instrução depende da sincronização entre os registradores e o sequenciamento de leitura de memória.
>
> Qual sequência de eventos mais se aproxima da execução correta dessa instrução, considerando o comportamento do IAS? Assinale a alternativa correta:
>
> **A.**  
> O IR carrega a instrução, o teste lógico é realizado pela ULA e, se o critério for atendido, o PC recebe um novo valor.
>
> **B.**  
> A ULA realiza o teste, atualiza o acumulador, o MAR define o endereço da próxima instrução e o IR a executa.
>
> **C.**  
> O IR carrega o código da operação, o PC atualiza o endereço e o MBR envia o resultado para a ULA.
>
> **D.**  
> O IR executa a instrução, o PC é atualizado com base no valor do IR e a próxima instrução é carregada no Ac.
>
> **E.**  
> O MBR realiza o teste, o PC incrementa automaticamente e a próxima instrução é carregada no IBR.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A.**
>>
>> **A. Correta.** Em uma instrução de desvio condicional, o **IR** carrega a instrução, a condição é avaliada, geralmente com apoio da ULA ou de registradores como o acumulador, e, se o critério for verdadeiro, o **PC** recebe o novo endereço.
>>
>> **B. Errada.** O **MAR** armazena endereços de memória, mas não define sozinho a próxima instrução; além disso, o **IR** não executa instruções, ele as armazena para decodificação.
>>
>> **C. Errada.** O **MBR** transfere dados ou instruções vindos da memória, mas não envia necessariamente “resultado” para a ULA nessa sequência de desvio.
>>
>> **D. Errada.** O **IR** não executa a instrução; ele apenas armazena a instrução atual. Além disso, a próxima instrução não é carregada no acumulador, mas buscada a partir do endereço indicado pelo **PC**.
>>
>> **E. Errada.** O **MBR** não realiza o teste lógico da condição. O incremento automático do **PC** pode ocorrer em fluxos sequenciais, mas em desvios condicionais ele pode receber um novo endereço caso a condição seja satisfeita.
>>
>> A sequência correta é: a instrução é carregada no IR, a ULA realiza o teste condicional e, caso o teste seja verdadeiro, a UC atualiza o PC com o novo endereço.
>> O MAR apenas indica o endereço da memória a ser acessada, ele não define a próxima instrução a ser executada.
>> O MBR não envia resultados para a ULA diretamente, apenas armazena dados ou instruções da memória.
>> O IR não executa a instrução, ele a contém para que a UC envie os sinais adequados.
>> Além disso, o Ac não carrega instruções e o MBR não realiza testes.
>> O IBR armazena instruções, mas não substitui a lógica de controle nem altera o PC.

