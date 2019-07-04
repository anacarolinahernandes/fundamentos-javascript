function verificar() {
    var ano = new Date().getFullYear();
    var formAno = document.querySelector('input#txtano');
    var res = document.querySelector('div#res');
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        res.innerHTML = 'Opa, algo deu errado! Tente novamente!';
    } else {
        var formSex = document.getElementsByName('radsex');
        var idade = ano - Number(formAno.value);
        var img = document.createElement('img');
        if (formSex[0].checked) {
            var genero = 'um homem';
            if (idade >= 0 && idade < 10) {
                img.src = './images/bebe_menino.png'; 
                // img.setAttribute('src', './images/bebe_menino.png'); ----> Por atributo
            } else if (idade < 21) {
                img.src = './images/jovem_homem.png';
            } else if (idade < 50) {
                img.src = './images/adulto_homem.png';
            } else {
                img.src = './images/senhor_homem.png';
            }
        } else {
            var genero = 'uma mulher';
            if (idade >= 0 && idade < 10) {
                img.src = './images/bebe_menina.png';
            } else if (idade < 21) {
                img.src = './images/jovem_mulher.png';
            } else if (idade < 50) {
                img.src = './images/adulta_mulher.png';
            } else {
                img.src = './images/senhora_mulher.png';
            }
            
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img); // necessário para adicionar a imagem logo abaixo do texto!
    }
}