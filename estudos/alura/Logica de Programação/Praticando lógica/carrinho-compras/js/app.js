let dadosProdutos = [];
let dadosValores = [];

function adicionar() {
    // recuperar os valores, nome do produto, quantidade e valor
    let selectProduto = document.getElementById('produto').value;
    let selectQuantidade = document.getElementById('quantidade').value;

    dadosProdutos.push(selectProduto);
    let valor = 0;

    if (selectProduto == "Fone de ouvido - R$100") {
        valor += 100;
    } else if (selectProduto == "Celular - R$1400") {
        valor += 1400;
    } else {
        valor += 5000;
    }

    // calcular o preço, nosso subtotal
    const subtotal = valor * Number(selectQuantidade);
    dadosValores.push(subtotal);

    // adicionar ao carrinho
    

    // atualizar o valor total
}