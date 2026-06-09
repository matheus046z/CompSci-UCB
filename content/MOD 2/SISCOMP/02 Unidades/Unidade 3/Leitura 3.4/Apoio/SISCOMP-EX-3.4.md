---
publish: true
---
# Exercícios 3.4 - Sistemas operacionais embarcados de tempo real

# 1
> [!question] Exercício 1
> No que se refere aos sistemas embarcados de tempo real, pode-se classificá-los de acordo com suas características. Analise as afirmações a seguir e verifique quais são verdadeiras (V) e quais são falsas (F).
>
> ( ) Um RTOS do tipo soft não consegue atender a requisitos funcionais temporais rígidos.
>
> ( ) Sistemas do tipo hard têm implementações que garantem desempenho para atender demandas temporais.
>
> ( ) Um RTOS do tipo light é capaz de atender a requisitos funcionais temporais menos rígidos.
>
> ( ) Sistemas do tipo hard são capazes de realizar múltiplas atividades simultaneamente.
>
> Assinale a alternativa que apresenta a sequência correta.
>
> **A.**  
> V - V - F - F.
>
> **B.**  
> F - V - F - V.
>
> **C.**  
> V - F - F - F.
>
> **D.**  
> F - F - V - V.
>
> **E.**  
> F - F - F - V.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A.**
>>
>> A sequência correta é **V - V - F - F**.
>>
>> 1. **Verdadeira.** Um RTOS do tipo *soft* aceita atrasos ocasionais e, por isso, não é adequado para requisitos temporais rígidos.
>>
>> 2. **Verdadeira.** Sistemas *hard real-time* precisam garantir que as tarefas sejam executadas dentro de prazos estritos.
>>
>> 3. **Falsa.** A classificação mais comum para requisitos menos rígidos é *soft*, não *light*.
>>
>> 4. **Falsa.** Ser do tipo *hard* está relacionado à garantia de cumprimento de prazos, não necessariamente à execução de múltiplas atividades simultaneamente.
>>
>> - **A. Correta.** Apresenta exatamente a sequência **V - V - F - F**.
>> - **B. Incorreta.** Erra a primeira e a quarta afirmações.
>> - **C. Incorreta.** Erra a segunda afirmação, que é verdadeira.
>> - **D. Incorreta.** Erra a primeira, a segunda, a terceira e a quarta afirmações.
>> - **E. Incorreta.** Erra a primeira, a segunda e a quarta afirmações.
>>
>>Pode-se classificar os RTOS em duas categorias:
>>
>>_Soft_ (brandos) – conseguem atender a requisitos temporais pouco rígidos.
>>
>>_Hard_ (rígidos) – conseguem atender a aplicações que têm atividades de prazos críticos e, no geral, apesar de serem multitarefas, atendem prioritariamente às atividades mais importantes.

# 2
> [!question] Exercício 2
> Tratando-se de sistemas operacionais embarcados, eles são classificados como de uso geral (GPOS) e de tempo real (RTOS).
>
> Com relação às suas características, assinale a alternativa correta.
>
> **A.**  
> GPOS são desenvolvidos para funcionar em qualquer tipo de sistema, seja embarcado ou convencional.
>
> **B.**  
> GPOS são indicados por se preocuparem com diversos aspectos do SO, grande número de aplicações e suporte a entradas I/O.
>
> **C.**  
> RTOS são otimizados para funcionar em qualquer hardware.
>
> **D.**  
> Para se trabalhar com requisitos funcionais temporais, deve-se utilizar GPOS.
>
> **E.**  
> RTOS têm grandes restrições de pacotes em sua implementação.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> De modo geral, os sistemas operacionais embarcados são implementados para funcionar em *hardwares* embarcados e devem ser otimizados para cada *hardware* específico em que irão funcionar, independentemente de serem classificados como GPOS ou RTOS.
>>
>> - **A. Incorreta.** GPOS não são desenvolvidos para funcionar em qualquer tipo de sistema. Embora tenham uso mais amplo, eles não são necessariamente adequados para sistemas embarcados com restrições específicas.
>>
>> - **B. Incorreta.** GPOS realmente trabalham com grande variedade de aplicações e recursos do sistema operacional, mas não são feitos para atender a requisitos funcionais temporais rígidos.
>>
>> - **C. Incorreta.** RTOS não são otimizados para funcionar em qualquer hardware. Eles precisam ser ajustados ou escolhidos conforme o hardware embarcado específico.
>>
>> - **D. Incorreta.** Para trabalhar com requisitos funcionais temporais, especialmente quando há necessidade de previsibilidade e resposta dentro de prazos definidos, deve-se utilizar RTOS, não GPOS.
>>
>> - **E. Correta.** RTOS são implementados para serem leves e rápidos. Por isso, grande parte das funcionalidades é retirada, ficando a cargo dos projetistas instalar apenas os pacotes necessários para cada projeto.


