// Um dos grandes auxiliares no javascript é o objeto já incluso na linguagem chamado Math, ele possui diversas operações matemáticas dentro dele para podermos realizar contas de todos os tipos. Por exemplo:

let num1 = 9.50827398471;
const math = Math.floor(num1); // Isso fará que o objeto arredende o número para o inteiro anterior

console.log(math)

// Temos também como arredendar para o inteiro mais próximo para cima e como arredondar automaticamente seguindo as regras padrões da matemática

const math2 = Math.ceil(num1);
const math3 = Math.round(num1);

console.log(math2)
console.log(math3)

// Podemos gerar um número aleatório atraves de um dos metodos do math, segue assim

const mathRandom = Math.round(Math.random() * (10 - 1) + 1);

console.log(mathRandom)

// Entretanto, para gerar um número inteiro aleatório, podemos usar o método que acabamos de aprender, ROUND para poder arredondar automaticamente e transforma-lo em um inteiro

// Podemos trabalhar com listas de arrays também, para encontrar o maior ou menor número dentro de uma determinada lista de diversos números.

const numeros = [1, 2, 3, 4, 5, 3424, -3123, -59, 2333, 49];

let math4 = Math.max(...numeros);
let math5 = Math.min(...numeros);

console.log(math4);
console.log(math5);