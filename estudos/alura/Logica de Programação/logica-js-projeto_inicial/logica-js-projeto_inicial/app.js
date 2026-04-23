alert("Boas vindas ao jogo do número secreto!");

let numeroMaximo = Number(prompt(`Qual o número máximo do jogo? `));
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(`O número secreto é: ${numeroSecreto}`);

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = Number(prompt(`Insira o número do seu chute: `));
    console.log(`O número chutado foi: ${chute}`);
    console.log('Resultado da comparação:', chute == numeroSecreto);
    
    // Se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}.`);
        } else {
            alert(`O número secreto é maior que ${chute}.`);
        }
        tentativas++;
        console.log(tentativas);
    }
}

// Para poder corrigir a lingua portuguesa quando se trata de acertar o número com apenas uma tentativa usando Operador Ternário "? com :"
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o número secreto com ${tentativas} ${palavraTentativa}.`);    
console.log(`O número está certo, você acertou o chute com apenas ${tentativas} ${palavraTentativa}.`);