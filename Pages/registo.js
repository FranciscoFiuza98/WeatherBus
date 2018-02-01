$(function () {
    var utilizadores = new Array();

    /* localStorage.clear(); */

    function utilizador(nome, email, numero, password, loggedIn) {
        this.nome = nome;
        this.email = email;
        this.numero = numero;
        this.password = password;
        this.loggedIn = loggedIn;
    };

    function verificaUtilizador(utilizador) {
        this.utilizador = utilizador;

        if (utilizadores.length > 0) {
            for (var i = 0; i < utilizadores.length; i++) {
                if (this.utilizador.numero == utilizadores[i].numero) {
                    return 1;
                }
                else if (this.utilizador.email == utilizadores[i].email) {
                    return 2;
                };
            };
        }
        return 0;
    };
    $("#btnVoltar").click(function () {
        window.location.href = "login.html";
    });
    $("#btnRegistar").click(function () {
        var nome = $("#inputNome").val();
        var nomeSplit = nome.split(" ");
        var email = $("#inputEmail").val();
        var numero = $("#inputNumero").val();
        var password = $("#inputPassword").val();
        var repetePassword = $("#inputConfirmarPassword").val();
        var cont = 0;



        if (nome.length > 0 && nomeSplit.length < 2) {
            alert("O campo do nome tem de conter o primeiro e ultimo nome!");
            cont = 1;
        }
        else {
            for (var i = 0; i < nome.length; i++) {
                if (!isNaN(parseInt(nome[i]))) {
                    alert("O nome só pode conter letras!");
                    cont = 1;
                    break;
                };
            };
        }

        if (numero.length > 0 && numero.length != 7) {
            alert("O número de aluno tem de conter 7 algarismos.");
            cont = 1;
        }
        else if (numero.length == 7 && numero[0] != "9" && numero[1] != "1") {
            alert("O número de aluno tem de começar por '91'");
            cont = 1;
        };

        for (var i = 0; i < numero.length; i++) {
            if (isNaN(parseInt(numero[i]))) {
                alert("O número de aluno só pode conter algarismos!");
                cont = 1;
                break;
            }
        };

        if (password.length > 0 && password.length < 5 || password.length >= 15) {
            alert("A palavra-chave tem de ter entre 5 e 15 caracteres!");
            cont = 1;
        }
        else if ( password != repetePassword) {
            alert("As palavras-chave têm de ser iguais!");
            cont = 1;
        };

        if (nome.length != 0 && email.length != 0 && numero.length != 0 && password.length != 0 && cont == 0) {

            var novoUtilizador = new utilizador(nome, email, numero, password, false);
            if (JSON.parse(localStorage.getItem("utilizadores")) != null) {
                utilizadores = JSON.parse(localStorage.getItem("utilizadores"));
            }
            var verifica = verificaUtilizador(novoUtilizador);
            console.log(verifica);
            console.log(utilizadores);
            if (verifica == 0) {
                utilizadores.push(novoUtilizador);
                localStorage.utilizadores = JSON.stringify(utilizadores);
                alert("Utilizador registado com sucesso!");
                $("#formRegisto").attr("action", "login.html");

            }
            else if (verifica == 1) {
                alert("Já existe um utilizador com este número!");
            }
            else if (verifica == 2) {
                alert("Já existe um utilizador com este email!");
            };
        };

    });
});