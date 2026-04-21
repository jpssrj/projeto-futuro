alert("Boas vindas ao jogo do número secreto!");

let numeroSecreto = 4;
console.log(`O número secreto é: ${numeroSecreto}`);

let chute = Number(prompt(`Insira o número do seu chute: `));
console.log(`O número chutado foi: ${chute}`);

// Comparação para true or false
console.log('Resultado da comparação:', chute == numeroSecreto);

// Se o chute for igual ao numero secreto
if (chute == numeroSecreto) {
    console.log("O número está certo, você acertou o chute!");
    alert("Você acertou!");
} else {
    console.log("Você errou :(");
    alert("Você errou o chute :(");
}