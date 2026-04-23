let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole() {
    console.log('O botão do console foi clicado!');
}

function botaoAlert() {
    alert('Eu amo JavaScript');
    console.log('Eu amo JavaScript');
}

function botaoPrompt() {
    let cidade = prompt('Insira o nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você.`);
    console.log(`Estive em ${cidade} e lembrei de você.`);
}

function botaoSoma() {
    alert(`Insira dois números para realizar uma operação de soma.`);
    let num1 = Number(prompt(`Insira o primeiro número: `));
    let num2 = Number(prompt(`Insira o segundo número: `));
    let soma = num1 + num2;
    console.log(`A soma de ${num1} e ${num2} resulta em ${soma}`);
    alert(`A soma de ${num1} e ${num2} resulta em ${soma}`);
}