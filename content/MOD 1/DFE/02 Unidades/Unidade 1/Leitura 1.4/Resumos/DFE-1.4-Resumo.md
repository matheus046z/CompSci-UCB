---
publish: true
---
# Resumo — Criação e validação de formulários com HTML5

## Visão geral dos formulários web

> [!info] Conceito
> Formulários web são estruturas usadas para agrupar campos e permitir a coleta ou a apresentação de informações em uma página.

Os materiais mostram que os formulários são a principal forma de interação entre o usuário e um sistema web. Eles organizam campos de entrada e saída de dados, como caixas de texto, listas, botões e seletores, permitindo que a aplicação receba informações de maneira padronizada. Essa padronização é importante porque cada tipo de dado é solicitado em um campo adequado à sua finalidade, o que melhora a organização da interface e o tratamento das informações pelo sistema.

> [!tip] Resumindo
> O formulário é a ponte entre o usuário e a aplicação, reunindo campos que permitem preencher, enviar ou exibir dados.

---

## Comunicação entre navegador e servidor

> [!info] Conceito
> O formulário participa do processo de comunicação entre o navegador do usuário e o servidor da aplicação.

Segundo os anexos, quando o usuário preenche um formulário e o envia, o navegador faz uma **solicitação** ao servidor. O servidor recebe esses dados, realiza um processamento e devolve uma **resposta** ao navegador. Esse fluxo aparece tanto no conteúdo teórico quanto na dica do professor. Um exemplo citado é o de autenticação com e-mail e senha: o usuário envia os dados, o servidor compara com o banco de dados e retorna uma resposta como acesso permitido ou negado.

Essa explicação mostra que o formulário não é apenas um conjunto visual de campos. Ele participa diretamente do funcionamento da aplicação, pois é o meio pelo qual os dados chegam ao servidor para serem tratados.

> [!tip] Resumindo
> O navegador envia a solicitação com os dados do formulário, e o servidor devolve uma resposta após o processamento.

---

## Importância da validação de dados

> [!info] Conceito
> Validar dados significa verificar se as informações inseridas estão corretas antes de serem usadas pelo sistema.

Os materiais enfatizam que validar a entrada de dados é uma boa prática essencial. Um formulário pode receber valores errados, incompletos ou em formato inadequado, e isso compromete a confiabilidade das informações e a credibilidade do sistema. O exemplo mais direto é o de um campo de data preenchido com um valor inválido: se o sistema aceitar esse dado sem verificação, o processamento posterior poderá falhar ou gerar resultados incorretos.

Os anexos também mostram que a validação pode ocorrer de duas formas. Uma delas é no próprio navegador, com recursos do HTML5, antes do envio ao servidor. A outra é no servidor, antes que os dados sejam realmente utilizados. Assim, o HTML5 facilita a validação inicial, mas isso não elimina a necessidade de cuidado no lado do servidor.

> [!warning] Atenção
> Validar apenas depois pode ser tarde demais para a experiência do usuário. Validar cedo ajuda a evitar erros de preenchimento e melhora a qualidade dos dados.

> [!tip] Resumindo
> A validação protege o sistema contra dados incorretos e melhora a confiança nas informações enviadas.

---

## A tag `<form>` e sua função

> [!info] Conceito
> A tag `<form>` é o elemento principal usado para criar um formulário em HTML.

É dentro da tag `<form>` que ficam os campos, botões e demais elementos usados para interação. Os materiais explicam que essa tag também recebe atributos importantes que controlam o comportamento do formulário, como a forma de envio dos dados, o destino da submissão, o local em que a resposta será aberta e a codificação dos dados.

Isso significa que a tag `<form>` não serve apenas para “embrulhar” os campos. Ela define a lógica geral da submissão e da interação com o servidor.

> [!tip] Resumindo
> `<form>` é a base do formulário e controla como os dados serão enviados e tratados.

---

