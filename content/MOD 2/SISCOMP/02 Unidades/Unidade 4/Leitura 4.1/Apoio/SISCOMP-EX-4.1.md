---
publish: true
---
# Exercicios 4.1 - Virtualizacao e conteiners para sistemas operacionais

# 1
> [!question] Exercício 1
> Tanto a virtualização de máquinas quanto a criação de contêineres apresentam suas vantagens e desvantagens. Escolha a opção que representa uma das desvantagens da tecnologia de virtualização de máquinas.
>
> **A.**  
> Perda do sistema operacional da máquina hospedeira no processo de migração de seu sistema para um novo sistema operacional.
>
> **B.**  
> Dificuldades na troca de plataforma da máquina virtual.
>
> **C.**  
> Prejuízos aos serviços das outras máquinas virtuais no caso de falha de uma máquina virtual.
>
> **D.**  
> Dificuldade no tratamento dos dados em cada máquina virtual.
>
> **E.**  
> Vulnerabilidades em todas as máquinas virtuais em caso de fraqueza no sistema operacional da máquina hospedeira.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> Uma desvantagem da virtualização de máquinas é que a segurança das máquinas virtuais pode ser afetada caso o sistema hospedeiro apresente vulnerabilidades. Como o hospedeiro sustenta o ambiente virtualizado, uma falha nele pode comprometer as máquinas virtuais.
>>
>> **A. Incorreta.** A migração de máquinas virtuais não implica, necessariamente, perda do sistema operacional da máquina hospedeira.  
>> **B. Incorreta.** A virtualização tende a facilitar a portabilidade e a troca de ambiente, não a dificultá-la como regra.  
>> **C. Incorreta.** Uma das vantagens da virtualização é o isolamento entre máquinas virtuais; a falha de uma VM não deveria prejudicar diretamente as demais.  
>> **D. Incorreta.** O tratamento de dados em cada máquina virtual não é uma desvantagem típica da virtualização.  
>> **E. Correta.** Se o sistema hospedeiro tiver uma vulnerabilidade, as máquinas virtuais podem ser afetadas, pois dependem dele para funcionar.
>>
>> Em caso de migração, o sistema operacional não é perdido, pois está encapsulado na imagem da máquina virtual. Não há dificuldades na troca de plataforma da máquina virtual. Quando uma máquina virtual falha, esta não afeta as demais. Cada máquina virtual trata seus próprios dados, pois são independentes. Caso o sistema operacional hospedeiro falhe, todas as máquinas virtuais irão falhar.

# 2
> [!question] Exercício 2
> Virtualização é uma técnica que permite criar máquinas virtuais a partir de um único sistema computacional. Acerca desse assunto, assinale a opção correta.
>
> **A.**  
> A virtualização total exige que o sistema operacional convidado que será virtualizado sofra modificações para ser executado de forma mais eficiente.
>
> **B.**  
> Uma das vantagens da virtualização de servidores é o consumo reduzido da RAM do computador hospedeiro, tendo em vista que essa memória é compartilhada entre as máquinas virtuais em execução.
>
> **C.**  
> Existem dois tipos de hipervisores: o tipo 1 é aquele em que não há a necessidade da camada de sistema operacional sob o _hardware_, e o tipo 2, aquele em que existe a camada de sistema operacional sob o _hardware_.
>
> **D.**  
> O monitor de máquina virtual é uma camada que está sob a camada de hipervisor.
>
> **E.**  
> Uma máquina hospedeira pode ter somente até cinco máquinas convidadas.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C.**
>>
>> Existem dois tipos principais de hipervisores. O **tipo 1**, também chamado de bare-metal, executa diretamente sobre o hardware. Já o **tipo 2** depende de um sistema operacional hospedeiro para funcionar.
>>
>> **A. Incorreta.** Na virtualização total, o sistema operacional convidado não precisa ser modificado; quem geralmente exige adaptação é a paravirtualização.  
>> **B. Incorreta.** A virtualização normalmente aumenta o consumo de RAM, pois cada máquina virtual precisa de recursos próprios.  
>> **C. Correta.** Diferencia corretamente os hipervisores do tipo 1 e do tipo 2.  
>> **D. Incorreta.** O monitor de máquina virtual é o próprio hipervisor ou faz parte dessa camada de controle.  
>> **E. Incorreta.** Não existe limite fixo de cinco máquinas convidadas; isso depende dos recursos do hospedeiro e da solução usada.
>>
>> Cada máquina virtual exige que seja feita a distribuição de recursos entre elas; portanto, não há consumo reduzido de RAM, e não há garantia de que a máquina virtual irá ser executada de forma mais eficiente, uma vez que as máquinas virtuais estão sujeitas às configurações disponíveis pela máquina hospedeira. Existem dois tipos de hipervisores; uma diferença entre eles é a existência de uma camada de sistema operacional sob o _hardware_. O hipervisor é um tipo de monitor de máquina virtual; com isso, não há duas camadas, apenas uma. Uma máquina hospedeira pode ter quantas máquinas convidadas seu _hardware_ permitir.

