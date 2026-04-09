//2. Viagem para a Copa do Mundo 2026
//
// Um torcedor está economizando para a Copa. Peça o valor acumulado em conta. Se o valor for maior ou igual a R$ 25.000,
// exiba "Partiu América do Norte". Se for menor, exiba quanto falta para atingir essa meta.

const leia = require('readline-sync');

const valorAcumulado = Number(leia.question(`Qual o valor acumulado em conta para a viagem? `))
let valorRestante = 25000 - valorAcumulado;

if (valorAcumulado >= 25000) {
    console.log('Partiu América do Norte!')
} else {
    console.log(`Infelizmente você ainda não tem o que precisa, restam ${valorRestante}`);
}

