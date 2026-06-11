---
publish: true
---
# Exercícios 4.3 - Tolerância a falhas

# 1
> [!question] Exercício 1
> Um sistema distribuído é um sistema que utiliza diversos dispositivos computacionais para realizar o processamento de forma distribuída e transparente para seu usuário. Quando se utilizam sistemas distribuídos com alto grau de acesso de usuários, é interessante que estes não tenham falhas constantes, visto que seus usuários não irão utilizar um sistema com erros constantes. Vários sistemas podem ser distribuídos, mas, para que sejam tolerantes a falhas, é necessário que haja a ideia de que, mesmo com falhas, o sistema irá continuar funcionando, tornando-se, assim, um sistema distribuído tolerante a falhas. Sistemas distribuídos tolerantes a falhas têm, em seus conceitos e teoria, algo muito similar a outro tipo de sistema. Qual seria esse sistema?
>
> **A.**  
> Sistema de arquivos distribuídos.
>
> **B.**  
> Sistema distribuído de serviço de nomes.
>
> **C.**  
> Sistema multimídia distribuído.
>
> **D.**  
> Sistema confiável.
>
> **E.**  
> Sistema distribuído automático.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D.**
>>
>> Sistemas distribuídos tolerantes a falhas têm relação direta com o conceito de **sistemas confiáveis**, pois ambos buscam garantir funcionamento correto, disponibilidade e continuidade mesmo diante de falhas.
>>
>> **A. Incorreta.** Sistema de arquivos distribuídos é um tipo de aplicação distribuída, não o conceito geral relacionado à tolerância a falhas.  
>> **B. Incorreta.** Serviço de nomes distribuído é um serviço específico, usado para localizar recursos, mas não representa a teoria geral da tolerância a falhas.  
>> **C. Incorreta.** Sistema multimídia distribuído é uma aplicação específica, não um modelo geral de confiabilidade.  
>> **D. Correta.** Sistemas tolerantes a falhas se aproximam do conceito de sistemas confiáveis, pois buscam manter o funcionamento mesmo quando ocorrem falhas.  
>> **E. Incorreta.** Sistema distribuído automático não é o conceito teórico associado diretamente à tolerância a falhas.
>>
>>Diversos sistemas podem ser distribuídos, mas nem todos são tolerantes a falhas. Para que um sistema seja tolerante a falhas, é necessário que possa continuar funcionando mesmo quando existe uma falha. Independentemente de o sistema ser multimídia, de arquivos ou arquivos distribuídos, ou mesmo de resolução de nomes, ele só pode ser definido como tolerante a falhas se essa funcionalidade for adicionada a ele. Por mais que seja desejado que ele funcione dessa forma, sua implementação é pura e exclusivamente responsabilidade do administrador desse sistema, gerente ou outros nessa mesma linha. Como apontado por Steen (2009, p. 194), "Há forte relação entre ser tolerante a falhas e os denominados sistemas confiáveis", porque, para um sistema ser considerado confiável, tem, entre seus requisitos, a disponibilidade, que insere a ideia de que o sistema estará disponível a maior parte do tempo, ideia esta muito similar a ser tolerante a falhas, em que o sistema deve ser capaz de continuar funcionando mesmo na presença de falhas. Devido à complexidade natural de um sistema distribuído, não existe (seja em literatura, seja em pesquisas na Internet) a expressão _sistema distribuído automático._ Existem sistemas distribuídos que têm automação, mas nenhum deles é totalmente automático, dada sua complexidade.

