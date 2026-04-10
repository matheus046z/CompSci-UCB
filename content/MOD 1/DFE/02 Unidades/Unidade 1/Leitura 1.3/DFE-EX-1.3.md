---
publish: true
---
### 1
> [!question] Exercício 1
> Sobre a instrução `< !DOCTYPE html >` do HTML5, marque a alternativa correta:
>
> **A.**  
> Indica a quantidade de seções da estrutura de uma página web.
>
> **B.**  
> Apresenta as informações sobre o tipo do documento hipertexto.
>
> **C.**  
> Indica que o documento hipertexto foi escrito na versão 5 do HTML.
>
> **D.**  
> É a marcação que representa o nível mais elevado de uma página web.
>
> **E.**  
> Representa a codificação de idioma de um documento hipertexto.
>
>> [!question]- Resposta
>> **B.**  
>> Apresenta as informações sobre o tipo do documento hipertexto.
>>
>> Essa alternativa está correta porque a declaração `<!DOCTYPE html>` informa ao navegador qual é o **tipo de documento** que está sendo utilizado, permitindo a interpretação correta da página.
>>
>> No HTML5, essa declaração é simples e padronizada, servindo para indicar que o documento deve ser tratado como HTML.
>>
>> As demais estão incorretas porque:
>> - **A**: `DOCTYPE` não informa quantidade de seções.
>> - **C**: embora esteja associado ao HTML5, sua função não é “dizer que foi escrito na versão 5”, mas declarar o tipo do documento.
>> - **D**: não representa o nível mais elevado da página; isso está ligado à estrutura do documento, como `<html>`.
>> - **E**: a codificação de idioma é definida por outros atributos, como `lang`.
>> 
>> **Na correçao do exercicio deu resposta diferente: Resposta C**
>> ```
>> No HTML5, a instrução <!DOCTYPE html> indica que o documento hipertexto foi escrito na versão 5. Nessa versão do HTML não é necessário informar qualquer número, bastando informar a instrução conforme citada.
>> ```

### 2
> [!question] Exercício 2
> Indique a alternativa correta em relação ao elemento `< section >` do HTML5:
>
> **A.**  
> Indica o elemento de nível mais elevado da estrutura de uma página HTML5.
>
> **B.**  
> Realiza o controle de seção para identificar se o usuário possui permissão de acesso.
>
> **C.**  
> Apresenta o conteúdo principal de uma página web quando está associado à tag `<head>`.
>
> **D.**  
> Indica a área onde se coloca o título de uma página HTML5.
>
> **E.**  
> Representa uma ou mais áreas de uma página HTML5.
>
>> [!question]- Resposta
>> **E.**  
>> Representa uma ou mais áreas de uma página HTML5.
>>
>> Essa alternativa está correta porque a tag `<section>` é usada para definir **seções temáticas** dentro de uma página HTML5, organizando o conteúdo em áreas ou blocos relacionados.
>>
>> Ela ajuda na estrutura semântica do documento, tornando o conteúdo mais organizado e compreensível.
>>
>> As demais estão incorretas porque:
>> - **A**: o elemento mais elevado da estrutura é o `<html>`.
>> - **B**: `<section>` não tem função de controle de acesso.
>> - **C**: o conteúdo principal não fica associado à tag `<head>`.
>> - **D**: o título da página visível no navegador não é definido por `<section>`.
>>
>>```
>>O elemento <_section_> define uma ou mais áreas de um documento HTML5. Essas áreas podem conter outros elementos, como <_article_>, <_nav_> e <_aside_>, e auxiliam na organização da estrutura de uma página _web_.
>>   ```

