import { usuarios } from "./usuario.js";
import scanner from 'readline-sync';

console.log(`= Bem Vindo ao Wadawel Unibanco =`);

let inserirId = scanner.question(`Insira o id da sua conta: `);
let inserirSenha =  scanner.question(`Insira a sua senha: `);
const usuarioEncontrado = usuarios.find( u => u.id == inserirId);

    if (usuarioEncontrado && usuarioEncontrado.senha == inserirSenha) {
        console.log(`Olá, ${usuarioEncontrado.nome}.`);
        console.log(`O que deseja fazer hoje?`);
        console.log(`=============================`);
        console.log(`1. Verificar meu saldo`);
        console.log(`2. Realizar uma transação`);
        console.log(`3. Transação via Cheque Especial`);
        console.log(`=============================`);

        const operacao = scanner.questionInt(`Digite a operacao que deseja: `);
            switch (operacao){
                case 1:
                    console.log(`${usuarioEncontrado.nome}, seu saldo é de R$${usuarioEncontrado.saldo.toFixed(2)}.`);
                    break;
                case 2:
                    scanner.question(`Para quem deseja realizar a transação? `);
                    const valorOperacao = scanner.questionFloat(`Insira o valor: `);
                    if (valorOperacao > usuarioEncontrado.saldo) {
                        console.log(`Você não tem saldo suficiente para realizar essa operação.`);
                    } else {
                        console.log(`Enviado! Seu saldo agora é de R$${usuarioEncontrado.saldo - Number(valorOperacao).toFixed(2)}.`);
                    }
                    break;
                case 3:
                    const chequeQuestion = scanner.questionFloat(`Qual o valor da transferência que deseja realizar? `);
                    const faltanteCheque = chequeQuestion - Number(usuarioEncontrado.saldo);
                    if (chequeQuestion > usuarioEncontrado.saldo) {
                        console.log(`Seu saldo é de ${usuarioEncontrado.saldo}, o cheque especial irá somar ${faltanteCheque} para completar a operção.`);
                    } else {
                        console.log(`Você não tem a necessidade de usar um cheque especial. Possui saldo suficiente para realizar essa operação.`);
                    }
            }
    } else {
        console.log(`Tente Novamente`);
    }




