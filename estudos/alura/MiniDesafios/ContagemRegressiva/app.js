alert("Contador Regressivo");

let contador = Number(prompt("Insira um número para ser contado até 0 "));

while (contador >= 1) {
    console.log(`Contador ${contador}`);
    contador--
}

alert(`O contador chegou até o valor de ${contador}`)

