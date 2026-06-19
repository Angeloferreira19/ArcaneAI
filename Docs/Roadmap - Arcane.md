# **Roadmap \- Arcane**

## **Versão 0.1 \- Fundação** ✅

Objetivo: estabelecer a base técnica do sistema e tornar o projeto executável localmente.

### **Backend** ✅ COMPLETO

* ✅ Configurar FastAPI com rotas básicas e documentação automática
* ✅ Configurar MongoDB com conexão parametrizada por ambiente
* ✅ Implementar arquitetura em camadas: API, serviços, repositórios e schemas
* ✅ Criar cadastro de usuário com hash de senha
* ✅ Criar login com JWT (24h de expiração)
* ✅ Validar dados de entrada com Pydantic
* ✅ Criar endpoints iniciais: `GET /`, `GET /health`, `POST /auth/register`, `POST /auth/login`, `GET /auth/me`
* ✅ Autenticação protegida com `@Depends(get_current_user)`
* ✅ Tratamento de erros com `HTTPException`

### **Frontend** ⏳ EM PROGRESSO

* ⏳ Inicializar projeto React/Vite com estrutura de pastas
* ⏳ Criar página de login e cadastro básico
* ⏳ Implementar integração com API de autenticação
* ⏳ Construir layout principal inicial com navegação básica
* ⏳ Preparar o frontend para evolução com telas de campanhas e sessões

### **Infraestrutura** ✅ COMPLETO

* ✅ Criar `backend/.env.example` com variáveis essenciais
* ✅ Configurar `backend/Dockerfile` para backend
* ✅ Criar `docker-compose.yml` (raiz) com backend e MongoDB
* ✅ Definir variáveis de ambiente e validação
* ✅ `.gitignore` completo
* ⏳ Documentar setup inicial no `README.md`

### **Entrega 0.1**

* ✅ Backend funcional com autenticação e persistência
* ✅ Ambiente de desenvolvimento local com Docker
* ⏳ Frontend inicial capaz de autenticar usuários
* ⏳ Documentação de setup e execução

---

## **Versão 0.2 \- Campanhas e Personagens**

Objetivo: permitir criação e gerenciamento de campanhas.

### **Backend**

* Schema `CampaignCreate`, `CampaignResponse`
* Schema `CharacterCreate`, `CharacterResponse`
* Repository: `CampaignRepository`, `CharacterRepository`
* Service: `CampaignService`, `CharacterService`
* Endpoints: `POST /campaigns`, `GET /campaigns`, `GET /campaigns/{id}`, `DELETE /campaigns/{id}`
* Endpoints: `POST /campaigns/{id}/characters`, `GET /campaigns/{id}/characters`
* Associação entre usuário e campanha
* Associação entre personagem e campanha

### **Frontend**

* Dashboard com lista de campanhas
* Modal/Página para criar campanha
* Modal/Página para criar personagem
* Tela de detalhes da campanha

---

## **Versão 0.3 \- Sessões Narrativas**

Objetivo: iniciar sessões jogáveis.

### **Backend**

* Schema `SessionCreate`, `SessionResponse`
* Schema `MessageCreate`, `MessageResponse`
* Schema `EventCreate`, `EventResponse`
* Repository: `SessionRepository`, `MessageRepository`, `EventRepository`
* Service: `SessionService`, `MessageService`, `EventService`
* Endpoints: `POST /sessions`, `POST /sessions/{id}/close`, `GET /sessions/{id}/messages`
* Persistência de mensagens e eventos

### **Frontend**

* Tela de sessão com chat narrativo
* Entrada de ações do jogador
* Exibição de histórico de mensagens
* Registro de eventos importantes

---

## **Versão 0.4 \- Integração com IA**

Objetivo: introduzir geração narrativa.

### **Backend**

* LLM Provider abstrato
* Integração OpenAI
* Integração Gemini (Google)
* Interface para múltiplos provedores
* `GameMasterAgent` para condução da narrativa
* Service: `NarrativeService` orquestra IA + contexto

### **Frontend**

* Indicador de IA processando
* Exibição de respostas geradas pela IA
* UI para escolher provedor de IA (admin)

---

## **Versão 0.5 \- Sistema de Memória**

Objetivo: persistência narrativa.

### **Backend**

* Schema `MemoryCreate`, `MemoryResponse`
* Repository: `MemoryRepository`
* Service: `MemoryService` + `MemoryAgent`
* Consolidação de eventos em memórias
* Recuperação de contexto baseado em semântica
* Histórico completo de mensagens

### **Frontend**

* Timeline de eventos da campanha
* Visualização de memórias consolidadas

---

## **Versão 0.6 \- Campanhas Persistentes**

Objetivo: continuidade entre sessões.

### **Funcionalidades**

* Resumo automático de sessões  
### **Funcionalidades**

* Resumo automático de sessões  
* Atualização de memórias por sessão  
* Contexto dinâmico baseado em histórico
* Continuidade narrativa aprimorada

---

## **Versão 0.7 \- MVP Público**

Objetivo: primeira versão utilizável e implantável.

### **Backend**

* Testes unitários para camada de serviço
* Tratamento de erros aprimorado
* Logs estruturados
* Validação de negócios
* API documentation (Swagger/OpenAPI)

### **Frontend**

* Páginas todas funcionando
* Responsividade mobile básica
* Tratamento de erros visual
* Loading states
* Navegação entre telas

### **Infraestrutura**

* GitHub Actions para CI/CD
* Testes automáticos no push
* Build de imagem Docker automático
* Deploy em staging

---

## **Versão 0.8+ \- Futuro**

### **Inteligência Artificial (RAG & Semântica)**

* Sistema RAG (Retrieval-Augmented Generation)
* Embeddings semânticos para busca de contexto
* Memória vetorial para eventos relacionados
* NPCs persistentes com histórico
* Personagem dinâmico que aprende com sessões

### **Mundo (Expansão Narrativa)**

* Sistema de facções
* Localizações com lore persistente
* Inventário de itens
* Sistema de missões
* Relações políticas dinâmicas

### **Multiplayer (Cooperação)**

* Campanhas com múltiplos jogadores
* Chat em tempo real
* Compartilhamento de mundo
* Sincronia de eventos
* Roles e permissões por campanha

### **Plataforma (Distribuição)**

* Aplicativo mobile (React Native)
* Deploy em nuvem (AWS/GCP/Azure)
* Sistema de plugins para expansões
* Monetização (premium features)
* Community marketplace