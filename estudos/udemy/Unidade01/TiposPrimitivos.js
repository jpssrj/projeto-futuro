// Tipos primitivos

/*const string = "Textos";
const number = 1234;
const boolean = true;//ou false
const undefined = undefined*/

const numeros = [4, 1, 3, 5, 1, 5, 6, 1, 2, 3, 5, 5];
let cinco = 0;
let posicao = [];

for (let i=0; i < numeros.length; i++) {
    switch (numeros[i]) {
        case 5:
            cinco++
            posicao += numeros.indexOf(5)
    }
}

console.log(cinco)
console.log(posicao)