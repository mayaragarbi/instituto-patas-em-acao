import { renderizarCampanhas } from "./campanhas.js";
import { fecharMenu } from "./menu.js";

const paginasInternas= [
    "index.html",
    "projetos.html",
    "cadastro.html"
];

let conteudoPrincipal;

export function iniciarNavegacao() {

    conteudoPrincipal = document.querySelector("#conteudo-principal");

    if (!conteudoPrincipal) {
        return;
    }

    document.addEventListener(
        "click",
        tratarCliqueNavegacao
    );

    window.addEventListener(
        "popstate",
        tratarHistorico
    );
}

function tratarCliqueNavegacao(evento) {

    const pagine = link.getAttribute("href");

    if (!paginasInternas.includes(pagina)) {
        return;
    }

    evento.preventDefault();

    fecharMenu();

    carregarPagina(pagina);
}

async function carregarPagina(
    pagina, 
    adicionarHistorico = true
) {

    try {

        const resposta = await fetch(pagina);

        if(!resposta.ok) {
            throw new Error(
                "Não foi possível carregar a página."
            );
        }

        const html = await resposta.text();

        const parser = new DOMParser();

        const documento = parser.parseFromString(html, "text/html");

        const novoConteudo = documento.querySelector("#onteudo-principal");

        if (!novoConteudo) {
            throw new Error(
                "Conteúdo principal não encontrado."
            );
        }

        conteudoPrincipal.innerHtml = novoConteudo.innerHtml;

        document.title = document.title;

        renderizarCampanhas();

        if (adicionarHistorico) {
            history.pushState({},"", pagina);
        }

        window.scrollTo(0, 0);

    }catch (erro) {
        console.error(erro);

        conteudoPrincipal.innerHtml = `
        <section>
        <h2>Erro ao carregar a página. </h2>
        </section>
        `;
    }
}

function tratarHistorico() {

    const paginaAtual = window.location.pathname.split("/").pop() || "index.html";

    carregarPagina(paginaAtual, false);
}