---
publish: true
---
# Exercícios 3.2 - Tipos de sistemas distribuídos
# 1
> [!question] Exercício 1
> Um cluster é composto por várias máquinas conectadas em uma rede de alta velocidade.
>
> Qual é o tipo de sistema distribuído a que ele pertence?
>
> **A.**  
> Sistemas pervasivos.
>
> **B.**  
> Sistemas corporativos.
>
> **C.**  
> Sistemas embarcados.
>
> **D.**  
> Sistemas de computação.
>
> **E.**  
> Sistemas heterogêneos.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D. Sistemas de computação.**
>>
>> **A. Errada.** Sistemas pervasivos envolvem dispositivos integrados ao ambiente, como sensores, dispositivos móveis e sistemas ubíquos, não clusters de computadores.
>>
>> **B. Errada.** Sistemas corporativos estão mais ligados a aplicações empresariais distribuídas, como sistemas de informação e bancos de dados organizacionais.
>>
>> **C. Errada.** Sistemas embarcados são sistemas computacionais dedicados a uma função específica dentro de outro equipamento.
>>
>> **D. Certa.** Um cluster reúne várias máquinas conectadas, normalmente por rede de alta velocidade, para executar tarefas computacionais de forma coordenada.
>>
>> **E. Errada.** Sistemas heterogêneos indicam diversidade de hardware, software ou redes, mas isso não define o tipo específico de sistema distribuído representado por um cluster.
>>
>>Os sistemas distribuídos podem ser classificados em três grandes grupos: sistemas de computação, sistemas corporativos e sistemas pervasivos. Os sistemas de computação distribuídos são usados para o processamento intensivo, como _cluster_ e grades computacionais. Sistemas pervasivos distribuídos são equipados de sistemas embarcados e móveis. Os sistemas distribuídos corporativos são compostos de ambientes heterogêneos na comunicação usuário-provedor, bem como construídos no modelo _publish_-_subscribe_.

# 2
> [!question] Exercício 2
> Uma equipe de engenheiros de software está criando um aplicativo para monitorar os sinais vitais de uma pessoa, usando uma rede de sensores.
>
> Qual das seguintes opções são preocupações que fazem parte desse projeto de sistema distribuído?
>
> **A.**  
> Perda de dados e transparência.
>
> **B.**  
> Segurança, transparência e privacidade.
>
> **C.**  
> Privacidade, perda de dados, segurança e envio de alertas.
>
> **D.**  
> Envio de alertas, transparência e perda de dados.
>
> **E.**  
> Transparência, envio de alertas e privacidade.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C. Privacidade, perda de dados, segurança e envio de alertas.**
>>
>> **A. Errada.** A perda de dados é uma preocupação, mas a alternativa está incompleta, pois não menciona segurança, privacidade e envio de alertas.
>>
>> **B. Errada.** Segurança e privacidade são preocupações importantes, mas a alternativa não inclui perda de dados nem envio de alertas.
>>
>> **C. Certa.** Em um sistema de monitoramento de sinais vitais, é essencial proteger os dados da pessoa, evitar perda de informações, garantir segurança e emitir alertas em situações críticas.
>>
>> **D. Errada.** Envio de alertas e perda de dados são preocupações, mas a alternativa não inclui privacidade e segurança.
>>
>> **E. Errada.** Privacidade e envio de alertas são relevantes, mas faltam segurança e perda de dados.
>>
>>Um sistema distribuído pervasivo que deseja monitorar os sinais vitais de uma pessoa deve se preocupar primordialmente em lidar com os desafios de perda dos dados, segurança, privacidade, envio de alertas, robustez no monitoramento e diagnóstico online. O médico precisa saber a localização do paciente e dos dispositivos, a fim de não comprometer uma vida com o diagnóstico para uma pessoa errada.


# 3
> [!question] Exercício 3
> Computação em nuvem é um exemplo real de sistemas distribuídos.
>
> Qual das seguintes alternativas contempla os modelos de implantação de nuvens computacionais?
>
> **A.**  
> Nuvem privada, nuvem pública, nuvem híbrida e nuvem comunitária.
>
> **B.**  
> Nuvem heterogênea e nuvem pública.
>
> **C.**  
> Nuvem heterogênea, nuvem pública, nuvem híbrida e nuvem comunitária.
>
> **D.**  
> Nuvem heterogênea e nuvem híbrida.
>
> **E.**  
> Nuvem comunitária, nuvem heterogênea e nuvem privada.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A. Nuvem privada, nuvem pública, nuvem híbrida e nuvem comunitária.**
>>
>> **A. Certa.** Esses são os principais modelos de implantação de computação em nuvem.
>>
>> **B. Errada.** A alternativa está incompleta e “nuvem heterogênea” não é um modelo clássico de implantação.
>>
>> **C. Errada.** Embora cite nuvem pública, híbrida e comunitária, inclui “nuvem heterogênea”, que não corresponde a um modelo de implantação tradicional.
>>
>> **D. Errada.** A alternativa está incompleta e também usa “nuvem heterogênea”, que não é modelo clássico de implantação.
>>
>> **E. Errada.** Cita nuvem comunitária e privada, mas está incompleta e inclui “nuvem heterogênea” de forma inadequada.
>>
>>Os modelos de implantação de nuvem definem como os recursos são compartilhados nesse ambiente. Os modelos de implantação propostos são nuvem privada, nuvem pública, nuvem híbrida e nuvem comunitária. Nuvem heterogênea é uma característica desse sistema distribuído.

