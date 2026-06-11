---
publish: true
---
# Exercícios 4.4 - Métricas de desempenho na programação paralela

# 1
> [!question] Exercício 1
> No processamento que acontece na programação paralela, os dados são gerados, armazenados e transmitidos na rede. Enquanto isso, o disco tem a responsabilidade de mover os dados para o processador que gerencia diferentes estágios. Para medir essa entrega são necessárias as métricas de desempenho. E para realizar a medição do desempenho de um sistema paralelo devem ser levados em conta alguns fatores e o comportamento de cada um.
>
> A respeito desses fatores, considere as seguintes afirmações e classifique-as em verdadeiras (V) ou falsas (F).
>
> ( ) Não é necessário o uso das métricas de desempenho em algumas situações, entretanto, em outras elas são rigorosas.
>
> ( ) Na medição do desempenho de um sistema paralelo, o tempo de execução não está condicionado ao tamanho da entrada de dados.
>
> ( ) A escalabilidade é a medida da capacidade do sistema paralelo de ampliar o número de processadores para envio dos dados.
>
> ( ) A escalabilidade apresenta, especialmente, a capacidade com que os recursos de processamento podem oferecer eficácia.
>
> Assinale a alternativa que contenha a sequência correta.
>
> **A.**  
> V – V – F – F.
>
> **B.**  
> V – F – F – V.
>
> **C.**  
> F – V – V – F.
>
> **D.**  
> F – F – V – V.
>
> **E.**  
> V – F – F – F.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> A sequência correta é **V – F – F – V**. As métricas de desempenho podem variar conforme a situação, mas são fundamentais quando se deseja avaliar rigorosamente o comportamento de sistemas paralelos. O tempo de execução depende do tamanho da entrada de dados, por isso a segunda afirmativa é falsa. A escalabilidade não se limita ao envio de dados, mas sim à capacidade de ampliar recursos de processamento de forma eficiente.
>>
>> **A. Incorreta.** Considera a segunda afirmativa verdadeira, mas o tempo de execução depende do tamanho da entrada.  
>> **B. Correta.** A sequência correta é V – F – F – V.  
>> **C. Incorreta.** Inverte a análise da primeira e da segunda afirmativas.  
>> **D. Incorreta.** Considera a primeira falsa e a terceira verdadeira, mas a terceira está mal definida.  
>> **E. Incorreta.** Considera a quarta afirmativa falsa, mas ela descreve corretamente a ideia de escalabilidade.
>>
>> Para medir o desempenho de um sistema paralelo, é preciso considerar diversos fatores e o comportamento de cada um deles, podendo ser uma tarefa complexa.
>>
>>A importância do uso de métricas de desempenho está condicionada à natureza do problema que necessita ser resolvido. Em algumas situações, as métricas de desempenho consideradas são bastante rigorosas, enquanto em outras elas podem não ser usadas.
>>
>>O tempo de execução em um sistema paralelo está condicionado ao tamanho da entrada de dados e à arquitetura do computador que está executando o paralelismo, considerando, principalmente, o número de processadores que compõe a estrutura.
>>
>>A escalabilidade diz respeito à medida da capacidade do sistema paralelo de aumentar o fator de aceleração em relação ao número de processadores disponíveis. Sendo que a escalabilidade mostra, em especial, a habilidade dos recursos de processamento entregarem eficácia.


