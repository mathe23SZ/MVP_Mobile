const form = document.getElementById("loginForm");

const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    mensagem.classList.add("d-none");

    const usuario = document.getElementById("usuario").value;

    const senha = document.getElementById("senha").value;

    try {

        const resposta = await fetch("/api/auth/login", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                usuario,

                senha

            })

        });

        const dados = await resposta.json();

        if (dados.success) {

            window.location.href = "dashboard.html";

            return;

        }

        mensagem.className = "alert alert-danger";

        mensagem.innerHTML = dados.message;

    }

    catch {

        mensagem.className = "alert alert-danger";

        mensagem.innerHTML = "Erro ao conectar ao servidor.";

    }

});