# 🟢 Dia 1 — Primeiros passos com JavaScript

## 🎯 Objetivo
Aprender os fundamentos necessários para começar a escrever JavaScript e dar as suas primeiras instruções para o computador.

## 🧠 O que você vai aprender
- `console.log`
- comentários
- `let` e `const`
- tipos de dados (strings, numbers, booleans)
- operadores matemáticos
- comparação básica
- template literals

## 📚 O que estudar
- **console.log**: A forma de mostrar mensagens no terminal ou console do navegador.
- **Comentários**: Linhas que o computador ignora, usadas para documentar o código.
- **let e const**: Palavras usadas para guardar dados em variáveis. Use `const` quando o valor não for mudar, e `let` quando precisar mudar depois.
- **Tipos de dados**: 
  - *String*: Textos.
  - *Number*: Números.
  - *Boolean*: Verdadeiro (`true`) ou falso (`false`).
- **Operadores matemáticos**: Soma, subtração, multiplicação, divisão (`+`, `-`, `*`, `/`).
- **Comparação básica**: Operadores como `==`, `===`, `>`, `<` para comparar valores.
- **Template literals**: Strings com crase (\`) que permitem injetar variáveis no meio do texto de forma fácil.

## 📝 Desafio
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
- Um ano atual ou de nascimento não muda ao longo da execução desse programa em si, então que tipo de declaração (let/const) faz sentido?

## ✅ Checklist
- [X] Entendi `console.log` e comentários
- [X] Diferenciei `let` e `const`
- [ ] Usei tipos primitivos (Strings, Numbers, Booleans)
- [ ] Calculei e comparei valores
- [ ] Imprimi o resultado com Template Literals
- [ ] Desafio concluído
- [ ] Consegui explicar minha solução
- [ ] Fiz commit no Git

## 🏁 Antes de avançar
1. Qual é a principal diferença entre `let` e `const`?
R: `let` usamos para quando em algum momento precisaremos alterar o valor daquela variável, já a `const` significa que aquele valor se permanecerá constante durante toda a operação do programa.
2. O que acontece se eu tentar somar uma variável Number com uma variável String?
R: Irá somar normalmente, por exemplo `console.log(5 + "nome"); resulta em => 5nome`.
3. Como eu coloco uma variável dentro de um Template Literal?
R: `console.log(`teste de adicionar uma ${variavel} em template strings`)`;
