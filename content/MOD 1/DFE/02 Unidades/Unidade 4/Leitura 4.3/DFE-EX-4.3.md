---
publish: true
---

### 1.

> [!question] Exercício 1
> A crescente demanda por entregas frequentes e confiáveis em sistemas de software levou à consolidação de práticas que integram desenvolvimento, testes e operações em um fluxo contínuo e automatizado. Nesse contexto, a cultura DevOps e os pipelines de integração contínua e entrega contínua (CI/CD) tornaram-se fundamentais para reduzir falhas em produção, padronizar ambientes e acelerar o ciclo de feedback. Essas práticas defendem que cada alteração no código-fonte seja automaticamente validada por meio de testes, análises estáticas e processos, resultando em artefatos prontos para implantação com mínimo risco operacional.
>
> Uma equipe de desenvolvimento front-end está configurando um pipeline de integração contínua (CI) para uma nova aplicação corporativa em React. O líder técnico definiu um requisito de desempenho rigoroso: o código escrito em TypeScript deve ser convertido para JavaScript ES5 para garantir compatibilidade, todos os comentários e espaços em branco devem ser removidos e módulos não utilizados devem ser excluídos automaticamente antes que qualquer arquivo seja transferido para os servidores de nuvem.
>
> Durante a execução do pipeline automatizado, essa transformação falhou, impedindo a geração da pasta `/dist` contendo os arquivos estáticos otimizados.
>
> Com base na descrição das tarefas de transformação (transpilação, minificação e tree-shaking), assinale a alternativa que identifica corretamente a etapa do ciclo de vida onde essa falha ocorreu:
>
> **A.**  
> Commit.
>
> **B.**  
> Build.
>
> **C.**  
> Deploy.
>
> **D.**  
> Release.
>
> **E.**  
> Staging.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> **A.** Errada. `Commit` é a etapa de registro das alterações no repositório, não a fase em que ocorre transpilação e geração de artefatos.
>>
>> **B.** Certa. Transpilação, minificação, tree-shaking e geração da pasta `/dist` fazem parte da etapa de **build**.
>>
>> **C.** Errada. `Deploy` acontece depois que os artefatos já foram gerados com sucesso.
>>
>> **D.** Errada. `Release` está relacionada à disponibilização controlada da versão, não à transformação do código-fonte.
>>
>> **E.** Errada. `Staging` é um ambiente de validação, e não a etapa específica em que o código é compilado e otimizado.
>>
>>No ciclo de vida de desenvolvimento de _software_ moderno, a etapa de _Build_ (construção) é responsável por transformar o código-fonte legível por humanos (escrito em linguagens como TypeScript, Sass ou JavaScript moderno) em artefatos otimizados para máquinas e navegadores. É exclusivamente nessa fase que ocorrem transpilação, minificação e _Tree-Shaking_. Nesse processo, a transpilação é justificada por ferramentas como Babel, que convertem sintaxe moderna para versões compatíveis com navegadores antigos; a minificação se utiliza de ferramentas como Terser, que removem caracteres desnecessários para reduzir o tamanho do _download_; e _Tree-Shaking_, com o bundler (ex.: Webpack) analisa o grafo de importações e remove o código morto não utilizado.
>>
>>O registro do código no repositório (_commit_) apenas versiona as alterações e não executa qualquer transformação.
>>
>>A transferência dos arquivos para servidores de nuvem (_deploy_) ocorre somente após os artefatos já estarem prontos, o que caracteriza a etapa de implantação.
>>
>>A organização formal de versões (_release_) e sua disponibilização controlada corresponde à liberação, não à geração dos arquivos.
>>
>>Já o ambiente de homologação (_staging_) serve para validação do comportamento da aplicação e não para processar ou gerar os arquivos estáticos.

### 2.

