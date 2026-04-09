---
publish: true
---
# Resumo — Processos de Design de IHC I

> [!info] Conceito
> Os processos de design em interação humano-computador (IHC) servem para organizar as fases, atividades e procedimentos usados na criação de interfaces. Cada processo define um ciclo de vida, isto é, uma forma de ordenar o trabalho de design.

Os materiais mostram que o design de IHC existe para ajudar na construção de interfaces melhores para os usuários. Em vez de criar soluções de forma improvisada, o designer utiliza processos que detalham o que deve ser feito, em que ordem e com quais preocupações. Esses processos não são todos iguais: cada um adota um ciclo de vida próprio e, por isso, muda a maneira como requisitos, protótipos, implementação e avaliação aparecem no projeto.

> [!tip] Resumindo
> Processo de design é a organização do trabalho de criação da interface; ciclo de vida é a forma como esse trabalho é distribuído ao longo das etapas.

## Processo de design de IHC

> [!info] Conceito
> O processo de design de IHC busca criar artefatos funcionais, adequados às necessidades dos usuários, reduzindo problemas do artefato atual e melhorando a interação.

O texto-base explica que, em IHC, um artefato é um produto criado para cumprir um propósito. O design entra justamente para analisar esse artefato, entender seus pontos negativos e buscar melhorias. Assim, projetar uma interface não significa apenas desenhar telas, mas pensar em como esse artefato será usado, se atende às necessidades reais das pessoas e se oferece uma experiência satisfatória.

### As três fases principais

> [!info] Conceito
> O processo de design de IHC envolve três fases principais: análise da situação atual, ação ou intervenção e avaliação da ação.

A primeira fase é a **análise da situação atual**, em que o designer observa o artefato existente, investiga necessidades dos usuários, identifica problemas e enxerga oportunidades de melhoria. A segunda fase é a **ação ou intervenção**, quando se propõem e definem soluções para melhorar o artefato ou até substituí-lo por uma nova versão. A terceira fase é a **avaliação da ação**, que não deve acontecer apenas no final: ela acompanha todo o processo para verificar se os critérios de usabilidade e as necessidades dos usuários estão realmente sendo atendidos.

> [!tip] Resumindo
> Primeiro entende-se o problema, depois propõem-se mudanças e, durante todo o caminho, avalia-se se a solução realmente funciona para o usuário.

### Dois pontos de vista sobre o design

> [!info] Conceito
> Os materiais apresentam duas formas de encarar o design: racionalismo técnico e reflexão.

No **racionalismo técnico**, supõe-se que existem métodos e soluções previamente definidos para resolver os problemas de design. Nessa visão, o problema deveria se encaixar em uma situação conhecida, para a qual já haveria uma resposta adequada. Já a **reflexão** entende que nem todo problema pode ser resolvido por fórmulas prontas. Cada situação pode ter características próprias, então o designer precisa analisar o contexto, questionar decisões e pensar criticamente sobre a melhor solução. Os exercícios reforçam essa diferença ao associar racionalismo técnico à crença em soluções predefinidas e reflexão à ideia de que não existe uma única resposta pronta para todo problema de interface.

> [!warning] Atenção
> Racionalismo técnico não significa “design correto”, mas uma visão baseada em regras fixas. Reflexão não é improviso; é análise crítica do contexto para decidir melhor.

## Atividades presentes nos processos de design

> [!info] Conceito
> Os processos de design incluem estudar as ações dos usuários, identificar reclamações, descobrir o que eles desejam fazer com o sistema e usar protótipos para observar reações o quanto antes.

Segundo o material, o designer precisa observar como os usuários realmente usam o sistema, principalmente em ações repetitivas, porque isso revela dificuldades e necessidades concretas. Também é importante ouvir reclamações, entender quais tarefas os usuários gostariam de realizar e criar protótipos cedo, para testar ideias antes de investir demais em uma solução definitiva. Em outras palavras, o design em IHC é orientado pelo uso real e não apenas pela opinião técnica de quem projeta.