# 3
> [!question] Exercício 3
> O Docker é uma ferramenta de conteinerização que permite executar diversas tarefas isoladamente de forma a evitar sobrecarga de recursos, como quando se utiliza uma máquina virtual. Para criar e executar as aplicações em ambiente de produção, a empresa AnalysisTI optou pelo uso do Docker, um criador de contêineres. Marque a alternativa que tenha motivado essa escolha.
>
> **A.**  
> Não utilizar namespaces do Linux, o que permite prover espaços de trabalho isolados para os contêineres. Dessa forma, quando um contêiner é criado, automaticamente é criada uma camada de isolamento para grupos de processos.
>
> **B.**  
> Permitir portabilidade de contêineres. É possível criar uma imagem de toda a configuração e aplicativos instalados em um contêiner e transferi-la para outro host que tenha um Docker previamente instalado.
>
> **C.**  
> Obter o mesmo desempenho da virtualização baseada em hipervisor, em que cada contêiner é executado em seu próprio sistema operacional, o que reduz a utilização de recursos de disco, embora os contêineres utilizem mais memória.
>
> **D.**  
> Utilizar hipervisores, compatíveis com diversas plataformas, para executar máquinas virtuais que virtualizam hardware físico como parte de um desenvolvimento multiplataforma para testes e implementação de fluxo de trabalho.
>
> **E.**  
> Ganhar espaço como um gerenciador de máquinas virtuais no ambiente Linux e não ter bibliotecas próprias, mantendo as bibliotecas nativas utilizadas para gerenciar o kernel.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> Uma das principais vantagens do Docker é a **portabilidade**. É possível criar uma imagem contendo a aplicação, suas dependências e configurações, e executá-la em outro ambiente que tenha Docker instalado.
>>
>> **A. Incorreta.** O Docker utiliza namespaces do Linux para isolar processos, rede, sistema de arquivos e outros recursos.  
>> **B. Correta.** A portabilidade de imagens e contêineres é uma das principais razões para usar Docker.  
>> **C. Incorreta.** Contêineres não executam um sistema operacional completo próprio como uma máquina virtual; eles compartilham o kernel do hospedeiro.  
>> **D. Incorreta.** Docker não utiliza hipervisores para virtualizar hardware físico da mesma forma que máquinas virtuais.  
>> **E. Incorreta.** Docker não é um gerenciador de máquinas virtuais, mas sim uma plataforma de contêineres.
>>
>> Contêineres utilizam _namespaces_ para abstração dos recursos do _kernel_. Atribuem portabilidade à configuração do sistema e aos aplicativos instalados. Não necessitam ter seu próprio sistema operacional, pois utilizam o do hospedeiro. Não utilizam hipervisores ou qualquer tipo de monitor de máquina virtual. O Docker não gerencia máquinas virtuais, e sim contêineres.

# 4
> [!question] Exercício 4
> A virtualização tem sua arquitetura em camadas. Escolha a alternativa que indique entre quais camadas o hipervisor do tipo 1, ou monitor de máquina virtual, se encontra.
>
> **A.**  
> Sistema operacional e aplicativo.
>
> **B.**  
> Hardware e máquina virtual.
>
> **C.**  
> Aplicativo e hardware.
>
> **D.**  
> Máquina virtual e hipervisor 2.
>
> **E.**  
> Hardware e sistema operacional.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> O hipervisor do tipo 1 é executado diretamente sobre o **hardware** e gerencia as **máquinas virtuais**. Por isso, ele fica entre a camada física da máquina e as máquinas virtuais criadas.
>>
>> **A. Incorreta.** Essa relação está mais associada a aplicações executando sobre um sistema operacional, não ao hipervisor tipo 1.  
>> **B. Correta.** O hipervisor tipo 1 fica entre o hardware e as máquinas virtuais.  
>> **C. Incorreta.** Aplicativos não ficam diretamente relacionados ao hipervisor tipo 1 nessa camada.  
>> **D. Incorreta.** Hipervisor tipo 1 e tipo 2 são modelos diferentes, não camadas empilhadas dessa forma.  
>> **E. Incorreta.** No tipo 1, não há sistema operacional hospedeiro entre o hardware e o hipervisor.
>>
>> As camadas da virtualização do hipervisor do tipo 1 se dão pelas camadas de: _hardware_, hipervisor, máquina virtual.

# 5
> [!question] Exercício 5
> A virtualização é implementada por meio de um monitor de máquina virtual, chamado hipervisor. Com isso, analise as afirmativas a seguir:
>
> I. O hipervisor está disponível sempre que o sistema hospedeiro estiver ligado.
>
> II. O monitor de máquina virtual é responsável por executar as instruções privilegiadas requisitadas pelo sistema operacional convidado ou simular sua execução.
>
> III. Máquinas virtuais são mais seguras que as máquinas físicas justamente por causa do hipervisor.
>
> Escolha a alternativa que indique a(s) afirmativa(s) correta(s):
>
> **A.**  
> Somente I.
>
> **B.**  
> Somente II.
>
> **C.**  
> Somente III.
>
> **D.**  
> Alternativas I e II estão corretas.
>
> **E.**  
> Alternativas I, II e III estão corretas.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D.**
>>
>> A afirmativa I está correta porque o hipervisor precisa estar disponível no sistema hospedeiro para gerenciar as máquinas virtuais. A afirmativa II também está correta, pois o hipervisor controla ou simula a execução de instruções privilegiadas solicitadas pelo sistema operacional convidado. A afirmativa III está incorreta porque máquinas virtuais não são automaticamente mais seguras que máquinas físicas; elas dependem da configuração, do isolamento e da segurança do próprio hipervisor.
>>
>> A partir do momento em que a máquina hospedeira está ativa, o hipervisor está disponível para executar as máquinas virtuais. Uma das funções do hipervisor é executar as instruções requisitadas pelo sistema operacional convidado, uma vez que este não se comunica diretamente com o sistema operacional hospedeiro ou o _hardware_. O hipervisor não garante que as máquinas virtuais sejam mais seguras que as máquinas físicas.

