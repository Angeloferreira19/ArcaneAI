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

### **Atributos**

id  
name  
description  
summary  
status  
created\_at  
updated\_at

## **Character**

Representa o personagem jogável.

### **Responsabilidades**

* Participar da campanha  
* Possuir atributos  
* Evoluir ao longo da história

### **Atributos**

id  
name  
class  
level  
attributes  
backstory

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

### **Atributos**

id  
campaign\_id  
started\_at  
ended\_at  
summary  
status (active / closed)

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
