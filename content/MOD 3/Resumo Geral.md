---
publish: true
---
## 1. Infraestrutura como Código, DevOps e integração contínua

**Infraestrutura como Código (IaC)** é a prática de configurar, provisionar e gerenciar infraestrutura por meio de arquivos de código. Em vez de criar servidores, instalar pacotes e ajustar ambientes manualmente, a equipe descreve o estado desejado do ambiente em scripts ou arquivos declarativos.

Os principais benefícios da IaC são:

- **automação** de tarefas repetitivas;
- **escalabilidade**, pois recursos podem ser criados conforme a demanda;
- **consistência**, porque os ambientes são reproduzidos com as mesmas configurações;
- **redução de erros manuais**;
- **rastreabilidade**, já que a infraestrutura passa a ser versionada e documentada;
- **agilidade** na preparação de ambientes de desenvolvimento, teste, homologação e produção.

A IaC pode ser aplicada a recursos físicos, virtuais e em nuvem. Ela não se limita a servidores locais nem impede o uso de containers. Pelo contrário: containers, como os do **Docker**, complementam a IaC ao empacotar aplicações e dependências em unidades isoladas e portáveis.

Ferramentas citadas nas notas:

- **Chef:** gerenciamento baseado em políticas.
- **Puppet:** gerenciamento orientado a modelos.
- **Ansible:** automação sequencial, geralmente via SSH.
- **Terraform:** provisionamento declarativo da infraestrutura.

Na cultura **DevOps**, desenvolvimento e operações deixam de atuar em silos. A responsabilidade pelo ciclo de vida do software passa a ser compartilhada: desenvolvimento, testes, implantação, operação e monitoramento.

A **integração contínua (CI/IC)** ocorre quando desenvolvedores enviam alterações frequentemente para um repositório compartilhado. Cada alteração dispara etapas automatizadas, como compilação, testes e verificação de qualidade. Isso reduz conflitos de integração, encontra falhas cedo e torna o desenvolvimento mais previsível.

A **entrega contínua (EC)** começa após a integração contínua: o código validado é preparado automaticamente para ambientes de teste, desenvolvimento ou produção.

Resumo:

- DevOps integra pessoas, processos e ferramentas.
- CI verifica continuamente o código integrado.
- EC prepara o código validado para entrega.
- IaC garante ambientes padronizados, reproduzíveis e escaláveis.

## 2. Internet das Coisas, plataformas IoT e atualizações OTA

**Internet das Coisas (IoT)** é a conexão de objetos físicos à internet para coleta, transmissão, análise e uso de dados. Uma solução IoT normalmente envolve sensores, atuadores, conectividade, software, armazenamento, processamento e uma interface de usuário.

Estrutura básica:

1. **Dispositivo transmissor:** envia dados ou comandos.
2. **Meio de comunicação:** geralmente a internet ou outra rede.
3. **Dispositivo receptor:** recebe dados ou comandos e executa ações.

Em IoT, sensores observam o ambiente e sistemas conectados transformam os dados em decisões ou ações. Na agricultura inteligente, por exemplo, sensores podem medir a umidade do solo e acionar automaticamente a irrigação, otimizando o uso da água.

Categorias de aplicação:

- **IoT de consumo:** casas inteligentes, relógios, eletrodomésticos.
- **IoT comercial:** frotas, saúde, seguradoras.
- **IoT industrial:** petróleo, mineração, agricultura, fábricas inteligentes.
- **IoT de infraestrutura:** cidades inteligentes, redes elétricas, mobilidade urbana.

Uma **plataforma IoT** integra hardware, conectividade, software e interface. Ela coleta dados dos dispositivos, transmite para servidores ou nuvem, armazena, processa, analisa e apresenta informações em dashboards ou aciona respostas automáticas.

Requisitos importantes de uma plataforma IoT:

- escalabilidade de conexões;
- confiabilidade na ingestão e processamento de dados;
- personalização por APIs, bibliotecas e regras de negócio;
- suporte a protocolos como MQTT, HTTP, HTTPS, CoAP, REST e WebSockets;
- segurança com SSL/TLS, autenticação e autorização;
- suporte técnico e atualizações;
- custo operacional compatível com o projeto.

Um item como “hardware de altíssima performance obrigatório no nó sensor final” não é requisito prioritário de software da plataforma. Além disso, muitos sensores IoT têm processamento, memória e energia limitados.

**Atualizações OTA (Over The Air)** são atualizações remotas realizadas pela rede, sem contato físico com o dispositivo.

- **SOTA (Software Over The Air):** atualiza aplicativos e componentes de software não críticos.
- **FOTA (Firmware Over The Air):** atualiza firmware ou sistema básico do dispositivo.

Segurança em OTA exige:

- acesso autorizado;
- privacidade da comunicação cliente-servidor;
- integridade do pacote;
- autenticidade, normalmente por verificação de assinatura.

