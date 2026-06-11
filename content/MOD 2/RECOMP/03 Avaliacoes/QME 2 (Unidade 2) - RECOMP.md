---
publish: true
---
# 1
> [!question] Exercício 1
> Sobre o modelo TCP/IP.
>
> É correto afirmar que:
>
> **A.**  
> O protocolo TCP/IP é configurado diretamente no hardware dos computadores, especificamente na placa mãe.
>
> **B.**  
> O protocolo TCP/IP é um conjunto de protocolos de comunicação, onde o nome vem de dois protocolos TCP (_Transmission Control Protocol_) e o IP (_Internet Protocol_), onde tem como principal objetivo padronizar as comunicações de rede como também comunicações feitas na WEB.
>
> **C.**  
> Protocolos de comunicação são configurados de forma automática pelas equipes técnicas em todos os dispositivos de rede e roteadores.
>
> **D.**  
> O protocolo menos utilizado na rede mundial de computadores é o TCP/IP.
>
> **E.**  
> O TCP/IP é o único protocolo de comunicação nas camadas de aplicação dos computadores e dispositivos móveis.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B**
>>
>> A alternativa **B** está correta porque o **TCP/IP** é um conjunto de protocolos de comunicação utilizado para padronizar a troca de dados em redes, especialmente na Internet. Seu nome vem de dois protocolos principais: **TCP**, responsável pelo controle da transmissão dos dados, e **IP**, responsável pelo endereçamento e encaminhamento dos pacotes.
>>
>> **A.** Errada. O TCP/IP não é configurado diretamente no hardware da placa-mãe; ele é configurado no sistema operacional e nos dispositivos de rede.
>>
>> **B.** Correta. Define adequadamente o TCP/IP como um conjunto de protocolos de comunicação usado para padronizar comunicações em rede e na Web.
>>
>> **C.** Errada. A configuração de protocolos pode ser automática em alguns casos, como via DHCP, mas não depende necessariamente de equipes técnicas nem ocorre da mesma forma em todos os dispositivos.
>>
>> **D.** Errada. O TCP/IP é um dos protocolos mais utilizados na rede mundial de computadores, sendo a base da Internet.
>>
>> **E.** Errada. O TCP/IP não é o único protocolo de comunicação e também não se limita à camada de aplicação; ele envolve diferentes camadas do modelo TCP/IP.


# 2
> [!question] Exercício 2
> Assinale a função que não abrange a camada de transporte.
>
> **A.**  
> Permite a capacidade da comunicação de múltiplas aplicações na rede simultaneamente por único aparelho.
>
> **B.**  
> A camada de transporte trabalha com a transferência fim a fim geral de dados de aplicação.
>
> **C.**  
> Emprega recursos de tratamento de erros.
>
> **D.**  
> É a camada mais próxima do usuário final e das funcionalidades aplicadas na Internet.
>
> **E.**  
> Garante que todos os dados sejam recebidos com confiança e ordenados pela aplicação certa.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D**
>>
>> A alternativa **D** está correta como resposta porque descreve uma característica da **camada de aplicação**, e não da **camada de transporte**. A camada de aplicação é a mais próxima do usuário final, pois envolve serviços e protocolos usados diretamente pelas aplicações, como navegação Web, e-mail e transferência de arquivos.
>>
>> **A.** Errada. Essa função pertence à camada de transporte, pois ela permite que várias aplicações se comuniquem simultaneamente por meio de portas, como ocorre com TCP e UDP.
>>
>> **B.** Errada. A transferência de dados de aplicação de ponta a ponta é uma função típica da camada de transporte.
>>
>> **C.** Errada. A camada de transporte pode empregar tratamento de erros, especialmente no protocolo TCP, que verifica perdas e retransmite dados quando necessário.
>>
>> **D.** Correta. Essa opção não corresponde à camada de transporte, mas sim à camada de aplicação, que fica mais próxima do usuário final.
>>
>> **E.** Errada. Essa função está relacionada ao TCP, que atua na camada de transporte e garante entrega confiável, ordenada e direcionada à aplicação correta.

