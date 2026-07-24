const tabela = document.getElementById("listaEventos");
const form = document.getElementById("formEvento");

const campoId = document.getElementById("id");
const campoTitulo = document.getElementById("titulo");
const campoDescricao = document.getElementById("descricao");
const campoData = document.getElementById("data");
const campoStatus = document.getElementById("status");

/* ==========================
   Listar Eventos
========================== */

async function carregarEventos() {

    const resposta = await fetch("/api/eventos");

    const dados = await resposta.json();

    tabela.innerHTML = "";

    dados.data.forEach(evento => {

        tabela.innerHTML += `

        <tr>

            <td>${evento.titulo}</td>

            <td>${evento.data}</td>

            <td>${evento.status}</td>

            <td>

                <button
                    class="btn btn-warning btn-sm me-2"
                    onclick="editar(${evento.id})">

                    Editar

                </button>

                <button
                    class="btn btn-danger btn-sm"
                    onclick="excluir(${evento.id})">

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

    const evento = {

        titulo: campoTitulo.value,

        descricao: campoDescricao.value,

        data: campoData.value,

        status: campoStatus.value

    };

    let url = "/api/eventos";

    let metodo = "POST";

    if (campoId.value !== "") {

        url += "/" + campoId.value;

        metodo = "PUT";

    }

    await fetch(url, {

        method: metodo,

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(evento)

    });

    limparFormulario();

    carregarEventos();

});

/* ==========================
   Editar
========================== */

async function editar(id) {

    const resposta = await fetch("/api/eventos/" + id);

    const dados = await resposta.json();

    const evento = dados.data;

    campoId.value = evento.id;

    campoTitulo.value = evento.titulo;

    campoDescricao.value = evento.descricao;

    campoData.value = evento.data;

    campoStatus.value = evento.status;

}

/* ==========================
   Excluir
========================== */

async function excluir(id) {

    const confirmar = confirm(

        "Deseja realmente excluir este evento?"

    );

    if (!confirmar) return;

    await fetch("/api/eventos/" + id, {

        method: "DELETE"

    });

    carregarEventos();

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

carregarEventos();