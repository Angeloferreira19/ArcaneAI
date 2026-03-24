# 🧙‍♂️ ArcaneAI - RPG AI System (Dual AI Engine)

ArcaneAI é um sistema completo de RPG assistido por IA com arquitetura dual: uma IA especializada em criação de conteúdo e outra focada em gameplay em tempo real (Modo Mestre).

Projetado para campanhas longas, sessões contínuas e memória persistente usando MongoDB.

---

# ✨ Funcionalidades

## 🧠 Sistema Dual de IA

- IA Criadora (offline/lenta)
  - Mundo (lore)
  - NPCs
  - Itens, cidades, facções
  - Estrutura de campanhas

- IA Mestre (tempo real)
  - Narração dinâmica
  - Interação com jogador
  - Controle de sessão
  - Decisões em tempo real

---

## 🎮 Modos de Jogo

- Oneshot (Caos)
- Campanha (Controle)
- Intensidade Dinâmica (0.0 → 1.0)

---

## 🧩 Sistema de Memória (MongoDB)

Persistência total sem depender de tokens.

Tipos de memória:

- Curto prazo → últimas ações
- Médio prazo → resumo da sessão
- Longo prazo → mundo e eventos

---

## 🤖 IA Local (Ollama)

- Execução local
- Sem custo por uso
- Modelos separados por função

---

# 🏗️ Arquitetura

```
Frontend (React)
      ↓
Backend (FastAPI)
      ↓
 ┌───────────────┬───────────────┐
 │               │               │
IA Mestre     MongoDB       IA Criadora
(tempo real)  (memória)     (conteúdo)
```

---

# 🔄 Fluxo do Sistema

1. IA Criadora gera mundo e conteúdo
2. Dados são salvos no MongoDB
3. IA Mestre roda o jogo em tempo real
4. Backend atualiza estado continuamente

Loop:

Jogador → IA Mestre → Backend → MongoDB → IA Mestre

---

# 🗄️ Estrutura MongoDB

## users

```
{
  "_id": "ObjectId",
  "email": "...",
  "password_hash": "..."
}
```

## characters

```
{
  "nome": "Kael",
  "classe": "Ladino",
  "atributos": {}
}
```

## campaigns

```
{
  "tipo": "campanha",
  "intensidade": 0.3,
  "estado_atual": {}
}
```

---

# ⚙️ Configuração IA (Ollama)

## IA Mestre

```
FROM mistral
PARAMETER num_ctx 32768
PARAMETER temperature 0.8
```

## IA Criadora

```
FROM mistral
PARAMETER num_ctx 65536
PARAMETER temperature 0.6
```

---

# 🚀 Início Rápido

```
git clone <repo>
cd ArcaneAI

python -m venv venv
source venv/bin/activate
pip install -r backend/requirements.txt

# MongoDB
docker run -d -p 27017:27017 mongo

make dev
```

---

# 🔐 Variáveis de Ambiente

```
MONGO_URL=mongodb://localhost:27017
DB_NAME=arcaneai
ARCANEAI_MASTER_MODEL=mistral
ARCANEAI_CREATOR_MODEL=mistral
```

---

# 📚 Endpoints

- /api/master/action
- /api/creator/generate
- /api/memory/save
- /api/docs

---

# 🔥 Diferencial

- Memória persistente real
- IA dual especializada
- Sessões longas sem perda de contexto

---

# 🤝 Contribuição

Pull requests são bem-vindos 🚀