# 2
> [!question] Exercício 2
> Quando se fala em sistemas distribuídos, fala-se de agrupamento de recursos computacionais para determinado fim. Nesse contexto, há basicamente dois tipos: grupo simples e grupo hierárquico. Para grupos simples, existe redundância de links de acesso entre os nós participantes, mas, para o agrupamento hierárquico, existe um nó coordenador que define para qual nó operário determinada comunicação deve ser direcionada. Mas quando esse nó falha e não existe uma replicação direta para ele, o que acontece?
>
> **A.**  
> Assim que os computadores participantes do grupo de nós percebem que não há um coordenador, o sistema como um todo para, sem enviar sinais de exceção aos clientes, e aguarda que um novo nó com a função de coordenador seja substituído.
>
> **B.**  
> Assim que os computadores participantes do grupo de nós percebem que não há um coordenador, é lançada uma exceção entre os servidores operários para que eles aguardem novas instruções de um novo servidor coordenador. Os servidores terminam seu processamento atual, respondem para seus clientes e, por fim, aguardam.
>
> **C.**  
> Assim que os computadores participantes do grupo de nós percebem que não há um coordenador, é feita uma eleição de forma específica e com métricas bem determinadas entre os nós operários para que um deles assuma o papel de coordenador.
>
> **D.**  
> Assim que os computadores participantes do grupo de nós percebem que não há um coordenador, todas as conexões com os clientes são encerradas por meio de exceção, e um temporizador aleatório para cada nó é acionado até que haja um novo coordenador. Esse processo se repete até que possa haver um nó coordenador.
>
> **E.**  
> Assim que os computadores participantes do grupo de nós percebem que não há um coordenador, assumem por tempo indeterminado sua própria gestão até que seja possível a substituição por um novo coordenador, que, ao participar do grupo, avisa para todos os nós de seu papel, assumindo novamente o controle.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C.**
>>
>> Em um grupo hierárquico, quando o nó coordenador falha e não há uma réplica direta, os demais nós podem realizar uma **eleição** para escolher um novo coordenador. Esse processo permite que o sistema continue funcionando sem depender indefinidamente do coordenador original.
>>
>> **A. Incorreta.** O sistema não precisa necessariamente parar por completo; mecanismos de eleição podem recuperar a coordenação.  
>> **B. Incorreta.** Apenas aguardar novas instruções não resolve o problema da ausência do coordenador.  
>> **C. Correta.** A eleição de um novo coordenador é o procedimento típico quando o coordenador falha.  
>> **D. Incorreta.** Encerrar todas as conexões e usar temporizadores aleatórios não representa o mecanismo principal de eleição em grupos hierárquicos.  
>> **E. Incorreta.** A autogestão por tempo indeterminado quebraria a organização hierárquica do sistema.
>>
>> Como é comum em sistemas distribuídos agrupados de forma hierárquica, os nós participantes conhecem seus vizinhos, e métricas são trocadas para que haja uma eleição entre os nós. Aquele com as melhores métricas assume o papel de coordenador daquele grupo hierárquico.É importante sempre lembrar que o objetivo de um sistema distribuído, sendo ou não tolerante a falhas, é manter a transparência ao usuário. Assim, permitir que o usuário compreenda que houve um erro nunca é o objetivo. Lançar exceções ao usuário só pode ser um contexto aceitável se o cliente conectado estiver utilizando um _software_ que possa tratar essa exceção sem deixar claro para o usuário. Não é concebível a ideia de que um sistema distribuído, tolerante ou não tolerante a falhas, tenha como parte de seu algoritmo tempo de espera e _downtime_.


