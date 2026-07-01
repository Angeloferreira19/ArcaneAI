# Roadmap - Arcane

## Status atual (Julho de 2026)

O projeto já passou da fase inicial de estruturação e possui uma base funcional de autenticação e interface. A próxima etapa é consolidar as campanhas e personagens.

### Concluído
- backend com FastAPI funcional
- cadastro e login de usuários
- JWT e autenticação protegida
- integração inicial frontend/backend
- dashboard básico pós-login
- ambiente com Docker Compose

### Em andamento
- refinamento visual do frontend
- melhoria do fluxo de cadastro e login
- preparação da camada de campanhas

---

## Versão 0.1 - Fundação ✅

Objetivo: estabelecer a base técnica do sistema e tornar o projeto executável localmente.

### Backend
- FastAPI configurado
- rotas de autenticação implementadas
- MongoDB conectado
- arquitetura em camadas iniciada

### Frontend
- landing page
- formulário de cadastro e login
- dashboard inicial
- integração com API de autenticação

### Infraestrutura
- Docker Compose configurado
- variáveis de ambiente organizadas
- estrutura de projeto definida

---

## Versão 0.2 - Campanhas e Personagens ⏳

Objetivo: permitir criação e gerenciamento de campanhas.

### Backend
- schema de campanha e personagem
- repositories e services
- endpoints para CRUD
- associação entre usuário, campanha e personagem

### Frontend
- dashboard com lista de campanhas
- modal ou página para criar campanha
- tela para criar personagem
- visualização de detalhes da campanha

---

## Versão 0.3 - Sessões Narrativas ⏳

Objetivo: iniciar sessões jogáveis.

### Backend
- sessões de jogo
- mensagens e eventos
- persistência de histórico narrativo

### Frontend
- tela de sessão com chat narrativo
- entrada de ações do jogador
- histórico de mensagens e eventos

---

## Versão 0.4 - Integração com IA ⏳

Objetivo: introduzir geração narrativa com modelos de linguagem.

### Backend
- provider abstrato para LLM
- integração com OpenAI/Gemini
- GameMasterAgent
- NarrativeService

### Frontend
- indicador de processamento da IA
- exibição de respostas geradas
- seleção de provedor de IA

---

## Versão 0.5 - Sistema de Memória ⏳

Objetivo: construir memória persistente para continuidade narrativa.

### Backend
- MemoryService
- MemoryAgent
- consolidação de eventos em memórias
- recuperação de contexto semântico

### Frontend
- timeline de eventos
- visualização de memórias

---

## Versão 0.6+ - MVP Público ⏳

Objetivo: transformar o projeto em uma versão utilizável e implantável.

### Backend
- testes unitários
- logs e tratamento de erros
- documentação da API

### Frontend
- telas completas e responsivas
- estados de loading e erro
- navegação entre telas

### Infraestrutura
- CI/CD
- deploy em ambiente de staging
- build automático de imagem Docker