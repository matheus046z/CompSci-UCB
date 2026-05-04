---
publish: true
---
### 1
> [!question] Exercício 1
> Existem vários métodos de manipulação dos elementos da página Web que podem ser utilizados pelo desenvolvedor para adicionar comportamento aos sistemas ou a páginas Web.
>
> Marque a opção referente ao método que obtém um elemento a partir de seu identificador:
>
> **A.**  
> `getElementById()`.
>
> **B.**  
> `getElementByClassName()`.
>
> **C.**  
> `getElementByTagName()`.
>
> **D.**  
> `querySelector()`.
>
> **E.**  
> `createElement()`.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A.**
>>
>> **A.** Certa. `getElementById()` é o método usado para obter um elemento HTML pelo seu identificador (`id`).
>>
>> **B.** Errada. O método para classe é `getElementsByClassName()`, no plural, e ele busca por classe, não por `id`.
>>
>> **C.** Errada. O método correto é `getElementsByTagName()`, também no plural, e ele busca elementos pelo nome da tag.
>>
>> **D.** Errada. `querySelector()` pode selecionar elementos por vários tipos de seletores CSS, inclusive `id`, mas a questão pede especificamente o método que obtém o elemento a partir de seu identificador.
>>
>> **E.** Errada. `createElement()` serve para criar um novo elemento HTML, não para obter um elemento já existente na página.
>>
>> O método que obtém o elemento a partir de seu identificador é o **getElementById()**. O método getElementByClassName() retorna o elemento a partir do nome da classe. O método getElementByTagName() retorna uma lista de elementos com o mesmo nome de _tag_. O método querySelector() retorna o primeiro elemento dentro do documento referente ao seletor especificado. O método createElement() cria um elemento para ser inserido no documento.
### 2
> [!question] Exercício 2
> Se o desenvolvedor precisar mudar a cor de um texto no momento em que o usuário clicar no botão, é possível acessar os elementos da árvore DOM para realizar tal manipulação no nó em questão.
>
> Marque a opção que representa a forma de obter o elemento e definir a cor azul ao texto:
>
> **A.**  
> `document.write(blue).`
>
> **B.**  
> `document.getElementById(‘idTituloPagina’).style.color = ‘blue’.`
>
> **C.**  
> `document.appendChild(blue).`
>
> **D.**  
> `element.setAttribute(blue).`
>
> **E.**  
> `element.innerHTML = “blue”.`
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> **A.** Errada. `document.write()` escreve conteúdo no documento, mas não seleciona um elemento específico nem altera sua cor.
>>
>> **B.** Certa. `document.getElementById('idTituloPagina').style.color = 'blue'` obtém o elemento pelo `id` e altera diretamente a propriedade de estilo da cor do texto para azul.
>>
>> **C.** Errada. `appendChild()` é usado para adicionar um nó filho a outro elemento, não para mudar a cor de um texto.
>>
>> **D.** Errada. `setAttribute()` serve para definir atributos, mas a sintaxe apresentada está incorreta e não mostra corretamente a alteração da cor do texto.
>>
>> **E.** Errada. `innerHTML = "blue"` altera o conteúdo interno do elemento para a palavra `blue`, e não a cor do texto.
>>
>> Para obter o elemento desejado e alterar a cor, deve ser utilizada a instrução **document.getElementById(‘idTituloPagina’).style.color = ‘cor desejada’**. O método write() de _document_ é utilizado para escrever dentro do _document_. O método appendChild() adiciona um nó ao final da lista de filhos do nó pai em questão. O método setAttribute() adiciona um novo atributo ou modifica o valor de um atributo existente. Por fim, o método element.innerHTML é utilizado para trocar o valor do texto de dentro da _tag_.

