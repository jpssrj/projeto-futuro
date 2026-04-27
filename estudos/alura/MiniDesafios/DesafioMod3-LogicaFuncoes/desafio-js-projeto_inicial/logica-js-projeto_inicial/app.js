// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularImc(altura, peso) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

console.log(calcularImc(1.71, 115));

function fatorial(numero) {
    if (numero === 0 || numero === 1) return 1; //Pois 0! e 1! resultam em 1
    let resultado = 1;
    for (let i = numero; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(5))

// Crie uma função que converte um valor em dólar, passado
// como parâmetro, e retorna o valor equivalente em reais.
// Para isso, considere a cotação do dólar igual a R$4,80.

function conversaoDolar(valorAConverter) {
    const dolar = 4.80;
    let calculoDolar = valorAConverter * dolar;
    return calculoDolar.toFixed(2);
}

console.log(conversaoDolar(20));

function areaEPerimetroRetangular(altura, largura) {
    const area = altura * largura;
    const perimetro = (altura * 2) + (largura * 2);
    return console.log(area, perimetro);
}

areaEPerimetroRetangular(4, 6);

function areaEPerimetroCircular(raio) {
    const circulo = Math.PI * (raio ** 2);
    return console.log(circulo.toFixed(2))
}

areaEPerimetroCircular(5);


function tabuada(numero) {
    let maximo = 10;
    while (maximo > 0) {
        let calculo = numero * maximo;
        maximo--
        console.log(calculo);
    }
}

tabuada(9)

