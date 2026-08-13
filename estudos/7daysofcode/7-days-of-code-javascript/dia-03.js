/* var frutas = [];
frutas.push("banana", "maça", "pêssego");

console.log(frutas.length); // 3

frutas[5] = "manga";
console.log(frutas[5]); // 'manga'
console.log(Object.keys(frutas)); // ['0', '1', '2', '5']
console.log(frutas.length); // 6 */

/*const users = [
    { id: 0, name: 'João'},
    { id: 1, name: 'Marcos'},
    { id: 2, name: 'Luis'}
]

console.log(users.map((users) => users.id)); */

/* import { joao, marcos, luis } from "./dia-03-peoples.js";

const users = [ joao, marcos , luis ];

users.forEach((user, index) => {
    console.log('Nome: ', user.name);
    console.log('Idade: ', user.idade);
    console.log('Profissão: ', user.profissao);
    console.log('Index: ', index)
    console.log('-------------------------------')
}) */


let produtos = [
    { nome: 'Guitarra', id: 1, preco: 1000 },
    { nome: 'Violão', id: 2, preco: 600 },
    { nome: 'Bateria', id: 3, preco: 2000 },
];

let produtosMapeados = [];
// Adicionar produtos ao array
produtos.push(
{ nome: 'Contra-Baixo', id: 4, preco: 900 }
);

// Utilização do método .find
const produtoCaro = produtos.find((produto) => produto.preco > 1500);
console.log(produtoCaro);

// Utilização do método .map juntamente com .filter
const produtosBaratos = produtos
    .filter((produto) => produto.preco <= 1000)
    .map((produto) => {
        return {
            Nome: produto.nome,
            Valor: 'R$' + produto.preco,
            Id: produto.id
        }
    })

console.log(produtosBaratos)