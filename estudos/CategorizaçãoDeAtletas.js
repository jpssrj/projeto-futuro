// 4. Categorização de Atletas de E-sports
//
// Peça a idade de um jogador de League of Legends. Se tiver entre 12 e 14 anos, categoria "Mirim". De 15 a 17, "Junior".
// De 18 a 25, "Profissional". Acima disso, "Master".

const leia = require('readline-sync');

console.log('Seja bem vindo a categorização de atletas para League of Legeds');
const idade = Number(leia.question('Insira a sua idade: '));

if (idade >= 12 && idade <= 14){
    console.log(`Com ${idade} anos, sua categoria é a MIRIM`);
} else if (idade >= 15 && idade <= 17) {
    console.log(`Com ${idade} anos, sua categoria é a JUNIOR`);
} else if (idade >= 18 && idade <= 25){
    console.log(`Com ${idade} anos, sua categoria é a PROFISSIONAL`);
} else if (idade >= 26) {
    console.log(`Com ${idade} anos, sua categoria é a MASTER`);
} else {
    console.log(`Com ${idade} anos, você não tem idade para se categorizar ainda.`);
}

