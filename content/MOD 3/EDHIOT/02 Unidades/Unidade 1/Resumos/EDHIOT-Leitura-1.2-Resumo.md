---
publish: true
---
# Integração contínua

## 1. Introdução

A **integração contínua (IC)** é uma prática da cultura **DevOps** destinada a aproximar desenvolvimento e operações, tornando a construção, a validação e a entrega de software mais rápidas e confiáveis.

Em projetos desenvolvidos por várias pessoas, cada integrante envia frequentemente suas alterações para um **repositório compartilhado**. Depois disso, o código é reunido, compilado e submetido a testes automatizados. Essa rotina permite identificar rapidamente erros de integração e evita que grandes quantidades de alterações incompatíveis sejam combinadas apenas no final do projeto.

> [!important] Objetivos da integração contínua
> - Garantir a qualidade do software.
> - Encontrar e investigar *bugs* mais rapidamente.
> - Reduzir o tempo necessário para validar e lançar atualizações.
> - Detectar conflitos de integração antecipadamente.
> - Tornar o processo de desenvolvimento mais ágil e previsível.

## 2. Etapas da integração contínua

O fluxo apresentado na leitura pode ser sintetizado da seguinte maneira:

1. Os desenvolvedores criam e validam suas alterações.
2. O código é enviado para um repositório compartilhado.
3. Um servidor obtém a versão atualizada do projeto.
4. O processo de *build* é executado.
5. Testes automatizados verificam o comportamento do sistema.
6. Os resultados retornam à equipe.
7. Caso sejam encontrados problemas, os desenvolvedores realizam as correções necessárias e reiniciam o ciclo.

### Figura 1 — Etapas da integração contínua

![[Pasted image 20260910181629.png]]

A figura representa o caráter **cíclico e contínuo** da IC. Os desenvolvedores validam e enviam suas alterações ao repositório; os servidores executam o *build* e os testes; depois, os resultados retornam à equipe, permitindo correções e novas integrações.

> [!note] Integração contínua versus trabalho isolado
> Na integração contínua, as alterações são combinadas e testadas frequentemente. No trabalho isolado, a integração costuma ocorrer somente quando todos terminam suas partes, tornando o processo mais demorado, complexo e suscetível a erros.

## 3. Benefícios da integração contínua

A adoção da IC proporciona benefícios para desenvolvedores, equipes e organizações.

### 3.1 Detecção antecipada de problemas

A combinação frequente do código permite descobrir rapidamente:

- incompatibilidades entre componentes;
- conflitos entre versões;
- problemas relacionados a tecnologias, linguagens e *frameworks*;
- falhas introduzidas por alterações recentes;
- erros no processo de compilação ou *build*.

Quanto mais cedo um problema é identificado, menores tendem a ser o esforço e o custo necessários para corrigi-lo.

### 3.2 Automação de testes e verificações

Os testes e as verificações automáticas podem ser executados antes de cada entrega. Isso reduz a dependência de procedimentos manuais e oferece respostas mais rápidas sobre a qualidade do código.

### 3.3 Redução de custos

A detecção imediata de falhas evita que problemas sejam acumulados e descobertos somente nas etapas finais do projeto. Como consequência, diminuem os custos associados a correções tardias, retrabalho e atrasos.

### 3.4 Escalabilidade

A IC ajuda a equipe a manter o sistema mesmo quando o projeto cresce e novas funcionalidades são adicionadas. A automação e a padronização do processo permitem trabalhar com projetos maiores sem perder o controle sobre a qualidade.

### 3.5 Melhoria do ciclo de *feedback*

Os resultados dos testes retornam rapidamente aos desenvolvedores. Esse ciclo curto de *feedback*:

- aumenta a produtividade;
- orienta correções imediatas;
- melhora a comunicação;
- reduz incertezas;
- oferece maior segurança para realizar novas alterações.

## 4. Ferramentas de integração contínua

A equipe de DevOps deve escolher as ferramentas, os modelos e as versões mais adequados às necessidades do projeto. Entretanto, a tecnologia isoladamente não garante a integração contínua. Também são indispensáveis práticas relacionadas ao:

- controle de versões;
- gerenciamento de projetos;
- *build* automatizado;
- teste automatizado;
- monitoramento do repositório;
- acompanhamento de métricas.

## 5. Controle de versão

O **controle de versão** registra as alterações realizadas nos diretórios e arquivos do projeto. Entre as informações que podem ser armazenadas estão:

- conteúdo alterado;
- data de criação;
- data da modificação;
- responsável pela alteração;
- histórico das versões anteriores.

