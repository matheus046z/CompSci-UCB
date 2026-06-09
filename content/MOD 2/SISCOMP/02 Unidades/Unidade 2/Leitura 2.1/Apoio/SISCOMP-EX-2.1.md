---
publish: true
---
# Exercicios 2.1 - Estrutura e funcionamento da CPU

# 1
> [!question] Exercício 1
> A CPU, por ser uma parte de grande importância e complexidade no computador, é formada por diversos componentes, e cada um deles possui uma função específica.
>
> Sobre esses componentes, é correto afirmar que:
>
> **A.**  
> os registradores são um tipo de memória que tem acesso mais fácil que a memória principal e capacidade de armazenamento maior que a memória cache.
>
> **B.**  
> os barramentos são estruturas utilizadas exclusivamente para conectar os componentes da CPU.
>
> **C.**  
> a unidade lógica e aritmética é a unidade que contém o raciocínio lógico do programa e, por isso, ordena as instruções que precisam ser executadas.
>
> **D.**  
> o barramento de dados é o barramento utilizado para armazenar os endereços de origem e destino dos dados.
>
> **E.**  
> a unidade de controle é uma espécie de gerente do computador, ela sequencia a execução das instruções e faz a leitura da memória principal.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> **A. Errada.** Os registradores realmente têm acesso mais rápido que a memória principal, mas sua capacidade de armazenamento é muito pequena, menor que a da memória cache.
>>
>> **B. Errada.** Os barramentos não conectam exclusivamente componentes da CPU; eles também interligam memória, dispositivos de entrada e saída e outros componentes do computador.
>>
>> **C. Errada.** A unidade lógica e aritmética, ou ULA, realiza operações lógicas e aritméticas, mas quem organiza e sequencia as instruções é a unidade de controle.
>>
>> **D. Errada.** O barramento de dados transporta dados. Quem trabalha com endereços de origem e destino é o barramento de endereços.
>>
>> **E. Certa.** A unidade de controle coordena a execução das instruções, controlando o fluxo de dados e acessos à memória principal.
>> 
>> A unidade de controle é uma espécie de gerente do computador, que sequencia a execução das instruções e faz a leitura da memória principal. A unidade lógica e aritmética não tem contato com a memória principal, dependendo da unidade de controle para receber e salvar dados na memória. Os registradores são um tipo de memória que tem acesso mais fácil que a memória principal e capacidade de armazenamento menor que a memória cache. Os barramentos são estruturas utilizadas para conectar os componentes da CPU ou conectar a CPU com outros periféricos. Por fim, o barramento de dados contém a informação real que deve ser movida de uma posição para outra.


# 2
> [!question] Exercício 2
> Entre os componentes que fazem parte da CPU de um computador estão os registradores, a memória principal e a unidade lógica e aritmética (ULA).
>
> Sobre esses componentes, analise as alternativas a seguir e assinale a correta:
>
> **A.**  
> A ULA efetua cálculos lógicos e aritméticos e armazena a resposta desses cálculos diretamente na memória principal.
>
> **B.**  
> Registradores são um tipo de memória. Entre suas funções está armazenar valores que serão enviados para a ULA.
>
> **C.**  
> É função da ULA buscar informações na memória principal para efetuar o processamento de cálculos aritméticos.
>
> **D.**  
> Os registradores podem ser do tipo dados, endereços, controle e entrada e saída.
>
> **E.**  
> Registradores do tipo dado armazenam os dados que serão enviados para a ULA.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> **A. Errada.** A ULA realiza operações lógicas e aritméticas, mas normalmente os resultados são enviados primeiro para registradores, não diretamente para a memória principal.
>>
>> **B. Certa.** Registradores são pequenas unidades de memória de acesso muito rápido, usadas para armazenar valores temporários, inclusive operandos que serão processados pela ULA.
>>
>> **C. Errada.** A ULA não busca dados diretamente na memória principal; ela opera sobre valores que chegam por meio dos registradores e dos caminhos internos do processador.
>>
>> **D. Errada.** A classificação apresentada mistura categorias. Registradores costumam ser classificados por funções como dados, endereços e controle, mas “entrada e saída” não é uma categoria geral típica de registradores da CPU.
>>
>> **E. Errada.** A afirmação é limitada demais, pois registradores de dados podem armazenar valores de entrada, resultados intermediários e resultados finais, não apenas dados que serão enviados para a ULA.
>>
>> Os registradores são um tipo de memória. Entre suas funções está armazenar valores que serão enviados para a ULA. A ULA efetua cálculos lógicos e aritméticos e armazena a resposta desses cálculos em um registrador. Essa unidade não busca dados na memória principal, quem faz esse papel é a unidade de controle. São exemplos de registradores especiais: registradores para armazenar informações, registradores para deslocar valores, registradores para comparar valores e registradores que contam.