> [!question] Exercício 2
> Em aplicações web de grande alcance, como portais de notícias, a variabilidade da carga de acesso é um desafio central da infraestrutura de software. Eventos em tempo real podem gerar aumentos súbitos e imprevisíveis no número de requisições, exigindo que o sistema responda com alta disponibilidade e desempenho contínuo. Nesse contexto, a computação em nuvem introduz mecanismos de elasticidade que permitem adaptar dinamicamente os recursos computacionais à demanda, sendo a escalabilidade horizontal uma das estratégias mais utilizadas para garantir resiliência e continuidade do serviço em cenários de pico de tráfego.
>
> Considere um portal de notícias que experimenta picos imprevisíveis de acesso durante a cobertura de eventos em tempo real. Para esse cenário, a equipe de engenharia optou por migrar de um servidor VPS único para uma arquitetura de computação em nuvem com escalabilidade horizontal.
>
> Avalie as asserções a seguir e a relação proposta entre elas.
>
> **I.** A escolha pela escalabilidade horizontal em ambiente de nuvem é a estratégia técnica mais adequada para lidar com picos de tráfego repentinos e intensos.
>
> **PORQUE**
>
> **II.** A escalabilidade horizontal permite adicionar elasticamente novas instâncias de servidores (réplicas) para dividir a carga de trabalho automaticamente, sem a necessidade de desligar o sistema para realizar upgrades de hardware.
>
> A respeito dessas asserções, assinale a opção correta:
>
> **A.**  
> As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.
>
> **B.**  
> As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.
>
> **C.**  
> A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.
>
> **D.**  
> A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.
>
> **E.**  
> As asserções I e II são proposições falsas.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A.**
>>
>> **A.** Certa. As duas asserções são verdadeiras, e a II explica corretamente por que a escalabilidade horizontal é adequada para picos de acesso.
>>
>> **B.** Errada. A II não apenas é verdadeira, como também justifica diretamente a I.
>>
>> **C.** Errada. A II é verdadeira.
>>
>> **D.** Errada. A I também é verdadeira.
>>
>> **E.** Errada. Ambas as proposições são verdadeiras.
>>
>>A nuvem oferece a elasticidade necessária para tráfego variável. O mecanismo _Scale Out_ torna a nuvem adequada, consistindo na capacidade de multiplicar máquinas sem _downtime_, ao contrário da escalabilidade vertical (_Scale Up_) típica de VPS, que exige reinicialização e tem teto físico. 
>>
>>A interpretação de que a escalabilidade horizontal não seria adequada ignora o papel central da replicação de instâncias na absorção de carga. Já a ideia de que essa estratégia exigiria interrupção do sistema confunde esse modelo com a escalabilidade vertical, que depende de _upgrades_ de _hardware_. Negar a validade de ambas as asserções desconsidera princípios fundamentais da computação em nuvem amplamente consolidados na literatura e na prática de engenharia de _software_.
>>
>>Dessa forma, a asserção II explica corretamente o motivo pelo qual a estratégia descrita na asserção I é a mais adequada para o cenário apresentado.

### 3.

> [!question] Exercício 3
> Ao hospedar uma Single Page Application (SPA) desenvolvida com frameworks como React ou Vue.js, a navegação entre telas ocorre virtualmente no navegador do cliente. No entanto, se um usuário tentar acessar diretamente uma URL profunda (ex.: `meusite.com/contato`), um servidor de hospedagem tradicional pode retornar um erro 404, pois não existe um arquivo físico naquele caminho.
>
> Para corrigir esse comportamento em plataformas de hospedagem modernas, é necessário configurar o servidor para realizar um ______________, redirecionando todas as requisições desconhecidas para o arquivo `index.html`.
>
> Assinale a alternativa que completa corretamente a lacuna:
>
> **A.**  
> Balanceamento de carga.
>
> **B.**  
> DNS Propagation.
>
> **C.**  
> SSL Handshake.
>
> **D.**  
> Rewrite (ou fallback).
>
> **E.**  
> Tree-shaking.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: D.**
>>
>> **A.** Errada. Balanceamento de carga distribui tráfego entre servidores, mas não resolve rotas internas de uma SPA.
>>
>> **B.** Errada. `DNS propagation` trata da propagação de registros DNS, sem relação com o tratamento de rotas do front-end.
>>
>> **C.** Errada. `SSL handshake` é parte do estabelecimento de conexão segura, não do roteamento de URLs da aplicação.
>>
>> **D.** Certa. O `rewrite` ou `fallback` redireciona rotas desconhecidas para o `index.html`, permitindo que o roteador da SPA resolva a navegação.
>>
>> **E.** Errada. `Tree-shaking` é uma técnica de otimização de código, não de roteamento no servidor.
>>
>>Por padrão, servidores _web_ buscam um arquivo físico correspondente ao caminho da URL (ex.: ao acessar /contato, buscam por contato.html). Como em uma SPA esse arquivo físico não existe para cada rota, o servidor retornaria um erro 404. O _rewrite_ (ou _fallback_) é a configuração correta porque instrui o servidor a ignorar a ausência do arquivo físico e servir o index.html para qualquer rota desconhecida. Isso permite que a aplicação seja carregada e que o roteador do _framework_ JavaScript (carregado junto ao index.html) assuma o controle, leia a URL e exiba a interface correta para o usuário.
>>
>>O balanceamento de carga distribui requisições entre múltiplos servidores, mas não resolve erros de rota em aplicações SPA.
>>
>>A propagação de DNS está relacionada à resolução de nomes de domínio, sem impacto no tratamento de URLs internas.
>>
>>O _handshake_ SSL refere-se à negociação de conexões seguras, não ao mapeamento de rotas.
>>
>>Já o _tree-shaking_ é uma técnica de otimização de código utilizada durante a construção da aplicação e não interfere no comportamento do servidor em tempo de execução.