# 2
> [!question] Exercício 2
> A medição de desempenho na programação paralela tem como objetivo mais importante examinar se algum aspecto da funcionalidade poderá influenciar de forma negativa na utilização dos recursos e na aplicabilidade dos sistemas e aplicações. Existem algumas etapas a serem seguidas para assegurar que a medição de desempenho aconteça corretamente.
>
> A respeito dessas etapas, escolha a alternativa correta.
>
> **A.**  
> Para efetuar a avaliação de desempenho na programação paralela, as características da funcionalidade do sistema ou da aplicação precisam ser levadas em conta.
>
> **B.**  
> A análise de dados na avaliação de desempenho de aplicações de programação paralela precisa considerar que os componentes nunca têm variações.
>
> **C.**  
> Sempre que utilizados os mesmos parâmetros, fatores e métricas em um experimento de análise de desempenho repetido, os resultados serão iguais.
>
> **D.**  
> Os parâmetros em uma avaliação de desempenho irão permanecer sempre os mesmos, apesar de não terem muita relação com a aplicação das métricas.
>
> **E.**  
> Os fatores representam sempre apenas um parâmetro, sendo que eles são utilizados somente quando é realizada a avaliação de desempenho em um só sistema.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A.**
>>
>> Para avaliar o desempenho de uma aplicação paralela, é necessário considerar as características da aplicação, da funcionalidade analisada, dos recursos utilizados e do ambiente de execução.
>>
>> **A. Correta.** A funcionalidade do sistema ou da aplicação influencia diretamente a avaliação de desempenho.  
>> **B. Incorreta.** Componentes podem variar em desempenho, carga, comunicação e uso de recursos.  
>> **C. Incorreta.** Mesmo com parâmetros semelhantes, os resultados podem variar por interferências do ambiente, carga do sistema e comunicação.  
>> **D. Incorreta.** Parâmetros estão diretamente relacionados às métricas e podem mudar conforme o experimento.  
>> **E. Incorreta.** Fatores podem envolver vários parâmetros e podem ser analisados em diferentes sistemas ou cenários.
>>
>> Para garantir que a medição de desempenho na programação paralela seja realizada da forma correta, podem ser adotadas algumas etapas para a avaliação de desempenho. Todo sistema ou aplicação pode ser avaliado conforme os dados que recebe ou que fornece, ou conforme as informações consumidas, considerando as particularidades de sua funcionalidade.  
>> 
>> Mesmo com o uso de parâmetros, fatores e métricas de análise de desempenho utilizados em um mesmo experimento, considerando a mudança da quantidade de dados processados e o uso de recursos computacionais, resultados diferentes podem ser esperados.  
>> 
>> Quando são analisados dados que resultam de um experimento com objetivo de analisar o desempenho de aplicações que usam a programação paralela, é preciso considerar que esses componentes podem ser aleatórios, pois ocorrerrem variações entre as vezes que o experimento é realizado, apesar dos fatores, dos parâmetros e das métricas utilizados serem os mesmos.  
>> 
>> Os parâmetros podem ser modificados durante a medição do desempenho, sendo as informações necessárias para caracterizar a maneira como as métricas serão aplicadas.  
>> 
>> Os fatores são as variações de um ou mais parâmetros, especialmente usados em casos em que mais de um sistema é analisado. Os parâmetros escolhidos para serem avaliados e a variação que podem sofrer estão associados aos fatores.

# 3
> [!question] Exercício 3
> São muitas as métricas de desempenho que podem ser usadas na programação paralela. Existem métricas para medir o desempenho de processadores e de aplicações. Entre as métricas para medir o desempenho de aplicações, pode-se citar a speedup e a redundância.
>
> A respeito das métricas speedup e redundância, analise as afirmativas.
>
> I. A speedup faz a medição do rácio entre a quantidade de operações feitas pela execução sequencial e pela paralela.
>
> II. A redundância realiza a medição do rácio entre o tempo de execução contínuo e o tempo de execução paralelo.
>
> III. A speedup pode ser usada para avaliar o efeito do desempenho após o melhoramento de recurso computacional.
>
> IV. A redundância mede o rácio entre a quantidade de operações efetuadas pela execução paralela e pela sequencial.
>
> Assinale a alternativa com as afirmativas corretas.
>
> **A.**  
> I, II e III.
>
> **B.**  
> II e III.
>
> **C.**  
> III e IV.
>
> **D.**  
> I, II e IV.
>
> **E.**  
> I e IV.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C.**
>>
>> A **speedup** mede o ganho de desempenho comparando o tempo de execução sequencial com o tempo de execução paralelo. Já a **redundância** mede a relação entre a quantidade de operações realizadas na execução paralela e na execução sequencial.
>>
>> **A. Incorreta.** Inclui I e II, que confundem os conceitos de speedup e redundância.  
>> **B. Incorreta.** A afirmativa II está incorreta, pois descreve speedup, não redundância.  
>> **C. Correta.** As afirmativas III e IV estão corretas.  
>> **D. Incorreta.** Inclui I e II, que estão incorretas.  
>> **E. Incorreta.** A afirmativa I está incorreta, pois speedup não mede quantidade de operações, mas relação de tempos.
>>
>> A _speedup_ (aceleração) é uma medida do grau de desempenho que realiza a medição do rácio ou da razão entre o tempo de execução sequencial e o tempo de execução em paralelo. A principal finalidade da _speedup_ é oferecer melhoria na velocidade de execução de uma tarefa executada em duas arquiteturas semelhantes, mas que usam recursos diferentes.
>> 
>> A métrica _speedup_ pode também ser usada para analisar o efeito do desempenho depois de algum aprimoramento de recurso computacional.
>> 
>> A redundância é a medida do grau de aumento da computação. Ela mede o rácio entre o número de operações realizadas pela execução paralela e pela sequencial.

