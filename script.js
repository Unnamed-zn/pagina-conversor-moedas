const valor = {
    real: 6661.57,
    dolar: 1325.25,
    libra: 1000.0,
    euro: 1183.5
}

let tipoMoeda = {
    1: 'real',
    2: 'dolar'
}

const moedaPrimaria = document.getElementById('1');
const moedaSecundaria = document.getElementById('2');

moedaPrimaria.addEventListener('change', event => calcular(event, 1)); // com arrow function

/*moedaPrimaria.addEventListener('change', function (event) {
    calcular(event, 1)
});  // sem arrow function */

moedaSecundaria.addEventListener('change', event => calcular(event, 2)); // com arrow function

/*moedaSecundaria.addEventListener('change', function (event) {
    calcular(event, 2)
}); // sem arrow function */

function calcular(event, num) {
    tipoMoeda[num] = event.target.value;
    let valorBase = parseFloat(document.getElementById(`value${num===1? 2 : 1}`).value);
    document.getElementById(`value${num}`).value = ((valorBase*valor[tipoMoeda[num]])/valor[tipoMoeda[num===1? 2 : 1]]).toFixed(2);
}