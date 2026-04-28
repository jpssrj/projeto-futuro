let listaDeNumeroSecreto = [];
let limiteDeNumeros = 3
let numeroSecreto = gerarNumeroAleatorio();

function textoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function textoInicial(){
    textoNaTela('h1', 'Jogo do Número Secreto');
    textoNaTela('p', 'Escolha um número entre 1 e 10');
}

textoInicial()

let tentativas = 1;
// Botões na tela
function verificarChute() {
    let chute = document.querySelector('input').value
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    
    if (chute == numeroSecreto) {
        textoNaTela('h1', `Parabéns, você acertou o número!`);
        textoNaTela('p', `O número secreto era ${numeroSecreto}, acertou com ${tentativas} ${palavraTentativa}`);
        console.log('O primeiro teste está rodando e acertou')
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else {
        if (chute > numeroSecreto) {
            textoNaTela('p', `O número é menor do que ${chute}`);
            console.log('O segundo teste está rodando e é menor')
            tentativas++
        } else {
            textoNaTela('p', `O número é maior do que ${chute}`);
            console.log('O terceiro  teste está rodando e é maior')
            tentativas++
        }
        limparTela();
    }
}

function gerarNumeroAleatorio () {
    let secreto = parseInt(Math.random() * limiteDeNumeros + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSecreto.length;
    if (quantidadeDeElementosNaLista == limiteDeNumeros) {
        listaDeNumeroSecreto = [];
    }
    console.log(`O número secreto é: ` + secreto);
    if (listaDeNumeroSecreto.includes(secreto)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSecreto.push(secreto);
        console.log(listaDeNumeroSecreto);
        return secreto;
    }
}

function limparTela() {
    chute = document.querySelector('input')
    chute.value = '';
}

function recarregarPagina() {
    // window.location.reload() dessa forma você recarrega a página e é bem mais fácil fazer no momento que estamos
    limparTela();
    textoInicial();
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}