const selectProduto = document.getElementById('produto');
let listaProdutos = document.getElementById('lista-produtos');

// Seu carrinho
let carrinho = []; 

function verificarProduto() {
    const produtoSelecionado = selectProduto.value;
    console.log(`O produto selecionado foi o ${produtoSelecionado}`);
}

selectProduto.addEventListener('change', () => {
    console.log('O produto foi alterado');
    verificarProduto();
})

let quantidade = document.getElementById('quantidade').value;

function adicionar() {
    // Evita quantidade undefined
    let quantidade = document.getElementById('quantidade').value;
        
    if (quantidade == '') {
        quantidade = 1;
    }

    let valorAtual = Number(selectProduto.value);
    const totalAtual = valorAtual * quantidade;
    
    // Puxando o nome do produto selecionado para exibir no carrinho
    let nomeProduto = selectProduto.options[selectProduto.selectedIndex].text
    console.log(`O valor a ser adicionado é ${valorAtual} reais e a quantidade é de ${quantidade}. Totalizando a adição de ${totalAtual} ao carrinho.`)
    console.log(nomeProduto)
    
    // Criar o objeto para ir pro carrinho
    let produtoCarrinho = {
        nome: nomeProduto,
        precoUnitario: valorAtual,
        quantidade: quantidade,
        subTotal: totalAtual
    }

    carrinho.push(produtoCarrinho);
    console.log(`Seu carrinho atual é:`, carrinho);

    listaProdutos.innerHTML = '';
    pushProdutoCart(quantidade, nomeProduto, totalAtual);
}

function pushProdutoCart(quantidade, nome, subTotal) {
    listaProdutos.innerHTML = `<span class="texto-azul">${quantidade}x</span>${nome}<span class="texto-azul">R$${subTotal}</span>`
}

// Puxando o botão de limpeza
const btnLimpar = document.getElementById('botao-limpar');

btnLimpar.addEventListener('click', () => {
    console.log('O botão de limpeza foi acionado.');
    carrinho = [];
    console.log(carrinho);
})

function limpar() {
    carrinho.splice(0, carrinho.length);
}