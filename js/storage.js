export function salvarDados(chave, dados) {
    localStorage.setItem(
        chave,
        JSON.stringify(dados)

    );
}

export function carregarDados(chave, valorPadrao) {
    const dadosSalvos = localStorage.getItem(chave);

    if(dadosSalvos) {
        try {
            return JSON.parse(dadosSalvos);
        } catch (erro) {
            console.error("Erro ao recuperar dados:", erro);
        }
    }

    salvarDados(chave, valorPadrao);

    return valorPadrao;

}