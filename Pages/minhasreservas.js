$(function () {
    var reservas = JSON.parse(localStorage.getItem("reservas"));
    var utilizador = JSON.parse(localStorage.getItem("login"));

    console.log(reservas);
    console.log(utilizador);

    for (var i = 0; i < reservas.length; i++) {
        if (utilizador.numero == reservas[i].utilizador.numero) {
            var data = reservas[i].data;
            var dataReserva = reservas[i].dataReserva;
            var horaReserva = reservas[i].horaReserva;
            $("tbody").last().append("<tr><td>" + data + "</td><td>" + dataReserva + "</td><td>" + horaReserva + "</td><td class='remover'><i class='fa fa-times' aria-hidden='true'></i></td></tr>")
        };
    };

    $("#btnSair").click(function() {
        utilizador.loggedIn = false;
        localStorage.login = JSON.stringify(utilizador);
        window.location.href = "main.html";
    });

    $(".remover").click(function () {

        var r = confirm("Deseja mesmo remover esta reserva?");

        if (r == true) {
            var removerHora = $(this).prev().text();
            var removerData = $(this).prev().prev().text();


            for (var i = 0; i < reservas.length; i++) {
                if (removerHora == reservas[i].horaReserva && removerData == reservas[i].dataReserva && reservas[i].utilizador.numero == utilizador.numero) {
                    console.log("asfsa");
                    reservas.splice(i, 1);
                    localStorage.reservas = JSON.stringify(reservas);
                    location.reload();
                }
            };
        }
    });
});