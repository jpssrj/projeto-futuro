// 1. Simulador de CDB (Renda Fixa)
//
// O usuário informa o valor que deseja investir e o prazo em meses. Se o prazo for superior a 12 meses, a taxa de
// rendimento será de 12% ao ano. Caso contrário, será de 8% ao ano. O programa deve exibir qual taxa será aplicada.

const leia = require('readline-sync');

const valorInvestimento = Number(leia.question(`Qual o valor que deseja investir? `));
const tempoInvestimento = Number(leia.question(`Quantos meses pretende deixar investindo? `));
let porcentagemInvestimento = 0

    if (tempoInvestimento >= 12){
        porcentagemInvestimento = 0.12;
    } else {
        porcentagemInvestimento = 0.08;
    }

const calculoTotal = valorInvestimento * (porcentagemInvestimento * (tempoInvestimento / 12));
console.log(`Seu investimento renderá uma taxa de ${porcentagemInvestimento * 100}% ao ano e irá gerar ${calculoTotal} de lucro`);