## Principais atributos da tag `<form>`

> [!info] Conceito
> Os atributos da tag `<form>` definem o comportamento do envio dos dados.

Os materiais apresentam vários atributos importantes. O atributo `name` identifica o formulário. O atributo `method` define o método HTTP usado na submissão. O atributo `action` informa para qual endereço os dados serão enviados. O atributo `autocomplete` permite ou impede o preenchimento automático com valores usados anteriormente. O atributo `target` define onde a resposta será exibida, como na mesma aba ou em uma nova. O atributo `enctype` especifica a forma de codificação dos dados, sendo especialmente importante no envio de arquivos. Já `novalidate` desativa as validações automáticas do HTML5 feitas pelo navegador.

Essa combinação de atributos faz com que o formulário possa ser adaptado a diferentes necessidades, como cadastro, envio de arquivo, busca, login ou contato.

> [!tip] Resumindo
> Os atributos do formulário controlam nome, método de envio, destino, validação, preenchimento automático e codificação dos dados.

---

## Métodos `GET` e `POST`

> [!info] Conceito
> Os métodos `GET` e `POST` definem formas diferentes de enviar os dados de um formulário ao servidor.

Os materiais explicam que o método `GET` envia os dados anexados à URL, deixando-os visíveis na barra de endereço do navegador. Por isso, ele é adequado quando a informação pode ser exposta dessa forma, como em buscas simples. Já o método `POST` envia os dados no corpo da solicitação, sem exibi-los na URL, sendo mais apropriado para envio de informações de formulários em geral.

Esse contraste também aparece nos exercícios, que reforçam que o método cujos valores ficam abertos ao usuário é o `GET`.

> [!warning] Atenção
> O fato de `POST` não mostrar os dados na URL não significa, por si só, que ele resolve sozinho questões de segurança. Ele apenas altera a forma de envio.

> [!tip] Resumindo
> `GET` envia dados pela URL; `POST` envia no corpo da requisição.

---

## Codificação dos dados com `enctype`

> [!info] Conceito
> O atributo `enctype` define como os dados do formulário serão codificados antes do envio.

Os anexos mostram três possibilidades principais. A codificação padrão é `application/x-www-form-urlencoded`, usada em formulários comuns. A codificação `multipart/form-data` é usada quando o formulário envia arquivos, como fotos. Já `text/plain` envia os dados como texto simples, sem conversão de caracteres especiais.

Esse ponto é importante no exemplo prático do concurso de fotografia, em que o envio da imagem exige `multipart/form-data`.

> [!tip] Resumindo
> Para enviar arquivos, o formulário deve usar `multipart/form-data`.

---

## Campos de formulário

> [!info] Conceito
> Campos de formulário são os elementos usados para capturar ou apresentar informações ao usuário.

Os materiais mostram que os campos podem assumir diversos formatos, conforme a necessidade do sistema. Há campos para texto livre, senha, arquivo, seleção única, múltipla escolha, listas, textos longos e botões de ação. Isso permite que a interface peça cada informação em um formato adequado, facilitando o preenchimento e a validação.

Também é destacado que o navegador exibe os campos na ordem em que eles aparecem no código-fonte. Além disso, o layout do formulário pode ser organizado com tabelas ou com CSS, embora a lógica dos campos continue sendo definida pelo HTML.

> [!tip] Resumindo
> Cada campo tem um formato próprio para receber um tipo específico de informação.

---

## O elemento `<input>` e seus tipos principais

> [!info] Conceito
> O elemento `<input>` é um dos recursos mais importantes dos formulários, pois permite criar diversos tipos de campo.