### 4.

> [!question] Exercício 4
> A crescente complexidade dos sistemas de software e a necessidade de entregas frequentes e confiáveis levaram à consolidação de práticas que integram desenvolvimento, testes e operações de forma automatizada. Nesse contexto, metodologias modernas de engenharia de software passaram a enfatizar a automação completa do ciclo de entrega, desde a validação contínua do código-fonte até a implantação em ambientes de produção com alta disponibilidade. Essas práticas visam reduzir erros humanos, garantir a qualidade do software e acelerar o time-to-market.
>
> A equipe de engenharia da TechFin, uma fintech em expansão, decidiu modernizar seu processo de publicação de software para reduzir a incidência de bugs em produção e acelerar o tempo de entrega de novas funcionalidades. Para isso, implementaram um fluxo de trabalho totalmente automatizado que se inicia imediatamente quando um desenvolvedor realiza um `git push` para a ramificação `main` do repositório remoto. Na sequência, um servidor de automação provisiona um ambiente isolado para executar ferramentas de análise estática (Linting) e uma bateria de testes unitários e de integração; caso ocorra qualquer falha, o processo é abortado e o time é notificado. Com a aprovação nos testes, o sistema executa a transpilação do código e gera os artefatos finais, como imagens Docker para o Back-End e arquivos estáticos otimizados para o Front-End. Por fim, o artefato do Front-End é enviado automaticamente para uma CDN global, enquanto a nova imagem do Back-End substitui as antigas no cluster Kubernetes sem tempo de inatividade (zero downtime).
>
> Com base na interpretação desse cenário técnico, assinale a alternativa que identifica corretamente a metodologia de engenharia de software que integra todas essas etapas de automação, desde a verificação do código até a sua disponibilização em produção:
>
> **A.**  
> Metodologia ágil (scrum) com deploy manual via FTP.
>
> **B.**  
> Integração contínua e entrega contínua (CI/CD).
>
> **C.**  
> Virtualização de servidores com escalabilidade vertical.
>
> **D.**  
> Testes A/B com monitoramento de performance (APM).
>
> **E.**  
> Gestão de mudanças ITIL com aprovação manual.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: B.**
>>
>> **A.** Errada. Scrum é uma metodologia ágil, mas não descreve esse fluxo técnico automatizado, e deploy manual via FTP contraria o cenário apresentado.
>>
>> **B.** Certa. O cenário descreve claramente um pipeline de **CI/CD**, com validação contínua, build automatizado e deploy automatizado.
>>
>> **C.** Errada. Escalabilidade vertical trata de aumentar recursos de uma máquina, não de automatizar todo o ciclo de entrega.
>>
>> **D.** Errada. Testes A/B e APM são práticas complementares, mas não representam a metodologia central descrita.
>>
>> **E.** Errada. Aprovação manual e processo ITIL não correspondem ao fluxo automatizado e contínuo apresentado.
>>
>>O cenário descreve classicamente um _pipeline_ de CI/CD (_continuous integration/continuous delivery/deployment_). A automação de testes e validação frequente do código versionado representa a integração contínua (CI). Já a automação da geração do artefato e sua publicação imediata e automática no ambiente de produção representa a entrega/implantação contínua (CD).
>>
>>Metodologias ágeis como Scrum organizam o trabalho em ciclos iterativos, mas não definem automação de _build_ e _deploy_.
>>
>>Virtualização com escalabilidade vertical trata apenas do aumento de recursos de um único servidor, sem automação do ciclo de entrega.
>>
>>Testes A/B e monitoramento de _performance_ são práticas pontuais de avaliação, não de publicação contínua.
>>
>>Já processos baseados em ITIL com aprovação manual são incompatíveis com a automação e a velocidade descritas no cenário.
### 5.