Esse controle permite acompanhar a evolução do software e recuperar ou analisar versões anteriores quando necessário.

### 5.1 DVCS

O **Distributed Version Control System (DVCS)** é um sistema distribuído de controle de versão. Nele, o repositório é replicado para cada desenvolvedor.

Suas principais características são:

- permite que vários desenvolvedores trabalhem simultaneamente;
- cada integrante possui uma cópia do repositório;
- as alterações podem ser enviadas ao repositório compartilhado;
- facilita a integração frequente das contribuições;
- é adequado para equipes e projetos com vários desenvolvedores.

Conforme as etapas são concluídas, as alterações podem passar por um ***merge***, isto é, pela unificação das contribuições realizadas pelos diferentes desenvolvedores.

A leitura apresenta o **GitHub** como exemplo relacionado a esse modelo de trabalho distribuído.

### 5.2 CVS

O texto utiliza a expressão **Concurrent Version System (CVS)** para descrever o modelo centralizado, no qual:

- existe um repositório central;
- é necessário estar conectado ao repositório para efetuar alterações;
- o trabalho simultâneo é mais limitado;
- o modelo é mais apropriado para desenvolvedores individuais ou pequenos projetos.

São apresentados como exemplos:

- **Apache Subversion**;
- **TortoiseSVN**.

### Comparação entre os modelos

| Característica | DVCS | CVS |
|---|---|---|
| Estrutura | Distribuída | Centralizada |
| Repositório | Replicado para os desenvolvedores | Mantido em servidor central |
| Trabalho simultâneo | Favorecido | Mais limitado |
| Necessidade de conexão | Nem todas as operações dependem do servidor central | Alterações dependem do acesso ao repositório central |
| Aplicação indicada | Equipes com vários desenvolvedores | Desenvolvedores individuais e pequenos projetos |
| Exemplos citados | GitHub | Apache Subversion e TortoiseSVN |

## 6. Gestão de projetos

A **gestão de projetos** emprega técnicas e ferramentas para planejar, controlar e conduzir projetos com diferentes características. Em projetos de tecnologia da informação, pode acompanhar o trabalho desde a coleta dos requisitos até a entrega do produto ao cliente.

No contexto de DevOps, os sistemas de gestão de projetos permitem:

- registrar tarefas;
- documentar *bugs*;
- acompanhar alterações planejadas e concluídas;
- controlar versões do software;
- manter uma documentação ativa;
- organizar o trabalho das equipes;
- permitir, em alguns casos, a participação dos usuários finais por meio de opiniões e sugestões.

Esses sistemas complementam o controle de código, pois registram as alterações do ponto de vista **funcional e gerencial**.

## 7. Funcionalidades das ferramentas de IC

As ferramentas de integração contínua reúnem as partes desenvolvidas do sistema e automatizam etapas essenciais do processo.

Entre suas funcionalidades mínimas estão:

- buscar a versão mais recente do código no repositório;
- executar mecanismos automatizados de *build*;
- processar conjuntos de instruções previamente configurados;
- executar testes automatizados;
- reunir e apresentar os resultados;
- produzir métricas relacionadas à qualidade do software.

O **Apache Ant** é citado como exemplo de mecanismo de automação de *build*.

## 8. SonarQube

O **SonarQube** é apresentado como uma ferramenta capaz de analisar projetos desenvolvidos em diferentes linguagens, como:

- Java;
- .NET;
- PHP.

Entre as informações que a ferramenta pode apresentar estão:

- porcentagem do código coberta por testes;
- quantidade de linhas;
- número de classes;
- número de diretórios;
- quantidade de código comentado;
- quantidade de código repetido;
- possíveis melhorias para o projeto.

Essas métricas auxiliam a equipe na avaliação e no aprimoramento contínuo da qualidade do código.

> [!note] Observação
> O SonarQube atua principalmente na **inspeção da qualidade do código** e pode ser integrado a um fluxo de IC para verificar automaticamente o projeto durante o processo de construção e teste.

## 9. Boas práticas de integração contínua

### 9.1 Utilizar uma base compartilhada

Todo o time deve trabalhar sobre uma mesma base de código, armazenada em um repositório compartilhado. Isso evita a existência de versões isoladas e facilita a combinação das alterações.

### 9.2 Integrar alterações frequentemente

Os desenvolvedores devem compartilhar suas alterações com regularidade. A leitura recomenda, como regra prática, que cada integrante faça pelo menos um ***commit*** por dia.

Integrações frequentes:

- diminuem o tamanho de cada alteração;
- facilitam a identificação da origem das falhas;
- evitam o acúmulo de conflitos;
- mantêm o repositório atualizado;
- melhoram a sincronicidade da equipe.

