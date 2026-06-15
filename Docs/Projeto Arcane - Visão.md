# **Documento de Visão \- ArcaneAI**

## **1\. Visão Geral**

Arcane é uma plataforma de RPG narrativo persistente que utiliza modelos de linguagem para conduzir histórias dinâmicas, mantendo memória de longo prazo, evolução do mundo e adaptação ao estilo de jogo do usuário.

O projeto busca oferecer uma experiência de RPG solo ou assistido por IA na qual decisões possuem consequências permanentes, personagens evoluem ao longo do tempo e o mundo reage às ações do jogador de forma consistente.

Diferentemente de sistemas baseados apenas em conversação, o Arcane utiliza mecanismos de persistência e gerenciamento narrativo para garantir continuidade entre sessões, permitindo campanhas extensas e imersivas.

---

## **2\. Problema**

Jogadores de RPG solo e sistemas narrativos baseados em Inteligência Artificial enfrentam desafios relacionados à continuidade das histórias.

Entre os principais problemas observados estão:

* Perda de contexto em campanhas longas;  
* Esquecimento de eventos importantes;  
* Inconsistência narrativa ao longo do tempo;  
* Dificuldade em manter personagens e locais relevantes;  
* Necessidade constante de reintroduzir informações já conhecidas;  
* Pouca adaptação ao estilo individual de cada jogador.

Essas limitações reduzem a imersão e comprometem a experiência de campanhas duradouras.

---

## **3\. Solução Proposta**

O Arcane propõe uma abordagem baseada em memória persistente e gerenciamento estruturado da narrativa.

O sistema registra informações relevantes sobre campanhas, personagens, eventos e preferências dos jogadores, permitindo que esses dados sejam reutilizados em futuras interações.

Além disso, a plataforma é projetada para adaptar a experiência narrativa ao comportamento do usuário, tornando cada campanha única e mais coerente ao longo do tempo.

A Inteligência Artificial atua como um facilitador da narrativa, enquanto a persistência dos dados garante continuidade e consistência da experiência.

---

## **4\. Público-Alvo**

### **Público Primário**

* Jogadores de RPG de mesa;  
* Jogadores de RPG solo;  
* Entusiastas de narrativas interativas;  
* Usuários interessados em experiências assistidas por IA.

  ### **Público Secundário**

* Desenvolvedores interessados em sistemas inteligentes;  
* Pesquisadores de IA aplicada a jogos;  
* Comunidade open source;  
* Estudantes de tecnologia e desenvolvimento de software.  
  ---

  ## **5\. Objetivos do Projeto**

  ### **Objetivos Funcionais**

* Permitir a criação e gerenciamento de campanhas persistentes;  
* Possibilitar a criação de personagens personalizados;  
* Manter histórico narrativo entre sessões;  
* Registrar eventos importantes da campanha;  
* Permitir interação contínua com um narrador virtual;  
* Adaptar a narrativa ao estilo de jogo do usuário.

  ### **Objetivos Técnicos**

* Desenvolver uma arquitetura escalável baseada em serviços;  
* Implementar persistência de dados para campanhas e personagens;  
* Integrar diferentes provedores de modelos de linguagem;  
* Garantir separação clara entre narrativa, memória e persistência;  
* Facilitar futuras expansões da plataforma.  
  ---

  ## **6\. Escopo do MVP**

A primeira versão do Arcane deverá permitir:

### **Usuários**

* Cadastro de usuário;  
* Autenticação;  
* Gerenciamento de perfil.

  ### **Campanhas**

* Criar campanha;  
* Listar campanhas existentes;  
* Continuar campanhas anteriores;  
* Encerrar sessões.

  ### **Personagens**

* Criar personagem;  
* Associar personagem a uma campanha;  
* Consultar informações do personagem.

  ### **Narrativa**

* Enviar ações para o narrador virtual;  
* Receber respostas narrativas;  
* Registrar interações realizadas durante a sessão.

  ### **Memória**

* Armazenar eventos importantes;  
* Recuperar informações relevantes da campanha;  
* Gerar resumos de sessões anteriores.  
  ---

  ## **7\. Funcionalidades Futuras**

  ### **Evolução Narrativa**

* NPCs persistentes;  
* Facções;  
* Sistema de reputação;  
* Missões dinâmicas;  
* Eventos globais do mundo.

  ### **Personalização da Experiência**

* Identificação automática do estilo de jogo;  
* Adaptação da narrativa;  
* Ajuste dinâmico de dificuldade;  
* Preferências de exploração, combate e interpretação.

  ### **Inteligência Artificial**

* Agentes especializados;  
* Criação automática de conteúdo;  
* Geração de mundos;  
* Recuperação semântica de memória;  
* Sistemas avançados de contexto.

  ### **Plataforma**

* Multiplayer;  
* Compartilhamento de campanhas;  
* Interface visual avançada;  
* Aplicativo móvel.  
  ---

  ## **8\. Diferenciais**

O Arcane diferencia-se por:

* Persistência real da narrativa;  
* Continuidade entre sessões;  
* Evolução consistente do mundo;  
* Adaptação ao comportamento do jogador;  
* Arquitetura preparada para múltiplos modelos de linguagem;  
* Independência em relação a um único provedor de IA;  
* Foco em campanhas longas e imersivas.  
  ---

  ## **9\. Restrições e Premissas**

  ### **Restrições**

* Dependência de modelos de linguagem para geração narrativa;  
* Necessidade de armazenamento persistente;  
* Possível limitação de desempenho dependendo do modelo utilizado.

  ### **Premissas**

* O usuário terá acesso à internet ou a um modelo local configurado;  
* Os modelos de linguagem serão utilizados como suporte narrativo;  
* As campanhas poderão ser retomadas a qualquer momento.  
  ---

  ## **10\. Tecnologias Iniciais**

  ### **Backend**

* Python  
* FastAPI

  ### **Banco de Dados**

* MongoDB

  ### **Frontend**

* React

  ### **Infraestrutura**

* Docker

  ### **Integração de IA**

* Sistema de provedores configuráveis para modelos de linguagem.  
  ---

  ## **11\. Critérios de Sucesso**

O MVP será considerado concluído quando um usuário puder:

1. Criar uma conta;  
2. Criar uma campanha;  
3. Criar um personagem;  
4. Iniciar uma sessão narrativa;  
5. Interagir com o narrador virtual;  
6. Encerrar a sessão;  
7. Retornar posteriormente;  
8. Continuar a campanha mantendo contexto, histórico e progressão da história.  
   ---

   ## **12\. Visão de Longo Prazo**

O Arcane busca tornar-se uma plataforma de RPG narrativo persistente capaz de oferecer experiências únicas para cada jogador, utilizando Inteligência Artificial como ferramenta para ampliar a criatividade, a continuidade narrativa e a imersão.

A longo prazo, o sistema deverá ser capaz de manter mundos vivos, personagens memoráveis e histórias adaptadas às escolhas de cada usuário, preservando a sensação de participar de uma campanha conduzida por um mestre de jogo dedicado.