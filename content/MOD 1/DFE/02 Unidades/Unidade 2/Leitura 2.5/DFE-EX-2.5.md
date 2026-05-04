---
publish: true
---
### 1
> [!question] Exercício 1
> O modelo de objeto do navegador (BOM) tem características comuns entre navegadores.
>
> Qual é o padrão utilizado?
>
> **A.**  
> ECMAScript
>
> **B.**  
> HTTP
>
> **C.**  
> HTML
>
> **D.**  
> JSON
>
> **E.**  
> Nenhum
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> **A.** Errada. ECMAScript padroniza a linguagem JavaScript, mas não define formalmente o BOM.
>>
>> **B.** Errada. HTTP é um protocolo de comunicação da web, não um padrão do BOM.
>>
>> **C.** Errada. HTML é uma linguagem de marcação para estruturar páginas, não um padrão para o BOM.
>>
>> **D.** Errada. JSON é um formato de troca de dados, sem relação com a padronização do BOM.
>>
>> **E.** Certa. O BOM não possui um padrão formal único adotado como ocorre com outras tecnologias da web; ele surgiu com implementações dos navegadores, embora várias de suas partes sejam comuns entre eles.

### 2
> [!question] Exercício 2
> O objeto que tem métodos e propriedades que manipulam a posição da janela na tela é:
>
> **A.**  
> `window.document`
>
> **B.**  
> `location`
>
> **C.**  
> `screen`
>
> **D.**  
> `window.location`
>
> **E.**  
> `navigator`
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C.**
>>
>> **A.** Errada. `window.document` representa o documento HTML carregado na janela, sendo usado para acessar e manipular os elementos da página, e não a posição da janela na tela.
>>
>> **B.** Errada. `location` é o objeto relacionado ao endereço URL da página, permitindo redirecionamentos e leitura da localização atual.
>>
>> **C.** Certa. `screen` é o objeto ligado às informações da tela do usuário, como largura e altura, sendo a alternativa mais relacionada ao posicionamento da janela na tela dentro do contexto do BOM.
>>
>> **D.** Errada. `window.location` também se refere ao endereço da página, com a mesma finalidade de `location`, não ao posicionamento da janela.
>>
>> **E.** Errada. `navigator` fornece informações sobre o navegador, como nome, versão e recursos disponíveis, mas não controla a posição da janela.
>>
>> > [!warning] Atenção
>> > A questão está um pouco imprecisa. Em JavaScript, quem efetivamente possui métodos como `moveTo()` e `moveBy()` para mover a janela é o objeto `window`. Como ele não aparece nas alternativas, a banca provavelmente espera `screen` como resposta.
>>
>>_Document_ controla a página acessada.
>>
>>_Location_ manipula o endereço vinculado à página acessada.
>>
>>_Screen_ controla as dimensões e posição da janela em relação à tela.
>>
>>_Navigator_ dá acesso à geolocalização, à versão, ao protocolo, ao nome e à porta usada pelo aplicativo.

