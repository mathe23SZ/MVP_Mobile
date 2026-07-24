const tabela = document.getElementById("listaBiodiversidades");

const form = document.getElementById("formBiodiversidade");


const campoId = document.getElementById("id");

const campoNome = document.getElementById("nome");

const campoCategoria = document.getElementById("categoria");

const campoDescricao = document.getElementById("descricao");

const campoLocalizacao = document.getElementById("localizacao");

const campoStatus = document.getElementById("status");



/* ==========================
   Listar Biodiversidades
========================== */


async function carregarBiodiversidades(){


    const resposta = await fetch("/api/biodiversidades");


    const dados = await resposta.json();


    tabela.innerHTML = "";



    dados.data.forEach(biodiversidade => {


        tabela.innerHTML += `


        <tr>


            <td>${biodiversidade.nome}</td>


            <td>${biodiversidade.categoria}</td>


            <td>${biodiversidade.localizacao}</td>


            <td>${biodiversidade.status}</td>



            <td>


                <button

                class="btn btn-warning btn-sm me-2"

                onclick="editar(${biodiversidade.id})">


                Editar


                </button>




                <button

                class="btn btn-danger btn-sm"

                onclick="excluir(${biodiversidade.id})">


                Excluir


                </button>


            </td>


        </tr>


        `;


    });


}




/* ==========================
   Salvar
========================== */


form.addEventListener("submit", async(e)=>{


    e.preventDefault();



    const biodiversidade = {


        nome: campoNome.value,


        categoria: campoCategoria.value,


        descricao: campoDescricao.value,


        localizacao: campoLocalizacao.value,


        status: campoStatus.value


    };




    let url = "/api/biodiversidades";


    let metodo = "POST";




    if(campoId.value !== ""){


        url += "/" + campoId.value;


        metodo = "PUT";


    }




    await fetch(url,{


        method: metodo,


        headers:{


            "Content-Type":"application/json"


        },


        body: JSON.stringify(biodiversidade)


    });




    limparFormulario();


    carregarBiodiversidades();



});





/* ==========================
   Editar
========================== */


async function editar(id){



    const resposta = await fetch("/api/biodiversidades/" + id);



    const dados = await resposta.json();



    const biodiversidade = dados.data;



    campoId.value = biodiversidade.id;


    campoNome.value = biodiversidade.nome;


    campoCategoria.value = biodiversidade.categoria;


    campoDescricao.value = biodiversidade.descricao;


    campoLocalizacao.value = biodiversidade.localizacao;


    campoStatus.value = biodiversidade.status;



}




/* ==========================
   Excluir
========================== */


async function excluir(id){



    const confirmar = confirm(


        "Deseja realmente excluir esta biodiversidade?"


    );



    if(!confirmar) return;



    await fetch("/api/biodiversidades/" + id,{


        method:"DELETE"


    });



    carregarBiodiversidades();



}





/* ==========================
   Limpar
========================== */


function limparFormulario(){


    campoId.value = "";


    form.reset();


}





/* ==========================
   Inicialização
========================== */


carregarBiodiversidades();