# 3
> [!question] Exercício 3
> Os funcionários do departamento de vendas de uma determinada empresa usam um sistema denominado **sisvendas**. Neste sistema eles consultam, inserem e apagam informações constantemente.
>
> Em que camada de rede essa operação é realizada pelos usuários?
>
> **A.**  
> Camada de Rede
>
> **B.**  
> Camada Física
>
> **C.**  
> Camada de Aplicação
>
> **D.**  
> Camada de Enlace
>
> **E.**  
> Camada de Transporte
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C**
>>
>> A alternativa **C** está correta porque os usuários estão interagindo diretamente com um sistema, ou seja, com uma aplicação. A **camada de aplicação** é responsável por fornecer serviços de rede aos programas utilizados pelo usuário, como sistemas Web, e-mails, navegadores e softwares corporativos.
>>
>> **A.** Errada. A camada de rede trata do endereçamento e roteamento dos pacotes, como ocorre com o protocolo IP, não da interação direta do usuário com o sistema.
>>
>> **B.** Errada. A camada física está relacionada à transmissão dos sinais pelo meio físico, como cabos, conectores, placas de rede e sinais elétricos ou ópticos.
>>
>> **C.** Correta. A operação ocorre na camada de aplicação, pois os usuários consultam, inserem e apagam informações por meio do sistema **sisvendas**.
>>
>> **D.** Errada. A camada de enlace organiza a comunicação entre dispositivos em uma mesma rede local, trabalhando com quadros e endereços MAC.
>>
>> **E.** Errada. A camada de transporte cuida da comunicação fim a fim entre aplicações, usando protocolos como TCP e UDP, mas não representa a interface direta usada pelo usuário.


# 4
> [!question] Exercício 4
> "O TCP é orientado para conexão porque, antes que um processo de aplicação possa iniciar e enviar dados a outro, os dois processos precisam se 'apresentar', deve haver o envio de alguns segmentos preliminares um ao outro para estabelecer os parâmetros da transferência de dados. Como parte do estabelecimento da conexão TCP, ambos os lados da conexão iniciarão algumas variáveis de estado (KUROSE, 2013)."
>
> Assinale se a afirmação acima é Verdadeira ou Falsa.
>
> **A.**  
> Verdadeiro
>
> **B.**  
> Falso
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A — Verdadeiro**
>>
>> A afirmação está correta porque o **TCP** é um protocolo **orientado à conexão**. Antes da troca efetiva de dados, ocorre um processo de estabelecimento de conexão entre origem e destino, conhecido como **three-way handshake**, no qual os dispositivos trocam segmentos preliminares para iniciar a comunicação e definir parâmetros da conexão.
>>
>> **A.** Correta. O TCP realmente exige o estabelecimento prévio de uma conexão antes do envio dos dados, mantendo informações de estado nos dois lados da comunicação.
>>
>> **B.** Errada. A afirmação não é falsa, pois descreve corretamente o comportamento do TCP como protocolo orientado à conexão.


