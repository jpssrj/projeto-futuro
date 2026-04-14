const leia = require('readline-sync');

let num1 = Number(leia.question('Digite o primeiro número: '));
let num2 = Number(leia.question('Digite o segundo número: '));

const soma = num1 + num2;

console.log(`O resultado da soma de ${num1} + ${num2} é de: ${soma}`);