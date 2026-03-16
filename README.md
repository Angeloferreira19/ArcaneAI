# 🧙‍♂️ ArcaneAI - RPG AI Assistant

ArcaneAI é um assistente de RPG completo impulsionado por IA. Crie personagens, gere aventuras, NPCs, diálogos e narrativas imersivas com suporte a sistemas como **D&D**, **Tormenta20**, **Cthulhu** e **Gaia**. 

Backend FastAPI com integração Ollama (modelo llama3.2 local) + Frontend React/Vite.

## ✨ **Funcionalidades**

- **🧙 Criação de Personagens**: Interface intuitiva com calculadora HP/Defesa, atributos, backgrounds gerados por IA
- **🎭 Modo Mestre**: Gere encontros, NPCs, cenas e elementos temáticos
- **📖 Narrativa Imersiva**: Histórico de sessões, diálogos e descrições automáticas
- **⚔️ Sistemas Suportados**: D&D, Tormenta20, Cthulhu, Gaia + parsers customizados
- **🎲 Dados & Mecânicas**: Motor de dados integrado
- **🤖 IA Local**: Ollama (llama3.2:1b) com geradores especializados (backgrounds, nomes, NPCs, etc.)
- **🔐 Autenticação**: JWT + Users DB
- **📊 API Completa**: /api/docs (Swagger)

## 🚀 **Início Rápido - Desenvolvimento Local**

```bash
# 1. Clone e instale
git clone <repo> ArcaneAI
cd ArcaneAI

# 2. Backend (Python)
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\\Scripts\\activate  # Windows
pip install -r backend/requirements.txt

# Migrações DB (SQLite local)
alembic upgrade head

# 3. Frontend (Node)
cd frontend
npm install

# 4. RODE - Opção 1: Makefile (recomendado)
make dev
# Backend: http://127.0.0.1:8000 | Frontend: http://localhost:5173

# Ou scripts/dev.sh
./scripts/dev.sh

# Stop
make stop
```

**Ollama é iniciado automaticamente!** (puxa llama3.2:1b se necessário)

## 🐳 **Docker Compose (Produção/Completo)**

```bash
cd deploy
docker compose up -d --build
# Backend: localhost:8000
# Frontend: localhost:3000 
# Ollama: localhost:11434
# Postgres: localhost:5432
```

## 📋 **Pré-requisitos**

| Componente | Versão Mínima |
|------------|---------------|
| Python | 3.10+ |
| Node.js | 20+ |
| Docker | 20+ |
| Ollama | (auto-instalado) |

**Linux Tested**: Ubuntu/Debian

## ⚙️ **Configuração Detalhada**

### Backend
```bash
cd ArcaneAI
pip install -r backend/requirements.txt backend/requirements-dev.txt  # dev optional
alembic upgrade head  # DB migrations
uvicorn backend.main:app --reload --host 127.0.0.1 --port 8000
```
- **DB**: SQLite (`arcane_db.sqlite`) local ou Postgres Docker
- **API Docs**: http://127.0.0.1:8000/api/docs

### Frontend
```bash
cd frontend
npm install
npm run dev  # Vite ~ http://localhost:5173
npm run build  # dist/
```

### Ollama/LLM
- Auto-detecta/inicia Ollama local (`ollama_local_bin/ollama`)
- Model: `llama3.2:1b` (puxa automaticamente)
- Customizável via `.env`:
```
ARCANEAI_LLM_BACKEND=ollama
ARCANEAI_OLLAMA_MODEL=llama3.2:1b
DATABASE_URL=sqlite:///arcane_db.sqlite  # ou postgresql://...
```

## 🏗️ **Arquitetura**

```
┌─────────────────┐    ┌──────────────────┐
│   Frontend      │◄──►│   FastAPI API    │
│ React/Vite/JSX  │    │  /api/characters │
│ - CharacterCreator│   │  /api/llm        │
│ - MasterMode    │    │  /api/narrative  │
└─────────────────┘    └──────┬───────────┘
                             │
                       ┌─────▼──────┐
                       │ PostgreSQL │ ← Alembic migrations
                       │ (ou SQLite)│
                       └─────┬──────┘
                             │
                       ┌─────▼──────┐
                       │   Ollama   │
                       │ llama3.2:1b│ ← Generators 
                       |            |  (NPCs, scenes...)
                       └────────────┘
```

**Models DB**: User, Character (system, hp/def, scores), History, Narrative.

## 🔧 **Scripts Úteis**

```bash
make run-backend     # Backend only
make run-frontend    # Frontend only
make dev             # Full dev (bg backend + fg frontend)
make stop            # Kill processes
./scripts/dev.sh     # Alternative dev script (trap cleanup)
alembic revision ... # DB migrations
```

## 📚 **Endpoints Principais**

| Endpoint | Descrição |
|----------|-----------|
| `POST /api/auth/login` | Autenticação JWT |
| `POST /api/characters` | Criar personagem |
| `GET /api/characters/{id}` | Detalhes |
| `POST /api/llm/generate-npc` | NPC IA |
| `POST /rpg/generate-encounter` | Encontro |
| `/api/docs` | Swagger UI |

## 🤝 **Contribuição**

1. Fork → Clone → Create branch `feat/xyz`
2. `make dev` para testar
3. Commit: `git commit -m \"feat: add npc elf generator\"`
4. PR para `main`

**Issues bem-vindas!** Report bugs/feature requests.

