function pesquisar() {
    // Obtém o elemento HTML onde os resultados serão exibidos.
    let pesquisa = document.getElementById("pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa) {
        pesquisa.innerHTML = "<h5>Nenhum jogo foi encontrado :(</h5>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultado = "";
    let nome = "";
    let genero = "";
    let descricao = "";

    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        genero = dado.genero.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (nome.includes(campoPesquisa) || genero.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultado += `
                <div class="resultado">
                    <img src="${dado.banner}">
                    <div class="conteudo">
                        <h2>${dado.nome}</h2>
                        <p>${dado.descricao}</p>
                        <p>${dado.lancamento}</p>
                        <p>${dado.genero}</p>
                        <p>${dado.estudios}</p>
                        <a href="${dado.link}" target="_blank">Baixe Aqui</a>
                    </div>
                </div>
            `;
        }
    }

    if (!resultado) {
        pesquisa.innerHTML = "<h5>Nada foi encontrado. Você precisa digitar um nome ou genero do jogo :(</h5>"
        return
    }

    // Atualiza o conteúdo do elemento "pesquisa" com os resultados.
    pesquisa.innerHTML = resultado;
}
