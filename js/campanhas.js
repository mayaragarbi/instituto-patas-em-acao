import { carregarDados } from "./storage.js";

const campanhasPadrao = [
    {
        titulo: "Campanha de arrecadação de alimentos",
        descricao: "Recebemos doações de ração e medicamentos para cães e gatos atendidos pela ONG. ",
        status: "Em andamento"
    },
    { 
        titulo: "Campanha de inverno",
        descricao: "A campanha arrecada mantas, cobertores e itens para manter os animais protegidos durante os meses mais frios.",
        status: "Em andamento"
    }
];

const campanhas = carregarDados(
    "campanhas",
    campanhasPadrao
);

export function renderizarCampanhas() {
    const lista = 
    document.querySelector("#lista-campanhas");

    if (!lista) {
        return;
    }

    lista.innerHTML = campanhas.map(function (campanha) {
        return `
        <article class="campanha-card">
        <span class="badge">${campanha.status}</span>
        <h3>${campanha.titulo}</h3>
        <p>${campanha.descricao}</p>
        </article>

        `;
    }).join("");
}
