# 🧙‍♂️ ArcaneAI - RPG Narrativo Persistente com IA

**ArcaneAI** é uma plataforma de RPG narrativo solo/assistido por IA projetada para campanhas longas, com **memória persistente real** e continuidade entre sessões.

Diferente de chatbots tradicionais, o Arcane mantém estado completo da campanha (personagens, eventos, mundo e histórico), permitindo que decisões tenham consequências duradouras e que o mundo evolua de forma consistente.

---

## ✨ Principais Funcionalidades

### **Gestão de Usuários**
- Cadastro e autenticação
- Gerenciamento de perfil

### **Campanhas Persistentes**
- Criação, listagem e continuação de campanhas
- Sessões narrativas (iniciar, pausar e encerrar)
- Resumos automáticos de sessões

### **Personagens**
- Criação e evolução de personagens
- Atributos, backstory e progressão ao longo da campanha

### **Narrativa Dinâmica**
- Interação com narrador virtual via IA
- Histórico completo de mensagens
- Registro de eventos importantes

### **Memória e Continuidade**
- Persistência de eventos e resumos
- Recuperação contextual para manter coerência narrativa
- Adaptação baseada no histórico da campanha

---

## 🏗️ Arquitetura

O projeto segue **arquitetura em camadas** com clara separação de responsabilidades:

- **API Layer** (FastAPI)
- **Service Layer** (lógica de negócio)
- **Domain Layer** (entidades do modelo)
- **Persistence Layer** (MongoDB)
- **AI Integration Layer** (suporte a múltiplos provedores de LLM)

### Modelo de Domínio

![Diagrama de Domínio](attachments/Diagrama%20de%20Dominio%20-%20Arcane.png)

**Entidades principais:**

- **User** — Jogador
- **Campaign** — Aventura persistente
- **Character** — Personagens jogáveis
- **Session** — Sessão de jogo (agrupa interações)
- **Message** — Interações (User / Assistant / System)
- **Event** — Acontecimentos importantes com importância
- **Role** — Enumeração para papéis nas mensagens

---

## 📋 Requisitos

### Funcionais (MVP)
- Cadastro e login
- CRUD de campanhas e personagens
- Sessões narrativas com IA
- Histórico e eventos persistentes
- Geração de respostas narrativas coerentes

### Não Funcionais
- Persistência robusta (MongoDB)
- Arquitetura escalável e modular
- Suporte a múltiplos provedores de LLM
- Execução via Docker
- Segurança (senhas hasheadas + autenticação)

---

## 🛠️ Tecnologias

- **Backend**: Python + FastAPI
- **Banco de Dados**: MongoDB
- **Frontend**: React (em desenvolvimento)
- **IA**: Integração flexível com provedores de LLM (OpenAI, Ollama, Groq, etc.)
- **Infraestrutura**: Docker

---

## 🚀 Como Executar (Início Rápido)

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd ArcaneAI

# Backend
cd backend
python -m venv venv
source venv/bin/activate  # ou venv\Scripts\activate no Windows
pip install -r requirements.txt

# MongoDB (via Docker)
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Variáveis de ambiente
cp .env.example .env

# Executar
uvicorn main:app --reload
```
## ✨ArcaneAI — Onde suas escolhas moldam mundos que nunca esquecem.
