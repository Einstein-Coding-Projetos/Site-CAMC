# Site Oficial do CAMC (Centro Acadêmico Marie Curie)
Sobre o Projeto: 
Site Oficial do CAMC é um projeto que visa centralizar as informações institucionais, otimizar a divulgação e gestão de eventos, e prover um ambiente seguro e organizado para a colaboração acadêmica, como a Biblioteca de Conteúdo do Aluno. O site está em desenvolvimento por integrantes do Einstein Coding em parceria com da gestão 2025 do CAMC, o site reforça nosso compromisso com a transparência na comunicação com os alunos. 
# Funcionalidades Principais 
O projeto é dividido nos seguintes módulos chave:
- Módulo Institucional: Homepage, estatuto e contato.
- Módulo de Gestão: informações sobre a gestão atual, passadas e futuras que ainda virão
- Módulo de Eventos Listagem e detalhamento de eventos, e sistema de inscrição/compra
- Módulo de Produtos: Listagem e detalhamento de produtos .
- Módulo de Biblioteca Colaborativa (Área do Aluno): Sistema de login, upload e busca de documentos (resumos, listas de exercício).
- Módulo Administrativo (Painel de Gestão): Ferramenta interna para a gestão do CAMC administrar conteúdo, eventos, produtos e moderar a biblioteca.

# Tecnologias Utilizadas
Esta seção será preenchida com as tecnologias que a equipe escolher. 
Categorias:
Frontend
Backend
Banco de Dados
Estilização
Infraestrutura

# Como Executar o Projeto Localmente
Para rodar este projeto em sua máquina para desenvolvimento e testes, siga os passos abaixo:
- Pré-requisitos: ... [Lista de pré-requisitos: React, Prettier...]
- Instalação:
  Clone o repositório:
  Bash
  git clone [LINK_DO_SEU_REPOSITÓRIO]
  cd nome-do-repositorio-camc
- Instale as dependências (Frontend e/ou Backend):
  Bash
  Para o Frontend (exemplo)
  cd frontend
  npm install
  Para o Backend (exemplo)
  cd ../backend
  npm install
- Configuração de Variáveis de Ambiente:
  Crie um arquivo .env na raiz (ou nas pastas do front/back, se separado).
  Preencha as variáveis de ambiente necessárias (ex: chaves de API, credenciais do banco de dados).
  Exemplo: DB_HOST=localhost, API_KEY=sua_chave_aqui
- Inicie o Servidor Local:
  Bash
  Exemplo para rodar o backend
  npm run dev
  Exemplo para rodar o frontend
  npm run start

# Como Contribuir
1. Faça um Fork do projeto.
2. Crie uma Branch para sua funcionalidade (git checkout -b feature/NomeDaFuncionalidade).
3. Faça o Commit de suas alterações (git commit -m 'feat: Adiciona funcionalidade X').
4. Faça o Push para a Branch (git push origin feature/NomeDaFuncionalidade).
5. Abra um Pull Request (PR) descrevendo claramente as mudanças e vinculando ao Cartão correspondente no Kanban.

-------------------------------------------------------------------------------------------------
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
