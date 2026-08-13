# 🟠 Dia 3 — Trabalhando com vários dados

## 🎯 Objetivo
Aprender a organizar e manipular coleções de dados, criando listas (arrays) e estruturas detalhadas (objetos).

## 🧠 O que você vai aprender
- arrays
- objetos
- acesso a propriedades
- `push` e `pop`
- `length`
- `for` e `for...of`
- métodos básicos de array (`map`, `filter`, `find`)

## 📚 O que estudar
- **Arrays**: Listas ordenadas de informações. O primeiro item está na posição zero.
- **Objetos**: Estruturas que agrupam dados que têm relação entre si, usando chaves (nomes das propriedades) e valores.
- **Loops (`for`, `for...of`)**: Como repetir um bloco de código várias vezes, ideal para passar por todos os itens de uma lista.
- **Métodos de Array**:
  - `push()`: adiciona no fim da lista.
  - `pop()`: remove do fim da lista.
  - `map()`: transforma cada item da lista e cria uma nova lista.
  - `filter()`: cria uma lista menor, apenas com os itens que passaram em um teste.
  - `find()`: acha o primeiro item da lista que passa em um teste.

## 📝 Desafio
Crie um programa que trabalhe com uma coleção de dados representada por objetos dentro de um array.

Você deve criar um **array** contendo vários **objetos**. Cada objeto representará um item (pode ser produtos, pessoas, livros, etc.).

O estudante deverá:
1. Criar os dados.
2. Percorrer os dados usando um loop.
3. Encontrar uma informação específica.
4. Filtrar as informações com base em alguma regra.
5. Transformar as informações e criar uma nova lista formatada.

## 📌 Requisitos
- Criar a estrutura inicial com múltiplos objetos dentro de um array.
- Usar `push` para adicionar mais um item ao array.
- Usar `find` (ou loop) para buscar um item.
- Usar `filter` para descobrir quais itens cumprem determinada condição.
- Usar `map` para criar uma nova lista com os itens formatados.

## 🚫 Regras
- Os dados devem ser representados como Objetos dentro do Array.
- Não resolva de forma manual, faça o JavaScript percorrer a lista.

## 💡 Dicas
- `array.length` informa quantos itens a lista possui.
- Funções de array (`map`, `filter`, `find`) precisam receber uma outra função (callback) como parâmetro, que diz o que fazer com cada item.

## ✅ Checklist
- [X] Criei Arrays e acessei itens pelo índice
- [X] Criei Objetos e acessei suas propriedades
- [X] Usei `push` para modificar um array
- [X] Entendi como funcionam loops
- [X] Apliquei `map`, `filter` e `find`
- [X] Desafio concluído
- [X] Consegui explicar minha solução
- [X] Fiz commit no Git

## 🏁 Antes de avançar
1. Qual a principal diferença entre um Array e um Objeto?
Ambos são considerados como objetos, entretanto, um mantém uma lista com index bem definido e não aceita variáveis e palavras reservadas dentro, outro é mais livre e serve como uma caixa para armazenar bastantes informações e deixar tudo organizado
2. Quando você usaria o `map` em vez do `filter`?
.map serve para mapear algo e devolver em uma lista, já o .filter é mais para filtrar alguma informação em específico, por exemplo, todos aqueles que tiverem valor menor que X
3. Como eu acesso a propriedade `nome` do segundo objeto dentro de um array chamado `lista`?
lista[1].nome