> [!question] Exercício 5
> O modelo de desenvolvimento de aplicações web evoluiu significativamente com a adoção de Single Page Applications (SPAs), nas quais grande parte da lógica de navegação e renderização ocorre no lado do cliente. Embora esse modelo proporcione melhor experiência ao usuário e maior fluidez na interação, ele impõe requisitos específicos à infraestrutura de hospedagem. Em especial, a configuração adequada do servidor ou da plataforma de nuvem torna-se essencial para garantir que requisições diretas a URLs internas sejam corretamente tratadas, evitando falhas de acesso e assegurando a disponibilidade da aplicação independentemente da forma como o usuário navega pelo sistema.
>
> Avalie as asserções a seguir e a relação proposta entre elas.
>
> **I.** Em aplicações front-end modernas publicadas como Single Page Applications (SPAs), é necessário configurar regras de rewrite ou fallback no serviço de hospedagem para evitar erros 404 ao acessar rotas diretamente pela URL.
>
> **PORQUE**
>
> **II.** Em SPAs, a navegação entre páginas é controlada pelo roteador do framework JavaScript no lado do cliente, e não pela existência de arquivos físicos correspondentes no servidor.
>
> A respeito dessas asserções, assinale a opção correta:
>
> **A.**  
> As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.
>
> **B.**  
> As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.
>
> **C.**  
> A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.
>
> **D.**  
> A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.
>
> **E.**  
> As asserções I e II são proposições falsas.
>
>> [!question]- Resposta
>>
>> **Alternativa correta: A.**
>>
>> **A.** Certa. As duas asserções são verdadeiras, e a II explica corretamente por que o `rewrite/fallback` é necessário em SPAs.
>>
>> **B.** Errada. A II é, sim, justificativa da I.
>>
>> **C.** Errada. A II não é falsa.
>>
>> **D.** Errada. A I também é verdadeira.
>>
>> **E.** Errada. Ambas as proposições são verdadeiras.
>>
>>Em aplicações do tipo Single Page Applications (SPAs) no contexto de hospedagem _web_ moderna, o servidor _web_ é responsável apenas por entregar o arquivo principal da aplicação, enquanto o controle de navegação entre telas ocorre inteiramente no navegador, por meio do roteador do _framework_ JavaScript utilizado.
>>
>>Quando um usuário acessa diretamente uma rota interna da aplicação por meio da URL, o servidor tenta localizar um arquivo físico correspondente. Como esse arquivo não existe, ocorre um erro de requisição, geralmente identificado como _404_. Para evitar esse comportamento, é necessário configurar regras de _rewrite_ ou _fallback_ no serviço de hospedagem, redirecionando todas as rotas não reconhecidas para o arquivo inicial da aplicação, permitindo que o roteador do lado do cliente interprete corretamente a navegação.
>>
>>Negar a necessidade dessa configuração ignora o funcionamento do modelo de navegação das SPAs. Já a ideia de que o servidor gerencia diretamente as rotas internas confunde aplicações SPA com aplicações tradicionais baseadas em múltiplos arquivos HTML. Portanto, considerar ambas as afirmações falsas desconsidera tanto o papel do roteamento no lado do cliente quanto a necessidade prática de configuração do servidor para evitar erros de acesso.
>>
>>Assim, a asserção II explica corretamente o motivo pelo qual a configuração mencionada na asserção I é necessária.