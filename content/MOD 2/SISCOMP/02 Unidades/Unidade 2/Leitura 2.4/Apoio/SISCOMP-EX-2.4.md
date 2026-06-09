---
publish: true
---
# Exercicios 2.4 - Gerencia de hardware no Linux
# 1
> [!question] Exercício 1
> Os comandos de gerenciamento de hardware auxiliam no monitoramento e na atuação dos usuários em caso de problemas encontrados nos dispositivos. Em relação aos comandos lspci e lsusb, analise as afirmativas a seguir.
>
> I – O comando lsusb auxilia na análise da detecção de problemas encontrados nos drivers USB.
>
> II – A opção -v, utilizada juntamente com os comandos lspci e lsusb, exibe informações sobre os dispositivos.
>
> III – No Linux, o comando que mostra as informações que trafegam no barramento de controle da memória é o lspci.
>
> IV – Usando o comando lspci -k, são apresentados os módulos do kernel e dos drivers.
>
> Agora, assinale a alternativa que apresenta a resposta correta:
>
> **A.**  
> Apenas as afirmativas II e III estão corretas.
>
> **B.**  
> Apenas as afirmativas I e IV estão corretas.
>
> **C.**  
> Apenas as afirmativas III e IV estão corretas.
>
> **D.**  
> Apenas as afirmativas I, II e IV estão corretas.
>
> **E.**  
> As afirmativas I, II e III estão corretas.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D.**
>>
>> **A. Errada:** a afirmativa II está correta, mas a III está incorreta. O comando `lspci` mostra dispositivos conectados ao barramento PCI, não informações que trafegam no barramento de controle da memória.
>>
>> **B. Errada:** as afirmativas I e IV estão corretas, mas a alternativa deixa de incluir a afirmativa II, que também está correta.
>>
>> **C. Errada:** a afirmativa IV está correta, mas a III está incorreta.
>>
>> **D. Correta:** o `lsusb` ajuda a verificar dispositivos USB detectados, a opção `-v` exibe informações detalhadas e o comando `lspci -k` mostra drivers e módulos do kernel associados aos dispositivos PCI.
>>
>> **E. Errada:** inclui a afirmativa III, que está incorreta.
>>
>> O comando lsusb exibe as informações dos dispositivos USB (_Universal Serial Bus_) que trafegam no barramento USB. A opção -v mostra informações dos dispositivos e pode ser usada tanto pelo comando lspci quanto pelo comando lsusb. O comando lspci exibe os dispositivos que estão conectados ao Linux cujas informações trafegam no barramento PCI. A opção -k do comando lspci mostra informações sobre os módulos do kernel e dos _drivers_.

# 2
> [!question] Exercício 2
> O kernel é o responsável por gerenciar, identificar e iniciar os dispositivos do hardware. Além disso, disponibiliza uma interface simples para que as aplicações utilizem o hardware sem se preocupar em saber em qual slot a placa de vídeo está instalada.
>
> Considerando o contexto apresentado, avalie as seguintes asserções sobre o gerenciamento de hardware por meio do kernel.
>
> I – Os dispositivos de hardware são implementados por meio de módulos de núcleo carregáveis, ou seja, à medida que os dispositivos vão sendo requisitados, são carregados, e, ao finalizarem, são descarregados.
>
> PORQUE
>
> II – Os dispositivos com funções similares são agrupados em classes de dispositivos, como, por exemplo, um mouse pode ser inserido na classe de dispositivos de entrada.
>
> A respeito dessas asserções, assinale a opção correta:
>
> **A.**  
> As asserções I e II são proposições verdadeiras e a II é uma justificativa da I.
>
> **B.**  
> As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.
>
> **C.**  
> A asserção I é uma proposição verdadeira e a II é uma proposição falsa.
>
> **D.**  
> A asserção I é uma proposição falsa e a II é uma proposição verdadeira.
>
> **E.**  
> As asserções I e II são proposições falsas.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> **A. Errada:** as duas asserções são verdadeiras, mas a segunda não justifica a primeira. Agrupar dispositivos em classes não explica diretamente o carregamento de módulos do kernel.
>>
>> **B. Correta:** a asserção I está correta porque o Linux pode usar módulos carregáveis para drivers de dispositivos. A asserção II também está correta porque dispositivos semelhantes podem ser organizados em classes, como dispositivos de entrada. Porém, uma ideia não justifica a outra.
>>
>> **C. Errada:** a asserção II não é falsa; mouse, teclado e outros periféricos podem ser classificados como dispositivos de entrada.
>>
>> **D. Errada:** a asserção I é considerada verdadeira no contexto do gerenciamento de drivers por módulos carregáveis.
>>
>> **E. Errada:** as duas asserções não são falsas.
>>
>> As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.
>>
>> I – Asserção verdadeira, pois no Linux, quando um dispositivo é solicitado, ele é carregado para ser usado e em seguida é finalizado.
>>
>> II – Asserção verdadeira, pois para facilitar a organização dos dispositivos com funções parecidas, o Linux os organiza por meio de classes.

