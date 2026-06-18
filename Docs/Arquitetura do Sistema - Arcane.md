# **Arquitetura do Sistema \- Arcane**

## **Visão Geral**

O Arcane é projetado utilizando uma arquitetura em camadas (Layered Architecture), com o objetivo de promover separação de responsabilidades, escalabilidade e facilidade de manutenção.

A arquitetura organiza o sistema em componentes independentes, permitindo que mudanças em uma parte da aplicação tenham impacto mínimo nas demais.

Além disso, o sistema foi concebido para suportar múltiplos provedores de Inteligência Artificial, memória persistente e campanhas narrativas de longa duração.

---

# **Objetivos da Arquitetura**

* Separar regras de negócio da infraestrutura.  
* Facilitar manutenção e evolução do sistema.  
* Permitir integração com diferentes provedores de IA.  
* Garantir persistência de campanhas e sessões.  
* Suportar memória de curto e longo prazo.  
* Possibilitar futuras expansões sem reestruturações significativas.

---

# **Arquitetura Geral**

Frontend (React)  
        ↓  
API Layer (FastAPI)  
        ↓  
Application Layer (Serviços)  
        ↓  
Domain Layer  
        ↓  
Infrastructure Layer

---

# **Diagrama de Arquitetura**

![][image1]

---

# **Camadas do Sistema**

## **Frontend**

Responsável pela interface do usuário.

### **Tecnologia**

* React

### **Responsabilidades**

* Exibir campanhas.  
* Exibir sessões.  
* Permitir criação de personagens.  
* Enviar ações para a narrativa.  
* Exibir respostas geradas pela IA.

---

## **API Layer**

Responsável pela comunicação HTTP entre cliente e backend.

### **Tecnologia**

* FastAPI

### **Responsabilidades**

* Receber requisições.  
* Validar dados de entrada.  
* Encaminhar operações para os serviços apropriados.  
* Retornar respostas ao frontend.

---

## **Application Layer**

Camada responsável pela implementação dos casos de uso.

É o centro de orquestração do sistema.

### **CampaignService**

Responsável pelo gerenciamento das campanhas.

### **SessionService**

Responsável pela abertura, encerramento e recuperação de sessões.

### **CharacterService**

Responsável pelo gerenciamento de personagens.

### **NarrativeService**

Responsável pelo fluxo narrativo principal.

Coordena:

* Recuperação de contexto.  
* Comunicação com agentes.  
* Persistência de resultados.

### **MemoryService**

Responsável por:

* Recuperar contexto narrativo.  
* Salvar eventos importantes.  
* Gerar resumos.  
* Preparar informações para os agentes.

---

## **Domain Layer**

Representa as entidades centrais do negócio.

Essa camada não possui dependência de banco de dados, APIs externas ou modelos de IA.

### **Entidades**

#### **User**

Representa o jogador.

#### **Campaign**

Representa uma campanha persistente.

#### **Session**

Representa uma sessão narrativa dentro de uma campanha.

#### **Character**

Representa personagens da campanha.

#### **Message**

Representa interações entre jogador e sistema.

#### **Event**

Representa acontecimentos relevantes da narrativa.

---

## **Agents Layer**

Camada responsável pela organização das inteligências especializadas.

Os agentes não acessam banco de dados diretamente.

Toda persistência e recuperação de dados ocorre através dos serviços da Application Layer.

### **GameMasterAgent**

Responsável por:

* Conduzir a narrativa.  
* Interpretar ações do jogador.  
* Gerar respostas narrativas.

### **MemoryAgent**

Responsável por:

* Selecionar memórias relevantes.  
* Organizar contexto narrativo.  
* Auxiliar na construção do prompt enviado ao modelo.

### **WorldBuilderAgent**

Responsável por:

* Gerar conteúdo de apoio.  
* Criar locais.  
* Criar elementos narrativos.  
* Expandir o mundo da campanha.

---

## **LLM Provider**

Camada de abstração para comunicação com modelos de linguagem.

Seu objetivo é desacoplar o sistema de um fornecedor específico.

### **Provedores Compatíveis**

* OpenAI  
* Gemini  
* Ollama  
* Outros provedores futuros

### **Benefícios**

* Flexibilidade.  
* Facilidade de substituição.  
* Redução de acoplamento.

---

## **Infrastructure Layer**

Responsável pela integração com recursos externos.

### **Repositories**

Implementam a persistência das entidades do domínio.

Exemplos:

* CampaignRepository  
* SessionRepository  
* CharacterRepository  
* MessageRepository  
* EventRepository

### **Banco de Dados**

MongoDB é utilizado para armazenamento persistente das informações da aplicação.

Coleções previstas:

* users  
* campaigns  
* sessions  
* characters  
* messages  
* events

---

# **Fluxo Principal de Execução**

## **Interação Narrativa**

