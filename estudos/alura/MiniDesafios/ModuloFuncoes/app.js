function olaMundo() {
    return console.log('Olá Mundo!');
}

let nome = prompt('Qual seu nome? ');

function exibirNome (nomeExibido) {
    console.log(`Olá, ${nomeExibido}!`);
}

function botaoDobrar() {
    let num = prompt(`Insira o número para dobrar`);
    let dobro = Number(num) * 2;
    alert(`O dobro de ${num} é igual a ${dobro}`);
}

olaMundo();
exibirNome(nome);

function botaoMedia() {
    let num1 = Number(prompt(`Insira o primeiro número para a média `));
    let num2 = Number(prompt(`Insira o segundo número para a média `));
    let num3 = Number(prompt(`Insira o terceiro número para a média `));
    let media = (num1 + num2 + num3) / 3;
    alert(`A média dos números inseridos é ${media.toFixed(2)}`);
}

let num1 = 2;
let num2 = 6;

function botaoMaior(num1, num2) {
    if (num1 > num2) {
        alert(`O maior número entre ${num1} e ${num2} é o: ${num1}`);
    } else {
        alert(`O maior número entre ${num1} e ${num2} é o: ${num2}`);
    }
}


function botaoPotencia() {
    let potenciado = number * number;
    alert(`Numero potenciado ficou igual a ${potenciado}`);
}


let number = 5;