# 3
> [!question] Exercício 3
> O acesso direto à memória ou DMA (Direct Memory Access) permite a transmissão de dados entre os dispositivos de E/S (p. ex., como placa de rede e placa de som) e a memória sem a necessidade que a CPU realize essa função. Em relação ao DMA e ao comando cat proc/dma, analise as afirmativas a seguir.
>
> I – No Linux, sempre ocorre o compartilhamento de canais DMA entre os dispositivos para reaproveitamento de espaço.
>
> II – Os canais DMA de 0 a 3 realizam a transferência de dados a 16 bits e os canais de 4 a 7 realizam a transferência de dados a 8 bits.
>
> III –  O comando cat proc/dma exibe os canais DMA em uso no Linux.
>
> IV – Um conflito de DMA pode ocasionar no bloqueio de funções e até parar o sistema.
>
> Agora, assinale a alternativa que apresenta a resposta correta:
>
> **A.**  
> Apenas as afirmativas I, II e III estão corretas.
>
> **B.**  
> Apenas as afirmativas I, II e IV estão corretas.
>
> **C.**  
> Apenas as afirmativas II e III estão corretas.
>
> **D.**  
> Apenas as afirmativas III e IV estão corretas.
>
> **E.**  
> Apenas as afirmativas I e II estão corretas.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D.**
>>
>> **A. Errada:** inclui as afirmativas I e II, que estão incorretas.
>>
>> **B. Errada:** inclui as afirmativas I e II, que estão incorretas, embora a IV esteja correta.
>>
>> **C. Errada:** a afirmativa III está correta, mas a II está incorreta. A divisão dos canais DMA apresentada na afirmativa II está invertida.
>>
>> **D. Correta:** o comando `cat /proc/dma` exibe os canais DMA em uso no Linux, e conflitos de DMA podem causar falhas, bloqueios de funções e instabilidade no sistema.
>>
>> **E. Errada:** as afirmativas I e II estão incorretas. O compartilhamento de canais DMA não ocorre sempre, e a descrição dos canais de 8 e 16 bits está errada.
>>
>> Um canal DMA não pode ser dividido com outros dispositivos, mas, em algumas situações, pode ocorrer o compartilhamento desde que os canais não sejam utilizados simultaneamente. Existem oito canais DMA numerados de 0 a 7. A transferência de dados nos canais de 0 a 3 é realizada a 8 bits e nos de 4 a 7, a 16 bits. No Linux, para mostrar os canais DMA, é necessário usar o comando cat proc/dma. Caso ocorra um conflito de DMA, pode ocasionar o travamento do sistema.

