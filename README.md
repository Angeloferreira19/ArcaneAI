# 🧙 ArcaneAI
## ✨ Onde suas escolhas moldam mundos que nunca esquecem.

> Sistema de RPG narrativo assistido por IA com autenticação, persistência e base para campanhas futuras.

ArcaneAI é uma plataforma para criar experiências de RPG com narrativa dinâmica e continuidade. O projeto já conta com uma base funcional de autenticação e uma interface inicial, e está organizado para evoluir em fases até virar um MVP completo de campanhas narrativas.

---

## ✅ Status atual do projeto

### Backend
- FastAPI configurado e funcional
- Cadastro de usuário
- Login com JWT
- Endpoint de autenticação protegido
- Persistência com MongoDB
- Hash de senha seguro

### Frontend
- Landing page inicial
- Formulário de login e cadastro
- Fluxo de autenticação integrado à API
- Dashboard básico após login
- Estilização inicial com tema visual próprio

### Infraestrutura
- Docker Compose com backend e MongoDB
- Variáveis de ambiente configuráveis
- Estrutura pronta para expansão

---

## 🎯 Objetivo atual

Criar uma experiência de RPG em que o usuário possa criar conta, entrar no sistema e, no futuro, gerenciar campanhas, personagens e sessões narrativas com apoio de IA.

---

## 🧭 Roadmap em andamento

### Versão 0.1 - Fundação ✅
- Backend com autenticação
- Persistência de usuários
- Frontend inicial de autenticação
- Ambiente local funcional

### Versão 0.2 - Campanhas e Personagens ⏳
- CRUD de campanhas
- CRUD de personagens
- Associação entre usuário, campanha e personagem

### Versão 0.3 - Sessões Narrativas ⏳
- Sessões de jogo
- Histórico de mensagens
- Eventos narrativos

### Versão 0.4+ - IA e memória ⏳
- Integração com provedores de LLM
- Agentes narrativos
- Memória persistente e contexto de campanha

---

## 🛠 Stack utilizada

### Backend
- Python
- FastAPI
- MongoDB
- Pydantic
- JWT

### Frontend
- Next.js
- React
- CSS Modules

### Infraestrutura
- Docker
- Docker Compose

---

## 📂 Estrutura do projeto

```text
backend/
frontend/
Docs/
README.md
docker-compose.yml
```

---

## ▶️ Como executar

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Com Docker
```bash
docker compose up --build
```

---

## 📌 Próximo passo prioritário

Implementar a camada de campanhas e personagens, consolidando a base de autenticação já entregue e avançando para a experiência narrativa principal do produto.

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
