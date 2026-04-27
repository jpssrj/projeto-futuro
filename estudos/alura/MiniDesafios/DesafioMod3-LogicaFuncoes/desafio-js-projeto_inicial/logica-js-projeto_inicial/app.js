// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularImc(altura, peso) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

console.log(calcularImc('1.50', '60'));