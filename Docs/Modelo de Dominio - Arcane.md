# **Entidades do Domínio**

## **User**

Representa o jogador.

### **Responsabilidades**

* Possuir campanhas  
* Autenticar-se  
* Gerenciar perfil

### **Atributos**

id  
username  
email  
password\_hash  
created\_at

## **Campaign**

Representa uma aventura persistente.

### **Responsabilidades**

* Armazenar estado da campanha  
* Possuir personagens  
* Possuir histórico  
* Possuir eventos
* Rastrear localização/mundo onde a campanha se passa
* Armazenar descrição narrativa (gerada por IA futuramente)

### **Atributos**

id  
name  
description (até 2 parágrafos para exibição; texto completo armazenado)  
summary  
status (not_started | in_progress | paused | completed)  
current_location (local/cidade onde a campanha está; "Início de Campanha" se não iniciada)  
owner_id  
created_at  
updated_at  
last_session_date  
session_count

## **Character**

Representa o personagem jogável.

### **Responsabilidades**

* Participar da campanha  
* Possuir atributos  
* Evoluir ao longo da história
* Registrar seu ciclo de vida narrativo (ativo, morto, desvinculado)
* Armazenar histórico de ações e consequências

### **Atributos**

id  
name  
class  
level  
attributes  
backstory  
campaign_id  
owner_id  
status (alive | dead | unlinked)  
linked_since (data do primeiro vínculo com a campanha)  
is_alive (boolean para queries rápidas)  
death_summary (resumo de como morreu, se aplicável)

## **Message**

Representa uma interação narrativa.

### **Responsabilidades**

* Registrar Conversas  
* Construir Contexto

### **Atributos**

id  
**role**  
content  
timestamp

### **Role**

user  
assistant  
system

## **Event**

Representa acontecimentos importantes.

### **Responsabilidades**

* Registrar fatos relevantes  
* Alimentar memória persistente

### **Atributos**

id  
type  
description  
importance  
timestamp

## **Session**

Representa uma sessão do jogo.

### **Responsabilidades**

* Agrupar interações de um período de jogo  
* Permitir resumos de sessão  
* Separar histórico por sessões
* Rastrear qual personagem participou
* Registrar localização visitada

### **Atributos**

id  
campaign_id  
character_id (qual personagem jogou nesta sessão)  
started_at  
ended_at  
summary  
status (active | closed)  
location_visited (local onde a sessão terminou)

## **Consequence (Histórico Narrativo)**

Representa ações e consequências que persistem na campanha.

### **Responsabilidades**

* Registrar ações marcantes de personagens  
* Persistir efeitos no mundo (itens deixados, NPCs afetados, destruições, etc)  
* Permitir que novos personagens encontrem rastros de antigos personagens  
* Alimentar a memória narrativa

### **Atributos**

id  
campaign_id  
character_id (personagem que causou a ação)  
type (action | death | item_location | world_change | npc_interaction)  
description  
location (onde ocorreu)  
timestamp  
is_active (se ainda afeta o mundo)

# **Relacionamentos**

## **User \=\> Campaign**

Um usuário pode possuir várias campanhas.

**User 1 \------ N Campaign**

## 

## **Campaign \=\> Session**

Uma campanha possui uma ou mais sessões.

	**Campaign 1 \------ N Session**

## **Session \=\> Message**

Uma sessão pode possuir muitas mensagens.

	**Session 1 \------ N Message**

## **Session \=\> Event**

Uma sessão possui muitos eventos.

	**Session 1 \------ N Event**

## **Campaign \=\> Character**

Uma campanha pode possuir vários personagens.

	**Campaign 1 \------ N Character**  
