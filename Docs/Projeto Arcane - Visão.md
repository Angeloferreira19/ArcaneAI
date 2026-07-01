# Documento de Visão - ArcaneAI

## 1. Visão geral

Arcane é uma plataforma de RPG narrativo assistida por IA que busca transformar a experiência de jogo em uma jornada persistente, com narrativa adaptativa e contexto preservado entre sessões.

O projeto já possui uma base funcional de autenticação e uma interface inicial, e segue a direção do roadmap para evoluir até um MVP de campanhas, personagens e sessões narrativas.

---

## 2. Problema

Jogadores de RPG solo e entusiastas de narrativas interativas enfrentam dificuldades com:

- perda de contexto em campanhas longas;
- inconsistência narrativa entre sessões;
- necessidade de reintroduzir informações já conhecidas;
- dificuldade para manter continuidade de mundo e personagens.

---

## 3. Solução proposta

Arcane utiliza uma arquitetura baseada em backend com FastAPI, frontend com Next.js e persistência em MongoDB para oferecer uma base sólida de experiência narrativa. A solução foi estruturada para evoluir em etapas: primeiro autenticação, depois campanhas, personagens e sessões, e posteriormente IA e memória persistente.

---

## 4. Público-alvo

- jogadores de RPG solo;
- entusiastas de narrativas assistidas por IA;
- desenvolvedores e estudantes interessados em sistemas narrativos;
- usuários que desejam explorar jogos com continuidade e personalização.

---

## 5. Objetivos do projeto

### Objetivos funcionais
- permitir cadastro e login de usuários;
- oferecer um painel inicial após autenticação;
- preparar a base para criação de campanhas e personagens;
- evoluir para sessões narrativas e interação com IA.

### Objetivos técnicos
- manter uma arquitetura organizada em camadas;
- separar frontend, backend e infraestrutura;
- facilitar a expansão para novas funcionalidades.

---

## 6. Escopo atual

### Em funcionamento
- cadastro de usuário;
- login com JWT;
- dashboard básico após autenticação;
- integração inicial entre frontend e backend.

### Próximos passos
- CRUD de campanhas;
- CRUD de personagens;
- sessões narrativas;
- integração com IA e memória.

---

## 7. Diferenciais

- narrativa com continuidade entre sessões;
- estrutura preparada para evolução em múltiplas fases;
- arquitetura modular e escalável;
- foco em experiência imersiva e persistente.

---

## 8. Tecnologias atuais

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

## 9. Critérios de sucesso

O projeto seguirá com sucesso se for capaz de:

1. oferecer cadastro e login confiáveis;
2. manter uma experiência visual consistente no frontend;
3. evoluir para campanhas e personagens com persistência;
4. permitir sessões narrativas e interações com IA no futuro.