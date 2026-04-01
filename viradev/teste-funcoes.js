function convidadosFesta (idade, temConvite){
    if(idade >= 18 || temConvite == true){
        return 'Pode ir para a festa';
    } else {
        return 'Não pode ir para a festa';
    }
}

console.log(convidadosFesta(18, true));
console.log(convidadosFesta(16, true));
console.log(convidadosFesta(16, false));
console.log(convidadosFesta(20, false));
console.log('-------------------------------------------');

function descontoParaEvento (idade, estudante) {
    if (estudante == true || idade >= 60){
        return 'Você tem 50% de desconto';
    } else if (idade >= 18 && idade <= 59){
        return 'Você tem 10% de desconto';
    } else {
        return 'Você infelizmente não possui desconto'
    }
}

console.log(descontoParaEvento(18, true));
console.log(descontoParaEvento(65, false));
console.log(descontoParaEvento(35, false));
console.log(descontoParaEvento(12, false));
console.log('-------------------------------------------');

function resultadoEscolar(nota){
    if (nota >= 7){
        return 'Parabéns, você tem cabeça e não é burro';
    } else if ( nota >= 5 && nota <= 6){
        return 'Oh seu merdaa, faz a recuperação ai oh kct';
    } else {
        return 'é burro pkrlh e nao sabe nem passaar na escola pqp'
    }
}

console.log(resultadoEscolar(4))
// se for igual ou maior que 7 = passou
// se for entre 5 e 6 = recuperação
// se for menor ou igual a 4 = não passou  