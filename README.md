# 🏸 Site da Equipe de Badminton da Poli-USP

**[Ver Site ao Vivo](https://badmintonpoliusp.github.io/)**

Este é o repositório oficial do site da equipe de Badminton da Escola Politécnica da USP. Um portal para membros, notícias, história e conquistas da equipe.

![Screenshot do Site](https://i.imgur.com/gK967rL.png)

## ✨ Funcionalidades

O site foi desenvolvido com uma arquitetura moderna em React e inclui as seguintes funcionalidades:

* **Header Responsivo e Fixo:** Um menu de navegação que se adapta a telas de celular (com menu hamburger) e permanece fixo no topo da página durante a rolagem.
* **Homepage com Seção "Hero":** Uma página inicial dinâmica com uma seção de boas-vindas que combina texto introdutório e um slider de imagens.
* **Slider de Imagens Reutilizável:** Um componente de carrossel de imagens que pode carregar fotos de diferentes pastas do projeto, tornando-o flexível para ser usado em várias páginas (como Galeria, Eventos, etc.).
* **Sistema de Blog Completo:** Uma seção de blog com uma página de índice e páginas de post individuais geradas dinamicamente a partir de dados, utilizando roteamento.
* **Página Hall da Fama:** Uma lista de membros notáveis, com layout de duas colunas e exibição condicional de suas conquistas e contribuições.
* **Footer Fixo:** Um rodapé que permanece na base da página, mesmo em páginas com pouco conteúdo.
* **Conteúdo Gerenciado por Dados:** A maior parte do conteúdo do site (membros da equipe, posts do blog, imagens do slider) é carregada a partir de arquivos de dados, facilitando atualizações sem a necessidade de alterar a lógica dos componentes.

## 🛠️ Tecnologias Utilizadas

* **[React](https://react.dev/)**: Biblioteca principal para a construção da interface de usuário.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build extremamente rápida para o desenvolvimento frontend.
* **[React Router DOM](https://reactrouter.com/)**: Para gerenciar o roteamento e a navegação entre as diferentes páginas do site.
* **[React Slick](https://react-slick.neostack.com/)**: Para o componente de carrossel/slider de imagens.
* **[React Icons](https://react-icons.github.io/react-icons/)**: Para ícones (como o menu hamburger).
* **CSS Puro**: Estilização feita com arquivos CSS componentizados, utilizando Flexbox e Grid para layouts responsivos.

## 🚀 Começando

Para clonar e rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/badmintonpoliusp/badmintonpoliusp.github.io.git](https://github.com/badmintonpoliusp/badmintonpoliusp.github.io.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd badmintonpoliusp.github.io
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O site estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

## 📁 Estrutura de Pastas

O projeto está organizado da seguinte forma para manter o código limpo e escalável: