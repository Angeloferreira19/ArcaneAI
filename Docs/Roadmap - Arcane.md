# Roadmap - Arcane

## Status atual (Agosto de 2026)

O projeto concluiu a V0.2 com campanhas e personagens operando no backend e no frontend, incluindo cadastro, edição, exclusão, associação, paginação e filtros de acompanhamento. A próxima prioridade é a V0.3, com sessões narrativas, histórico e continuidade da experiência do jogo.

### Concluído
- backend com FastAPI funcional
- cadastro e login de usuários
- JWT e autenticação protegida
- CRUD de campanhas e personagens
- associação entre usuário, campanha e personagem
- dashboard funcional com modais e paginação
- filtros de personagens por status
- filtros de campanhas por progresso narrativo
- badges coloridos posicionados no card interno, próximos ao título
- separação visual entre card externo de ações e card interno de conteúdo
- ambiente com Docker Compose

### Em andamento
- **V0.3 Backend**: modelagem de sessões e eventos narrativos
- **V0.3 Frontend**: interface de sessão com histórico e ações do jogador
- **Refinamento pós-V0.2**: detalhamento da campanha e metadata narrativa

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

## Versão 0.2 - Campanhas e Personagens ✅

Objetivo: permitir criação, gerenciamento e visualização funcional de campanhas e personagens, com vínculo entre usuário e conteúdo narrativo.

### Backend ✅
- schema de campanha e personagem
- repositories e services
- endpoints para CRUD
- associação entre usuário, campanha e personagem
- paginação por listagem
- exclusão com limpeza de personagens vinculados

### Backend 🟨 (refinamento pós-V0.2)
- adicionar campo `status` ao personagem (alive | dead | unlinked)
- adicionar `linked_since` ao personagem
- adicionar `current_location` à campanha
- criar entidade Session com referência a character
- criar entidade Consequence para histórico narrativo
- endpoints de listagem com filtros por status
- endpoint de detalhes da campanha com metadados avançados

### Frontend ✅
- dashboard com lista de campanhas (paginado)
- modal/formulário para criar campanha
- modal/formulário para editar campanha
- confirmação e exclusão de campanha
- tela para criar personagem
- modal/formulário para editar personagem
- confirmação e exclusão de personagem
- associação de personagem à campanha
- integração com API de campanhas e personagens
- paginação, carregamento e feedback visual
- filtros de personagens: Todos, Ativos, Mortos e Desvinculados
- filtros de campanhas: Tudo em Jogo, A Jornada Começou, Crônicas Encerradas e Ainda no Pergaminho
- badges de status associados ao conteúdo do card interno conforme princípio de proximidade da IHC

### O que permanece como evolução futura
- visualização detalhada de campanha em modal completo
- histórico de consequências e sessões
- ações narrativas avançadas de continuidade

> A V0.2 está entregue no núcleo e no refinamento de interface. O que permanece depende da modelagem de sessões, status persistido e metadata narrativa, servindo como ponte para a V0.3.

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