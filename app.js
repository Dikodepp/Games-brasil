function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa") .value

    // se campoPesquisa for uma string sem nada ou se nao for encontrado exibe a msg
    if (!campoPesquisa){
        section.innerHTML = "<p>Você não procurou um jogo para ser encontrado</p>"
        return
    }

    //deixa campo de pesquisa com letra minuscula
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se  titulo includes  campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            //cria um novo elemento html para casa resultado
            resultados += `
            <div class="item-resultado">
                <h2> 
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank" rel="noopener noreferrer"> Descubra mais </a>
            </div>
        `;
        }
            //entao faca...

        console.log(dado.titulo.includes(campoPesquisa))
       
    }
    // se nada for encontrado exbie a msg
    if (!resultados){
        resultados = "<p>Nem um Jogo foi encontrado!!!</p>"
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}