Nos materiais aparecem vários tipos de `input`. O tipo `text` aceita texto livre. O tipo `password` oculta os caracteres durante a digitação. O tipo `file` permite selecionar um arquivo no computador. O tipo `hidden` cria um campo oculto, que existe no formulário mas não aparece para o usuário. O tipo `radio` permite escolher apenas uma opção dentro de um grupo. O tipo `checkbox` permite selecionar uma ou mais opções. O tipo `submit` envia os dados do formulário. O tipo `reset` limpa os campos preenchidos. Também aparece o tipo `button`, usado para acionar alguma ação.

Há ainda atributos importantes associados a esses campos, como `id`, `name`, `size` e `value`, que ajudam a identificar e configurar cada elemento.

> [!tip] Resumindo
> O `input` é versátil e pode representar texto, senha, arquivo, seleção, campo oculto e botões.

---

## Outros campos importantes: `<textarea>` e `<select>`

> [!info] Conceito
> Alguns tipos de informação exigem elementos próprios, além do `<input>`.

Os materiais apresentam a tag `<textarea>` como campo adequado para textos longos. Ela possui atributos como `rows` e `cols`, que indicam a quantidade de linhas e colunas visíveis. Já a tag `<select>` cria uma lista de seleção com opções predefinidas, útil quando o usuário deve escolher entre valores conhecidos. Essa lista pode funcionar no modo padrão de escolha única ou, com atributo apropriado, permitir múltipla seleção.

Esses elementos aparecem com destaque nos exemplos práticos, como a escolha de disciplina no formulário de lançamento de notas e a seleção de categoria no concurso de fotografia.

> [!tip] Resumindo
> `<textarea>` é ideal para textos longos; `<select>` é ideal para listas de opções.

---

## Etiquetas com `<label>`

> [!info] Conceito
> A tag `<label>` associa um texto explicativo a um campo do formulário.

O infográfico destaca que o uso de `<label>` melhora a organização e a interação do formulário. Quando o texto da etiqueta está corretamente ligado ao campo por meio do atributo `for`, o clique no rótulo move o cursor diretamente para o elemento correspondente. Isso torna o preenchimento mais prático e aumenta a clareza da interface.

Além disso, a etiqueta ajuda o usuário a entender exatamente o que deve ser digitado em cada campo.

> [!tip] Resumindo
> `<label>` torna o formulário mais claro e facilita o foco no campo correspondente.

---

## Agrupamento com `<fieldset>` e `<legend>`

> [!info] Conceito
> Os elementos `<fieldset>` e `<legend>` agrupam campos relacionados dentro de um formulário.

Os materiais mostram que o `<fieldset>` envolve um conjunto de campos com relação lógica, enquanto o `<legend>` fornece um título para esse grupo. Esse recurso melhora a organização visual e semântica do formulário, tornando o bloco mais compreensível para o usuário.

Esse agrupamento aparece no exemplo de lançamento de notas e no exemplo do concurso de fotografia, em que o formulário ganha uma apresentação mais estruturada.

> [!tip] Resumindo
> `<fieldset>` agrupa campos; `<legend>` nomeia esse agrupamento.

---

## Recursos nativos de validação no HTML5

> [!info] Conceito
> O HTML5 trouxe recursos que permitem validar dados diretamente no navegador, sem depender sempre de JavaScript.

Antes do HTML5, segundo os materiais, muitas validações exigiam grande quantidade de código adicional. Com a nova versão, surgiram tipos de campo e atributos específicos que fazem validações automáticas, aumentando produtividade, desempenho e segurança no desenvolvimento. Esses recursos permitem restringir números, validar e-mails, escolher datas com calendário, selecionar cores e aplicar padrões com expressões regulares.

Esse conjunto de recursos torna o formulário mais inteligente e reduz erros simples já na etapa de preenchimento.

> [!tip] Resumindo
> O HTML5 simplificou a validação de formulários, trazendo recursos nativos no próprio navegador.

---

## Validação por tipo de campo

> [!info] Conceito
> Alguns tipos de campo do HTML5 já carregam validações e comportamentos específicos.

