// 5. Verificador de Dividendos
//
// Um investidor quer saber se vale a pena comprar uma ação baseada no Dividend Yield (DY). O programa pede o valor do DY.
// Se for maior que 6, exiba "Estratégia de Renda Passiva OK". Se estiver entre 4 e 6, "Atenção: Rendimento Médio". Abaixo de 4, "Rendimento Baixo".

const leia = require('readline-sync');

console.log(`Validação de compra baseada no Dividend Yield`)
const question = leia.question(`Insira o valor do DY: `)

if (question > 6) {
    console.log(`Estratégia de Renda Passiva OK!`)
} else if (question < 7 && question > 4) {
    console.log(`Atenção: Rendimento Médio`)
} else {
    console.log(`Rendimento Baixo`)
}
