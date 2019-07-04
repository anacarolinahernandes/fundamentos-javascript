function contar() {
    var inicio = document.querySelector('input#inicio').value;
    var fim = document.querySelector('input#fim').value;
    var passo = document.querySelector('input#passo').value;
    var res = document.querySelector('div#res');

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Opa, você esqueceu de digitar um ou mais valores. Tente novamente.';
    } else if ((passo <= 0)) {
        res.innerHTML = 'O passo não pode ser igual ou menor a 0. Tente novamente.'
    } else {
        var i = Number(inicio);
        var f = Number(fim);
        var p = Number(passo);

        res.innerHTML = 'Contando... <br>'
        if(i < f) {
            // Contagem Crescente
            for (i; i <= f; i += p) {
                res.innerHTML += ` ${i} \u{1F449} `
            }
        } else {
            // Contagem Regressiva
            for(i; i >= f; i -= p) {
                res.innerHTML += ` ${i} \u{1F449} `
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}