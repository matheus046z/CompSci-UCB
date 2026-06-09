---
publish: true
---
# Exercícios 3.3 - Modelos físicos para sistemas distribuídos

# 1
> [!question] Exercício 1
> Ataques à integridade dos dados quando da execução de códigos móveis e da negação de serviços são ameaças externas relacionadas ao desafio da segurança de um sistema distribuído. Essas ameaças não têm soluções prévias e padronizadas e estão entre as principais dificuldades inerentes ao projeto inicial de um sistema distribuído.
>
> Considerando os três modelos físicos para sistemas distribuídos, qual é o modelo que considera essa dificuldade como nula ou irrisória?
>
> **A.**  
> Sistemas distribuídos primitivos.
>
> **B.**  
> Sistemas distribuídos adaptados para a Internet.
>
> **C.**  
> Sistemas distribuídos contemporâneos.
>
> **D.**  
> Sistemas distribuídos ubíquos.
>
> **E.**  
> Sistemas distribuídos de sistemas.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A. Sistemas distribuídos primitivos.**
>>
>> **A. Correta.** Nos sistemas distribuídos primitivos, a preocupação com ameaças externas, como ataques por códigos móveis e negação de serviço, era considerada nula ou irrisória, pois esses sistemas eram mais fechados e menos expostos.
>>
>> **B. Errada.** Sistemas distribuídos adaptados para a Internet passaram a lidar diretamente com ameaças externas, já que estão conectados a redes abertas.
>>
>> **C. Errada.** Sistemas distribuídos contemporâneos aumentam ainda mais os desafios de segurança, devido à mobilidade, escalabilidade, nuvem, IoT e grande volume de dados.
>>
>> **D. Errada.** Sistemas ubíquos envolvem dispositivos distribuídos no ambiente e conectividade constante, o que amplia as preocupações com segurança.
>>
>> **E. Errada.** “Sistemas distribuídos de sistemas” não corresponde ao modelo físico que considera essa dificuldade como nula ou irrisória.
>>
>>Considerando que o modelo físico de sistemas distribuídos primitivos foi o primeiro apresentado pela literatura, ao final dos anos 1970 e início dos anos 1980, ele surgiu em resposta ao avanço da tecnologia da época, especialmente das redes locais. Dessa forma, pode-se dizer que essa primeira geração dos modelos físicos não contemplava de forma prioritária determinados desafios que atualmente são emergenciais nos sistemas distribuídos contemporâneos, como a segurança. Nos sistemas distribuídos adaptados para a Internet e nos sistemas distribuídos contemporâneos, o desafio da segurança passa a ser uma meta emergente. Sistemas distribuídos de sistemas não existem. Por fim, sistemas distribuídos ubíquos não são modelos físicos de sistemas distribuídos.

# 2
> [!question] Exercício 2
> Uma meta importante de sistemas distribuídos é separar as aplicações das plataformas subjacentes, provendo uma camada de software denominada middleware. O middleware é uma camada de software localizada entre as aplicações e as plataformas distribuídas.
>
> A proposta de um middleware em sistema distribuído vertical está diretamente relacionado ao desafio de:​​​​​​​
>
> **A.**  
> abertura de sistemas.
>
> **B.**  
> heterogeneidade.
>
> **C.**  
> qualidade de serviço.
>
> **D.**  
> escalabilidade.
>
> **E.**  
> segurança.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B. heterogeneidade.**
>>
>> **A. Errada.** A abertura de sistemas está relacionada à capacidade de usar padrões e permitir interoperabilidade, mas não é o foco principal da função do middleware descrita no enunciado.
>>
>> **B. Correta.** O middleware atua como uma camada intermediária que esconde diferenças entre plataformas, sistemas operacionais, linguagens e redes, ajudando a resolver o desafio da heterogeneidade.
>>
>> **C. Errada.** Qualidade de serviço envolve desempenho, disponibilidade, confiabilidade e outros requisitos, mas não é o ponto central da separação entre aplicação e plataforma.
>>
>> **D. Errada.** Escalabilidade trata da capacidade de crescimento do sistema sem perda significativa de desempenho.
>>
>> **E. Errada.** Segurança é um desafio importante, mas o middleware citado no enunciado está mais diretamente ligado à abstração das diferenças entre plataformas.
>>
>> A segunda geração dos modelos físicos surgiu em meados de 1990, em resposta ao crescimento significativo da Internet. Assim, incorporou-se a esse modelo uma infraestrutura mais heterogênea, abrangendo diversos e diferentes tipos de componentes de _software_ e de _hardware_. Como resultado, um elevado nível de heterogeneidade começou a surgir nos sistemas distribuídos adaptados para a Internet. Diante desse novo cenário, apareceram novas tecnologias e estratégias com o objetivo de suprir as lacunas/dificuldades dessa geração, principalmente a heterogeneidade; dentre elas, surgiu o _middleware._ Os demais desafios pautados não estão diretamente relacionados ao conceito de _middleware__:_ a abertura de sistemas se refere a uma necessidade contínua de estender o sistema visando a adaptações; a qualidade de serviço está relacionada a componentes individuais do sistema, com vistas ao fornecimento de níveis de desempenho garantidos; a escalabilidade está diretamente voltada ao aumento do número de recursos _versus_ o aumento de usuários, visando a adaptar a escalabilidade do sistema sem apresentar perda de desempenho; e, por fim, a segurança considera diretamente a integridade dos dados, bem como a disponibilidade e a confiabilidade do sistema.

