var num = document.querySelector('input#number');
var lista = document.querySelector('select#lista');
var res = document.querySelector('div#res');
var valores = [];

// Verifica se o número digitado está dentro do estabelecido
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false
    }
}

// Verifica se o número digitado já está dentro do array
function inLista(n, l) {
    //   Verificar pelo index: if(l.indexOf(Number(n)) != -1)
    if(l.includes(Number(n))) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(!isNumero(num.value)) {
        alert('Número inválido. Tente novamente.');
    } else if(inLista(num.value, valores)) {
        alert('Número já encontrado na lista. Tente novamente.');
    } else {
        valores.push(Number(num.value));
        var item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`; // Aqui é text porque é dentro da tabela
        lista.appendChild(item);
        res.innerHTML = ''; // Para limpar o conteúdo de res, aguardando um novo "finalizar"
    }
    num.value = ''; // Para apagar o valor digitado
    num.focus(); // Para focar o input
}

function finalizar() {
    if(valores.length === 0) {
        alert('Opa, você esqueceu de digitar um valor')
    } else { 
        res.innerHTML = '';  // Para limpar o conteúdo de res e não ficar empilhando     
        var reducer = (accumulator, currentValue) => accumulator + currentValue;
        var soma = valores.reduce(reducer);
    
        res.innerHTML = `Ao todo, temos ${valores.length} número(s) cadastrado(s). </br></br>
        O maior valor informado foi ${Math.max.apply(Math, valores)}. </br></br>
        O menor valor informado foi ${Math.min.apply(Math, valores)}. </br></br>
        Somando todos os valores, temos ${soma}. </br></br>
        A média dos valores digitados é ${(soma / valores.length).toFixed(2)}.` 
    }
}