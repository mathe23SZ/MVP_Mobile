# Circuito Terê Verde 

Este é o repositório do MVP do projeto **Circuito Terê Verde**, uma plataforma desenvolvida para promover o ecoturismo e facilitar o acesso a informações sobre as belezas naturais de Teresópolis.

## 👥 Dados dos Integrantes da Equipe
* **Desenvolvedor:** Matheus de Souza Pimentel
* **Tecnologias Utilizadas:** HTML, CSS e Node.js.

## 📍 Escolha da Situação-Problema
Teresópolis é um destino turístico de destaque, cercado por importantes unidades de conservação: o Parque Nacional da Serra dos Órgãos, o Parque Estadual dos Três Picos e o Parque Natural Municipal Montanhas de Teresópolis. O município atrai visitantes em busca de belezas naturais, montanhismo e trilhas. 

O grande desafio atual é **centralizar e simplificar o acesso a informações** sobre a biodiversidade, trilhas, eventos e condições dessas atrações de forma eficiente. O projeto surge para preencher essa lacuna, promovendo a exploração consciente da região.

## 💻 Descrição Sucinta do MVP
O **Circuito Terê Verde** é um website interativo que atende tanto a turistas quanto aos administradores dos parques. O sistema conta com uma interface amigável e integração entre **Frontend (HTML/CSS/JS)** e **Backend (Node.js)**, permitindo operações de **CRUD (Create, Read, Update, Delete)** para a gestão contínua de conteúdos. 

A plataforma permite:
* Aos visitantes, consultar a biodiversidade, trilhas e agendas de eventos.
* Aos administradores, realizar o login seguro para atualizar disponibilidades, configurar horários de funcionamento, temporadas e publicar novas notícias.

## ⚙️ Instruções para Executar o MVP Localmente

Para rodar o projeto em sua máquina local, certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/mathe23SZ/MVP_Mobile.git
   cd circuito-tere-verde
   ```

2. **Instale as dependências do Backend:**
   ```bash
   # Dentro da pasta "MVP_Mobile"
   npm install
   ```

3. **Inicie o servidor (Backend):**
   ```bash
   npm start
   # ou node server.js
   ```
   *(O servidor Node.js iniciará a API responsável pelas operações de CRUD).*

4. **Acesse o Frontend:**
   Abra o seu navegador e acesse `http://localhost:3000` (ou a porta configurada no seu arquivo principal) para interagir com a aplicação.

## 📌 Informações Adicionais Relevantes

### Atores Envolvidos
* **Visitantes:** Usuários em busca de informações sobre a natureza, trilhas e ecoturismo.
* **Administradores:** Responsáveis por atualizar dados vitais da plataforma através de um painel restrito.

### Principais Exigências Atendidas
* **Gestão de Disponibilidade:** Área administrativa (CRUD) para gerenciar horários, eventos e novidades.
* **Desempenho Rápido:** Arquitetura otimizada em Node.js para suportar múltiplos acessos simultâneos.
* **Interface Intuitiva:** Navegação fluida e responsiva (HTML/CSS/JS).
* **Segurança de Dados e Acesso:** Sistema de Login seguro voltado para proteger informações de administradores e áreas restritas.
