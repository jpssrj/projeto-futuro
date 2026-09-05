const selectProduto = document.getElementById('produto');
let listaProdutos = document.getElementById('lista-produtos');

// Seu carrinho
let carrinho = [];
let valorTotalCarrinho = 0;

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
    let nomeTotal = selectProduto.options[selectProduto.selectedIndex].text
    let nomeProduto = nomeTotal.split(' - ')[0];
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

    // Atualizar o valor total do carrinho, mandando o valor novo
    valorTotalCarrinho += subTotal;
    

    listaProdutos.innerHTML = '';
    pushProdutoCart(carrinho);
}

function pushProdutoCart(carrinho) {
    // listaProdutos.innerHTML += `<span class="texto-azul">${quantidade}x</span>${nome}<span class="texto-azul">R$${subTotal}</span>`;
    listaProdutos.innerHTML = '';
    carrinho.forEach(produto => {
        listaProdutos.innerHTML +=
        `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${produto.quantidade}x</span> ${produto.nome} <span class="texto-azul">R$${produto.subTotal}</span>
        </section>`;
    });
}

// Puxando o botão de limpeza
const btnLimpar = document.getElementById('botao-limpar');

btnLimpar.addEventListener('click', () => {
    console.log('O botão de limpeza foi acionado.');
    carrinho = [];
    console.log(carrinho);
<<<<<<< Updated upstream
})
=======
    pushProdutoCart(carrinho);
})
>>>>>>> Stashed changes
