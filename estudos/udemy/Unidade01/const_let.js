/*
    Luiz Otávio Miranda tem 30 anos, pesa 84 kg, tem 1,80 m de altura e seu IMC é de 25.925925925...
    Luis Otávio nasceu em 1980
*/

const leia = require('readline-sync');

let nome = leia.question('Qual seu nome? ');
let idade = leia.question('Quantos anos você tem? ');
let peso = Number(leia.question('Qual seu peso? '));
let altura = Number(leia.question('Qual sua altura? '));
let imc = peso / (altura * altura);
let ano = new Date().getFullYear();
let nascimento = ano - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} e seu IMC é de ${imc}. ${nome} nasceu em ${nascimento}`);