### 9.3 Utilizar um servidor de IC

O servidor de integração contínua deve monitorar o repositório compartilhado e automatizar atividades como:

- identificar novas alterações;
- disparar *builds*;
- executar testes;
- reunir os resultados;
- manter o histórico das execuções;
- apresentar métricas de cobertura e qualidade.

### 9.4 Automatizar o *build*

O projeto deve possuir um procedimento automatizado e reproduzível para geração do *build*. Isso reduz erros humanos e permite executar o mesmo processo de maneira consistente.

### 9.5 Automatizar os testes

Os testes automatizados devem acompanhar a inclusão de novos recursos. Dessa forma, cada alteração pode ser verificada antes de ser considerada pronta para entrega.

### 9.6 Corrigir imediatamente um *build* com falha

Caso uma integração provoque falha no *build*, sua correção deve ser priorizada. Um *build* quebrado impede que a equipe confie na versão compartilhada do projeto e pode afetar o trabalho dos demais desenvolvedores.

### 9.7 Acompanhar métricas e resultados

A equipe deve analisar continuamente:

- histórico de *builds*;
- resultados dos testes;
- cobertura do código;
- duplicações;
- falhas recorrentes;
- indicadores de qualidade.

Essas informações ajudam a identificar tendências e oportunidades de melhoria.

## 10. Pessoas e colaboração no processo de IC

A eficiência da integração contínua não depende apenas de ferramentas e metodologias. É necessário que as pessoas incorporem essa prática ao trabalho cotidiano.

A gestão deve incentivar a equipe a:

- realizar *commits* frequentes;
- compartilhar as alterações;
- manter o repositório atualizado;
- criar testes para os novos recursos;
- priorizar a correção de falhas;
- colaborar com outras áreas.

A integração com o time de **Quality Assurance (QA)** é importante para planejar, criar e manter os testes automatizados. A colaboração com a equipe de infraestrutura também é necessária para disponibilizar as máquinas e os ambientes nos quais os *builds* e os testes serão executados.

Essa atuação conjunta contribui para reduzir conflitos organizacionais e os prejuízos causados pela separação entre desenvolvimento, qualidade e operações.

## 11. Síntese

A integração contínua estabelece um ciclo frequente de envio, construção, teste e retorno de resultados. Sua finalidade é manter o código compartilhado, atualizado e constantemente verificável.

Para sua implementação, são necessários:

- repositório compartilhado;
- controle de versões;
- commits frequentes;
- servidor de integração contínua;
- *builds* automatizados;
- testes automatizados;
- ferramentas de análise da qualidade;
- sistemas de gestão de projetos;
- colaboração entre desenvolvimento, QA e infraestrutura;
- apoio da gestão.

> [!summary] Ideia central
> A integração contínua combina automação, controle de versões e colaboração para detectar problemas antecipadamente, melhorar a qualidade do software e reduzir o tempo e o custo das entregas.

## 12. Dúvidas frequentes

# 1

> [!question] Qual é o objetivo da prática de IC?
>
>> [!question]- Resposta
>>
>> Os principais objetivos da integração contínua são garantir a qualidade do software, encontrar e investigar *bugs* mais rapidamente e reduzir o tempo necessário para validar e lançar novas atualizações.

# 2

> [!question] Por que é necessário controlar as versões do código-fonte?
>
>> [!question]- Resposta
>>
>> O controle de versões registra as alterações realizadas nos diretórios e arquivos do projeto, incluindo as datas de criação e modificação e o desenvolvedor responsável. Além disso, permite recuperar ou analisar versões anteriores com maior facilidade.

# 3

> [!question] Por que o desenvolvimento do código-fonte no mesmo repositório é considerado uma boa prática de IC?
>
>> [!question]- Resposta
>>
>> Quando toda a equipe desenvolve o código-fonte sobre um repositório comum e compartilha frequentemente suas alterações, mantém-se a sincronicidade do processo de entrega. Isso permite reunir as etapas do projeto e submetê-las a testes automatizados, verificando continuamente o comportamento do código-fonte.

# 4

> [!question] Quais são as funcionalidades básicas que uma ferramenta de IC pode oferecer?
>
>> [!question]- Resposta
>>
>> Uma ferramenta de IC pode buscar a versão mais recente do código no repositório, executar *builds* e testes automatizados, processar instruções configuradas e apresentar métricas de qualidade. O SonarQube, por exemplo, analisa projetos em diferentes linguagens, mede a cobertura de testes, contabiliza linhas, classes e diretórios e identifica códigos comentados ou repetidos.