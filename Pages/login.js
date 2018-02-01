$(function () {
    $("#btnMain").click(function () {
        window.location.href = "main.html";
    });
    $("#btnEntrar").click(function () {
        var utilizadores = JSON.parse(localStorage.getItem("utilizadores"));
        var utilizador = $("#inputUtilizador").val();
        var password = $("#inputPassword").val();
        var cont = 0;

        for (var i = 0; i < utilizadores.length; i++) {
            if (utilizador == utilizadores[i].numero || utilizador == utilizadores[i].email) {
                cont++;
                if (password == utilizadores[i].password) {
                    alert("Bem-vindo ao WeatherBus!");
                    var utilizadorLogin = utilizadores[i];
                    utilizadorLogin.loggedIn = true;
                    localStorage.login = JSON.stringify(utilizadorLogin);
                    $("#formLogin").attr("action", "main.html");
                }
                else {
                    alert("A palavra-passe está errada!");
                };
            };
        };

        if (utilizador.length > 0 && cont == 0) {
            alert("Não existe nenhum utilizador com esse numero/email");
        }
    });
});