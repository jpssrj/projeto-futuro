// 6. Sistema de Cashback Progressivo
//
// Uma plataforma de compras online oferece cashback conforme o gasto:
//
// * Compras acima de R$ 500: 10% de cashback.
//
// * Compras entre R$ 200 e R$ 500: 5% de cashback.
//
// * Abaixo de R$ 200: Sem cashback.
//
// O programa deve calcular e mostrar o valor do benefício.

const leia = require('readline-sync')

const valorCompra = leia.question(`Insira o valor do gasto na sua compra: `);
let desconto = 0

if (valorCompra > 500) {
    desconto = 0.10;
} else if (valorCompra >= 200 && valorCompra <= 500) {
    desconto = 0.05;
} else {
    desconto = 0;
}

let valorFinal = valorCompra - (valorCompra * desconto);

console.log(`Desconto adicionado de ${desconto * 100}% de cashback! Sua compra foi de ${valorFinal.toFixed(2)} reais`);