> [!tip] Resumindo
> Bons processos de design se apoiam em observação, escuta dos usuários, prototipagem e revisão contínua.

## Ciclos de vida de design em IHC

> [!info] Conceito
> Os principais ciclos de vida apresentados no material são: cascata ou linear, espiral, estrela, iterativo incremental, Eason e Shneiderman.

Os ciclos de vida são formas de organizar o desenvolvimento da interface. Embora mudem de estrutura, todos procuram ==ordenar atividades de análise, projeto, implementação e avaliação==. O que muda é principalmente o grau de sequência, iteração, participação do usuário e importância dada à avaliação em cada modelo.

### Cascata ou linear

> [!info] Conceito
> O ciclo de vida em cascata é sequencial: uma atividade só começa quando a anterior termina.

Nesse modelo, o desenvolvimento segue etapas em ordem, como levantamento de requisitos, projeto, implementação, testes e manutenção. A lógica é linear: conclui-se uma fase para só então avançar à próxima. O problema apontado pelo material é que esse modelo dificulta o retorno a etapas anteriores, o que é ruim quando os requisitos dos usuários ainda não estão bem compreendidos. Os exercícios reforçam isso ao mostrar que o modelo cascata aparece quando há uma reunião inicial com usuários e o próximo contato só ocorre no final, durante testes e manutenção.

> [!warning] Atenção
> O principal limite do cascata é a baixa flexibilidade. Se os requisitos mudarem ou tiverem sido mal entendidos no início, corrigir o projeto tende a ser mais difícil e custoso.

### Espiral

> [!info] Conceito
> O ciclo de vida em espiral surgiu para superar problemas do cascata e introduz **iteração, análise de riscos e prototipagem**.

Esse modelo funciona por repetição de ciclos. Em cada volta da espiral, há planejamento, análise de riscos, desenvolvimento do produto e avaliação do cliente. Assim, a interface evolui gradualmente, e tanto cliente quanto designer conseguem compreender melhor o projeto a cada estágio. A grande contribuição do modelo é aceitar que o design amadurece com revisões sucessivas e que riscos precisam ser avaliados durante o processo.

> [!tip] Resumindo
> A espiral combina evolução progressiva com avaliação e revisão, dando **destaque aos riscos do projeto**.

### Estrela

> [!info] Conceito
> No ciclo de vida em estrela, **a avaliação é o elemento central**, e o processo pode começar em qualquer atividade.

O material destaca esse ciclo como um dos mais conhecidos porque coloca a **avaliação** no centro do processo. As atividades se assemelham às do cascata, mas, ==ao final de cada uma, há avaliação==. Além disso, ==o processo pode começar por qualquer ponto==, como análise de tarefa, requisitos, design conceitual, prototipagem ou implementação. O arquivo de exercícios e o desafio reforçam essa característica ao indicar que, quando os usuários avaliam requisitos, protótipos e implementação ao longo do processo, o modelo adequado é o **estrela**. Também é o modelo recomendado quando a empresa valoriza avaliações exaustivas para reduzir correções após a implantação.

> [!tip] Resumindo
> Se a ideia principal for avaliar continuamente cada etapa do design, o ciclo estrela é o mais adequado.

### Iterativo incremental

> [!info] Conceito
> O ciclo iterativo incremental divide o desenvolvimento em ciclos, repetindo atividades e acrescentando novas partes da interface a cada etapa.

Nesse modelo, requisitos, projeto, implementação, testes, implantação e manutenção reaparecem em vários ciclos. A diferença em relação ao cascata é que, no iterativo incremental, essas atividades não ocorrem uma única vez. A cada novo ciclo, um novo grupo de requisitos é tratado, gerando um incremento no sistema. O material alerta, porém, que esse modelo só funciona bem quando os requisitos podem ser divididos em partes relativamente independentes.