# 4
> [!question] Exercício 4
> O comando disktype exibe o formato do disco ou a sua imagem, reconhecendo sistemas de arquivos comuns, tabelas de partição e códigos de inicialização. Em relação ao comando disktype usado no Linux, analise as afirmativas a seguir.
>
> I – Para acompanhar o disco ou a sua imagem, o comando disktype precisa ser instalado. Qualquer usuário do Linux consegue realizar a sua instalação.
>
> II – O comando disktype exibe as imagens de disco rígido e de CD não processadas suportadas pelo Linux.
>
> III – Os particionamentos aceitos pelo Linux, e exibidos pelo comando, são apenas os Estilo DOS / PC, discos físicos Linux LVM1 e LVM2.
>
> IV – A opção disktype /dev/sda exibe a partição de disco /dev/sda.
>
> Agora, assinale a alternativa que apresenta a resposta correta:
>
> **A.**  
> Apenas as afirmativas I, II e III estão corretas.
>
> **B.**  
> Apenas as afirmativas II e IV estão corretas.
>
> **C.**  
> Apenas as afirmativas II e III estão corretas.
>
> **D.**  
> Apenas as afirmativas I, III e IV estão corretas.
>
> **E.**  
> Apenas as afirmativas I e III estão corretas.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> **A. Errada:** inclui as afirmativas I e III, que estão incorretas.
>>
>> **B. Correta:** o `disktype` reconhece formatos de discos e imagens de disco, incluindo imagens brutas de disco rígido e CD. O comando `disktype /dev/sda` analisa o dispositivo informado. Tecnicamente, `/dev/sda` representa o disco inteiro; partições específicas normalmente aparecem como `/dev/sda1`, `/dev/sda2` etc.
>>
>> **C. Errada:** a afirmativa II está correta, mas a III está incorreta, pois o `disktype` não se limita apenas a particionamentos DOS/PC e LVM.
>>
>> **D. Errada:** inclui as afirmativas I e III, que estão incorretas.
>>
>> **E. Errada:** as afirmativas I e III estão incorretas. A instalação geralmente exige permissões administrativas, e o comando reconhece mais formatos do que os citados na afirmativa III.
>>
>> O comando disktype precisa ser instalado. Para instalar, é necessário usar o comando sudo apt install disktype e é necessário estar logado com o usuário _root_. As imagens de disco reconhecidas são imagem de CD não processada (.bin) e imagem de disco rígido do Virtual PC. Os formatos de particionamento reconhecidos pelo Linux são Estilo DOS / PC, Apple, RAID Linux, discos físicos, volumes físicos Linux LVM1, volumes físicos Linux LVM2, Solaris x86, entre outros. Para consultar uma partição, imagens de disco, entre outras opções, basta utilizar o comando disktype opção, como, por exemplo, para consultar a partição disktype /dev/sda.​​​​​​​

# 5
> [!question] Exercício 5
> O gerenciamento de hardware tem o objetivo de controlar o hardware oferecendo uma interface de chamada de sistema para as aplicações que executam no Linux. Considerando o contexto apresentado, avalie as seguintes asserções sobre o gerenciamento de hardware do Linux.
>
> I – As chamadas ao sistema só podem ser feitas por aplicações dos usuários, e o hardware precisa apenas liberar os recursos para essas aplicações.
>
> PORQUE
>
> II – Para que hardware e software se comuniquem, é preciso uma interface, que é usada pelas aplicações dos usuários para conseguir acessar os dispositivos de teclado, mouse, entre outros.
>
> A respeito dessas asserções, assinale a opção correta:
>
> **A.**  
> As asserções I e II são proposições verdadeiras e a II é uma justificativa da I.
>
> **B.**  
> As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.
>
> **C.**  
> A asserção I é uma proposição verdadeira e a II é uma proposição falsa.
>
> **D.**  
> A asserção I é uma proposição falsa e a II é uma proposição verdadeira.
>
> **E.**  
> As asserções I e II são proposições falsas.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D.**
>>
>> **A. Errada:** a asserção II é verdadeira, mas a I é falsa. O hardware não “libera recursos” diretamente para as aplicações; quem controla esse acesso é o sistema operacional.
>>
>> **B. Errada:** a asserção I não é verdadeira, portanto não é possível afirmar que ambas são verdadeiras.
>>
>> **C. Errada:** ocorre o inverso: a asserção I é falsa e a II é verdadeira.
>>
>> **D. Correta:** a asserção I é falsa porque o acesso ao hardware é mediado pelo kernel, não liberado diretamente às aplicações. A asserção II é verdadeira porque a comunicação entre software e hardware depende de interfaces controladas pelo sistema operacional, como chamadas de sistema e drivers.
>>
>> **E. Errada:** a asserção II é verdadeira, pois aplicações usam interfaces do sistema operacional para acessar dispositivos como teclado, mouse, disco e outros periféricos.
>>
>> A asserção I é uma proposição falsa e a II é uma proposição verdadeira.
>>
>> I – Asserção falsa, pois no caso do _hardware_, as chamadas ao sistema são solicitações para acesso aos recursos de máquina e permitirem que as aplicações do usuário criem e controlem arquivos e processos, por exemplo.
>>
>> II – Asserção verdadeira, pois as aplicações do usuário utilizam uma interface de _hardware_ para utilizar _mouse_, teclado, impressoras, memória, partições de disco, entre outros, para que exista uma comunicação entre _software_ e _hardware_.

