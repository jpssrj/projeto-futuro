alert("Boas vindas ao jogo do número secreto!");

let numeroSecreto = 4;
console.log(`O número secreto é: ${numeroSecreto}`);

let chute;
let tentativas = 1;
console.log(`O número chutado foi: ${chute}`);

// Comparação para true or false
console.log('Resultado da comparação:', chute == numeroSecreto);

while (chute != numeroSecreto) {
    chute = Number(prompt(`Insira o número do seu chute: `));

    // Se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        console.log("O número está certo, você acertou o chute!");
        alert(`Você acertou o número secreto com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
        console.log(tentativas);
    }
}