### 3
> [!question] Exercício 3
> É possível enviar parâmetros para uma página através do objeto `location` diretamente pelo link da página acrescido.
>
> Assinale o código que exibe o parâmetro passado pelo link: `http://www.sagah.com.br/index.html#teste`
>
> **A.**  
> ```javascript
> const resultado = window.location.hash
> let valor = 0;
> const splitted = resultado.split('#')
> if (splitted[0] === '?valor')        
> {
>     valor = splitted[1]
> }
>
> console.log(valor)
> ```
>
> **B.**  
> ```javascript
> const resultado = window.location.search
> let valor = '';
> const splitted = resultado.split('=')
> if (splitted[0] === '?valor')        
> {
>     valor = splitted[1]
> }
>
> console.log(valor)
> ```
>
> **C.**  
> ```javascript
> const resultado = window.location.search
> let valor = '';
> const splitted = resultado.split()
> if (splitted[0] === '?valor')        
> {
>     valor = splitted[1]
> }
>
> console.log(valor)
> ```
>
> **D.**  
> ```javascript
> const resultado = window.location.hash
>
> console.log(resultado)
> ```
>
> **E.**  
> ```javascript
> const resultado = window.location.hash
> let valor = '';
> const splitted = resultado.split('=')
> if (splitted[0] === '?valor')        
> {
>     valor = splitted[1]
> }
>
> console.log(valor)
> ```
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D.**
>>
>> **A.** Errada. `window.location.hash` realmente acessa a parte `#teste`, mas a lógica está incorreta: ao fazer `split('#')`, o primeiro item será uma string vazia, não `?valor`. Assim, a condição nunca será atendida.
>>
>> **B.** Errada. `window.location.search` lê parâmetros da query string, isto é, a parte após `?`, e não a parte após `#`. Como a URL usa `#teste`, esse código não captura o valor desejado.
>>
>> **C.** Errada. Além de usar `window.location.search`, que já não serve para `#teste`, o método `split()` sem separador não faz a separação esperada para extrair parâmetro algum.
>>
>> **D.** Certa. `window.location.hash` retorna exatamente a parte fragmentada da URL, ou seja, `#teste`. Como a questão pede o código que exibe o parâmetro passado pelo link, essa é a opção correta.
>>
>> **E.** Errada. Embora use `window.location.hash`, o código tenta separar o valor com `=`, mas a URL informada não possui esse formato. Ela contém apenas `#teste`, então essa lógica não funciona.
>>
>>Não existe o texto _?valor_ no endereço especificado.
>>
>>A propriedade _search_ não retorna os parâmetros de _#_ e sim os _?_.
>>
>>A função _split_ requer ao menos um caractere para funcionar.

### 4
> [!question] Exercício 4
> Os temporizadores também são acessados pelo objeto `window`, sendo os principais `setInterval` e `setTimeout`.
>
> Determine o algoritmo que apresenta no console o tempo decorrido em um contador hora-minuto-segundo:
>
> **A.**  
> ```javascript
> const hor = 0
> const min = 0
> const seg = 0
> function segundo() {
>     if (seg < 59)
>     {
>         seg++
>     }
>     else
>     {
>         seg = 0
>         if (min < 59)
>         {
>             min++
>         }
>         else
>         {
>             min = 0
>             hor++
>         }
>     }
>     console.log(`${hor}:${min}:${seg}`)
> }
>
> setInterval(segundo, 1000)
> ```
>
> **B.**  
> ```javascript
> const hor = 0
> const min = 0
> const seg = 0
> function segundo() {
>     if (seg < 59)
>     {
>         seg++
>     }
>     else
>     {
>         seg = 0
>         if (min < 59)
>         {
>             min++
>         }
>         else
>         {
>             min = 0
>             hor++
>         }
>     }
>     console.log(`${hor}:${min}:${seg}`)
> }
>
> setInterval(segundo(), 1000)
> ```
>
> **C.**  
> ```javascript
> const hor = 0
> const min = 0
> const seg = 0
> function segundo() {
>     if (seg < 60)
>     {
>         seg++
>     }
>     else
>     {
>         seg = 0
>         if (min < 60)
>         {
>             min++
>         }
>         else
>         {
>             min = 0
>             hor++
>         }
>     }
>     console.log(`${hor}:${min}:${seg}`)
> }
>
> setInterval(segundo, 1000)
> ```
>
> **D.**  
> ```javascript
> const hor = 0
> const min = 0
> const seg = 0
> function segundo() {
>     if (seg < 60)
>     {
>         seg++
>     }
>     else
>     {
>         seg = 0
>         if (min < 60)
>         {
>             min++
>         }
>         else
>         {
>             min = 0
>             hor++
>         }
>     }
>     console.log(`${hor}:${min}:${seg}`)
> }
>
> setInterval(segundo, 1)
> ```
>
> **E.**  
> ```javascript
> let seg = 0
> function segundo() {
>     seg++
> }
> console.log(`${seg/3600}:${seg/60}:${seg}`)
> }
>
> setInterval(segundo, 1000)
> ```
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A.**
>>
>> **A.** Certa. É a alternativa que melhor representa a lógica de um contador `hora:minuto:segundo`: incrementa os segundos até 59, zera e incrementa minutos, e depois horas. Além disso, usa `setInterval(segundo, 1000)`, chamando a função a cada 1 segundo.
>>
>> **B.** Errada. `setInterval(segundo(), 1000)` está incorreto porque executa a função imediatamente e passa seu resultado ao `setInterval`, em vez de agendar a própria função.
>>
>> **C.** Errada. A lógica está incorreta ao usar `seg < 60` e `min < 60`, o que permite chegar a 60 antes de reiniciar. Em um relógio, segundos e minutos vão de 0 a 59.
>>
>> **D.** Errada. Além de repetir o erro de usar 60 como limite, o intervalo foi definido como `1`, ou seja, 1 milissegundo, e não 1 segundo.
>>
>> **E.** Errada. O código está com problema de estrutura, não monta corretamente um contador de horas, minutos e segundos e ainda apresenta erro de chaves.
>>
>> > [!warning] Atenção
>> > Há uma inconsistência técnica nas alternativas **A**, **B**, **C** e **D**: nelas, `hor`, `min` e `seg` foram declaradas com `const`, mas depois são alteradas com `++` e atribuições. Em JavaScript, isso exigiria `let`. Mesmo assim, **considerando a lógica pretendida pela questão**, a resposta esperada é a **A**.
>>
>>Segundo deve estar limitado a 59 e começar em 0. O mesmo se aplica para minuto.  
O _setInterval_ chama a função segundo após 1s e repete isso constantemente; o tempo é passado em milissegundos e a função é como variável e não como função.  
O sistema correto conta os segundos a partir de um temporizador periódico configurado para contar 1s e incrementar as variáveis _seg_, _min_ e _hor_ sempre que o anterior tiver atingido seu máximo.