# 5
> [!question] Exercício 5
> Os modelos de rede definem tudo o que ocorre com as mensagens e informações tratadas pelos computadores e dispositivos com acesso à Internet. Para isso, uma organização internacional, a **ISO**, desenvolveu um modelo de referência chamado **OSI** (_Open Systems Interconnection_), de modo que os fabricantes de computadores pudessem padronizar os protocolos e a forma de comunicação entre os equipamentos.
>
> Assim, o modelo é composto pelas seguintes camadas:
>
> **A.**  
> Rede, Enlace de dados, Transporte, Aplicação e Sessão
>
> **B.**  
> Comunicação, Física, Conexão, Apresentação, Substituição
>
> **C.**  
> Rede, Hardware físico, Transporte, Aplicação e Apresentação
>
> **D.**  
> Física, Enlace de dados, Rede, Transporte, Sessão, Apresentação e Aplicação
>
> **E.**  
> Divisão, Rede, Transporte, Apresentação e Aplicação
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D**
>>
>> A alternativa **D** está correta porque apresenta as **sete camadas do modelo OSI** na ordem correta: **Física**, **Enlace de dados**, **Rede**, **Transporte**, **Sessão**, **Apresentação** e **Aplicação**. Esse modelo serve como referência para organizar e padronizar a comunicação entre sistemas em uma rede.
>>
>> **A.** Errada. Apresenta algumas camadas reais do modelo OSI, mas está incompleta, pois não inclui as sete camadas.
>>
>> **B.** Errada. Contém nomes que não fazem parte do modelo OSI, como comunicação, conexão e substituição.
>>
>> **C.** Errada. Usa o termo “hardware físico”, que não é o nome correto da camada. Além disso, a lista está incompleta.
>>
>> **D.** Correta. Apresenta corretamente as sete camadas do modelo OSI.
>>
>> **E.** Errada. Contém o termo “divisão”, que não é uma camada do modelo OSI, e também está incompleta.


# 6
> [!question] Exercício 6
> "Tem como finalidade detectar endereços IPs, dar suporte a uma tabela com os endereços referentes de algumas redes na Internet."
>
> A qual protocolo a afirmação se refere?
>
> **A.**  
> FTP
>
> **B.**  
> HTTP
>
> **C.**  
> TCP
>
> **D.**  
> SMTP
>
> **E.**  
> DNS
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E**
>>
>> A alternativa **E** está correta porque o **DNS** (_Domain Name System_) é responsável por relacionar nomes de domínio aos seus respectivos endereços IP. Ele funciona como uma espécie de “tabela de consulta” da Internet, permitindo que o usuário acesse um site pelo nome, como `exemplo.com`, sem precisar digitar diretamente o endereço IP.
>>
>> **A.** Errada. O **FTP** é usado para transferência de arquivos entre computadores em uma rede.
>>
>> **B.** Errada. O **HTTP** é usado para comunicação entre navegadores e servidores Web.
>>
>> **C.** Errada. O **TCP** é um protocolo da camada de transporte, responsável pela entrega confiável dos dados, mas não por localizar endereços IP a partir de nomes.
>>
>> **D.** Errada. O **SMTP** é usado para envio de mensagens de e-mail.
>>
>> **E.** Correta. O **DNS** associa nomes de domínio a endereços IP, facilitando a localização de recursos na Internet.


# 7
> [!question] Exercício 7
> Existe uma diferença pequena entre um socket UDP e um TCP: o socket TCP é detectado por uma tupla de quatro elementos.
>
> Assinale o elemento que não pertence à tupla.
>
> **A.**  
> Número da porta de destino.
>
> **B.**  
> Endereço IP do roteador intermediário.
>
> **C.**  
> Endereço IP de origem.
>
> **D.**  
> Endereço IP de destino.
>
> **E.**  
> Número da porta de origem.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B**
>>
>> A alternativa **B** está correta como resposta porque o endereço IP de um **roteador intermediário** não faz parte da tupla que identifica uma conexão TCP. Um socket TCP é identificado por quatro elementos: **endereço IP de origem**, **porta de origem**, **endereço IP de destino** e **porta de destino**.
>>
>> **A.** Errada. O número da porta de destino faz parte da tupla TCP.
>>
>> **B.** Correta. O endereço IP do roteador intermediário não faz parte da tupla TCP, pois roteadores apenas encaminham os pacotes no caminho da rede.
>>
>> **C.** Errada. O endereço IP de origem faz parte da tupla TCP.
>>
>> **D.** Errada. O endereço IP de destino faz parte da tupla TCP.
>>
>> **E.** Errada. O número da porta de origem faz parte da tupla TCP.


