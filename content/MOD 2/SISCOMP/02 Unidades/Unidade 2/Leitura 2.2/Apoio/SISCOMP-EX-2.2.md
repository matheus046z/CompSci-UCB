---
publish: true
---
# Exercicios 2.2 - Tecnologia e Hierarquia de Memorias
# 1
> [!question] Exercício 1
> Na arquitetura de computadores, os diferentes tipos de memória desempenham funções específicas relacionadas ao armazenamento e à execução de dados e instruções. Algumas memórias têm acesso rápido e temporário, auxiliando diretamente o processador durante a execução dos programas, enquanto outras armazenam informações permanentes necessárias para o funcionamento básico do sistema computacional.
>
> Assinale a alternativa que apresenta, respectivamente, uma memória volátil utilizada durante a execução de programas e uma memória não volátil responsável pelo armazenamento de instruções de inicialização do sistema.
>
> **A.**  
> Memória cache e memória secundária.
>
> **B.**  
> Memória secundária e memória ROM.
>
> **C.**  
> Memória RAM e memória ROM.
>
> **D.**  
> Memória RAM e memória virtual.
>
> **E.**  
> Memória cache e memória virtual.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C. Memória RAM e memória ROM.**
>>
>> **A. Errada.** A memória cache é volátil e rápida, mas a memória secundária não é a principal responsável pelas instruções básicas de inicialização do sistema.  
>> **B. Errada.** A memória secundária é não volátil, mas não é a memória volátil usada diretamente durante a execução de programas.  
>> **C. Correta.** A memória RAM é volátil e usada durante a execução dos programas; a memória ROM é não volátil e armazena instruções básicas de inicialização.  
>> **D. Errada.** A RAM está correta, mas a memória virtual não é uma memória não volátil de inicialização; ela usa parte do armazenamento secundário para auxiliar a memória principal.  
>> **E. Errada.** A cache é volátil, mas a memória virtual não armazena permanentemente instruções de inicialização.
>>
>> A memória RAM é volátil e utilizada para armazenar temporariamente programas e dados em execução, enquanto a memória ROM é não volátil e armazena instruções essenciais para a inicialização do computador. A memória _cache_ tem função distinta da ROM, pois auxilia no acesso rápido aos dados utilizados pelo processador. Já a memória secundária é destinada ao armazenamento permanente de arquivos e dados do usuário, enquanto a memória virtual corresponde a um mecanismo de gerenciamento que utiliza parte do armazenamento secundário para auxiliar temporariamente a memória principal.

# 2
> [!question] Exercício 2
> Na arquitetura de computadores, a memória principal desempenha papel fundamental no desempenho do sistema operacional, dado que é responsável pelo armazenamento temporário de dados e instruções utilizadas pelos programas em execução. Para atender às diferentes necessidades relacionadas à velocidade, ao custo e à capacidade de armazenamento, os computadores utilizam diferentes tecnologias de memória RAM, cada uma com características específicas dentro da hierarquia de memória do sistema.
>
> Considerando as características e as aplicações das tecnologias de memória utilizadas em computadores, assinale a alternativa correta.
>
> **A.**  
> A memória DRAM apresenta maior velocidade de acesso porque independe de atualização constante dos dados, diferentemente da SRAM.
>
> **B.**  
> A memória SRAM tem maior velocidade de acesso, enquanto a DRAM tem menor custo por capacidade de armazenamento.
>
> **C.**  
> A memória DRAM é uma memória não volátil utilizada para armazenar instruções permanentes de inicialização do sistema.
>
> **D.**  
> A memória SRAM necessita de atualização constante dos dados armazenados, diferentemente da memória DRAM utilizada nos computadores atuais.
>
> **E.**  
> A memória DRAM em geral tem menor capacidade de armazenamento que a SRAM utilizada em sistemas computacionais.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B. A memória SRAM tem maior velocidade de acesso, enquanto a DRAM tem menor custo por capacidade de armazenamento.**
>>
>> **A. Errada.** A DRAM precisa de atualização constante dos dados e é mais lenta que a SRAM.  
>> **B. Correta.** A SRAM é mais rápida, sendo muito usada em cache; a DRAM é mais barata por capacidade e usada como memória principal.  
>> **C. Errada.** A DRAM é volátil, não sendo usada para armazenar permanentemente instruções de inicialização.  
>> **D. Errada.** Quem precisa de atualização constante é a DRAM, não a SRAM.  
>> **E. Errada.** A DRAM costuma permitir maior capacidade de armazenamento com menor custo em comparação à SRAM.
>>
>> A memória SRAM apresenta maior velocidade de acesso por não necessitar de atualização constante dos dados armazenados, diferentemente da DRAM. Entretanto, esta tem menor custo por capacidade de armazenamento e, por isso, é amplamente utilizada como memória principal. A ==SRAM é normalmente empregada em memórias _cache_==, enquanto a ROM é a responsável pelo armazenamento permanente das instruções de inicialização do sistema. Assim, não é correto atribuir à SRAM a necessidade de atualização constante, tampouco afirmar que a DRAM tem menor capacidade de armazenamento que a SRAM nos sistemas computacionais.