1. O jogador envia uma ação.  
2. A API recebe a requisição.  
3. O NarrativeService inicia o processamento.  
4. O MemoryService recupera o contexto relevante.  
5. O MemoryAgent organiza as informações necessárias.  
6. O GameMasterAgent monta a instrução narrativa.  
7. O LLM Provider gera a resposta.  
8. O NarrativeService registra mensagens e eventos.  
9. Os Repositories persistem os dados no MongoDB.  
10. A resposta é retornada ao frontend.

---

# **Benefícios da Arquitetura**

* Separação clara de responsabilidades.  
* Baixo acoplamento entre componentes.  
* Facilidade de manutenção.  
* Facilidade de testes.  
* Escalabilidade horizontal.  
* Independência de fornecedor de IA.  
* Persistência de campanhas longas.  
* Base preparada para sistemas avançados de memória e agentes especializados.

---

# **Considerações Futuras**

A arquitetura foi projetada para permitir futuras expansões, incluindo:

* Sistemas de reputação.  
* NPCs persistentes.  
* Facções.  
* Multiplayer.  
* Memória vetorial.  
* Recuperação semântica (RAG).  
* Agentes especializados adicionais.  
* Aplicações mobile.

Essas funcionalidades poderão ser adicionadas sem necessidade de alterações significativas na estrutura principal do sistema.

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAloAAACfCAYAAAAh4XfEAAAaPUlEQVR4Xu3de5QU1Z3AcXEgal4nJycmJ5vNyR85yHNASFhBBHkjggQTRFES4qJRkYgsCcdERNGoq2wgxggGzaK4iUR8ZBMhBgQRCIJBUZCHBJI1RkDGgZkBZgZmhlp+Nd7y9q2q7q7uruqq7u/nnHu6+1ZNd09PTdeX6p7mNAsAAAChOM2cAAAAQGEQWgAAACEhtAAAAEJCaAEAgFg455x+iR8mQgsAAMSCV6gkRVVVtef9J7QAAEAseIVKUqjQqqmpsYdCaAEAgFggtAAAAEJCaAEAAISE0AIAAAgJoQUAABASQgsAACAkhBYAAEBICC0AAIAcnXZa+uwgtAAAAHIkoSWjY8eO5iJbkNDq2L6ftez5F+3TQmhoaEy5rgXzH7cvyzh2rF5b0xuhBQAAikqFlhqmbEOrR7eh5pTt4QWLrenTZltz7pufMv/9G291zu/f97514kSTNWTgOGv37r858xJUr766xfrHO+85c83Nzc75TAgtAAAQqeXLl7viyhwVFRXO+tmGlt9RLDV/pO6ofVpf32D9dsn/pix7bfNW65qrp6fM6ef1OUILAADEysmTJ1NCql27dtaiRYtc815HtQoVWsr27W87L//poVVbU2efV3O7du6xxo29zrru2hmEFgAAiB89pPTQ0PkFlpJtaMlLgW9secs+//wfVjrzKpK2v/W2fSpHtGbNnOMsF16hpcdVVdUh5zyhBQAAim7Dhg2ulwG9pIsskW1oid69RtqBdP55lzhz5tErIe/FynREyzwSJst5MzwAACg6dSRryZIl5qLAgoSWFzOYokRoAQCAgrr22mvTHqEKKt/QKiZCCwAAFIw6klVdXW0uyhmhBQAAyt7cuXMLeiRLIbQAAEBZW7hwoR1ZVVVV5qK8EVoAAKCsSWRt377dnC4IQgsAAJSllStXhvJyoY7QAgAAZUkia8WKFeZ0QRFaAACgrGzdujX0I1kKoQUAAMrGzp07C/ZhpNmQUEn6ILQAAEBWJLIeffRRczo0Tzyx1B6PPPJEYgehBQAA0pKPbojq5UIvKlaSPJTiPYoAACCWJLKmTZtmTkemrq4u8UMhtAAAgEMi6+qrrzankSNCCwAA2C93SWSNHTvWXIQ8EFoAAMCOrD59+pjTyBOhBQBAGTtx4kRR3/he6nhkAQAoYxJZ3bp1M6dRIIQWAABlSiKrsrLSnEYBEVoAAJSZ5uZmO7K++tWvmotQYIQWAABlRiLrM5/5jDmNEBBaAACUiZaWFjuy5A3wiAahBQBAmZDIOuuss8xphIjQAgCgDEhkfepTnzKnETJCCwCAEieRdeaZZ5rTiAChBQBACZPIateunTmNiBBaAACUKIms9evXm9OIEKEFAEAJkshq06aNOY2IEVoAAJQYiayKigpzGkVAaAEAUEI4khUvhBYAACWCyIofQgsAgBLwsY99zA4txAs/EQAAEk4Ci8iKJ34qAAAk2Cc+8QkiK8b4yQBAzJ1zTr+yGlEyb5uROpA/QgsAYq5cdniXjJoY+fcqtzdp0nRzGlb5bHdhI7QAIObKZYenQqumpsYeUSC0/Ok/i+PHj5uLkSVCCwBijtAKD6Hlj9AqDEILAGKO0AoPoeWvWKHVvfvQxA4vhBYAxByhFR5Cy1+xQktu9+TJk4kbfr+nhBYAxJzfE3ipIbTipZihlURyvxsaGuyhI7QAIOaSuuMJitCKF0IrGL9tl9ACgJhL6o4nKEIrXgitYPy2XUILAGIuqTueoAiteCG0gvHbdgktACiyTP9PXdAdz8/mLky5vH/f+87wYq6fK7/rz1ZYoZXpsc02tMzvz7ws/vTCmrSXnZ/FfvfXBtWxvXu78JrLFaEVjN+267/1AQAioULLLwiC7nhOnDhhXXzRhJS5QQPGplxWZs2835zKWb47+TBDS8ahQ4fMRYFCy/z+zMvm3NTv3+a5TmXnQfZpl44DjCX587q9XBFawfhtu96/1QCAyOihJePzn/98yvIgO55fPfqkfWrucP1CS6139cRpKXNqXD72Oqul5aRzWV9nxg/usk+rqw+7vk7ce/eDrq9LJ+zQ8orZQoeWUPN+37sKrebmZmfuvnt/4az7x+WrXV9bVVXtnO/da6T1wofrKOZjr881N7fYl7dt3Wlt/subnvfJC6EVjN+2S2gBQETWrVvn2umnG2pHHGTHo3aiXTulHi3xC61O5/S3T/U4UPKZ87qciQot83EIYyxatMi+zUKHlrwkWNl5oLVp4+tWQ0Oj5zoqtPRld94x1zmf7rHdvftvrmU6Nff++1WuOQmtIAitYAgtACiCxsbGlB18mzZtrCNHjqSsY0aArKMLsuORnaoaw4eOd+a9Qmv27T9NWV9Rl0eN+LZzuX/fS52h5vT1zTmlV88RnvNeSuGI1ratu+zTdI+JCi2dHNFS0j22Xst0am7fewdcP7O4hNaePXvMqRRBtvdCqD+W+rlXumNH680pX37bLqEFACHx27mb9PWqqz96iUjJdscjLznV1X0UcfqO2Cu09OU1NXXWXbPnuea9Lptz6rw6OmZ6eP7iU8GZeUcddmgtWLDAXJRTaN191wMpl/XzmzZtsU9f/fDU67ELEloD+7f+3OSTx3/z62c9b1On5vSXJZW4hFam34lst3ch368auRrQ/1vmlGPa1NvNKV9+267/dwoACEx2iGpHUldXZy72JOtu2rTJnHYE2fHka5z9nqwW+/yalzZYt/7oP+3zTSearHff3aevmpFczz8DfE1YodW3b19zyhEktKJUdbDaqq1Nv/3U1ny0XN4n19TUZNXXf3R0RrbFoD8znTw2aluWo6yf/exnrd69e3v+YyAI/R8W5tFbke327hedT/7md/aRVFPnDhfap187d7g157759vnJ191iffBB6x9J9L/gUvv9iPo/GGR5tvy2XUILAApE7Txefvllc1Fest3xFIK+w5KdzthLr9GWhius0EonrqEVB/LY/P3vf7fmzJljDRkyJCWQMo22bdtaZ511lvXJT37SqqysTBnmujIkEvXbzYbfUaz9+w/ap/py+QeEPqcv2/126/veZE7+Ylfs2L7bPtWPEGfit+0SWgCQJ7Wz2Lkz2Esz2cp2x5N0hFa86D+LoC8dytE0iSf5uvr6evso2L59+6y9e/e6IkuGLtvtXY+lnt2H2adyFDDdy4mvv77NPvULLWX16j/bp4QWABTR/Pnz7Z3E6aefbi4qqGx3PElHaMVLPqGVjh5YcqTMlO327hVamRBaAJAQXv8SD0u2O56kI7TiJezQ8hNke/c6eiXnu3cdzBEtAEgaeQkk004iDEF2PElGaMVLWKGVSVK3d79tN9pnCwBIKHlTrwTWmDFjzEWhS+qOJyhCK14IrWD8tl1CCwDSkL+eksCaOnWquSgySd3xBEVoxQuhFYzftktoAYAH/c/Ziy2pO56gCK14IbSC8dt2i/8MAgAxowLL69O1iyGpO56gCK14IbSC8dt2CS0AsFo/xTxugaXIE3g5Da+dVVjM22akDkIre/rjpSO0AJQ9+W9AJLAqKirMRbGinsTLZUTN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>