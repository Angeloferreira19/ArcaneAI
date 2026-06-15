# **Mapa de Requisitos \- Arcane**

## **1\. Requisitos Funcionais**

### **Gestão de Usuários**

#### **RF01 \- Cadastro de Usuário**

O sistema deve permitir o cadastro de novos usuários.

#### **RF02 \- Autenticação**

O sistema deve permitir que usuários realizem login utilizando credenciais válidas.

#### **RF03 \- Gerenciamento de Perfil**

O sistema deve permitir que o usuário consulte suas informações de perfil.

---

### **Gestão de Campanhas**

#### **RF04 \- Criar Campanha**

O usuário deve poder criar uma nova campanha.

#### **RF05 \- Listar Campanhas**

O sistema deve permitir a visualização das campanhas associadas ao usuário.

#### **RF06 \- Consultar Campanha**

O usuário deve poder visualizar informações detalhadas de uma campanha.

#### **RF07 \- Continuar Campanha**

O usuário deve poder retomar campanhas existentes.

#### **RF08 \- Encerrar Sessão**

O usuário deve poder encerrar uma sessão narrativa sem perder o progresso.

---

### **Gestão de Personagens**

#### **RF09 \- Criar Personagem**

O usuário deve poder criar personagens para uma campanha.

#### **RF10 \- Consultar Personagem**

O usuário deve poder visualizar os dados de um personagem.

#### **RF11 \- Atualizar Estado do Personagem**

O sistema deve registrar alterações ocorridas durante a campanha.

---

### **Narrativa**

#### **RF12 \- Enviar Ação**

O usuário deve poder enviar ações para o narrador virtual.

#### **RF13 \- Gerar Resposta Narrativa**

O sistema deve gerar respostas narrativas baseadas no contexto da campanha.

#### **RF14 \- Registrar Histórico**

O sistema deve armazenar as interações realizadas durante a sessão.

#### **RF15 \- Recuperar Histórico**

O sistema deve recuperar informações relevantes da campanha para compor o contexto narrativo.

---

### **Memória Persistente**

#### **RF16 \- Registrar Eventos**

O sistema deve registrar eventos importantes ocorridos durante a campanha.

#### **RF17 \- Recuperar Eventos**

O sistema deve permitir consultar eventos anteriormente registrados.

#### **RF18 \- Gerar Resumo de Campanha**

O sistema deve gerar resumos das sessões para auxiliar na manutenção do contexto.

---

### **Inteligência Narrativa**

#### **RF19 \- Utilizar Provedor de LLM**

O sistema deve utilizar um modelo de linguagem para geração narrativa.

#### **RF20 \- Suportar Múltiplos Provedores**

O sistema deve permitir integração com diferentes provedores de modelos de linguagem.

#### **RF21 \- Adaptar Contexto Narrativo**

O sistema deve utilizar informações da campanha para produzir respostas coerentes.

---

## **2\. Requisitos Não Funcionais**

### **Arquitetura**

#### **RNF01**

O backend deverá seguir arquitetura em camadas.

#### **RNF02**

A aplicação deverá separar responsabilidades entre API, serviços, persistência e integração com IA.

---

### **Persistência**

#### **RNF03**

As informações das campanhas deverão ser armazenadas de forma persistente.

#### **RNF04**

Os dados deverão permanecer disponíveis após a reinicialização do sistema.

---

### **Desempenho**

#### **RNF05**

O sistema deverá responder às ações do usuário em tempo adequado para manter a fluidez da narrativa.

---

### **Escalabilidade**

#### **RNF06**

A arquitetura deverá permitir a adição de novos módulos sem alterações significativas no núcleo da aplicação.

#### **RNF07**

O sistema deverá permitir integração com diferentes modelos de linguagem.

---

### **Segurança**

#### **RNF08**

As senhas dos usuários deverão ser armazenadas de forma criptografada.

#### **RNF09**

As rotas protegidas deverão exigir autenticação.

---

### **Infraestrutura**

#### **RNF10**

O backend deverá ser executável por meio de containers Docker.

#### **RNF11**

O sistema deverá suportar execução em ambiente local durante o desenvolvimento.

---

## **3\. Requisitos Futuros (Backlog)**

### **Narrativa**

* NPCs persistentes;  
* Sistema de facções;  
* Sistema de reputação;  
* Missões dinâmicas;  
* Eventos globais.

### **Personalização**

* Perfil comportamental do jogador;  
* Adaptação dinâmica da narrativa;  
* Ajuste de dificuldade.

### **Inteligência Artificial**

* Agentes especializados;  
* Criação automática de mundos;  
* Recuperação semântica de contexto;  
* Memória vetorial.

### **Plataforma**

* Multiplayer;  
* Aplicativo móvel;  
* Compartilhamento de campanhas.