## 3. Segurança e privacidade em IoT

A segurança em IoT protege dispositivos, redes, aplicações, serviços em nuvem e dados contra acesso indevido, alteração, interrupção e uso não autorizado.

Principais riscos:

- dispositivos com pouca memória, bateria e processamento;
- senhas fracas ou padrões de fábrica;
- falta de atualização de firmware;
- credenciais roubadas;
- ataques DoS e DDoS;
- interceptação de comunicação (*man-in-the-middle*);
- injeção SQL;
- redes falsas do tipo *Evil Twin*;
- falhas em onboarding, middleware e atualização de firmware.

Conceitos essenciais:

- **Confidencialidade:** impedir acesso não autorizado aos dados.
- **Integridade:** garantir que dados não sejam alterados indevidamente.
- **Disponibilidade:** manter serviços funcionando.
- **Autenticação:** confirmar identidade.
- **Autorização:** definir permissões.
- **Auditoria:** registrar e verificar ações.

A criptografia protege o conteúdo contra leitura não autorizada. Funções *hash* ajudam a verificar integridade. Em IoT, a segurança deve entrar desde o projeto, seguir pelo desenvolvimento e continuar durante o ciclo de vida do dispositivo, especialmente por atualizações OTA.

## 4. Crise do software e Engenharia de Software

A **crise do software** surgiu quando sistemas passaram a ficar mais complexos e o desenvolvimento sem metodologia gerava atrasos, custos altos, erros, manutenção difícil e baixa previsibilidade.

A **Engenharia de Software** responde a esse problema aplicando uma abordagem sistemática, disciplinada e mensurável para desenvolver, operar e manter software.

Ela organiza o trabalho por meio de:

- **processos:** atividades e responsabilidades;
- **métodos:** formas de executar as atividades;
- **ferramentas:** apoio técnico à execução;
- **qualidade:** objetivo central do desenvolvimento.

Software não é apenas código. Ele inclui:

- instruções ou programas;
- estruturas de dados;
- documentação e informações descritivas.

Diferença importante:

- **Hardware** sofre desgaste físico.
- **Software** não se desgasta fisicamente, mas pode se deteriorar quando mudanças sucessivas introduzem erros e aumentam sua complexidade.

## 5. Processo de software e ciclo de vida

**Processo de software** define ==atividades, responsabilidades, produtos de trabalho e critérios==. Ele responde a perguntas como: o que será feito, por quem, com quais artefatos e com quais critérios de qualidade.

**Ciclo de vida** ==organiza essas atividades ao longo do tempo==, desde a concepção até a manutenção. Ele define a estrutura metodológica do desenvolvimento.

Exemplo:

- Definir levantamento, análise, projeto, implementação, testes e manutenção é definir o processo.
- Escolher se essas atividades ocorrerão em cascata, de forma incremental ou em ciclos ágeis é definir o ciclo de vida.

## 6. Modelos de ciclo de vida: cascata, prototipação, espiral e incremental

O **modelo cascata** organiza o desenvolvimento em etapas sequenciais: comunicação, planejamento, modelagem, construção e entrega. É adequado quando os requisitos são conhecidos, estáveis e bem documentados. Sua limitação é a baixa flexibilidade para mudanças e o feedback tardio do cliente.

A **prototipação** usa versões preliminares para ajudar cliente e equipe a compreenderem melhor os requisitos. É útil quando o cliente sabe o objetivo geral, mas ainda não consegue detalhar todas as necessidades.

O **modelo espiral** combina ciclos iterativos, evolução progressiva e análise de riscos. A cada ciclo, o produto evolui e o projeto é reavaliado.

O **modelo iterativo e incremental** constrói o sistema em partes funcionais. Cada incremento adiciona valor ao produto. Essa abordagem permite entregas progressivas, incorporação de mudanças, validação antecipada da arquitetura e redução de riscos.

Regra prática:

- Requisitos estáveis e bem definidos: **cascata** pode funcionar melhor.
- Requisitos incertos, feedback necessário e entregas parciais: **iterativo/incremental ou ágil** é mais adequado.

## 7. Engenharia de Requisitos

A Engenharia de Requisitos busca compreender o problema do cliente e definir o que o sistema deve oferecer.

Etapas principais:

- **concepção:** entender o problema e o escopo;
- **levantamento:** coletar necessidades;
- **elaboração/análise:** refinar e organizar os requisitos;
- **negociação:** priorizar considerando custo, prazo e risco;
- **especificação:** documentar requisitos;
- **validação:** revisar ambiguidades, omissões e inconsistências;
- **gestão:** controlar mudanças ao longo do projeto.

Técnicas de levantamento:

- reuniões;
- entrevistas abertas e fechadas;
- análise de cenários;
- casos de uso;
- etnografia.

Tipos de requisitos:

- **Requisito funcional:** descreve o que o sistema deve fazer. Exemplo: permitir consultar pedidos.
- **Requisito não funcional:** descreve qualidade, restrição ou condição de funcionamento. Exemplo: responder em menos de cinco segundos.
- **Restrição:** limita escolhas técnicas ou ambientais. Exemplo: operar na infraestrutura já definida pela organização.
- **Regra de negócio:** condição do domínio que existe independentemente do software. Exemplo: uma disciplina exige pré-requisito.

## 8. Levantamento, análise e projeto

Essas três atividades se encadeiam:

1. **Levantamento:** identifica necessidades e registra requisitos.
2. **Análise:** refina os requisitos, relaciona elementos do domínio, verifica conflitos e entende impactos.
3. **Projeto:** transforma o entendimento em solução técnica, definindo arquitetura, dados, interfaces e componentes.

Em projetos com incerteza, essas atividades não devem ser vistas como etapas congeladas. O feedback de protótipos ou entregas incrementais pode reabrir o levantamento, exigir nova análise e alterar o projeto.

## 9. Manifesto Ágil, Scrum e XP

O **Manifesto Ágil** prioriza:

- indivíduos e interações mais que processos e ferramentas;
- software funcionando mais que documentação abrangente;
- colaboração com o cliente mais que negociação de contratos;
- resposta a mudanças mais que seguir um plano.

Isso não elimina processos, documentação, contratos ou planejamento. Apenas indica que eles não devem impedir a entrega de valor, o feedback e a adaptação.

**Scrum** é um framework para organizar o trabalho em ciclos curtos chamados **Sprints**. Ele usa Product Backlog, Sprint Backlog, reuniões diárias, Product Owner, times auto-organizáveis e incrementos potencialmente entregáveis.

Scrum foca principalmente em:

- organização do trabalho;
- priorização;
- acompanhamento;
- adaptação;
- entregas frequentes.

**Extreme Programming (XP)** é uma metodologia ágil com foco maior nas práticas técnicas de desenvolvimento e qualidade do código.

Práticas importantes da XP:

- histórias de usuário;
- TDD;
- programação em pares;
- refatoração;
- integração contínua;
- propriedade coletiva do código;
- cliente presente;
- entregas frequentes;
- código padronizado.

Relação entre Scrum e XP:

- Scrum organiza o fluxo de trabalho.
- XP fortalece a construção técnica do software.
- Eles são complementares, não excludentes.

## 10. Projeto de software e UML

O **projeto de software** transforma requisitos em uma solução técnica. Enquanto os requisitos dizem **o que** o sistema deve fazer, o projeto define **como** ele será construído.

Dimensões do projeto:

- **dados/classes:** informações e estruturas usadas pelo sistema;
- **arquitetura:** organização geral dos subsistemas e componentes;
- **interfaces:** comunicação com usuários, sistemas externos e componentes internos;
- **componentes:** módulos internos e detalhes de funcionamento;
- **implantação:** distribuição no ambiente físico ou computacional.

Princípios de bom projeto:

- abstração;
- modularidade;
- encapsulamento;
- alta coesão;
- baixo acoplamento;
- refinamento gradual;
- refatoração;
- projeto para teste.

Diagramas UML citados:

- **casos de uso:** atores e funcionalidades;
- **atividades:** fluxos, decisões e exceções;
- **sequência:** interações em ordem temporal;
- **comunicação:** ligações entre objetos e mensagens;
- **classes:** estrutura de dados e relacionamentos;
- **estados:** ciclo de vida de objetos ou componentes.

## 11. Síntese para memorização

- **IaC:** infraestrutura descrita em código, automatizada, escalável e reproduzível.
- **DevOps:** integração entre desenvolvimento e operações, com colaboração e automação.
- **CI:** integrar, compilar e testar frequentemente.
- **EC:** manter o código validado pronto para entrega.
- **IoT:** objetos conectados que coletam, transmitem e usam dados.
- **OTA:** atualização remota; SOTA atualiza software, FOTA atualiza firmware.
- **Plataforma IoT:** conecta dispositivos, armazena, processa, analisa e apresenta dados.
- **Engenharia de Software:** processos, métodos e ferramentas para criar software com qualidade.
- **Processo:** define atividades e responsabilidades.
- **Ciclo de vida:** organiza as atividades no tempo.
- **Cascata:** bom para requisitos estáveis.
- **Iterativo/incremental:** bom para incerteza, feedback e evolução.
- **Requisito funcional:** o que o sistema faz.
- **Requisito não funcional:** qualidade, desempenho, segurança ou restrição.
- **Restrição:** limitação obrigatória imposta ao projeto.
- **Scrum:** organiza Sprints e entregas.
- **XP:** práticas técnicas como TDD, pares e integração contínua.
- **Projeto:** transforma requisitos em arquitetura, interfaces, componentes e dados.