# 3
> [!question] Exercício 3
> O desempenho dos sistemas computacionais está relacionado à forma como programas e processadores acessam dados e instruções na memória. Em muitos casos, determinados padrões de acesso tornam possível otimizar o funcionamento das memórias e melhorar a velocidade de processamento.
>
> Sobre os tipos de localidade de referência utilizados na arquitetura de computadores, assinale a alternativa correta.
>
> **A.**  
> Localidade lógica, física e secundária.
>
> **B.**  
> Localidade temporal, espacial e sequencial.
>
> **C.**  
> Localidade temporal, cache e registradores.
>
> **D.**  
> Localidade espacial, virtual e principal.
>
> **E.**  
> Localidade sequencial, secundária e lógica.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B. Localidade temporal, espacial e sequencial.**
>>
>> **A. Errada.** Localidade lógica, física e secundária não representam a classificação típica da localidade de referência.  
>> **B. Correta.** A localidade temporal ocorre quando dados usados recentemente tendem a ser usados novamente; a espacial ocorre quando posições próximas são acessadas; a sequencial ocorre quando instruções ou dados são acessados em sequência.  
>> **C. Errada.** Cache e registradores são elementos da hierarquia de memória, não tipos de localidade de referência.  
>> **D. Errada.** Virtual e principal se referem a tipos ou formas de gerenciamento de memória, não a tipos de localidade.  
>> **E. Errada.** Localidade secundária e lógica não correspondem à classificação correta.
>>
>> A localidade temporal ocorre quando dados ou instruções acessadas tendem a ser reutilizadas em curto intervalo de tempo. A localidade espacial refere-se ao acesso a posições próximas da memória, enquanto a localidade sequencial está relacionada ao acesso contínuo e ordenado de instruções. Os demais termos apresentados correspondem a tipos de memória, componentes computacionais ou classificações que não representam tipos válidos de localidade de referência na arquitetura de computadores.

