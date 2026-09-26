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
- Vite
- html-minifier-terser

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
- `vite.config.js` — configuração da build de produção
- `package.json` — dependências e scripts do projeto
- `package-lock.json` — registro das versões das dependências
- `.gitignore` — arquivos e diretórios ignorados pelo Git

## Execução do projeto

Para executar o projeto em ambiente de desenvolvimento é necessário ter o Node.js instalado.

Após clonar o repositório, instale as dependências:

```bash
npm install

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev

Para gerar a versão de produção:

```bash
npm run build

Para visualizar a versão de produção localmente:
```bash
npm run preview
```

## Build e minificação
O projeto utiliza o Vite como ferramenta de build.
Durante a geração da versão de produção, os arquivos JavaScript e CSS são minificados pelo processo de build do Vite. Para a minificação dos arquivos HTML foi utilizado o html-minifier-terser, integrado à configuração do Vite.
A comparação entre os arquivos-fonte e a versão de produção apresentou os seguintes resultados:
- HTML: 8.455 bytes para 6.788 bytes — redução de aproximadamente 19,72%
- CSS: 11.616 bytes para 7.732 bytes — redução de aproximadamente 33,44%
- JavaScript: 6.386 bytes para 3.601 bytes — redução de aproximadamente 43,61%
- Total: 26.457 bytes para 18.121 bytes — redução de aproximadamente 31,51%

Após a build, a aplicação foi testada utilizando o servidor de preview do Vite. A navegação SPA, a geração das campanhas e a validação do formulário continuaram funcionando normalmente após a minificação.

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

```md
- `build:` para alterações relacionadas ao processo de build e dependências

## Versionamento semântico

As versões seguem o padrão:

`MAJOR.MINOR.PATCH`

- **MAJOR** — alterações incompatíveis ou grandes mudanças estruturais
- **MINOR** — inclusão de novas funcionalidades compatíveis
- **PATCH** — correções de erros

A versão `v1.0.0` representa a primeira versão estável da aplicação.

## Objetivo acadêmico

O projeto foi desenvolvido com o objetivo de praticar a construção de uma aplicação front-end completa, passando pela estruturação semântica, estilização responsiva, interatividade com JavaScript, manipulação do DOM, armazenamento local, depuração, otimização de arquivos, build de produção e versionamento com Git.