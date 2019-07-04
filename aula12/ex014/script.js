function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 6 && hora < 12) {
        img.src = './images/manha.jpg';
        document.body.style.background = '#e2cd9f';
    }  else if (hora >= 12 && hora <= 18) {
        img.src = './images/tarde.jpg'
        document.body.style.background = '#b9846f';
    } else if (hora >= 19 && hora <= 23 ){
        img.src = './images/noite.jpg';
        document.body.style.background = '#515154';
    } else {
        img.src = 'images/madrugada.jpg';
        document.body.style.background = '#0b065b';
    }
}