# 8
> [!question] Exercício 8
> O protocolo UDP está referenciado no **RFC 768**, que o define como um protocolo que faz tão pouco quanto um protocolo de camada de transporte pode fazer. Ele considera **multiplexação/demultiplexação** e **verificação de erros**, acrescentando poucos recursos ao IP.
>
> Qual característica **não** pertence ao UDP?
>
> **A.**  
> Serviço de "melhor esforço", segmentos UDP podem ser perdidos.
>
> **B.**  
> Realiza a entrega à aplicação sem levar em consideração a ordem.
>
> **C.**  
> Não existe apresentação antes de realizar o envio de um segmento entre o remetente e o receptor da camada de transporte.
>
> **D.**  
> É orientado a conexão.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D**
>>
>> A alternativa **D** está correta como resposta porque o **UDP não é orientado à conexão**. Diferentemente do TCP, o UDP não estabelece uma conexão antes de enviar os dados; ele simplesmente envia os segmentos, sem garantir entrega, ordem ou retransmissão.
>>
>> **A.** Errada. Essa característica pertence ao UDP, pois ele oferece serviço de “melhor esforço”, ou seja, os segmentos podem ser perdidos.
>>
>> **B.** Errada. Essa característica pertence ao UDP, pois ele não garante que os dados cheguem na mesma ordem em que foram enviados.
>>
>> **C.** Errada. Essa característica pertence ao UDP, pois não há uma etapa de apresentação ou estabelecimento de conexão antes do envio dos segmentos.
>>
>> **D.** Correta. Essa característica não pertence ao UDP, pois ele é um protocolo **não orientado à conexão**.


# 9
> [!question] Exercício 9
> Quantas são as camadas do Modelo ISO/OSI?
>
> **A.**  
> 3
>
> **B.**  
> 5
>
> **C.**  
> 4
>
> **D.**  
> 7
>
> **E.**  
> 6
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D**
>>
>> A alternativa **D** está correta porque o **Modelo ISO/OSI** é composto por **sete camadas**: Física, Enlace de Dados, Rede, Transporte, Sessão, Apresentação e Aplicação.
>>
>> **A.** Errada. O modelo OSI não possui 3 camadas.
>>
>> **B.** Errada. O modelo OSI não possui 5 camadas; alguns modelos simplificados de rede podem usar essa quantidade, mas não o OSI.
>>
>> **C.** Errada. O modelo OSI não possui 4 camadas; essa quantidade se aproxima mais do modelo TCP/IP em algumas classificações.
>>
>> **D.** Correta. O modelo ISO/OSI possui 7 camadas.
>>
>> **E.** Errada. O modelo OSI não possui 6 camadas.


# 10
> [!question] Exercício 10
> Assinale a alternativa que apresenta os protocolos da camada de transporte.
>
> **A.**  
> TCP e FTP
>
> **B.**  
> DNS e FTP
>
> **C.**  
> HTTP e SSL
>
> **D.**  
> TCP e UDP
>
> **E.**  
> BGP e RIP
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D**
>>
>> A alternativa **D** está correta porque os principais protocolos da **camada de transporte** são o **TCP** e o **UDP**. O TCP fornece comunicação confiável e orientada à conexão, enquanto o UDP realiza uma comunicação mais simples, sem estabelecimento de conexão e sem garantia de entrega.
>>
>> **A.** Errada. O **TCP** pertence à camada de transporte, mas o **FTP** pertence à camada de aplicação.
>>
>> **B.** Errada. **DNS** e **FTP** são protocolos da camada de aplicação, não da camada de transporte.
>>
>> **C.** Errada. **HTTP** pertence à camada de aplicação, e **SSL/TLS** está relacionado à segurança da comunicação, não sendo classificado como protocolo típico da camada de transporte.
>>
>> **D.** Correta. **TCP** e **UDP** são protocolos da camada de transporte.
>>
>> **E.** Errada. **BGP** e **RIP** são protocolos de roteamento, associados à troca de informações entre roteadores, não à camada de transporte.


