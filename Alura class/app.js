function pesquisar(){    
let section = document.getElementById("resultados-pesquisa")

let campoPesquisa = document.getElementById("campo-pesquisa").value

if(!campoPesquisa){
    
    section.innerHTML ="<p> Nada foi encontrado </p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()
campoPesquisa = campoPesquisa.normalize('NFD').replace(/[\u0300-\u036f]/g, "");


console.log(campoPesquisa)

let resultados = "";
let epoca = "";
let descricao = "";
let tags = "";



for (let dado of dados) {
    epoca = dado.epoca.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    descricao = dado.descricao.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    tags = dado.tags.toLowerCase();
    
    if(epoca.includes(campoPesquisa) || descricao.includes(campoPesquisa)||tags.includes(campoPesquisa)){
        // cria um novo elemento
        resultados += ` <div class="item-resultado">
        <h2>
         ${dado.epoca}
        </h2>
        <p class="descricao-meta">${dado.descricao} 
        <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `;
    }


    
}

if (!resultados){

    resultados = "<p>Nada foi encontrado</p>"

}

section.innerHTML = resultados
}