> [!warning] Atenção
> O modelo iterativo incremental **depende de requisitos divisíveis**. Se não for possível separar o sistema em partes, sua aplicação fica comprometida.

### Eason

> [!info] Conceito
> O ciclo de vida de Eason é centrado nas pessoas, no trabalho e na tecnologia, com forte participação dos usuários ao longo do processo.

O texto apresenta o modelo de Eason como parte de uma mudança importante: a ideia de que **um bom design é aquele que satisfaz o usuário** e que clientes e designers devem trabalhar em ambiente colaborativo. Por isso, esse modelo rejeita a lógica em que o **usuário** participa apenas no começo e no fim. Em vez disso, valoriza sua ==presença efetiva durante o desenvolvimento==. O foco central está na relação entre pessoas, tarefas e tecnologia.

> [!tip] Resumindo
> Eason enfatiza design colaborativo e aproximação constante entre usuários, trabalho realizado e tecnologia utilizada.

### Shneiderman

> [!info] Conceito
> O ciclo de vida de Shneiderman se apoia em guidelines, prototipagem e avaliação por especialistas e usuários.

De acordo com o material, esse ciclo parte de três ideias centrais. Primeiro, o designer deve formular princípios e regras de design, chamados de **guidelines**. Segundo, deve usar **ferramentas de prototipagem** para definir a solução. Terceiro, a proposta precisa passar por **avaliações** de pessoas experientes e por **testes com usuários.** É um modelo que articula teoria, ferramentas e validação prática.

> [!tip] Resumindo
> Shneiderman une linhas-guia, protótipos e avaliações especializadas com testes de usuários.

## Usabilidade em processos de design

> [!info] Conceito
> Usabilidade é o elemento de qualidade que expressa a facilidade de uso de um artefato ou sistema para seus usuários.

A usabilidade é tratada como um tema central da IHC. Em linhas gerais, ela mostra o quão fácil é usar uma interface. O texto explica que ela depende do ciclo de vida escolhido, do contexto do projeto, do tempo e dos recursos disponíveis, do grau de inovação da interface e também da experiência e participação dos usuários. Os materiais reforçam que uma boa usabilidade exige condições para que as tarefas sejam realizadas com eficácia, eficiência e satisfação, além de interações otimizadas.

> [!warning] Atenção
> Usabilidade não é apenas “interface bonita” nem somente “facilidade aparente”. Ela está ligada à realização de tarefas com qualidade, rapidez e satisfação.

### Usabilidade, UX e outros termos relacionados

> [!info] Conceito
> A experiência do usuário (UX) é mais ampla que a usabilidade; usabilidade é apenas um dos aspectos da experiência vivida pelo usuário.

A Dica do Professor diferencia claramente os dois termos. **Experiência do usuário** envolve tudo o que a pessoa vivencia ao usar um artefato, e não apenas sua interface. Por isso, alguém pode ter uma experiência positiva ao encontrar um endereço com facilidade em um aplicativo de mapas ou ao concluir um pedido em um app de entrega. Já a **usabilidade** diz respeito ao nível de facilidade percebido durante o uso da interface. Assim, UX é um conceito mais amplo, enquanto usabilidade representa uma parte dessa experiência total. O material também menciona termos correlatos, como **aceitabilidade**, **utilizabilidade** e **ergonomia**.

> [!tip] Resumindo
> UX é a experiência completa; usabilidade é a parte dessa experiência ligada à facilidade de uso.

## Usabilidade nas normas ISO

> [!info] Conceito
> Os materiais citam as normas ISO 9126 e ISO 9241 como referências para o entendimento da usabilidade em software.

A **ISO 9126** foi apresentada como a primeira a usar o termo usabilidade no campo da qualidade de software. Ela inclui a usabilidade entre as características fundamentais de um software de qualidade e detalha aspectos como inteligibilidade, apreensibilidade, operacionabilidade, atratividade e conformidade. Em termos simples, esses critérios tratam de entender a interface, aprender a usá-la, operá-la adequadamente, sentir satisfação ao utilizá-la e verificar se o software está de acordo com normas e exigências.