### 5
> [!question] Exercício 5
> Não há nenhum método ou nenhuma função que remova um cookie, mas é possível alterar atributos para que ele seja eliminado.
>
> Determine qual dos códigos a seguir cumpre a função de excluir um cookie.
>
> **A.**  
> `window.document.cookie = 'nome=valor'`
>
> **B.**  
> `window.document.cookie = 'delete nome=valor'`
>
> **C.**  
> `window.document.cookie = 'nome=valor, max-age = 0'`
>
> **D.**  
> `window.document.cookie = 'nome=valor, expires = 0'`
>
> **E.**  
> `window.document.cookie = 'nome=valor, delete=true'`
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C.**
>>
>> **A.** Errada. Esse código apenas cria ou atualiza um cookie com nome e valor, mas não o remove.
>>
>> **B.** Errada. `delete nome=valor` não é uma sintaxe válida para exclusão de cookies.
>>
>> **C.** Certa. Definir `max-age = 0` faz o cookie expirar imediatamente, o que equivale à sua remoção.
>>
>> **D.** Errada. A ideia de expiração existe, mas `expires = 0` não é a forma correta esperada para excluir o cookie nessa questão.
>>
>> **E.** Errada. `delete=true` não é um atributo válido para apagar cookies.
>>
>> > [!warning] Atenção
>> > Em JavaScript real, os atributos do cookie costumam ser separados por **ponto e vírgula** (`;`), e não por vírgula. Exemplo comum:
>> > `document.cookie = "nome=valor; max-age=0";`
>>
>>Não existe um atributo _delete_, tampouco o _cookie_ aceita um texto que não esteja no formato `_<nome>=<valor>_.`
>>
>> _Expires_ não espera um valor numérico, mas uma data.
>> 
>> Apenas recriar o _cookie_ sem tempo fará com que ele sobreviva até fechar o navegador.
>> 
>> Com _max-age=0_ há um prazo de validade já esgotado e o sistema deve excluí-lo imediatamente.