O tipo `number` restringe a entrada a números e caracteres relacionados a valores numéricos. O tipo `date` valida datas e geralmente oferece um calendário para seleção. O tipo `month` trabalha com mês e ano. O tipo `week` permite selecionar semana e ano. O tipo `time` aplica validação de horário. O tipo `email` verifica se o texto digitado possui formato compatível com endereço de e-mail, incluindo a presença de `@` e a ausência de certos caracteres inválidos. O tipo `range` cria uma barra deslizante para escolher valores em um intervalo definido. O tipo `color` abre uma paleta para seleção de cor.

Esses campos reduzem a necessidade de o usuário formatar tudo manualmente e ajudam a manter o padrão esperado pela aplicação.

> [!warning] Atenção
> O tipo do campo não é apenas uma escolha visual. Ele define também como o navegador interpreta e valida o dado informado.

> [!tip] Resumindo
> Tipos como `number`, `date`, `email`, `range` e `color` adicionam validação e interação nativas ao formulário.

---

## Atributos de validação e orientação ao usuário

> [!info] Conceito
> O HTML5 inclui atributos que restringem valores, orientam o usuário e controlam o preenchimento.

Os materiais apresentam vários desses atributos. O `required` exige que o campo seja preenchido antes da submissão. O `min` e o `max` restringem intervalos de datas e números. O `minlength` e o `maxlength` controlam a quantidade mínima e máxima de caracteres. O `placeholder` exibe uma dica temporária dentro do campo. O `title` mostra uma mensagem de orientação ao passar o mouse. O `readonly` impede que o usuário altere o valor do campo, deixando-o apenas para visualização. O `autofocus` posiciona automaticamente o cursor em determinado campo quando a página carrega.

Esses atributos aparecem tanto no infográfico quanto nos desafios e exemplos, mostrando que o HTML5 ajuda a construir formulários mais claros e mais controlados.

> [!tip] Resumindo
> Atributos de validação e orientação tornam o formulário mais fácil de preencher e mais seguro contra erros simples.

---

## Expressões regulares com `pattern`

> [!info] Conceito
> O atributo `pattern` permite validar formatos específicos com base em expressões regulares.

Os materiais explicam que expressões regulares são padrões usados para verificar se o texto digitado corresponde ao formato esperado. Em HTML5, isso é útil para telefone, CPF, valores alfanuméricos, moedas e outros formatos definidos pelo programador. Um exemplo apresentado é a validação de telefone com uma máscara numérica específica. Os exercícios também mostram o uso de `pattern` para validar formato de CPF.

Essa abordagem é importante quando o tipo de campo sozinho não é suficiente e o sistema precisa impor uma estrutura exata de preenchimento.

> [!warning] Atenção
> `pattern` valida o formato do texto, não o significado real da informação. Um CPF pode estar no formato correto e ainda assim ser inválido em outro nível de verificação.

> [!tip] Resumindo
> `pattern` é usado para exigir que o usuário digite dados em um formato específico.

---

## Campo oculto com `hidden`

> [!info] Conceito
> O tipo `hidden` cria um campo invisível para o usuário, mas que continua sendo enviado com o formulário.

Os exercícios destacam esse tipo de campo como aquele que existe no formulário sem aparecer visualmente. Ele pode ser útil para transportar informações internas da aplicação, como identificadores ou estados necessários ao processamento, sem exigir interação direta do usuário.

> [!tip] Resumindo
> `hidden` guarda e envia informações que o usuário não precisa ver nem editar.

---

## Exemplo prático: lançamento de notas

> [!info] Conceito
> O desafio do lançamento de notas mostra como combinar listas, campos numéricos, restrições de faixa e leitura apenas.

No formulário proposto para a faculdade, a disciplina é escolhida por uma lista de seleção com opções definidas. As notas de prova e exame usam campos numéricos com faixa de 0 a 10. As faltas usam campo numérico entre 0 e 16. Os campos prova 1, prova 2 e faltas são obrigatórios. Já a média aparece como campo apenas para leitura, com `readonly`, pois deve ser calculada e não digitada manualmente.

