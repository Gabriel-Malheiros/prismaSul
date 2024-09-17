function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("password").value;

    if (login =="admin" && senha == "admin") {
        alert("Sucesso");
        location.href = "./pages/home/home.html";
    } else {
        alert("Erro")
    };
}


