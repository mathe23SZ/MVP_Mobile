const botaoLogout = document.getElementById("btnLogout");

botaoLogout.addEventListener("click", async () => {

    await fetch("/api/auth/logout", {

        method: "POST"

    });

    window.location.href = "login.html";

});