# 3
> [!question] Exercício 3
> Clusters e grades são um dos adventos inerentes à terceira geração dos modelos físicos para sistemas distribuídos, os sistemas distribuídos contemporâneos.
>
> Esses tipos de sistemas distribuídos são: ​​​​​​​
>
> **A.**  
> sistemas de suporte à computação em que a principal característica dos clusters é a homogeneidade e a das grades é a heterogeneidade.
>
> **B.**  
> sistemas de suporte à informação em que a principal característica dos clusters é a homogeneidade e a das grades é a heterogeneidade.
>
> **C.**  
> sistemas de suporte à computação em que a principal característica dos clusters é a heterogeneidade e a das grades é a homogeneidade.
>
> **D.**  
> sistemas de suporte à computação em que a principal característica de clusters ​​​​​​​e grades é a heterogeneidade.
>
> **E.**  
> sistemas de suporte à informação em que a principal característica de clusters​​​​​​​ e grades é a heterogeneidade.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A. sistemas de suporte à computação em que a principal característica dos clusters é a homogeneidade e a das grades é a heterogeneidade.**
>>
>> **A. Correta.** Clusters e grades são sistemas de suporte à computação. Em geral, clusters são formados por máquinas mais homogêneas e próximas, enquanto grades reúnem recursos mais heterogêneos e distribuídos.
>>
>> **B. Errada.** Clusters e grades não são classificados principalmente como sistemas de suporte à informação, mas sim como sistemas de suporte à computação.
>>
>> **C. Errada.** A alternativa inverte as características: clusters tendem à homogeneidade, enquanto grades tendem à heterogeneidade.
>>
>> **D. Errada.** Apenas as grades têm como característica marcante a heterogeneidade; clusters normalmente são mais homogêneos.
>>
>> **E. Errada.** Além de classificar incorretamente como sistemas de suporte à informação, também afirma que ambos são caracterizados pela heterogeneidade.
>>
>> _Clusters_ e grades são tipos de sistemas distribuídos que dão suporte à computação e, em geral, têm enfoque no poder computacional. Além disso, um _cluster_ tem como principal característica a homogeneidade, tanto em termos de _hardware_ como de _software_. Por outro lado, as grades têm como principal desafio a heterogeneidade em diversos aspectos. _Clusters_ e grades não são sistemas que provêm suporte à informação de forma específica.