# 4
> [!question] Exercício 4
> Em resumo, sistemas pervasivos distribuídos são constituídos por vários dispositivos com capacidade menor de processamento e pouca capacidade de armazenamento de energia.
>
> Qual das seguintes alternativas é uma característica incomum nesse tipo de sistema distribuído?
>
> **A.**  
> Heterogeneidade.
>
> **B.**  
> Tratamento de falhas.
>
> **C.**  
> Segurança.
>
> **D.**  
> Abstração.
>
> **E.**  
> Qualidade de serviço.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D. Abstração.**
>>
>> **A. Errada.** A heterogeneidade é comum em sistemas pervasivos, pois eles podem envolver diferentes sensores, dispositivos, redes e plataformas.
>>
>> **B. Errada.** O tratamento de falhas é importante, já que dispositivos com pouca energia ou conectividade instável podem falhar.
>>
>> **C. Errada.** Segurança é uma preocupação comum, principalmente porque esses sistemas podem lidar com dados sensíveis.
>>
>> **D. Certa.** A abstração não é uma característica típica específica dos sistemas pervasivos; ela é mais uma técnica ou objetivo geral para ocultar detalhes de implementação.
>>
>> **E. Errada.** Qualidade de serviço pode ser relevante, especialmente quando o sistema precisa garantir desempenho, disponibilidade ou envio adequado de informações.
>>
>> Sistemas pervasivos distribuídos têm uma grande variedade de dispositivos e sistemas operacionais (heterogeneidade). Mecanismos para recuperação de falhas e segurança são necessários, uma vez que os dispositivos se comunicam usando redes sem fio e estão geralmente conectados à Internet. Qualidade de serviço é uma preocupação na implementação desses sistemas, seja para garantir maior vida útil da bateria ou para evitar atrasos. Nesses ambientes, é preferível que as falhas e outros eventos não fiquem escondidos totalmente do usuário (abstração).

# 5
> [!question] Exercício 5
> A heterogeneidade está presente nas redes, hardwares, sistemas operacionais, linguagens de programação e códigos dos desenvolvedores.
>
> Qual das seguintes tecnologias é usada para abstrair a heterogeneidade no hardware em sistemas distribuídos?
>
> **A.**  
> RMI (Remote Method Invocation).
>
> **B.**  
> JVM (Java Virtual Machine).
>
> **C.**  
> CORBA (Common Object Request Broker Architecture).
>
> **D.**  
> RPC (Remote Procedure Call).
>
> **E.**  
> SOAP (Simple Object Access Protocol).
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B. JVM (Java Virtual Machine).**
>>
>> **A. Errada.** RMI permite invocação remota de métodos em Java, mas não é a principal tecnologia para abstrair diferenças de hardware.
>>
>> **B. Certa.** A JVM abstrai o hardware e o sistema operacional, permitindo que programas Java sejam executados em diferentes plataformas.
>>
>> **C. Errada.** CORBA ajuda na comunicação entre objetos distribuídos em ambientes heterogêneos, mas não atua especificamente como camada de abstração de hardware.
>>
>> **D. Errada.** RPC permite chamada de procedimentos remotos, mas não abstrai diretamente a heterogeneidade do hardware.
>>
>> **E. Errada.** SOAP é um protocolo de troca de mensagens baseado em XML, usado em serviços web, mas não é responsável por abstrair hardware.
>>
>> RMI, CORBA e RPC são _middlewares_ que simplificam a comunicação entre processos em diferentes plataformas. SOAP é um protocolo de comunicação entre diferentes sistemas na Web. JVM é uma máquina virtual que permite interpretar _bytecode_ e executar em diferentes _hardwares_ (ex.: celulares e computadores). Programas escritos em linguagens que geram _bytecode_ podem ser executados na JVM (ex.: Java, Scala e Groovy).