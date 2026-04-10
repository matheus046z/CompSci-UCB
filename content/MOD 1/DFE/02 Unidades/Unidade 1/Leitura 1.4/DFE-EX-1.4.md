---
publish: true
---

> [!question] Exercício 1
> Em relação à formulários web, marque a alternativa correta:
>
> **A.**  
> São usados apenas para padronizar a apresentação de dados na tela do usuário.
>
> **B.**  
> Processam a informação para enviar resposta ao servidor web.
>
> **C.**  
> Agrupam campos com o objetivo de coletar ou apresentar dados.
>
> **D.**  
> Não permitem interação entre o navegador do usuário e o servidor web.
>
> **E.**  
> A validação de campos com HTML5 é realizada no servidor web.
>
>> [!question]- Resposta
>> **C.**  
>> Agrupam campos com o objetivo de coletar ou apresentar dados.
>> 
>> Formulários _web_ agrupam campos para coletar e apresentar dados de forma padronizada, com o objetivo de prover interação entre a página e um servidor _web,_ que é responsável por processar e enviar a resposta de volta ao usuário. A validação de campos com HTML5 é realizada no navegador do usuário.


> [!question] Exercício 2
> A interação entre o navegador do usuário e o servidor web, por meio de um formulário HTML, é realizada por operações denominadas, respectivamente, por:
>
> **A.**  
> impressão e leitura.
>
> **B.**  
> leitura e impressão.
>
> **C.**  
> resposta e solicitação.
>
> **D.**  
> solicitação e resposta.
>
> **E.**  
> leitura e resposta.
>
>> [!question]- Resposta
>> **D.**  
>> solicitação e resposta.
>> Uma página _web_, carregada no navegador do usuário, interage com um servidor de aplicação _web_ por meio de duas operações denominadas solicitação e resposta. A solicitação é realizada pela submissão de dados de um formulário pelo navegador e a resposta pelo envio desses dados pelo servidor, após determinado processamento.

> [!question] Exercício 3
> Selecione a opção que especifica o método de envio de dados de um formulário HTML, cujos valores são passados de forma aberta, podendo ser vistos pelo usuário da aplicação:
>
> **A.**  
> FTP.
>
> **B.**  
> Post.
>
> **C.**  
> HTTP.
>
> **D.**  
> Get.
>
> **E.**  
> URL.
>
>> [!question]- Resposta
>> **D.**  
>> Get.
>>O método _get_, de um formulário HTML anexa os dados ao endereço URL da página de resposta, mostrando-os abertamente na barra de endereço do navegador do usuário. Já o método _post_ envia os dados de forma invisível para o usuário. FTP, HTTP e URL não são métodos de envio de dados de formulários HTML.

> [!question] Exercício 4
> Marque a alternativa que indica um campo de formulário invisível do elemento "input", ou seja, que existe no formulário HTML, mas que não é visível para o usuário da página web.
>
> **A.**  
> Invisible.
>
> **B.**  
> Unseen.
>
> **C.**  
> Secret.
>
> **D.**  
> Occult.
>
> **E.**  
> Hidden.
>
>> [!question]- Resposta
>> **E.**  
>> Hidden.
>> O elemento `<input type=“hidden”>` cria um campo de formulário oculto que não pode ser visto pelo usuário, mas que envia os dados que foram atribuídos a ele quando o usuário submete a página. Os demais itens não correspondem a atributos do elemento `<input>`.

> [!question] Exercício 5
> Indique a alternativa que apresenta corretamente a máscara para validação de formato número de CPF com HTML5:
>
> **A.**  
> `<input type="text" pattern="\d{3}.\d{3}.\d{3}-\d{2}$" />`
> 
> **B.**  
> `<input type="text" enctype="\d{3}.\d{3}.\d{3}-\d{2}$" />`
>
> **C.**  
> `<input type="text" required="\n{3}\n{3}\n{3}\n{2}$" />`
>
> **D.**  
> `<input type="text" pattern="\n{3}\n{3}\n{3}\n{2}$" />`
>
> **E.**  
> `<input type="text" enctype="\n{3}\n{3}\n{3}\n{2}$" />`
>
>> [!question]- Resposta
>> **A.** 
>> `<input type="text" pattern="\d{3}.\d{3}.\d{3}-\d{2}$" />`
