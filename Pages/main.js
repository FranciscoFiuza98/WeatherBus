$(function () {
    var utilizador = JSON.parse(localStorage.getItem("login"));


    if(utilizador.loggedIn == true) {
        $("#btnEntrar").hide();
        $("#btnRegistar").hide();
        $("#cardRegistar").hide();
    };

    if (utilizador.loggedIn == false) {
        $("#cardMinhasReservas").hide();
        $("#minhasReservas").hide();
        $("#btnSair").hide();
    };

    function confirmarLogin() {
        var r = confirm("Só utilizadores autenticados podem consultar esta página. Deseja fazer login?");
        if (r == true) {
            window.location.href = "login.html";
        }
    };


    $("#minhasReservas").click(function () {
        if (utilizador.loggedIn == false) {
            confirmarLogin();
        }
        else {
            window.location.href = "minhasreservas.html";
        };
    });

    $("#btnSair").click(function() {
        utilizador.loggedIn = false;
        localStorage.login = JSON.stringify(utilizador);
        location.reload();
    });

    $("#minhasReservasMain").click(function () {
        if (utilizador.loggedIn == false) {
            confirmarLogin();
        }
        else {
            window.location.href = "minhasreservas.html";
        };
    });
});