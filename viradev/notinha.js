// se for igual ou maior que 7 = passou
// se for entre 5 e 6 = recuperação
// se for menor ou igual a 4 = não passou  

let nota1 = 7
let nota2 = 2
let nota3 = 1
let media = (nota1 + nota2 + nota3) / 3


function resultadoEscolar(media){
    if (media >= 7){
        return 'Parabéns, você entrou ';
    } else if ( media >= 5 && media <= 6){
        return 'Oh seu merdaa, faz a recuperação ai oh kct';
    } else {
        return 'é burro pkrlh e nao sabe nem passaar na escola pqp'
    }
}

console.log(resultadoEscolar())
