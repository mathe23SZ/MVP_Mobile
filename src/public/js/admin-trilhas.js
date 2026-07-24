const tabela = document.getElementById("listaTrilhas");

const form = document.getElementById("formTrilha");

const campoId = document.getElementById("id");
const campoNome = document.getElementById("nome");
const campoDificuldade = document.getElementById("dificuldade");
const campoDistancia = document.getElementById("distancia");
const campoStatus = document.getElementById("status");

/* ==========================
   Listar
========================== */

async function carregarTrilhas() {

    const resposta = await fetch("/api/trilhas");

    const dados = await resposta.json();

    tabela.innerHTML = "";

    dados.data.forEach(trilha => {

        tabela.innerHTML += `

        <tr>

            <td>${trilha.nome}</td>

            <td>${trilha.dificuldade}</td>

            <td>${trilha.distancia}</td>

            <td>${trilha.status}</td>

            <td>

                <button
                    class="btn btn-warning btn-sm me-2"
                    onclick="editar(${trilha.id})">

                    Editar

                </button>

                <button
                    class="btn btn-danger btn-sm"
                    onclick="excluir(${trilha.id})">

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

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const trilha = {

        nome: campoNome.value,

        dificuldade: campoDificuldade.value,

        distancia: campoDistancia.value,

        status: campoStatus.value

    };

    let metodo = "POST";

    let url = "/api/trilhas";

    if (campoId.value != "") {

        metodo = "PUT";

        url += "/" + campoId.value;

    }

    await fetch(url, {

        method: metodo,

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(trilha)

    });

    limparFormulario();

    carregarTrilhas();

});

/* ==========================
   Editar
========================== */

async function editar(id) {

    const resposta = await fetch("/api/trilhas/" + id);

    const dados = await resposta.json();

    const trilha = dados.data;

    campoId.value = trilha.id;

    campoNome.value = trilha.nome;

    campoDificuldade.value = trilha.dificuldade;

    campoDistancia.value = trilha.distancia;

    campoStatus.value = trilha.status;

}

/* ==========================
   Excluir
========================== */

async function excluir(id) {

    if (!confirm("Deseja excluir esta trilha?")) {

        return;

    }

    await fetch("/api/trilhas/" + id, {

        method: "DELETE"

    });

    carregarTrilhas();

}

/* ==========================
   Limpar
========================== */

function limparFormulario() {

    campoId.value = "";

    form.reset();

}

/* ==========================
   Inicialização
========================== */

carregarTrilhas();