A **ISO 9241**, por sua vez, define usabilidade como a capacidade de um artefato permitir que usuários alcancem objetivos específicos com **eficácia**, **eficiência** e **satisfação**. O material também esclarece outros termos importantes: usuário é quem interage com o artefato; objetivo é o resultado desejado; tarefa é o conjunto de ações necessárias para atingir esse resultado.

> [!tip] Resumindo
> A ISO 9126 enfatiza características de qualidade do software; a ISO 9241 explica a usabilidade como alcance de objetivos com eficácia, eficiência e satisfação.

## Jakob Nielsen e os elementos da usabilidade

> [!info] Conceito
> Jakob Nielsen é apresentado como um dos principais estudiosos da usabilidade e associa esse conceito à facilidade de uso e à qualidade da experiência do usuário.

Segundo o texto, Nielsen entende a usabilidade como um elemento de qualidade que mostra o quanto uma interface é fácil de usar. Para ele, alguns elementos estão sempre presentes nesse tema: **facilidade de aprendizagem**, **eficiência**, **facilidade de memorização**, **segurança** e **satisfação**. Em linguagem simples, isso significa que uma boa interface deve ser fácil de aprender, permitir produtividade depois do aprendizado, ser fácil de relembrar após um tempo sem uso, ajudar o usuário a evitar ou corrigir erros e proporcionar uma experiência agradável.

O material ainda acrescenta que, no caso da internet, muitos erros dos usuários poderiam ser evitados se os designers facilitassem a localização de informações, a compreensão do conteúdo apresentado na tela, a leitura e a realização de pesquisas. Ou seja, a usabilidade também depende da clareza da informação e da organização da navegação.

> [!tip] Resumindo
> Para Nielsen, uma interface usável é fácil de aprender, eficiente, memorável, segura e satisfatória.

## Metas de usabilidade

> [!info] Conceito
> As metas de usabilidade apresentadas são eficácia, eficiência, segurança, utilidade, aprendizado e memorização.

As metas de usabilidade ajudam a avaliar se uma interface realmente atende às necessidades do usuário. **Eficácia** significa que o sistema faz o que se espera dele e ajuda a resolver os problemas do usuário. **Eficiência** indica que as tarefas são realizadas com rapidez. **Segurança** envolve proteção contra erros e ataques externos. **Utilidade** mostra se o sistema oferece as funcionalidades que o usuário espera. **Aprendizado** revela se a interface é fácil de aprender. **Memorização** indica se o usuário consegue voltar a utilizá-la facilmente depois de um tempo. Os exercícios reforçam essa lógica ao associar, por exemplo, o uso autônomo da interface ao valor dado ao aprendizado e à eficiência.

> [!warning] Atenção
> Não confunda eficácia com eficiência: eficácia é alcançar o objetivo; eficiência é alcançá-lo com rapidez e bom uso de recursos.

## Síntese final

> [!summary] Síntese
> O conteúdo estudado mostra que o design de IHC depende de processos bem definidos, porque eles organizam como a interface será analisada, projetada, implementada e avaliada. O processo geral passa por análise da situação atual, intervenção e avaliação contínua. Entre os ciclos de vida, o cascata é linear e rígido; o espiral introduz iterações, prototipagem e análise de riscos; o estrela coloca a avaliação no centro; o iterativo incremental desenvolve a interface em partes sucessivas; o modelo de Eason enfatiza pessoas, trabalho e tecnologia; e o de Shneiderman articula guidelines, protótipos e avaliação. Em todo esse cenário, a usabilidade aparece como critério central de qualidade, ligada à facilidade de uso, ao alcance de objetivos com eficácia, eficiência e satisfação, e às metas de segurança, utilidade, aprendizado e memorização. A experiência do usuário é mais ampla que a usabilidade, mas depende dela de forma importante.
