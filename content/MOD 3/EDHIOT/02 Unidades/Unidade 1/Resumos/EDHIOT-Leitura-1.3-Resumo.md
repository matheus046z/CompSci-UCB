---
publish: true
---
# Entrega contínua e testes automatizados

## Objetivos

- Compreender a entrega contínua no contexto da cultura DevOps.
- Diferenciar integração contínua (IC) e entrega contínua (EC).
- Conhecer os principais tipos de testes automatizados.
- Identificar os benefícios da automação para a qualidade e a entrega de software.

## Palavras-chave

- DevOps
- Integração contínua
- Entrega contínua
- Testes automatizados
- Automação
- Qualidade de software

## 1. Entrega contínua

O movimento **DevOps** procura aproximar e integrar as equipes de desenvolvimento (**Dev**) e operações (**Ops**). Essa união permite acelerar o desenvolvimento e a implantação de sistemas, melhorar a comunicação entre os profissionais e manter ambientes e repositórios compartilhados e atualizados.

Em uma cultura DevOps madura, as implantações deixam de ser eventos excepcionais, demorados e arriscados. Elas podem ocorrer durante o horário normal de trabalho, de maneira frequente e confiável, sem causar interrupções perceptíveis aos usuários.

Duas práticas são fundamentais para alcançar esse objetivo:

- **Integração contínua (IC):** automatiza a integração, a compilação e os testes das alterações enviadas ao repositório compartilhado.
- **Entrega contínua (EC):** disponibiliza o código validado para os ambientes de teste, desenvolvimento ou produção, mantendo-o pronto para liberação.

A entrega contínua é uma abordagem na qual o software é desenvolvido em períodos curtos e pode ser liberado de maneira frequente e confiável. As modificações são entregues incrementalmente, diminuindo os riscos associados a grandes atualizações.

### 1.1 Integração contínua e entrega contínua

A integração contínua ocorre quando os desenvolvedores enviam alterações ao repositório compartilhado. A partir desse envio, ferramentas automatizadas realizam atividades como:

1. Obtenção da versão atualizada do código;
2. Compilação do sistema;
3. Execução dos testes automatizados;
4. Identificação de falhas;
5. Comunicação dos resultados à equipe.

A entrega contínua começa depois que o código passa pelas verificações da integração contínua. Seu objetivo é automatizar a preparação e o envio da aplicação para o ambiente apropriado.

O fluxo pode ser representado da seguinte maneira:

**Alteração do código → repositório compartilhado → compilação → testes automatizados → validação → entrega ao ambiente**

A combinação entre IC e EC produz um processo mais rápido e eficaz, caracterizado pela automação e pelo monitoramento durante todo o ciclo de vida do software, desde a integração até a entrega e a implantação.

> [!important] Diferença fundamental
> A **integração contínua** verifica continuamente as alterações incorporadas ao código. A **entrega contínua** mantém o software validado e pronto para ser liberado nos ambientes apropriados.

## 2. Testes automatizados

Os testes automatizados verificam automaticamente se o software atende aos padrões de qualidade, às funcionalidades estabelecidas nos requisitos e às expectativas dos usuários.

A automação permite que os testes sejam repetidos com rapidez sempre que uma alteração é realizada. Isso reduz a possibilidade de erros, aumenta a confiança da equipe e favorece entregas frequentes.

Os testes apresentados no conteúdo são classificados em três níveis:

### 2.1 Testes de unidade

Os testes de unidade verificam pequenas partes isoladas do código, como funções, métodos ou classes.

Suas principais características são:

- são executados em grande quantidade;
- apresentam menor abrangência individual;
- são rápidos;
- possuem menor custo de execução;
- facilitam a identificação da origem de uma falha;
- geralmente são totalmente automatizados.

Um teste de unidade pode, por exemplo, chamar uma função com determinados valores e verificar se o resultado retornado corresponde ao resultado esperado.

### 2.2 Testes de integração

Os testes de integração verificam se diferentes partes, módulos ou serviços do sistema funcionam corretamente quando utilizados em conjunto.

Eles são importantes porque componentes que funcionam isoladamente podem apresentar problemas durante a troca de informações. Esses testes ajudam a identificar:

- incompatibilidades entre módulos;
- erros na comunicação entre componentes;
- problemas de acesso a bancos de dados;
- consequências não intencionais provocadas pela integração;
- falhas na execução conjunta das funcionalidades.

### 2.3 Testes de sistema

Os testes de sistema avaliam o comportamento do software completo, geralmente do ponto de vista do usuário.

Seu objetivo é verificar se o produto atende aos requisitos e às expectativas de uso, permitindo identificar problemas:

- funcionais;
- visuais;
- de navegação;
- de comportamento;
- relacionados à experiência do usuário.

Por abrangerem uma parcela maior do sistema, esses testes tendem a ser mais lentos, complexos e caros.

## 3. Pirâmide de testes

A pirâmide de testes organiza os testes automatizados de acordo com sua quantidade, abrangência, velocidade e custo.

| Nível | Tipo de teste | Quantidade | Velocidade | Custo | Abrangência |
|---|---|---:|---:|---:|---|
| Base | Testes de unidade | Maior | Mais rápidos | Menor | Componentes isolados |
| Centro | Testes de integração | Intermediária | Intermediária | Intermediário | Interação entre componentes |
| Topo | Testes de sistema | Menor | Mais lentos | Maior | Sistema completo |

A base da pirâmide deve conter muitos testes de unidade, pois eles são rápidos e baratos. À medida que se avança em direção ao topo, os testes passam a envolver partes maiores do sistema, tornando-se mais abrangentes, lentos e caros.

> [!note] Interpretação da figura
> A pirâmide recomenda uma grande quantidade de testes pequenos e rápidos na base e uma quantidade menor de testes amplos e complexos no topo. Os testes de integração ocupam a posição intermediária.

A pirâmide não significa que um tipo de teste substitua os demais. Cada nível identifica categorias diferentes de defeitos, razão pela qual os três devem ser utilizados de maneira complementar.

## 4. Automação dos testes no DevOps

O amadurecimento das práticas DevOps exige a automação dos testes ao longo de todo o ciclo de vida do software. Dessa maneira, cada alteração pode ser verificada antes de alcançar os usuários.

A automação contribui para:

- criar, testar e implantar software com maior rapidez;
- detectar defeitos antecipadamente;
- aumentar a confiabilidade das versões;
- reduzir problemas em produção;
- simplificar a resposta a incidentes;
- melhorar a colaboração entre as equipes;
- fornecer feedback rápido aos desenvolvedores;
- manter a qualidade durante entregas frequentes.

Os profissionais responsáveis pelos testes elaboram rotinas capazes de verificar automaticamente o código produzido. Com isso, os desenvolvedores recebem informações rápidas sobre eventuais falhas e podem corrigi-las antes que avancem pelo processo de entrega.

## 5. Benefícios da entrega contínua

Na entrega contínua, as funcionalidades podem ser liberadas assim que estiverem concluídas e validadas. Isso reduz o intervalo entre as versões do software.

Em vez de lançar poucas versões contendo muitas modificações, a organização realiza entregas menores e mais frequentes. Essa prática oferece benefícios como:

- redução dos riscos de cada entrega;
- diminuição do tempo entre desenvolvimento e disponibilização;
- identificação mais rápida de problemas;
- redução dos custos do projeto;
- atualizações incrementais em sistemas que estão em produção;
- ciclos de feedback mais curtos;
- aumento da confiabilidade das versões;
- maior capacidade de responder às necessidades dos usuários.

### 5.1 Desenvolvimento orientado por dados e feedback

Com versões menores e mais frequentes, as novas funcionalidades chegam rapidamente aos usuários. A equipe pode observar dados de utilização e receber opiniões sobre os recursos disponibilizados.

Essas informações ajudam a:

- avaliar se uma funcionalidade atende às necessidades reais;
- identificar oportunidades de melhoria;
- corrigir problemas com rapidez;
- orientar as prioridades das próximas versões;
- tomar decisões baseadas no comportamento e no feedback dos usuários.

Assim, a entrega contínua favorece um desenvolvimento mais iterativo, no qual o produto é aperfeiçoado progressivamente.

### 5.2 Limitações de aplicação

