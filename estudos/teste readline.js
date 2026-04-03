const leia = require('readline-sync'); //utilizar a lib do readline

let nome = leia.question('Qual o seu nome? ');
console.log('Olá ' + nome)