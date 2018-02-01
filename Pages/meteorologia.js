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
    var posicaoArray;

    $("#btnSair").click(function() {
        utilizador.loggedIn = false;
        localStorage.login = JSON.stringify(utilizador);
        location.reload();
    });


    $.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=Porto&units=metric&appid=87a6065fba343229651ae6a940fe4ddb", function (resposta) {
        console.log(resposta);

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

        console.log(posicaoArray);

        switch (resposta.list[posicaoArray].weather[0].main) {
            case "Clear":
                $("#tempo1").text("Céu Limpo");
                $("#imagem1").attr("src", "Imagens/clear.jpg");
                $("#botao1").prop("disabled", true);
                $("#botao1").css("background-color", "grey");
                break;
            case "Clouds":
                $("#tempo1").text("Céu Nublado");
                $("#imagem1").attr("src", "Imagens/cloudy.png");
                $("#botao1").prop("disabled", true);
                $("#botao1").css("background-color", "grey");
                break;
            case "Rain":
                $("#tempo1").text("Chuva");
                $("#imagem1").attr("src", "Imagens/rain.png");
                break;
        };

        switch (resposta.list[posicaoArray + 8].weather[0].main) {
            case "Clear":
                $("#tempo2").text("Céu Limpo");
                $("#imagem2").attr("src", "Imagens/clear.jpg");
                $("#botao2").prop("disabled", true);
                $("#botao2").css("background-color", "grey");
                break;
            case "Clouds":
                $("#tempo2").text("Céu Nublado");
                $("#imagem2").attr("src", "Imagens/cloudy.png");
                $("#botao2").prop("disabled", true);
                $("#botao2").css("background-color", "grey");
                break;
            case "Rain":
                $("#tempo2").text("Chuva");
                $("#imagem2").attr("src", "Imagens/rain.png");
                break;
        };

        switch (resposta.list[posicaoArray + 16].weather[0].main) {
            case "Clear":
                $("#tempo3").text("Céu Limpo");
                $("#imagem3").attr("src", "Imagens/clear.jpg");
                $("#botao3").prop("disabled", true);
                $("#botao3").css("background-color", "grey");
                break;
            case "Clouds":
                $("#tempo3").text("Céu Nublado");
                $("#imagem3").attr("src", "Imagens/cloudy.png");
                $("#botao3").prop("disabled", true);
                $("#botao3").css("background-color", "grey");
                break;
            case "Rain":
                $("#tempo3").text("Chuva");
                $("#imagem3").attr("src", "Imagens/rain.png");
                break;
        };

        switch (resposta.list[posicaoArray + 24].weather[0].main) {
            case "Clear":
                $("#tempo4").text("Céu Limpo");
                $("#imagem4").attr("src", "Imagens/clear.jpg");
                $("#botao4").prop("disabled", true);
                $("#botao4").css("background-color", "grey");
                break;
            case "Clouds":
                $("#tempo4").text("Céu Nublado");
                $("#imagem4").attr("src", "Imagens/cloudy.png");
                $("#botao4").prop("disabled", true);
                $("#botao4").css("background-color", "grey");
                break;
            case "Rain":
                $("#tempo4").text("Chuva");
                $("#imagem4").attr("src", "Imagens/rain.png"); break;
        };

        switch (resposta.list[posicaoArray + 32].weather[0].main) {
            case "Clear":
                $("#tempo5").text("Céu Limpo");
                $("#imagem5").attr("src", "Imagens/clear.jpg");
                $("#botao5").prop("disabled", true);
                $("#botao5").css("background-color", "grey");
                break;
            case "Clouds":
                $("#tempo5").text("Céu Nublado");
                $("#imagem5").attr("src", "Imagens/cloudy.png");
                $("#botao5").prop("disabled", true);
                $("#botao5").css("background-color", "grey");
                break;
            case "Rain":
                $("#tempo5").text("Chuva");
                $("#imagem5").attr("src", "Imagens/rain.png");
                break;
        };


        var data1 = resposta.list[posicaoArray].dt_txt.split(" ");
        $("#data1").text(data1[0]);

        var data2 = resposta.list[posicaoArray + 8].dt_txt.split(" ");
        $("#data2").text(data2[0]);

        var data3 = resposta.list[posicaoArray + 16].dt_txt.split(" ");
        $("#data3").text(data3[0]);

        var data4 = resposta.list[posicaoArray + 24].dt_txt.split(" ");
        $("#data4").text(data4[0]);

        var data5 = resposta.list[posicaoArray + 32].dt_txt.split(" ");
        $("#data5").text(data5[0]);



        var temperatura1 = (resposta.list[posicaoArray].main.temp).toFixed(1);
        $("#temperatura1").text(temperatura1 + " ºC");

        var temperatura2 = (resposta.list[posicaoArray + 8].main.temp).toFixed(1);
        $("#temperatura2").text(temperatura2 + " ºC");

        var temperatura3 = (resposta.list[posicaoArray + 16].main.temp).toFixed(1);
        $("#temperatura3").text(temperatura3 + " ºC");

        var temperatura4 = (resposta.list[posicaoArray + 24].main.temp).toFixed(1);
        $("#temperatura4").text(temperatura4 + " ºC");

        var temperatura5 = (resposta.list[posicaoArray + 32].main.temp).toFixed(1);
        $("#temperatura5").text(temperatura5 + " ºC");

    });
});