# 3
> [!question] Exercício 3
> Existem diferentes formas de classificar um problema em um sistema distribuído; cada tipo remete a uma ideia específica de tratamento de erros. Se um sistema distribuído deixa de responder abruptamente, e o cliente, mesmo com tentativas repetidas de reconexão, não consegue concluir, pode-se afirmar que esse sistema distribuído teve uma:
>
> **A.**  
> Falha arbitrária.
>
> **B.**  
> Falha por omissão.
>
> **C.**  
> Falha por temporização.
>
> **D.**  
> Falha de resposta.
>
> **E.**  
> Falha por queda.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> Quando um sistema deixa de responder abruptamente e não consegue mais concluir a comunicação, caracteriza-se uma **falha por queda**. Esse tipo de falha ocorre quando um componente para de funcionar, impedindo a continuidade normal do serviço.
>>
>> **A. Incorreta.** Falha arbitrária ocorre quando o sistema apresenta comportamento imprevisível ou incorreto, não apenas quando para de responder.  
>> **B. Incorreta.** Falha por omissão ocorre quando mensagens ou respostas esperadas não são enviadas ou recebidas, mas o enunciado indica uma parada abrupta do sistema.  
>> **C. Incorreta.** Falha por temporização ocorre quando a resposta acontece fora do tempo esperado, não necessariamente quando o sistema cai.  
>> **D. Incorreta.** Falha de resposta envolve resposta incorreta ou inadequada, enquanto o caso descreve ausência abrupta de funcionamento.  
>> **E. Correta.** A parada abrupta e a impossibilidade de reconexão caracterizam uma falha por queda.
>>
>> O ponto central é a compreensão de que o servidor estava ativo e, sem motivo aparente, parou de responder. Diferentemente da falha por omissão, resposta ou temporização, em que o servidor ainda está de fato ativo, na falha por queda o servidor simplesmente para de responder. Qualquer alternativa em que, no contexto de falha, o servidor ainda está ativo, respondendo requisições (mesmo que erradas), é uma resposta incorreta. O servidor simplesmente para, o que faz perceber que qualquer alternativa que envolva alguma comunicação não pode ser considerada. Para ser considerada uma falha arbitrária, o sistema deve, de alguma forma, produzir respostas que não foram requisitadas. Visto que nesse contexto não temos comunicação, a falha arbitrária não pode ser considerada de qualquer forma, já que necessita desse canal até para poder produzir seus erros arbitrários.

# 4
> [!question] Exercício 4
> Entre as diversas falhas possíveis em um sistema distribuído, as falhas de comunicação são as mais aparentes e podem ocorrer por diversos contextos diferentes. Falhas de comunicação em um sistema distribuído tolerante a falhas podem ser classificadas em basicamente cinco tópicos:
>
> I. O cliente não consegue localizar o servidor.
>
> II. A mensagem de requisição do cliente para o servidor se perde.
>
> III. O servidor cai após receber uma requisição.
>
> IV. A mensagem do cliente para o servidor se perde.
>
> V. O cliente cai após enviar uma requisição.
>
> Algumas dessas falhas podem ser resolvidas facilmente com um mecanismo de contagem de tempo de requisições ou dados que já foram enviados e aguardam resposta. Esses cenários são:
>
> **A.**  
> I, III, V.
>
> **B.**  
> I, IV, V.
>
> **C.**  
> I, II, V.
>
> **D.**  
> I, II, III, V.
>
> **E.**  
> II, III, IV, V.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> Todas as falhas possíveis em troca de mensagens podem ser tratadas com mecanismos de temporização, ou seja, com o uso de _timeouts_. Quando uma requisição, resposta ou mensagem não chega ao destino esperado, o sistema pode aguardar por um tempo determinado e, caso não receba retorno, reenviar a mensagem ou refazer a requisição.
>>
>> O cenário I não se encaixa nessa lógica, pois nele o cliente nem consegue localizar o servidor. Nesse caso, a comunicação não chega a ser estabelecida, tornando o uso de temporizadores pouco útil. O temporizador faz sentido quando há possibilidade de comunicação entre cliente e servidor, mas alguma mensagem, resposta ou confirmação se perde durante o processo.
>>
>> **A. Incorreta.** Inclui o cenário I, em que o cliente não consegue localizar o servidor; nesse caso, a comunicação nem chega a ser estabelecida.  
>> **B. Incorreta.** Também inclui o cenário I, que não é resolvido diretamente por temporização.  
>> **C. Incorreta.** Inclui o cenário I e deixa de fora falhas de troca de mensagens que podem ser tratadas por _timeout_.  
>> **D. Incorreta.** Apesar de incluir cenários tratáveis por temporização, também inclui o cenário I, que inviabiliza a alternativa.  
>> **E. Correta.** Os cenários II, III, IV e V envolvem falhas durante ou após a troca de mensagens, podendo ser tratados com temporizadores e reenvio de requisições ou respostas.
>>


