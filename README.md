# 🧙 ArcaneAI
## ✨Onde suas escolhas moldam mundos que nunca esquecem.

> Sistema de RPG Narrativo Inteligente com Memória Persistente e Arquitetura Multi-Agente.

Arcane é uma plataforma de RPG assistida por Inteligência Artificial projetada para criar campanhas persistentes, narrativas dinâmicas e mundos evolutivos.

Diferente de soluções tradicionais baseadas apenas em contexto temporário, o Arcane utiliza um sistema de memória persistente para manter informações relevantes ao longo de múltiplas sessões, permitindo campanhas de longa duração com continuidade narrativa.

---

# 🎯 Objetivo

Criar uma experiência de RPG em que a Inteligência Artificial atua como Mestre de Jogo (Game Master), conduzindo aventuras personalizadas, adaptando a narrativa às escolhas dos jogadores e preservando a evolução do mundo ao longo do tempo.

---

# ✨ Funcionalidades

## 🎮 Sistema de Campanhas

- Criação de campanhas persistentes
- Gerenciamento de sessões
- Histórico narrativo
- Continuidade entre sessões

---

## 👤 Sistema de Personagens

- Criação de personagens
- Evolução de atributos
- Histórico individual
- Associação a campanhas

---

## 🧠 Sistema de Memória

O Arcane separa informações em diferentes níveis de persistência:

### Messages

Histórico completo da interação entre jogador e IA.

### Events

Acontecimentos relevantes registrados durante a campanha.

Exemplos:

- Missões concluídas
- Descoberta de locais
- Combates importantes
- Mudanças políticas

### Memories

Conhecimento consolidado da campanha.

Exemplos:

- "Kael tornou-se aliado do Reino de Eldoria."
- "A cidade de Valenor foi destruída."
- "A Guilda dos Magos considera o grupo uma ameaça."

---

## 🤖 Sistema Multi-Agente

### GameMasterAgent

Responsável pela condução da narrativa.

Funções:

- Interpretar ações dos jogadores
- Gerar respostas narrativas
- Controlar eventos da campanha

### MemoryAgent

Responsável pela gestão do conhecimento da campanha.

Funções:

- Recuperar memórias relevantes
- Consolidar eventos
- Atualizar contexto narrativo

### WorldBuilderAgent

Responsável pela expansão do mundo.

Funções:

- Criação de locais
- Construção de lore
- Geração de conteúdo narrativo

---

# 🏗 Arquitetura

O projeto segue uma Arquitetura em Camadas (Layered Architecture).

```text
Frontend (React)
        ↓
API Layer (FastAPI)
        ↓
Application Layer (Services)
        ↓
Domain Layer
        ↓
Infrastructure Layer
```

---

## Fluxo Principal

```text
Jogador
   ↓
Frontend
   ↓
API
   ↓
NarrativeService
   ↓
MemoryService
   ↓
MemoryAgent
   ↓
GameMasterAgent
   ↓
LLM Provider
   ↓
Resposta ao Jogador
```

---

# 🗄 Modelo de Dados

O Arcane utiliza MongoDB com estratégia 100% referencial.

Coleções principais:

```text
users
campaigns
sessions
characters
messages
events
memories
```

Relacionamentos:

```text
User
 └── Campaign
        ├── Character
        ├── Session
        │      ├── Message
        │      └── Event
        │
        └── Memory
```

---

# ⚙️ Stack Tecnológica

## Backend

- Python
- FastAPI
- MongoDB
- Pydantic

## Frontend

- React
- TypeScript

## Inteligência Artificial

- OpenAI
- Google Gemini

Arquitetura preparada para múltiplos provedores de LLM.

---

# 📂 Estrutura do Projeto

```text
arcane/

├── frontend/
│
├── backend/
│
├── docs/
│   ├── visao.md
│   ├── requisitos.md
│   ├── dominio.md
│   ├── arquitetura.md
│   ├── modelo-logico-banco.md
│   └── roadmap.md
│
└── README.md
```

---

# 🚀 Roadmap

## v0.1 - Fundação

- Estrutura FastAPI
- MongoDB
- Autenticação
- Arquitetura em camadas

## v0.2 - Campanhas

- CRUD de campanhas
- CRUD de personagens

## v0.3 - Sessões

- Sistema de sessões
- Histórico de mensagens
- Registro de eventos

## v0.4 - IA

- LLM Provider
- Integração OpenAI
- Integração Gemini
- GameMasterAgent

## v0.5 - Memória

- MemoryAgent
- MemoryService
- Memórias persistentes

## v0.6 - MVP

- Campanhas completas
- Continuidade narrativa
- Sistema funcional para usuários

---

# 🔥 Diferenciais

- Memória persistente de longo prazo
- Sistema Multi-Agente
- Arquitetura desacoplada
- Suporte a múltiplos provedores de IA
- Preparado para RAG e memória vetorial
- Campanhas de longa duração

---

# 📖 Documentação

Toda a documentação técnica está disponível na pasta:

```text
docs/
```

Incluindo:

- Documento de Visão
- Requisitos
- Modelo de Domínio
- Arquitetura
- Modelo Lógico do Banco
- Roadmap

---