Esse exemplo mostra bem como o HTML5 permite restringir entradas e organizar os dados conforme a lógica do sistema, reduzindo erros de preenchimento.

> [!tip] Resumindo
> O formulário de notas usa `select`, `number`, `required` e `readonly` para controlar o que o usuário pode ou deve preencher.

---

## Exemplo prático: concurso de fotografia

> [!info] Conceito
> O formulário do concurso de fotografia reúne upload de arquivo, data, seleção de categoria, texto, e-mail e autorização.

Nos materiais, a equipe precisa criar um formulário para receber foto, descrição, data do clique, categoria, nome do autor e e-mail. Todos os campos são obrigatórios, a foto deve ter sido tirada em 2017 e o candidato precisa autorizar o uso da imagem. Para isso, o formulário usa `enctype="multipart/form-data"` por causa do envio do arquivo, `input type="file"` para a foto, `input type="date"` com `min` e `max` limitando o ano de 2017, `select` para a categoria, `input type="email"` para o e-mail e `checkbox` para a autorização.

Esse exemplo evidencia como o HTML5 consegue resolver várias necessidades comuns de formulário com recursos nativos do navegador.

> [!warning] Atenção
> No contexto do concurso, a autorização de uso da fotografia é parte importante da regra do formulário, pois representa a concordância do participante com o uso da imagem enviada.

> [!tip] Resumindo
> O formulário do concurso combina upload, restrição de data, validação de e-mail, seleção de categoria e preenchimento obrigatório.

---

## Benefícios do HTML5 para formulários

> [!info] Conceito
> O HTML5 tornou a criação e a validação de formulários mais rápida, clara e produtiva.

Os materiais deixam claro que muitos recursos que antes dependiam de código adicional passaram a ser oferecidos diretamente pelo HTML. Isso reduz o esforço de desenvolvimento em tarefas simples, melhora a experiência do usuário e ajuda a prevenir erros já no navegador. Além disso, a combinação entre semântica, atributos de validação e tipos específicos de campo contribui para formulários mais organizados e mais confiáveis.

Mesmo assim, também fica claro que a validação no navegador é apenas uma parte do processo. O servidor ainda precisa tratar os dados recebidos com segurança.

> [!tip] Resumindo
> O HTML5 facilita muito a criação de formulários, mas a qualidade do sistema depende de validação cuidadosa e bom uso dos recursos disponíveis.

---

## Síntese final

> [!summary] Síntese
> Os materiais mostram que formulários web são estruturas usadas para agrupar campos com o objetivo de captar, exibir e enviar informações entre o navegador do usuário e o servidor da aplicação. Essa comunicação ocorre por meio de solicitação e resposta, tornando o formulário o principal ponto de interação entre usuário e sistema.  
>  
> A tag `<form>` organiza o comportamento geral do formulário por meio de atributos como `method`, `action`, `target`, `enctype`, `autocomplete` e `novalidate`. Dentro dela, aparecem campos como `input`, `textarea`, `select`, além de botões, etiquetas e agrupadores como `<label>`, `<fieldset>` e `<legend>`.  
>  
> O HTML5 trouxe recursos nativos de validação que simplificam bastante o desenvolvimento, como tipos específicos de campo (`number`, `date`, `email`, `range`, `color`) e atributos como `required`, `min`, `max`, `minlength`, `maxlength`, `placeholder`, `title`, `readonly`, `autofocus` e `pattern`. Esses recursos ajudam a reduzir erros de preenchimento e a melhorar a experiência do usuário.  
>  
> Em síntese, o HTML5 tornou os formulários mais completos, mais fáceis de construir e mais eficientes na validação básica, permitindo criar interfaces mais claras e confiáveis para coleta e tratamento de dados.