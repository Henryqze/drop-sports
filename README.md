# DROP SPORTS 🏊‍♂️🚴‍♂️🏃‍♂️

### Plataforma de Treinamento e Consultoria Esportiva

**Status:** Frontend V1 concluído | Backend em planejamento e desenvolvimento

## 📌 Sobre o projeto

O **Drop Sports** é um projeto comercial desenvolvido para um profissional de Educação Física, com o objetivo de apresentar seus serviços, modalidades esportivas e consultorias em uma plataforma moderna, responsiva e preparada para futuras integrações.

O projeto começou como um site institucional, mas foi planejado para evoluir para uma plataforma de gerenciamento esportivo, com autenticação, acompanhamento de alunos, administração de conteúdo e funcionalidades de gamificação.

Além da entrega ao cliente, o desenvolvimento representa uma oportunidade de aplicar conhecimentos de Engenharia de Software em um projeto real, envolvendo arquitetura, desenvolvimento frontend, APIs REST, persistência de dados e segurança.

## 🛠️ Tecnologias

**Frontend — implementado**
- React
- JavaScript
- Vite
- HTML5 e CSS3
- React Router
- Lucide React

**Backend — planejado**
- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- PostgreSQL
- API REST
- Maven

**Ferramentas**
- IntelliJ IDEA
- Git e GitHub
- Figma

## ✅ Funcionalidades implementadas

- Interface responsiva para dispositivos móveis, tablets e desktops.
- Página inicial com apresentação da marca.
- Apresentação das modalidades esportivas.
- Página de consultorias e serviços.
- Apresentação do profissional.
- Galeria de fotografias com transição automática na Home.
- Navegação entre páginas.
- Seção de perguntas frequentes com interação.
- Direcionamento para contato.

## 🚀 Roadmap do backend

As seguintes funcionalidades estão planejadas e ainda não devem ser consideradas implementadas:

- [ ] Criar a API REST com Java e Spring Boot.
- [ ] Configurar o banco de dados PostgreSQL.
- [ ] Implementar cadastro e autenticação de usuários.
- [ ] Criar permissões para administrador e alunos.
- [ ] Desenvolver painel administrativo.
- [ ] Implementar upload e gerenciamento de fotografias.
- [ ] Registrar interessados nos serviços esportivos.
- [ ] Desenvolver controle de alunos ativos.
- [ ] Criar dashboard administrativo.
- [ ] Estruturar histórico de treinos e sistema de pontuação.
- [ ] Integrar frontend e backend.
- [ ] Realizar testes e preparar a publicação em produção.

## 🏗️ Arquitetura planejada

O projeto seguirá uma arquitetura com separação entre frontend e backend.

**Frontend (React):** responsável pela interface, navegação e comunicação com a API.

**Backend (Spring Boot):** responsável pelas regras de negócio, autenticação, gerenciamento de usuários, alunos e informações da plataforma.

**Banco de dados (PostgreSQL):** responsável pela persistência dos dados.

**Armazenamento de imagens:** serviço externo a ser definido, permitindo gerenciamento das fotografias sem alterações no código-fonte.

Essa organização permitirá expandir o sistema com novas páginas e funcionalidades.

## 📁 Estrutura atual do frontend

```text
src/
├── assets/
├── components/
│   ├── Cards.jsx
│   └── Layout.jsx
├── data/
│   ├── content.js
│   └── fotos.js
├── pages/
│   ├── Home.jsx
│   ├── Treinos.jsx
│   ├── Consultorias.jsx
│   ├── Galeria.jsx
│   ├── NosConheca.jsx
│   └── Contato.jsx
├── main.jsx
└── styles.css
```

## 💻 Executando localmente

**Pré-requisitos:** Node.js e npm instalados.

Clone o repositório:

```bash
git clone https://github.com/Henryqze/drop-sports.git
```

Entre na pasta do projeto:

```bash
cd drop-sports
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse o endereço local informado pelo Vite, normalmente:

`http://localhost:5173/`

### Variáveis de ambiente

O arquivo `.env.example` apresenta as configurações previstas para o projeto.

Para criar um arquivo local de configuração, copie o exemplo para `.env` e ajuste os valores necessários.

A integração com a API Spring Boot ainda está planejada.

## 🔒 Privacidade e imagens

As fotografias utilizadas no desenvolvimento pertencem ao acervo do projeto e não estão incluídas no repositório público.

As pastas de imagens privadas são ignoradas pelo Git.

**Consequentemente, algumas imagens não serão exibidas ao executar a versão pública do código.** Isso não impede a análise da estrutura e dos componentes React.

Futuramente, as fotografias serão gerenciadas por meio de um sistema administrativo e armazenamento externo.

## 📈 Evolução do projeto

O Drop Sports está sendo desenvolvido de maneira incremental, com foco na entrega de funcionalidades utilizáveis e na possibilidade de expansão.

O frontend constitui a primeira etapa. As próximas fases envolverão a implementação das regras de negócio, persistência de dados, autenticação e integração entre os serviços.

## 👨‍💻 Desenvolvedor

**Pedro Henryque Souza de Medeiros**

Estudante de Engenharia de Software, com foco em desenvolvimento backend utilizando Java e Spring Boot.

GitHub: [@Henryqze](https://github.com/Henryqze)

---

**Drop Sports — Ciência aplicada ao movimento. Evolução construída com propósito.**