# 4
> [!question] Exercício 4
> Computação em nuvem e Internet das coisas são dois adventos tecnológicos importantes apresentados na geração de sistemas distribuídos contemporâneos. Sobre essas tecnologias, analise as alternativas abaixo e assinale (V) para verdadeiro e (F) para falso.
>
> (  ) A computação em nuvem é uma das tecnologias atuais que contemplam a geração de modelos físicos contemporâneos, viabilizando a entrega de serviços sob demanda.
>
> (  ) A Internet das coisas (em inglês, Internet of Things – IoT) é um conjunto de produtos, serviços e processos que virtualiza as coisas do mundo real para processamento digital.
>
> (  ) A computação em nuvem (em inglês, cloud computing) tem atenção crescente da indústria e da academia. No entanto, esse advento é o principal responsável por gerar uma quantidade massiva de dados, o que, por sua vez, impacta diretamente a infraestrutura da Internet.
>
> (  ) A Internet das coisas visa a prover soluções em termos de orçamento e de dimensionamento das infraestruturas de comunicação, viabilizando soluções eficientes e de baixo custo.
>
> (  ) Pode-se dizer que IoT e computação em nuvem são tecnologias complementares, pois enquanto a Internet das coisas gera uma quantidade de dados crescente e significativa (big data), a computação em nuvem provê diversos serviços que facilitam a transferência, o gerenciamento e a manipulação de dados pela Internet.
>
> Assinale a alternativa correta:
>
> **A.**  
> ​​​​​​​V – V – F – F – F.
>
> **B.**  
> F – V – V – F – V.
>
> **C.**  
> V – F – F – V – F.
>
> **D.**  
> F – V – V – F – V.
>
> **E.**  
> V – V – F – F – V.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E. V – V – F – F – V.**
>>
>> A sequência correta é **V – V – F – F – V**.
>>
>> **1ª afirmativa: Verdadeira.** A computação em nuvem faz parte dos sistemas distribuídos contemporâneos e permite a oferta de serviços sob demanda.
>>
>> **2ª afirmativa: Verdadeira.** A Internet das coisas conecta objetos do mundo real ao ambiente digital, permitindo coleta, comunicação e processamento de dados.
>>
>> **3ª afirmativa: Falsa.** Quem gera grande volume de dados, em geral, é a Internet das coisas. A computação em nuvem atua mais fortemente no armazenamento, gerenciamento e processamento desses dados.
>>
>> **4ª afirmativa: Falsa.** A descrição está mais relacionada à infraestrutura e ao suporte oferecido por soluções como a computação em nuvem, não ao objetivo principal da IoT.
>>
>> **5ª afirmativa: Verdadeira.** IoT e computação em nuvem são complementares: a IoT gera dados e a nuvem fornece serviços para transferir, armazenar, gerenciar e processar esses dados.
>>
>> **A. Errada.** A última afirmativa deveria ser verdadeira, e não falsa.
>>
>> **B. Errada.** A primeira afirmativa é verdadeira e a terceira é falsa; a sequência apresentada não corresponde à correta.
>>
>> **C. Errada.** A segunda afirmativa é verdadeira, a quarta é falsa e a quinta é verdadeira.
>>
>> **D. Errada.** Repete a mesma sequência da alternativa B, que está incorreta.
>>
>> **E. Correta.** Apresenta corretamente a sequência **V – V – F – F – V**.
>>
>> A computação em nuvem é uma das tecnologias atuais da geração de modelos físicos contemporâneos, viabilizando a entrega de serviços sob demanda. No entanto, o advento responsável por gerar uma quantidade massiva de dados é a Internet das coisas. Um dos principais objetivos da computação em nuvem é prover soluções em termos de orçamento e de dimensionamento das infraestruturas de comunicação, viabilizando soluções eficientes e de baixo custo. Sendo assim, as duas tecnologias são complementares, pois enquanto uma está diretamente relacionada a _big data_ (IoT), a outra (_cloud computing_) fornece serviços em diferentes camadas de sistemas para facilitar o gargalo gerado pelo aumento massivo e crescente de dados na Internet, caracterizado pela expressão _big data_.

# 5
> [!question] Exercício 5
> A camada de transporte é responsável por fornecer um transporte de mensagens entre os pares remetente e destino independentemente do tipo de rede empregado. Em outras palavras, nessa camada, as portas representadas por processos permitem a transmissão bidirecional de dados de um processo host de origem a um processo em um nodo de destino específico. A camada de transporte implementa um protocolo que permite o controle de fluxo e a soma de verificação de conteúdo.
>
> Qual é o nome desse protocolo?
>
> **A.**  
> Cliente/servidor.
>
> **B.**  
> IP.
>
> **C.**  
> UDP.
>
> **D.**  
> TCP.
>
> **E.**  
> Peer-to-peer.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D. TCP.**
>>
>> **A. Errada.** Cliente/servidor é um modelo de comunicação ou arquitetura, não um protocolo da camada de transporte.
>>
>> **B. Errada.** IP atua na camada de rede, sendo responsável pelo endereçamento e roteamento de pacotes, não pelo controle de fluxo na camada de transporte.
>>
>> **C. Errada.** UDP é um protocolo da camada de transporte, mas não oferece controle de fluxo como o TCP.
>>
>> **D. Correta.** O TCP é um protocolo da camada de transporte que permite comunicação confiável, controle de fluxo e verificação de conteúdo por soma de verificação.
>>
>> **E. Errada.** Peer-to-peer é um modelo de comunicação entre nós, não um protocolo específico da camada de transporte.
>>
>> O protocolo que permite o controle de fluxo e a soma de verificação é o TCP. O protocolo UDP não viabiliza uma entrega confiável de mensagens e o fim, o protocolo IP não faz parte da camada de transporte de redes de computadores. Cliente/Servidor e Peer-to-Peer são modelos arquiteturais de Sistemas Distribuídos.