# 4
> [!question] Exercício 4
> Em sistemas computacionais, diferentes mecanismos podem ser utilizados para auxiliar no gerenciamento da memória durante a execução de programas e processos. Essas estratégias permitem que o sistema operacional organize melhor os recursos disponíveis, contribuindo para a continuidade das atividades executadas pelo computador.
>
> Sobre a memória virtual, assinale a alternativa correta.
>
> **A.**  
> A memória virtual utiliza parte do armazenamento secundário para ampliar a memória principal.
>
> **B.**  
> A memória virtual substitui diretamente a memória cache durante a execução dos processos.
>
> **C.**  
> A memória virtual armazena permanentemente as instruções de inicialização do sistema operacional.
>
> **D.**  
> A memória virtual corresponde ao armazenamento removível utilizado em dispositivos externos, como pen drives.
>
> **E.**  
> A memória virtual funciona como um serviço de armazenamento remoto em nuvem.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A. A memória virtual utiliza parte do armazenamento secundário para ampliar a memória principal.**
>>
>> **A. Correta.** A memória virtual usa parte do armazenamento secundário, como disco ou SSD, para simular uma ampliação da memória principal disponível.  
>> **B. Errada.** A memória virtual não substitui a cache; elas têm funções diferentes na hierarquia de memória.  
>> **C. Errada.** Instruções permanentes de inicialização são associadas à ROM, não à memória virtual.  
>> **D. Errada.** Pen drives são dispositivos de armazenamento removível, não memória virtual.  
>> **E. Errada.** Memória virtual não é armazenamento em nuvem; é um recurso local de gerenciamento de memória pelo sistema operacional.
>>
>> A memória virtual utiliza parte do armazenamento secundário, como HD ou SSD, para complementar temporariamente a memória principal quando a capacidade da RAM é insuficiente. Esse mecanismo auxilia na continuidade da execução dos processos, embora apresente desempenho inferior ao da memória principal. A memória virtual não substitui a memória _cache_, não armazena instruções permanentes de inicialização do sistema, não corresponde a dispositivos removíveis e também não funciona como serviço de armazenamento em nuvem.

# 5*
> [!question] Exercício 5
> Ao que se sabe acerca da funcionalidade da memória em sua hierarquia básica, a memória cache tem a função de reduzir o tempo de acesso aos dados mais utilizados pelo processador, o que acontece por meio do armazenamento de cópias de informações originadas da memória principal. Para que esses dados possam ser recuperados de maneira rápida e eficiente, é necessário estabelecer um mecanismo de associação, conhecido também como mapeamento, o que permite criar uma relação entre os endereços da memória principal e as posições disponíveis na memória cache.
>
> Nesse sentido, assinale a alternativa correta.
>
> **A.**  
> No mapeamento direto, qualquer bloco da memória principal pode ser armazenado em qualquer posição da cache.
>
> **B.**  
> Na cache totalmente associativa, cada bloco da memória principal pode ser armazenada em posição previamente fixada da cache.
>
> **C.**  
> Na cache associativa por conjunto, cada bloco da memória principal pode ser armazenado em qualquer conjunto da cache.
>
> **D.**  
> No mapeamento direto, cada bloco da memória principal é associado a uma posição específica na memória cache.
>
> **E.**  
> Na cache associativa por conjunto, todos os blocos são direcionados ao mesmo conjunto de armazenamento.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D. No mapeamento direto, cada bloco da memória principal é associado a uma posição específica na memória cache.**
>>
>> **A. Errada.** Essa descrição corresponde à cache totalmente associativa, não ao mapeamento direto.  
>> **B. Errada.** Na cache totalmente associativa, o bloco pode ser armazenado em qualquer posição da cache, não em posição fixa.  
>> **C. Errada.** Na cache associativa por conjunto, cada bloco é direcionado a um conjunto específico, podendo ocupar uma posição dentro desse conjunto.  
>> **D. Correta.** No mapeamento direto, cada bloco da memória principal possui uma posição específica possível na cache.  
>> **E. Errada.** Na cache associativa por conjunto, os blocos não vão todos para o mesmo conjunto; cada bloco é associado a um conjunto conforme o mapeamento.
>>
>> No mapeamento direto, cada bloco da memória principal é associado a uma posição específica na memória _cache_. Na _cache_ totalmente associativa, qualquer bloco pode ser armazenado em qualquer posição disponível, oferecendo maior flexibilidade de armazenamento. Já na _cache_ associativa por conjunto, os blocos são direcionados a conjuntos específicos e podem ocupar posições apenas dentro deles. Dessa forma, as demais afirmações apresentam definições incorretas sobre os mecanismos de mapeamento utilizados na memória _cache_.