A entrega contínua não deve ser aplicada da mesma forma a todos os tipos de software. Atualizações excessivamente frequentes podem ser inconvenientes em sistemas como:

- aplicações de desktop;
- aplicativos móveis;
- sistemas incorporados em hardware;
- controladores e *drivers* de periféricos.

Nesses casos, é necessário equilibrar a frequência das versões com a experiência do usuário, as limitações técnicas e os riscos associados à atualização.

Como exemplos de diferentes ciclos de lançamento, o conteúdo menciona:

- o navegador **Google Chrome**, com novas versões periódicas;
- a IDE **Eclipse**, com intervalos maiores entre versões;
- o aplicativo **Facebook para Android**, cuja frequência de atualizações foi ampliada.

Esses exemplos demonstram que a periodicidade das entregas depende das características do produto e de seus usuários.

## 6. Relação entre DevOps, entrega contínua e qualidade

A velocidade proporcionada pelo DevOps não significa abandonar a qualidade. Pelo contrário, as entregas frequentes dependem de processos automatizados capazes de validar continuamente o sistema.

A relação entre essas práticas pode ser sintetizada da seguinte forma:

- o **DevOps** integra pessoas, processos e ferramentas;
- a **integração contínua** verifica frequentemente as alterações do código;
- os **testes automatizados** identificam falhas e garantem a qualidade;
- a **entrega contínua** mantém versões validadas prontas para liberação;
- o **feedback dos usuários** orienta a evolução do produto.

## 7. Síntese

A entrega contínua e os testes automatizados são práticas fundamentais da cultura DevOps. A integração contínua compila e testa automaticamente as alterações enviadas ao repositório, enquanto a entrega contínua conduz o código validado aos ambientes apropriados e o mantém pronto para liberação.

Os testes de unidade, integração e sistema exercem funções complementares. Conforme a pirâmide de testes, deve existir uma grande quantidade de testes de unidade rápidos e baratos, uma quantidade intermediária de testes de integração e um número menor de testes de sistema, que são mais abrangentes e custosos.

A aplicação conjunta dessas práticas permite criar, testar e entregar software com mais rapidez, segurança e confiabilidade. Também reduz os riscos de produção, melhora a colaboração entre as equipes e possibilita que o produto evolua a partir de dados e do feedback dos usuários.

## 8. Dúvidas frequentes

# 1

> [!question] O que é a Entrega Contínua (EC)?
>
>> [!question]- Resposta
>>
>> A entrega contínua é uma abordagem de desenvolvimento de software na qual as equipes produzem o código-fonte em períodos curtos e mantêm o sistema pronto para ser lançado de maneira confiável, com riscos reduzidos e depois de validado pelo time.

# 2

> [!question] Qual é a diferença entre Integração Contínua (IC) e Entrega Contínua (EC)?
>
>> [!question]- Resposta
>>
>> A integração contínua ocorre quando um desenvolvedor envia alterações para um repositório compartilhado. Ferramentas automatizadas compilam o código e executam os testes sempre que necessário. A entrega contínua começa onde a integração contínua termina, automatizando a preparação e o envio da aplicação validada para ambientes de teste, desenvolvimento ou produção.

# 3

> [!question] Quais são os benefícios da combinação de Integração Contínua (IC) e Entrega Contínua (EC)?
>
>> [!question]- Resposta
>>
>> A combinação entre IC e EC cria um processo rápido e eficaz de desenvolvimento de software. Ela proporciona automação e monitoramento ao longo do ciclo de vida do sistema, abrangendo a integração, os testes, a entrega e a implantação. Isso reduz riscos, antecipa a identificação de falhas e aumenta a frequência e a confiabilidade das entregas.

# 4

> [!question] O que significa adotar um estilo de desenvolvimento orientado a dados e a feedback?
>
>> [!question]- Resposta
>>
>> Significa utilizar dados de uso e opiniões dos usuários para orientar a evolução do produto. Como a entrega contínua reduz o intervalo entre as versões, são disponibilizadas mais versões com menos funcionalidades em cada uma. Isso permite avaliar rapidamente os resultados, receber feedback e aperfeiçoar as funcionalidades nas entregas seguintes.