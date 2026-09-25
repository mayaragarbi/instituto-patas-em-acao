# Instituto Patas em Ação

Projeto acadêmico desenvolvido durante a disciplina de Front-End Development.

O projeto simula o site de uma ONG voltada ao resgate e cuidado de cães e gatos e foi utilizado para aplicar, de forma prática, conceitos de HTML5, CSS3 e JavaScript.

## Funcionalidades

- Navegação entre as páginas Início, Projetos e Cadastro
- Layout responsivo para diferentes tamanhos de tela
- Menu hambúrguer para dispositivos móveis
- Cards de projetos e campanhas
- Formulário de cadastro com validação
- Feedback visual para campos válidos e inválidos
- Mensagem de sucesso em formato de toast
- Navegação no formato Single Page Application (SPA)
- Geração dinâmica dos cards de campanhas com JavaScript
- Persistência de dados utilizando localStorage

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Flexbox
- CSS Grid
- Media Queries
- Web Storage API
- ES6 Modules

## Estrutura do projeto

O projeto foi organizado separando os arquivos de acordo com suas responsabilidades:

- `index.html` — página inicial
- `projetos.html` — projetos e campanhas da ONG
- `cadastro.html` — formulário de cadastro
- `css/style.css` — estilos, Design System e responsividade
- `imagens/` — recursos visuais utilizados no site
- `js/main.js` — ponto de entrada do JavaScript
- `js/router.js` — navegação SPA
- `js/campanhas.js` — geração dinâmica das campanhas
- `js/formulario.js` — eventos e validação do formulário
- `js/menu.js` — comportamento do menu mobile
- `js/storage.js` — persistência de dados com localStorage

## Design System

O CSS utiliza variáveis personalizadas para manter consistência entre os componentes da interface.

Foram definidas variáveis para:

- cores principais e secundárias
- cores de fundo e superfície
- bordas
- estados de sucesso e erro
- escala tipográfica em `rem`
- espaçamentos
- border-radius

O layout utiliza CSS Grid de 12 colunas, Flexbox e diferentes breakpoints para adaptação da interface em celulares, tablets e desktops.

## JavaScript

O JavaScript foi dividido em módulos utilizando `import` e `export`.

A aplicação utiliza manipulação do DOM para atualizar conteúdos, validar o formulário e criar componentes dinamicamente.

A navegação SPA utiliza `fetch()`, `DOMParser`, `history.pushState()` e o evento `popstate` para alterar o conteúdo principal sem recarregar completamente a página.

Os cards das campanhas são gerados através de Template Literals e `innerHTML`, utilizando dados armazenados em um array JavaScript.

## Armazenamento local

O projeto utiliza `localStorage` para persistir informações das campanhas.

Os dados são convertidos utilizando `JSON.stringify()` antes do armazenamento e recuperados com `JSON.parse()` durante a inicialização da aplicação.

## Validação do formulário

O formulário utiliza validação nativa do HTML e JavaScript.

Entre os recursos utilizados estão:

- `required`
- `type="email"`
- `pattern`
- `checkValidity()`
- `reportValidity()`
- eventos `input` e `submit`

O usuário recebe feedback visual através de cores de sucesso e erro durante o preenchimento.

## Estratégia de versionamento

O projeto utiliza uma estrutura baseada no GitFlow:

- `master` — versão estável da aplicação
- `develop` — integração das alterações em desenvolvimento
- `feature/` — desenvolvimento isolado de novas funcionalidades
- `hotfix/` — reservado para correções urgentes da versão estável

As alterações desenvolvidas em branches `feature/` são integradas primeiro à `develop` e, após validação, incorporadas à `master`.

## Conventional Commits

A partir da etapa de versionamento, as mensagens de commit seguem o padrão Conventional Commits.

Exemplos:

- `feat:` para novas funcionalidades
- `fix:` para correções
- `docs:` para documentação
- `refactor:` para reorganizações de código

## Versionamento semântico

As versões seguem o padrão:

`MAJOR.MINOR.PATCH`

- **MAJOR** — alterações incompatíveis ou grandes mudanças estruturais
- **MINOR** — inclusão de novas funcionalidades compatíveis
- **PATCH** — correções de erros

A versão `v1.0.0` representa a primeira versão estável da aplicação.

## Objetivo acadêmico

O projeto foi desenvolvido com o objetivo de praticar a construção de uma aplicação front-end completa, passando pela estruturação semântica, estilização responsiva, interatividade com JavaScript, manipulação do DOM, armazenamento local, depuração e versionamento com Git.