function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var horario = document.getElementById('hora');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();

    horario.innerHTML = `${hora}:${minuto}:${segundo}`;

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = "Bom dia!";
        img.src = "manha.jpg";
        document.body.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(147,228,255,1) 0%, rgba(20,153,242,1) 100%)";
    }else if (hora >= 12 && hora < 18) {
        msg.innerHTML = "Boa tarde!";
        img.src = "tarde.jpg";
        document.body.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(249,193,137,1) 0%, rgba(235,135,36,1) 100%)";
    } else {
        msg.innerHTML = "Boa noite!";
        img.src = "noite.jpg";
        document.body.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(51,51,153,1) 0%, rgba(29,29,101,1) 100%)";

    }

    if (hora < 10) {
        hora = `0${hora}`;
    }
    if (minuto < 10) {
        minuto = `0${minuto}`;
    }
    if (segundo < 10) {
        segundo =`0${segundo}`;
    }

}

var mudancaHorario = setInterval(carregar, 1000);