# 3
> [!question] Exercício 3
> Sobre sistemas operacionais embarcados, existem diferenças de implementação em sistemas de uso geral e de tempo real. Analise as afirmações a seguir e verifique quais são verdadeiras (V) e quais são falsas (F).
>
> ( ) GPOS têm as mesmas funcionalidades que sistemas convencionais.
>
> ( ) O RTOS é o sistema menos restritivo, pois os processos devem sempre ser executados.
>
> ( ) Sistemas de tempo real têm um tempo de resposta maior que os GPOS.
>
> ( ) RTOS devem ter uma imagem grande, pois carregam muitas funções para acelerar seus processos.
>
> Assinale a alternativa que apresenta a sequência correta.
>
> **A.**  
> V - V - V - V.
>
> **B.**  
> V - F - V - F.
>
> **C.**  
> V - V - F - F.
>
> **D.**  
> F - F - F - V.
>
> **E.**  
> F - F - F - F.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> A sequência correta é **F - F - F - F**.
>>
>> 1. **Falsa.** Um sistema operacional embarcado é desenvolvido com menos funcionalidades que um sistema operacional convencional, pois precisa considerar restrições de hardware, memória, processamento e consumo.
>>
>> 2. **Falsa.** O RTOS não é o sistema menos restritivo. Pelo contrário, ele é mais restritivo que um GPOS, pois precisa limitar funcionalidades e priorizar processos que devem ser executados dentro de prazos definidos.
>>
>> 3. **Falsa.** Sistemas de tempo real não têm tempo de resposta maior que os GPOS. Em geral, eles têm tempo de resposta menor e mais previsível, justamente para atender aos requisitos temporais da aplicação.
>>
>> 4. **Falsa.** RTOS não devem ter uma imagem grande. Normalmente, possuem imagem pequena, com menos funções, para serem leves, rápidos e adequados às restrições dos sistemas embarcados.
>>
>> Um sistema operacional embarcado é desenvolvido com menos funcionalidades que um convencional, considerando sua restrição de _hardware_. Os RTOS são muito mais restritivos que os GPOS, já que precisam limitar as funcionalidades e liberar o processador para os processos mais prioritários; sendo assim, eles têm um tempo de resposta menor que um GPOS. Por fim, o RTOS tem uma imagem pequena, por conter um número menor de funções.

# 4
> [!question] Exercício 4
> Os sistemas operacionais embarcados estão cada vez mais no cotidiano. Mais aplicações estão utilizando RTOS em suas implementações, a fim de deixar os sistemas mais robustos. Em quais das aplicações a seguir os RTOS são mais indicados?
>
> I – Micro-ondas.
>
> II – Controle de tráfego aéreo.
>
> III – Maca inteligente.
>
> IV – Relógio de pulso.
>
> Assinale a alternativa indica as assertivas verdadeiras.
>
> **A.**  
> I e II.
>
> **B.**  
> I e III.
>
> **C.**  
> II e III.
>
> **D.**  
> II, III e IV.
>
> **E.**  
> I, II, III e IV.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C.**
>>
>> As aplicações em que RTOS são mais indicados são **II e III**.
>>
>> - **I – Micro-ondas. Incorreta.** Embora seja um sistema embarcado, normalmente não exige um RTOS robusto, pois suas tarefas são mais simples e menos críticas.
>>
>> - **II – Controle de tráfego aéreo. Correta.** É uma aplicação crítica, com exigência de resposta previsível e cumprimento rigoroso de prazos.
>>
>> - **III – Maca inteligente. Correta.** Por estar relacionada a monitoramento e resposta em contexto médico, pode exigir confiabilidade e atendimento a requisitos temporais.
>>
>> - **IV – Relógio de pulso. Incorreta.** É um sistema embarcado, mas geralmente não exige RTOS, salvo em versões muito específicas e complexas.
>>
>> As aplicações de controle de tráfego aéreo e maca inteligente requerem um controle muito grande da gestão do tempo, pois, em ambas as situações, lida-se com vidas. Já o micro-ondas e o relógio de pulso não apresentam problemas caso algumas de suas ações perca o prazo de entrega.


# 5
> [!question] Exercício 5
> Um sistema é desenvolvido com o intuito de prover funções e serviços pré-programados aos projetistas, para serem utilizados em seus projetos. Dessa forma, os desenvolvedores conseguem se concentrar no desenvolvimento das funções específicas da aplicação, sem se preocuparem demasiadamente com o gerenciamento do sistema. Identifique nas assertivas a seguir elementos que justifiquem o uso de sistemas operacionais embarcados em detrimento de sistemas puramente desenvolvidos pelos projetistas.
>
> I - Grande quantidade de funcionalidades.
>
> II – Confiabilidade no sistema.
>
> III – Fácil implementação.
>
> IV – Baixo custo.
>
> Assinale a alternativa que indica as assertivas verdadeiras.
>
> **A.**  
> I e II.
>
> **B.**  
> II e IV.
>
> **C.**  
> I, II e IV.
>
> **D.**  
> II, III e IV.
>
> **E.**  
> I, II, III e IV.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> Todas as assertivas estão corretas: **I, II, III e IV**.
>>
>> - **I – Grande quantidade de funcionalidades. Correta.** Sistemas operacionais embarcados oferecem funções prontas, como gerenciamento de tarefas, memória, comunicação e dispositivos.
>>
>> - **II – Confiabilidade no sistema. Correta.** O uso de um sistema operacional já testado pode aumentar a confiabilidade em relação a uma implementação totalmente manual.
>>
>> - **III – Fácil implementação. Correta.** O projetista pode aproveitar recursos prontos e se concentrar nas funções específicas da aplicação.
>>
>> - **IV – Baixo custo. Correta.** A reutilização de recursos prontos pode reduzir tempo de desenvolvimento, retrabalho e custos do projeto.
>>
>> Considerando que o projetista tenha que desenvolver, além das funcionalidades específicas da aplicação, toda a gerência do sistema, o projeto ficará mais custoso, por conta da quantidade de horas para o desenvolvimento. Ainda, tem-se que levar em consideração que essa é uma tarefa complexa e, além disso, a equipe não conseguirá desenvolver numerosas funcionalidades em tempo hábil. Portanto, a adoção de um sistema operacional se mostra de fácil implementação e de alta confiabilidade, já que diversos programadores utilizam esses sistemas operacionais, tornando possível a identificação e correção dos _bugs_ encontrados e contando com sugestões de melhoria.

