import { renderizarCampanhas } from "./campanhas.js";
import { fecharMenu } from "./menu.js";

const paginasInternas = [
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

    const link = evento.target.closest("a");

    if (!link) {
        return;
    }

    const pagina = link.getAttribute("href");

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

        if (!resposta.ok) {
            throw new Error(
                "Não foi possível carregar a página."
            );
        }

        const html = await resposta.text();

        const parser = new DOMParser();

        const documento = parser.parseFromString(
            html,
            "text/html"
        );

        const novoConteudo =
            documento.querySelector("#conteudo-principal");

        if (!novoConteudo) {
            throw new Error(
                "Conteúdo principal não encontrado."
            );
        }

        conteudoPrincipal.innerHTML =
            novoConteudo.innerHTML;

        document.title = documento.title;

        renderizarCampanhas();

        if (adicionarHistorico) {
            history.pushState({}, "", pagina);
        }

        window.scrollTo(0, 0);

    } catch (erro) {

        console.error(erro);

        conteudoPrincipal.innerHTML = `
            <section>
                <h2>Erro ao carregar a página.</h2>
            </section>
        `;
    }
}

function tratarHistorico() {

    const paginaAtual =
        window.location.pathname.split("/").pop()
        || "index.html";

    carregarPagina(paginaAtual, false);
}