# 4
> [!question] Exercício 4
> O comportamento de uma aplicação paralela pode ser medido por muitos fatores, como o comportamento do programa paralelo, por meio de cálculos para analisar as métricas de desempenho. Nas diversas situações e tratando de uma diversidade de problemas com a programação paralela, o programador pode usar as métricas para isolar parte do programa que necessita da implementação de alguma melhoria. A qualidade é uma das métricas utilizadas para medir o desempenho das aplicações.
>
> A respeito da qualidade, considere as seguintes afirmações e classifique-as em verdadeiras (V) ou falsas (F).
>
> ( ) A qualidade de um algoritmo paralelo é medida a partir da fração do tempo de atividade que os processadores apresentam.
>
> ( ) Um ponto a ser considerado é que, para realizar a medição da qualidade, um fator também utilizado é a escalabilidade.
>
> ( ) O cálculo para medir a qualidade das aplicações é fácil, já que analisa apenas a quantidade de processadores implementados.
>
> Assinale a alternativa que contenha a sequência correta.
>
> **A.**  
> V – V – V.
>
> **B.**  
> F – V – F.
>
> **C.**  
> V – F – V.
>
> **D.**  
> V – V – F.
>
> **E.**  
> F – F – V.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D.**
>>
>> A sequência correta é **V – V – F**. A qualidade mede o grau de importância e eficiência do uso da programação paralela. A qualidade de um algoritmo paralelo pode ser medida considerando a fração do tempo de atividade dos processadores. Além disso, a escalabilidade também é um fator importante, pois indica a capacidade do sistema de manter bom desempenho ao aumentar os recursos de processamento.
>>
>> A terceira afirmativa é falsa porque o cálculo da qualidade não é simples nem depende apenas da quantidade de processadores implementados. Ele considera a relação entre a aceleração obtida no processamento e o número de processadores utilizados para uma tarefa específica.
>> 
>> A qualidade mede o grau de importância de usar programação paralela, sendo que a qualidade de um algoritmo paralelo é medida levando em conta a fração do tempo de atividade que os processadores representam. Especialmente ao medir a qualidade, a escalabilidade (um dos fatores para medir a entrega dos recursos) também é usada.
>>
>>O cálculo da qualidade não é muito simples, pois leva em consideração a razão entre a aceleração no processamento e o número de processadores implementados para uma tarefa específica.


# 5
> [!question] Exercício 5
> Normalmente, o objetivo da análise de desempenho de uma aplicação é compreender como a aplicação comporta-se em relação a um referencial determinado. Para possibilitar essa análise poderão ser aplicadas diferentes leis, entre elas a Lei de Amdahl e a Lei de Gustafson-Barsis.
>
> A respeito dessas duas leis, analise as afirmativas.
>
> I. Para medir o desempenho de programas paralelos é muito utilizada a Lei de Amdahl como referência.
>
> II. A Lei de Amdahl surgiu, em especial, para repensar alguns conceitos trazidos pela Lei de Gustafson-Barsis.
>
> III. A teoria da Lei de Gustafson-Barsis oferece uma aceleração teórica na latência de execução de tarefas.
>
> IV. Uma das limitações da Lei de Amdahl é que ela desconsidera as operações ligadas à programação paralela.
>
> V. A Lei de Gustafson-Barsis recebeu esse nome depois da apresentação de um artigo feito por dois cientistas.
>
> Assinale a alternativa com as afirmativas corretas.
>
> **A.**  
> I, III e IV.
>
> **B.**  
> I e II.
>
> **C.**  
> III e V.
>
> **D.**  
> II, IV e V.
>
> **E.**  
> I, III e V.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> A Lei de Amdahl é uma referência clássica para analisar o desempenho de programas paralelos, especialmente considerando a parte sequencial que limita o ganho total. A Lei de Gustafson-Barsis propõe uma visão alternativa, considerando o aumento do tamanho do problema e oferecendo uma estimativa teórica de aceleração. Seu nome está associado aos pesquisadores que apresentaram essa abordagem.
>>
>> **A. Incorreta.** Inclui a afirmativa IV, que está incorreta, pois a limitação da Lei de Amdahl não é simplesmente desconsiderar operações paralelas.  
>> **B. Incorreta.** A afirmativa II está errada; a Lei de Amdahl é anterior à Lei de Gustafson-Barsis.  
>> **C. Incorreta.** Embora III e V estejam corretas, a afirmativa I também está correta.  
>> **D. Incorreta.** Inclui II e IV, que estão incorretas.  
>> **E. Correta.** As afirmativas I, III e V estão corretas.
>>
>> A Lei de Amdahl é geralmente utilizada como referência para medir o desempenho de programas paralelos. Por exemplo, quando é necessário medir as áreas serial (o processo de envio de dados um bit de cada vez) e paralela (o processo de envio de todos os bits de um símbolo de dados enviados juntos) da aplicação e comparar o _speedup_ com o modelo teórico.
>> 
>> A Lei de Amdahl tem algumas limitações, pois ignora o custo das operações de comunicação/sincronização associadas ao uso da programação paralela em aplicações.
>> 
>> A Lei de Gustafson (ou Gustafson-Barsis) surgiu especialmente para reavaliar alguns conceitos apresentados pela Lei de Amdahl. A teoria oferece uma aceleração teórica na latência de execução de tarefas em um tempo de execução fixo, o que pode ser esperado de um sistema que funciona por meio da utilização de recursos aprimorados.
>> 
>> A Lei de Gustafson-Barsis recebeu esse nome após o cientista John L. Gustafson e seu colega Edwin H. Barsis apresentarem um artigo em 1988, estimando a fração de aceleração (sem se beneficiar do paralelismo) alcançada, usando mais de um processador ao mesmo tempo para executar tarefas seriais.