# 3
> [!question] Exercício 3
> Assim como todos os componentes do computador, o barramento tem uma função de bastante destaque, sendo responsável por toda conexão entre os dispositivos do computador. Cada barramento possui uma função e um tipo específico. Dessa forma, é correto inferir que:
>
> **A.**  
> os barramentos que conectam a ULA, a unidade de controle, a porta serial e o modem são exemplos de barramentos de caminho comum.
>
> **B.**  
> um exemplo de barramento de E/S é a ligação do processador com a memória RAM, uma vez que a memória RAM é externa ao processador.
>
> **C.**  
> um exemplo de terminologia para a nomenclatura de barramento, que é utilizada apenas em computadores servidores, é barramento de expansão.
>
> **D.**  
> barramento local é o barramento que conecta dispositivos periféricos com a CPU.
>
> **E.**  
> barramento externo é aquele que é localizado na parte externa do computador, como, por exemplo, um cabo que leva imagem para o monitor.
>
>> [!question]- Resposta
>> 
>>  **Alternativa correta: D.**
>>  
>> **A. Errada.** Os barramentos que conectam diretamente componentes como ULA, unidade de controle, porta serial e modem são exemplos de barramentos ponto a ponto, pois fazem a ligação direta entre dispositivos.  
>>  
>> **B. Errada.** A ligação entre processador e memória RAM não é um exemplo de barramento de entrada e saída. Um exemplo de barramento de E/S seria a conexão de um dispositivo como um _pen drive_ ao computador.  
>>  
>> **C. Errada.** O barramento de expansão não é utilizado apenas em computadores servidores; ele é característico de computadores pessoais.  
>>  
>> **D. Certa.** O barramento local conecta dispositivos periféricos com a CPU, permitindo a comunicação entre esses componentes.  
>>  
>> **E. Errada.** Barramento externo não é considerado um tipo de barramento nesse contexto. O exemplo citado, como um cabo de vídeo para o monitor, não corresponde à classificação apresentada.
>> 
>>O barramento local conecta dispositivos periféricos com a CPU. Os barramentos que conectam a ULA, a unidade de controle, a porta serial e o modem são exemplos de barramentos ponto a ponto porque ligam um dispositivo diretamente a outro. Um exemplo de barramento de E/S é o uso de _pen drive_ no computador. O barramento de expansão é utilizado apenas em computadores pessoais. Por fim, o barramento externo não é um tipo de barramento.

# 4
> [!question] Exercício 4
> Quando foram lançados os processadores 386, percebeu-se que, embora o processador tivesse evoluído muito, os computadores ainda não tinham atingido a performance esperada. Para resolver esse problema, uma solução tecnológica foi encontrada.
>
> Que solução foi essa?
>
> **A.**  
> Aumentou-se o tamanho das memórias RAM dos computadores, fazendo com que se reduzisse o acesso à memória secundária.
>
> **B.**  
> Aumentou-se o tamanho da memória ROM, evitando a perda de dados importantes.
>
> **C.**  
> Incluíram-se novos registradores para que o acesso à memória RAM fosse reduzido.
>
> **D.**  
> Criou-se uma memória acoplada ao processador, que facilitou o acesso a informações que são usadas constantemente, reduzindo o acesso à memória RAM.
>
> **E.**  
> Criou-se uma memória acoplada ao processador, reduzindo o acesso à memória secundária.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D.**
>>
>> **A. Errada.** Aumentar a memória RAM pode melhorar o desempenho em alguns casos, mas a solução citada para reduzir o gargalo entre processador e memória foi a memória cache.
>>
>> **B. Errada.** A memória ROM não é usada para melhorar diretamente o desempenho do processamento, pois armazena instruções permanentes ou firmware.
>>
>> **C. Errada.** Registradores são importantes, mas a solução tecnológica destacada não foi simplesmente aumentar a quantidade de registradores.
>>
>> **D. Certa.** A memória cache foi criada/acoplada ao processador para armazenar dados e instruções usados com frequência, reduzindo acessos à memória RAM e melhorando o desempenho.
>>
>> **E. Errada.** A memória cache reduz principalmente o acesso à memória principal, isto é, à RAM, e não diretamente à memória secundária, como HD ou SSD.
>>
>> A solução tecnológica encontrada foi o uso de memória cache, que foi criada para facilitar o acesso a informações que são usadas constantemente, reduzindo o acesso à memória RAM.

# 5
> [!question] Exercício 5
> O processo executado pelo computador para a realização de uma operação lógica ou aritmética é chamado de caminho de dados. Considerando uma instrução do tipo registrador-registrador, analise as alternativas a seguir e assinale aquela que representa um caminho de dados possível:
>
> **A.**  
> Buscar operandos nos registradores; levar os operandos até a entrada da ULA; a ULA efetua alguma operação com esses operandos; o resultado é armazenado em um dos registradores.
>
> **B.**  
> Buscar operandos nos registradores; levar os operandos até a entrada da ULA; a ULA efetua alguma operação com esses operandos; o resultado é armazenado em um dos registradores e posteriormente na memória principal.
>
> **C.**  
> Buscar operandos na memória principal; levar os operandos até a entrada da ULA; a ULA efetua alguma operação com esses operandos; o resultado é armazenado em um dos registradores.
>
> **D.**  
> Buscar operandos na memória cache; levar os operandos até a entrada da ULA; a ULA efetua alguma operação com esses operandos; o resultado é armazenado em um dos registradores.
>
> **E.**  
> Buscar operandos nos registradores; levar os operandos até a entrada da ULA; a ULA efetua alguma operação com esses operandos; o resultado é armazenado em um dos registradores e posteriormente na memória cache.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A.**
>>
>> **A. Certa.** Em uma instrução registrador-registrador, os operandos são buscados nos registradores, processados pela ULA e o resultado retorna para um registrador.
>>
>> **B. Errada.** O armazenamento posterior na memória principal não faz parte do caminho básico de uma instrução registrador-registrador.
>>
>> **C. Errada.** A alternativa descreve busca de operandos na memória principal, o que não corresponde a uma instrução registrador-registrador.
>>
>> **D. Errada.** A memória cache pode participar do desempenho geral do sistema, mas a instrução registrador-registrador trabalha diretamente com operandos localizados nos registradores.
>>
>> **E. Errada.** A memória cache não é o destino direto do resultado nesse tipo de instrução; o resultado é armazenado em registrador.
>>
>> Um caminho válido para uma instrução do tipo registrador-registrador é: buscar operandos nos registradores; levar os operandos até a entrada da ULA; a ULA efetua alguma operação com esses operandos; e o resultado é armazenado em um dos registradores. Nesse tipo de instrução, não serão armazenados dados em cache nem em memória principal.
