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
        return 'Parabéns, você passou!';
    } else if ( nota >= 5 && nota <= 6){
        return 'Vais precisar fazer a recuperação!';
    } else {
        return 'Infelizmente você não passou!'
    }
}

console.log(resultadoEscolar(4))
console.log(resultadoEscolar(5))
console.log(resultadoEscolar(8))
console.log('-------------------------------------------');

function verificadorDeValor(valor){
    if (valor >= 1000){
        return 'Está caro demais!';
    } else if (valor >=500 && valor <= 999){
        return 'Está na média do mercado';
    } else {
        return 'Cuidado, está muito barato, pode ser golpe!'
    }
}

console.log(verificadorDeValor(300));
console.log(verificadorDeValor(600));
console.log(verificadorDeValor(1150));
console.log('-------------------------------------------');

function finsDeSemana(){
let diaDaSemana = 4;

    if (diaDaSemana == 1 || diaDaSemana == 7){
        return 'Aproveita, o fim de semana chegou!'
    } else {
        return 'Infelizmente o fim de semana ainda não chegou!'
    }
}

console.log(finsDeSemana())