### 3
> [!question] Exercício 3
> Selecione a alternativa correta em relação à formatação de parágrafos com a tag `< pre >` em HTML5:
>
> **A.**  
> Exibe o texto formatado tal como foi digitado no código-fonte.
>
> **B.**  
> Formata o texto em níveis conforme o seu tamanho.
>
> **C.**  
> Cria itens de lista para cada linha do conteúdo.
>
> **D.**  
> Define a configuração de folhas de estilo da página.
>
> **E.**  
> Contém informações que são de interesse do navegador.
>
>> [!question]- Resposta
>> **A.**  
>> Exibe o texto formatado tal como foi digitado no código-fonte.
>>
>> Essa alternativa está correta porque a tag `<pre>` preserva a formatação original do texto, mantendo espaços em branco, tabulações e quebras de linha exatamente como foram escritos no código.
>>
>> Ela é muito usada quando se deseja mostrar conteúdos pré-formatados.
>>
>> As demais estão incorretas porque:
>> - **B**: isso se relaciona a títulos como `<h1>` até `<h6>`.
>> - **C**: itens de lista são criados com `<li>`.
>> - **D**: folhas de estilo são definidas com CSS, não com `<pre>`.
>> - **E**: informações de interesse do navegador ficam normalmente em `<head>`.
>>
>>```
>>Apresenta no navegador a mesma formatação que foi aplicada no código-fonte, respeitando espaços em branco e quebras de linha.
>>```

### 4
> [!question] Exercício 4
> Marque a alternativa correta sobre âncoras em HTML5:
>
> **A.**  
> Realizam o direcionamento para outro site.
>
> **B.**  
> Realizam o direcionamento para uma página em outro site.
>
> **C.**  
> Realizam o direcionamento para uma página no mesmo site.
>
> **D.**  
> Realizam o direcionamento para um ponto da mesma página web.
>
> **E.**  
> Fixam os conteúdos em locais da página.
>
>> [!question]- Resposta
>> **D.**  
>> Realizam o direcionamento para um ponto da mesma página web.
>>
>> Essa alternativa está correta porque as âncoras em HTML5 podem ser usadas para levar o usuário diretamente a um **ponto específico dentro da mesma página**, por meio de identificadores como `id`.
>>
>> Isso facilita a navegação em páginas longas, permitindo saltar rapidamente para trechos específicos.
>>
>> As demais estão incorretas porque:
>> - **A**, **B** e **C**: links podem levar a outros sites ou páginas, mas a definição pedida para âncora, nesse contexto, é o salto interno na mesma página.
>> - **E**: âncoras não “fixam” conteúdo; elas apenas criam referências de navegação.
>>
>>```
>>Âncoras realizam o direcionamento para determinados locais dentro da mesma página _web_, como atalhos para determinados conteúdos que estão em pontos diferentes.
>>```

### 5
> [!question] Exercício 5
> Em relação às listas do HTML5, selecione a alternativa correta:
>
> **A.**  
> Existem apenas dois tipos, as listas ordenadas e as listas de definição.
>
> **B.**  
> A tag `< ul >` não admite itens duplicados.
>
> **C.**  
> A tag `< ol >` não admite os itens em ordem decrescente.
>
> **D.**  
> Uma lista pode ser aninhada com outras sublistas, inclusive com tipos diferentes de lista.
>
> **E.**  
> Uma lista de definição aplica marcadores aos seus subitens.
>
>> [!question]- Resposta
>> **D.**  
>> Uma lista pode ser aninhada com outras sublistas, inclusive com tipos diferentes de lista.
>>
>> Essa alternativa está correta porque, em HTML5, uma lista pode conter outra lista dentro de um item `<li>`, formando uma **lista aninhada**.
>>
>> Além disso, essas sublistas podem ser de tipos diferentes, como uma lista ordenada `<ol>` contendo uma lista não ordenada `<ul>`, ou o contrário.
>>
>> As demais estão incorretas porque:
>> - **A**: existem mais de dois tipos de listas, como `<ul>`, `<ol>` e `<dl>`.
>> - **B**: a tag `<ul>` permite itens repetidos.
>> - **C**: a tag `<ol>` pode ser configurada de outras formas, inclusive com ordem decrescente.
>> - **E**: listas de definição não usam marcadores, mas pares de termo e descrição (`<dt>` e `<dd>`).
>>
>>```
>>Existem três tipos de lista: as ordenadas, as não ordenadas e as de definição, que não aplicam marcadores aos itens. Qualquer tipo de lista pode apresentar itens duplicados e nenhum tipo aplica classificação aos itens, sendo que todos os tipos de listas podem aninhar subitens, inclusive com tipos diferentes de lista.
>>```

