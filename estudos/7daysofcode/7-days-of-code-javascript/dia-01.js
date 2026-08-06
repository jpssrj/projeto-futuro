/* ## 📝 Desafio
Crie um programa simples no console que gerencie informações básicas de uma pessoa.

Você deve criar variáveis para armazenar:
1. O nome da pessoa.
2. O ano de nascimento dela.
3. O ano atual.
4. A cidade onde mora.

Depois, você deve calcular a idade atual dessa pessoa (usando matemática simples com as variáveis) e exibir no console uma mensagem de apresentação formatada, dizendo o nome, a idade calculada e a cidade, além de indicar (usando um booleano) se a pessoa já é maior de idade.

## 📌 Requisitos
- Usar `let` e `const` corretamente.
- Usar variáveis dos tipos String, Number e Boolean.
- Calcular a idade matematicamente.
- Exibir o resultado final com `console.log` usando Template Literals.

## 🚫 Regras
- Não escreva a idade diretamente no código, ela DEVE ser calculada.
- Não copie código pronto.

## 💡 Dicas
- Lembre-se que strings usando crases (\`) permitem colocar variáveis dentro delas usando `${variavel}`.
- Um ano atual ou de nascimento não muda ao longo da execução desse programa em si, então que tipo de declaração (let/const) faz sentido? */

const leia = require('readline-sync');
const date = new Date();

// Área de perguntas
const nome = leia.question('Informe seu nome: ');
const dataNascimento = leia.question('Informe seu ano de nascimento: ');
const anoAtual = date.getFullYear(); // Busca o ano atual atraves da biblioteca
const endereco = leia.question('Qual seu endereço: ');
let idade = Number(anoAtual - dataNascimento);

// Área de respostas
let resposta = console.log(`Olá ${nome}, seja muito bem vindo! Você mora em ${endereco} e possui ${idade} anos de idade. Bom proveito!`);
