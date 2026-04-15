// Em javascript usamos a formatação numérica IEEE 754-2008
// Sendo assim, se tivermos uma conta de, por exemplo, 0.7 + 0.1 crua, teremos resultado de 0.7999999999, veja

let num1 = 0.7;
let num2 = 0.1;

console.log(num1 + num2);

// Para resolver isso, podemos fazer de algumas formas, como por exemplo usar ParseInt ou ParseFloat dependendo se for inteiro ou decimal
// Ou então, a mais eficiente e mais fácil, através da função Number(), que transforma tudo em número e deixa o javascript se virar
num1 += num2 // 0.8
num1 += num2 // 0.9


num1 = Number(num1.toFixed(2));


console.log(num1 + num2);
console.log(Number.isInteger(num1))