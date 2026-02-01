# Site Oficial do CAMC (Centro Acadêmico Marie Curie) 🧡

## Sobre o Projeto
O **Site Oficial do CAMC** é um projeto que visa centralizar as informações institucionais, otimizar a divulgação e gestão de eventos, e prover um ambiente seguro e organizado para a colaboração acadêmica, como a Biblioteca de Conteúdo do Aluno.

O site está em desenvolvimento por integrantes do **Einstein Coding** em parceria com a gestão 2025 do CAMC. O site reforça nosso compromisso com a transparência na comunicação com os alunos.

## Funcionalidades Principais
O projeto é dividido nos seguintes módulos chave:

*   **Módulo Institucional:** Homepage, estatuto e contato.
*   **Módulo de Gestão:** Informações sobre a gestão atual, passadas e futuras.
*   **Módulo de Eventos (Agenda CA):** Listagem e detalhamento de eventos (Integrado com Strapi).
*   **Módulo de Produtos:** Listagem (Catálogo) e detalhamento de produtos com Estoque em tempo real (Integrado com Strapi).
*   **Módulo de Biblioteca Colaborativa (Área do Aluno):** Sistema de login, upload e busca de documentos.
*   **Módulo Administrativo (Painel de Gestão):** Ferramenta interna (Strapi) para administrar conteúdo, eventos, produtos e biblioteca.

## Tecnologias Utilizadas
*   **Frontend:** React + Vite
*   **Backend (CMS):** Strapi v5
*   **Banco de Dados:** SQLite (Dev) / Postgres (Prod - a definir)
*   **Estilização:** CSS Modular / Vanilla

## Como Executar o Projeto Localmente

Para rodar este projeto em sua máquina para desenvolvimento e testes (Monorepo: Frontend + Backend juntos):

### Pré-requisitos
*   Node.js (versão 18 ou superior recomendada)
*   NPM ou Yarn

### Instalação e Execução (Método Recomendado)

1.  **Clone o repositório:**
    ```bash
    git clone [LINK_DO_SEU_REPOSITÓRIO]
    cd nome-do-repositorio-camc
    ```

2.  **Instale as dependências:**
    Na raiz do projeto, execute:
    ```bash
    npm install
    ```

3.  **Inicie o Servidor Local (Frontend + Strapi):**
    Utilizamos um comando unificado para rodar ambos simultaneamente:
    ```bash
    npm run dev:all
    ```

    *   **Site (Frontend):** [http://localhost:5173](http://localhost:5173)
    *   **Painel Admin (Strapi):** [http://localhost:1337/admin](http://localhost:1337/admin)

---

### Execução Individual (Opcional)

Caso queira rodar separadamente:

*   **Backend (Strapi):**
    ```bash
    npm run develop
    ```

*   **Frontend:**
    ```bash
    cd Site-CAMC-Login-senha/Site-CAMC-Login-senha
    npm run dev
    ```

## Como Contribuir

1.  Faça um **Fork** do projeto.
2.  Crie uma **Branch** para sua funcionalidade (`git checkout -b feature/NomeDaFuncionalidade`).
3.  Faça o **Commit** de suas alterações (`git commit -m 'feat: Adiciona funcionalidade X'`).
4.  Faça o **Push** para a Branch (`git push origin feature/NomeDaFuncionalidade`).
5.  Abra um **Pull Request (PR)** descrevendo claramente as mudanças.

---

*React + Vite Template Info:*
*This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.*