# 5
> [!question] Exercício 5
> Para que um sistema seja tolerante a falhas, a possibilidade de continuar funcionando, e de forma transparente, deve ser possível. Uma ideia amplamente utilizada e que funciona muito bem para que essa funcionalidade seja atingida é a replicação de recursos computacionais; ou seja, existem cópias exatas e constantemente atualizadas que podem assumir o papel a qualquer momento que as máquinas de produção falharem. Diversos tipos de problemas podem ser mascarados por replicação de recursos computacionais, exceto:
>
> **A.**  
> Falhas de comunicação entre cliente e servidor em uma ideia peer-to-peer, visto que utilizam transporte orientado a conexão, e, depois de estabelecido com determinado recurso computacional que falha, esta não pode ser simplesmente movida pela própria tecnologia da conexão.
>
> **B.**  
> Falhas de comunicação entre cliente e servidor em uma ideia peer-to-peer, visto que utilizam transporte orientado a datagrama, e, depois de estabelecido com determinado recurso computacional que falha, esta não pode ser simplesmente movida pela própria tecnologia da conexão.
>
> **C.**  
> Falhas de comunicação entre servidores agrupados em grupo simples, visto que utilizam conexões dedicadas entre os nós, e, dessa forma, toda a transparência inerente ao contexto de sistemas distribuídos é quebrada pela necessidade de a conexão entre servidores ser restabelecida.
>
> **D.**  
> Falhas de comunicação entre servidores agrupados em grupo hierárquico, já que o nó coordenador é o ponto inicial da comunicação, e toda a transparência inerente ao contexto de sistemas distribuídos é quebrada pela necessidade de o nó coordenador emitir exceções, tanto para o servidor quanto para o cliente.
>
> **E.**  
> Falhas de processos entre servidores agrupados em grupo hierárquico, visto que o nó coordenador necessita realocar o processo criado para outro nó operário, e a transparência é quebrada, pois fica evidente ao usuário o processo de realocação de recursos entre servidores.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A.**
>>
>> A replicação de recursos computacionais consegue mascarar muitas falhas de processamento e disponibilidade, mas falhas de comunicação em conexões já estabelecidas podem ser mais difíceis de mascarar de forma transparente. Em transporte orientado a conexão, quando a conexão está associada a um recurso que falha, ela não pode ser simplesmente transferida automaticamente para outro recurso sem mecanismos adicionais.
>>
>> **A. Correta.** Em uma conexão já estabelecida, a falha do recurso conectado não é mascarada automaticamente pela replicação, pois a conexão não é movida sozinha para outra réplica.  
>> **B. Incorreta.** Em transporte orientado a datagrama, por não haver conexão fixa da mesma forma, há maior flexibilidade para redirecionar comunicações.  
>> **C. Incorreta.** Em grupos simples, a redundância entre nós tende a ajudar no mascaramento de falhas.  
>> **D. Incorreta.** Em grupos hierárquicos, mecanismos como coordenação, replicação ou eleição podem reduzir o impacto da falha do coordenador.  
>> **E. Incorreta.** A realocação de processos pode ser tratada pelo sistema distribuído de forma transparente, dependendo da implementação.
>>
>> Falhas de comunicação ou de troca de processos entre servidores não ficam evidentes ao cliente, pois toda essa movimentação acontece em uma camada a que o próprio cliente não tem acesso. O cliente apenas consome serviços, recursos ou o que o sistema distribuído está oferecendo a ele. Erros de comunicação entre servidores podem ser contornados com novas requisições. Troca de processos entre servidores também acontecem de forma transparente. O cliente apenas terá demora para ter sua requisição respondida, mas sem visualizar claramente que houve um erro, mantendo, assim, a funcionalidade de transparência. Quando se fala de transporte orientado à conexão, também se está falando do uso de algoritmo TCP; ou seja, depois que a conexão foi estabelecida com um servidor concluindo o processo completo (_three way handshake_), e este de repente falha, não é possível simplesmente mover a conexão já estabelecida para outro recurso computacional, deixando evidente a falha ocorrida para o cliente, quebrando a premissa de transparência que deve ser inerente ao sistema distribuído. O que pode ser feito é uma nova requisição para o sistema, fazendo com que a conexão com o cliente seja restabelecida.