### 3
> [!question] Exercício 3
> O DOM é uma interface de programação para documentos HTML que fornece uma representação do documento da página Web na forma de árvore.
>
> Marque a opção que representa os elementos filhos do nó `window`:
>
> **A.**  
> Document, HTML e history.
>
> **B.**  
> Location, history e body.
>
> **C.**  
> Location, document e history.
>
> **D.**  
> HTML, body e header.
>
> **E.**  
> Header, document e history.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: C.**
>>
>> **A.** Errada. `document` e `history` estão relacionados ao objeto `window`, mas `HTML` não é filho direto de `window`; ele está dentro de `document`.
>>
>> **B.** Errada. `location` e `history` pertencem a `window`, mas `body` não é filho direto de `window`; ele pertence à estrutura do documento HTML.
>>
>> **C.** Certa. `location`, `document` e `history` são objetos associados diretamente ao nó `window` na representação mais comum do DOM/BOM.
>>
>> **D.** Errada. `HTML`, `body` e `header` fazem parte da estrutura interna do documento, não são filhos diretos de `window`.
>>
>> **E.** Errada. `document` e `history` se relacionam com `window`, mas `header` é um elemento do documento HTML, não um filho direto de `window`.
>
>
>>
>> Os filhos do nó _window_ são o _location_, o _document_ e o _history_. O HTML é filho de _document;_ o _body_ é filho de HTML; o _header_ é filho de _body_.


### 4
> [!question] Exercício 4
> Criadas as páginas Web com uma estrutura HTML adequada e com estilização, o desenvolvedor pode adicionar filtros de pesquisa para apresentação de dados selecionados, validação de formulários, entre outros comportamentos dinâmicos e interativos.
>
> Marque a opção que representa a linguagem de script que permite a manipulação dos elementos do documento da página Web:
>
> **A.**  
> HTML.
>
> **B.**  
> CSS.
>
> **C.**  
> XML.
>
> **D.**  
> JavaScript.
>
> **E.**  
> SVG.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D.**
>>
>> **A.** Errada. HTML é uma linguagem de marcação usada para estruturar o conteúdo da página, não para manipular dinamicamente seus elementos.
>>
>> **B.** Errada. CSS é usado para estilização e aparência visual, não para implementar comportamentos dinâmicos e interativos.
>>
>> **C.** Errada. XML é uma linguagem de marcação para organização e transporte de dados, não a linguagem de script usada para manipular elementos da página.
>>
>> **D.** Certa. JavaScript é a linguagem de script utilizada para manipular elementos do documento HTML, validar formulários, aplicar filtros e adicionar interatividade à página.
>>
>> **E.** Errada. SVG é um formato para gráficos vetoriais, podendo ser usado em páginas web, mas não é a linguagem principal de script para manipulação do documento.
>>
>> A linguagem de programação mais utilizada para manipular o documento DOM é o **JavaScript**. O HTML e o XML são linguagens de marcação; o CSS é um mecanismo de adição de estilo; e o SVG é uma forma de representar gráficos vetoriais.

### 5
> [!question] Exercício 5
> O DOM é a estrutura e o conteúdo de um documento Web, que são representados por dados dos objetos e um documento nas linguagens de marcação HTML e XML na memória do computador, para que sejam apresentados nos navegadores.
>
> Marque a opção que representa os dois padrões que podem ser implementados na maioria dos navegadores mais recentes:
>
> **A.**  
> HTTP e FTP.
>
> **B.**  
> HTTP e SSH.
>
> **C.**  
> W3C e FTP.
>
> **D.**  
> HTTP e WHATWG.
>
> **E.**  
> W3C e WHATWG.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: E.**
>>
>> **A.** Errada. HTTP e FTP são protocolos de comunicação e transferência de arquivos, não padrões do DOM implementados pelos navegadores.
>>
>> **B.** Errada. HTTP e SSH também são protocolos, e não padrões relacionados à especificação do DOM.
>>
>> **C.** Errada. W3C é uma organização de padronização da web, mas FTP é apenas um protocolo, não um padrão do DOM.
>>
>> **D.** Errada. WHATWG está relacionado a padrões web, mas HTTP é protocolo, não um padrão de DOM.
>>
>> **E.** Certa. **W3C** e **WHATWG** são referências importantes na definição e evolução dos padrões web, incluindo especificações relacionadas ao DOM adotadas pelos navegadores modernos.
>> 
>> Os padrões que podem ser implementados na maioria dos navegadores mais recentes são **o W3C e o WHATWG**. O HTTP e o FTP são protocolos de transferência de dados, e o SSH é um protocolo de rede para operações seguras.

