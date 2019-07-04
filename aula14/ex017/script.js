function calcular() {
    var number = document.querySelector('input#number').value;
    var tabuada = document.querySelector('select#tabuada');
    var res = document.querySelector('div#res');

    if(number.length == 0) {
        alert('Opa, você esqueceu de digitar o número. Tente novamente.');
    } else {
        var n = Number(number);
        tabuada.innerHTML = '';

        for (tab = 0; tab <= 10; tab++) {
            var item = document.createElement('option');
            item.text = `${n} x ${tab} = ${n*tab}`;
            item.value = `tab${tab}`;
            tabuada.appendChild(item);
        }
}
}