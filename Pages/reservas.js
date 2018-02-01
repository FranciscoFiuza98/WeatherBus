$(function () {
    var utilizador = JSON.parse(localStorage.getItem("login"));

    if (utilizador.loggedIn == true) {
        $("#btnEntrar").hide();
        $("#btnRegistar").hide();
    };

    if (utilizador.loggedIn == false) {
        $("#btnSair").hide();
        $("#navMinhasReservas").hide();
    };

    var d = new Date();
    var dia = d.getDate();
    var mes = d.getMonth() + 1;
    var ano = d.getFullYear();
    var data = ano + "-" + mes + "-" + dia;
    var posicaoArray;
    var reservas = new Array();

    function reserva(utilizador, data, dataReserva, horaReserva) {
        this.utilizador = utilizador;
        this.data = data;
        this.dataReserva = dataReserva;
        this.horaReserva = horaReserva;
    };

    function verificaReserva(reserva) {
        this.reserva = reserva;

        console.log(reserva);

        if (reservas.length > 0) {
            for (var i = 0; i < reservas.length; i++) {
                if (reserva.dataReserva == reservas[i].dataReserva && reserva.horaReserva == reservas[i].horaReserva) {
                    if (reserva.utilizador.numero == reservas[i].utilizador.numero || reserva.utilizador.email == reservas[i].utilizador.email) {
                        return true;
                    };
                };
            };
        };

        return false;
    };

    function confirmarReserva(reserva) {
        this.reserva = reserva;
        var r = confirm("Quer mesmo efetuar a reserva?");

        if (r == true) {

            if (JSON.parse(localStorage.getItem("reservas")) != null) {
                reservas = JSON.parse(localStorage.getItem("reservas"));
            };

            var verifica = verificaReserva(reserva);

            if (verifica == false) {
                reservas.push(reserva);
                localStorage.reservas = JSON.stringify(reservas);
                alert("A reserva foi efetuada com sucesso!");
            }
            else {
                alert("Já efetuou esta reserva!")
            };

        };
    };

    function confirmarLogin() {
        var r = confirm("Só utilizadores autenticados podem fazer reservas. Deseja fazer login?");
        if (r == true) {
            window.location.href = "login.html";
        }
    };

    $("#btnSair").click(function() {
        utilizador.loggedIn = false;
        localStorage.login = JSON.stringify(utilizador);
        location.reload();
    });

    $.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=Porto&units=metric&appid=87a6065fba343229651ae6a940fe4ddb", function (resposta) {

        for (var i = 0; i < resposta.list.length; i++) {
            var dataHoraPrevisao = resposta.list[i].dt_txt;
            var dataPrevisao = dataHoraPrevisao.split(" ");

            if (dataHoraPrevisao == ano + "-" + 0 + mes + "-" + (dia) + " " + "06:00:00") {
                posicaoArray = i;
                break;

            }
            else if (dataHoraPrevisao == ano + "-" + 0 + mes + "-" + (dia + 1) + " " + "06:00:00") {
                posicaoArray = i;
                break;
            };

        };

        var data1 = resposta.list[posicaoArray].dt_txt.split(" ");
        $("#primeiroDia").text(data1[0]);

        var data2 = resposta.list[posicaoArray + 8].dt_txt.split(" ");
        $("#segundoDia").text(data2[0]);

        var data3 = resposta.list[posicaoArray + 16].dt_txt.split(" ");
        $("#terceiroDia").text(data3[0]);

        var data4 = resposta.list[posicaoArray + 24].dt_txt.split(" ");
        $("#quartoDia").text(data4[0]);

        var data5 = resposta.list[posicaoArray + 32].dt_txt.split(" ");
        $("#quintoDia").text(data5[0]);

        for (var i = 0; i < resposta.list.length; i++) {
            var data = resposta.list[i].dt_txt.split(" ");
            if ($("#primeiroDia").text() == data[0]) {
                if (data[1] == "06:00:00") {
                    if (resposta.list[i].weather[0].main == "Rain") {
                        $("#primeiroDia6 li").css("background-color", "lightgreen");
                    }
                    else {
                        $("#primeiroDia6 li").css("background-color", "gold");
                    }
                }
                else if (data[1] == "09:00:00") {
                    if (resposta.list[i].weather[0].main == "Rain") {
                        $("#primeiroDia9 li").css("background-color", "lightgreen");
                    }
                    else {
                        $("#primeiroDia9 li").css("background-color", "gold");
                    }
                }
                else if (data[1] == "15:00:00") {
                    if (resposta.list[i].weather[0].main == "Rain") {
                        $("#primeiroDia15 li").css("background-color", "lightgreen");
                    }
                    else {
                        $("#primeiroDia15 li").css("background-color", "gold");
                    }
                }

            };

            if ($("#segundoDia").text() == data[0]) {
                if (data[1] == "06:00:00") {
                    if (resposta.list[i].weather[0].main == "Rain") {
                        $("#segundoDia6 li").css("background-color", "lightgreen");
                    }
                    else {
                        $("#segundoDia6 li").css("background-color", "gold");
                    }
                }
                else if (data[1] == "09:00:00") {
                    if (resposta.list[i].weather[0].main == "Rain") {
                        $("#segundoDia9 li").css("background-color", "lightgreen");
                    }
                    else {
                        $("#segundoDia9 li").css("background-color", "gold");
                    }
                }
                else if (data[1] == "15:00:00") {
                    if (resposta.list[i].weather[0].main == "Rain") {
                        $("#segundoDia15 li").css("background-color", "lightgreen");
                    }
                    else {
                        $("#segundoDia15 li").css("background-color", "gold");
                    }
                }

            };

            if ($("#terceiroDia").text() == data[0]) {
                if (data[1] == "06:00:00") {
                    if (resposta.list[i].weather[0].main == "Rain") {
                        $("#terceiroDia6 li").css("background-color", "lightgreen");
                    }
                    else {
                        $("#terceiroDia6 li").css("background-color", "gold");
                    }
                }
                else if (data[1] == "09:00:00") {
                    if (resposta.list[i].weather[0].main == "Rain") {
                        $("#terceiroDia9 li").css("background-color", "lightgreen");
                    }
                    else {
                        $("#terceiroDia9 li").css("background-color", "gold");
                    }
                }
                else if (data[1] == "15:00:00") {
                    if (resposta.list[i].weather[0].main == "Rain") {
                        $("#terceiroDia15 li").css("background-color", "lightgreen");
                    }
                    else {
                        $("#terceiroDia15 li").css("background-color", "gold");
                    }
                }

            };

            if ($("#quartoDia").text() == data[0]) {
                if (data[1] == "06:00:00") {
                    if (resposta.list[i].weather[0].main == "Rain") {
                        $("#quartoDia6 li").css("background-color", "lightgreen");
                    }
                    else {
                        $("#quartoDia6 li").css("background-color", "gold");
                    }
                }
                else if (data[1] == "09:00:00") {
                    if (resposta.list[i].weather[0].main == "Rain") {
                        $("#quartoDia9 li").css("background-color", "lightgreen");
                    }
                    else {
                        $("#quartoDia9 li").css("background-color", "gold");
                    }
                }
                else if (data[1] == "15:00:00") {
                    if (resposta.list[i].weather[0].main == "Rain") {
                        $("#quartoDia15 li").css("background-color", "lightgreen");
                    }
                    else {
                        $("#quartoDia15 li").css("background-color", "gold");
                    }
                }

            };

            if ($("#quintoDia").text() == data[0]) {
                if (data[1] == "06:00:00") {
                    if (resposta.list[i].weather[0].main == "Rain") {
                        $("#quintoDia6 li").css("background-color", "lightgreen");
                    }
                    else {
                        $("#quintoDia6 li").css("background-color", "gold");
                    }
                }
                else if (data[1] == "09:00:00") {
                    if (resposta.list[i].weather[0].main == "Rain") {
                        $("#quintoDia9 li").css("background-color", "lightgreen");
                    }
                    else {
                        $("#quintoDia9 li").css("background-color", "gold");
                    }
                }
                else if (data[1] == "15:00:00") {
                    if (resposta.list[i].weather[0].main == "Rain") {
                        $("#quintoDia15 li").css("background-color", "lightgreen");
                    }
                    else {
                        $("#quintoDia15 li").css("background-color", "gold");
                    }
                }

            };
        };
    });

    var color;

    $("#horarios li").hover(function () {
        color = $(this).css("background-color");
        if (color == "rgb(144, 238, 144)") {
            $(this).css("background-color", "green");
        }
    },
        function () {
            $(this).css("background-color", color);
        });


    $("#horarios li").click(function () {
        color = $(this).css("background-color");
        if (color == "rgb(0, 128, 0)") {
            if (utilizador.loggedIn == true) {
                var dataReserva = $(this).parentsUntil("ul").parent().prev().children().text();
                var hora = $(this).children().last().text();

                var novaReserva = new reserva(utilizador, data, dataReserva, hora);
    
                console.log(dataReserva, hora);
                confirmarReserva(novaReserva);
            }
            else {
                confirmarLogin();
            }
        };
    });
});