/* ## 📝 Desafio
Crie um programa que recebe informações e toma decisões diferentes dependendo dos valores recebidos.

Você deve construir uma **função** que receba parâmetros (por exemplo, a idade do usuário, o tipo de assinatura dele e se o pagamento está em dia).

Dentro dessa função, use a lógica condicional para tomar decisões:
- Se ele não tiver idade suficiente, bloqueie o acesso.
- Se ele for maior de idade, mas a assinatura for de um tipo sem acesso, negue.
- Se ele for maior de idade, tiver a assinatura certa, mas não tiver pago, exiba uma mensagem diferente.
- Se ele cumprir todas as regras, libere o acesso.

## 📌 Requisitos
- O código deve estar dentro de uma função.
- A função deve receber dados através de parâmetros.
- A função deve usar condicionais (`if`, `else if`, `else`).
- A função deve usar a palavra-chave `return` para devolver o resultado.
- O resultado deve ser testado chamando a função com diferentes cenários. */

function consultaDeAssinatura(idade, tipoAssinatura, ultimoPagamento) {
    const assinaturasValidas = ['Pro', 'Ultra'];
    const keyPagamentosValidos = ['kzWisKJ01', 'oOSDw10ns', 'oW9So812'];
    if (idade >= 18 && assinaturasValidas.includes(tipoAssinatura) && keyPagamentosValidos.includes(ultimoPagamento)) {
        return console.log('certo');
    } else {
        return console.log('errado')
    }
}
consultaDeAssinatura(18, 'Pro', 'kzWisKJ01');


/*function consultaDeAssinatura(idade, tipoAssinatura, pagamentoEmDia) {
    let verificadorIdade = 0;
    let assinatura = 0;
    let modeloAssinatura = 0
    if (idade >= 18) {
        verificadorIdade++;
    } else {
        console.log('Você não possui idade para prosseguir.');
    }
    if (tipoAssinatura == 'Pro' || 'Ultra') {
        console.log('Sua assinatura é a necessária para adentrar ao sistema.');
        modeloAssinatura++;
    } else if (tipoAssinatura == 'Plus') {
        console.log('Você precisa melhorar sua assinatura para o plano Pro ou Ultra para ter acesso ao sistema.');
    } else {
        console.log('Você não assina nenhum de nossos planos.');
    }
    if (assinatura == 'pago' || "em dia"){
        assinatura++;
        console.log('Sua assinatura está com os débitos em dia.');
        console.log('==============================================');
    } else {
        console.log('Pague sua assinatura antes de prosseguir.');
        console.log('==============================================');
    }
    let verificador = 3
    if (Number(verificadorIdade + assinatura + modeloAssinatura) == verificador){
        return console.log('Bem vindo ao portal do estudante!');
    } else {
        return console.log('Você ainda não atende os requisitos para acesso ao portal do estudante, verifique as clausulas.');
    }
}

consultaDeAssinatura(19, 'Plus', 'Pago');*/
