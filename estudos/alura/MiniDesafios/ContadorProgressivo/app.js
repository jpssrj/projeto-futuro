alert("Contador Progressivo");

let alvo = Number(prompt("Insira um número para ser contado até ele "));
let contador = 0

while (contador <= (Number(alvo) - 1)) {
    console.log(`Contador ${contador}`);
    contador++
}

alert(`O contador chegou até o valor de ${contador}`)

