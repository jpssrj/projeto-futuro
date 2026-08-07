# 🟡 Dia 2 — Faça o JavaScript pensar

## 🎯 Objetivo
Aprender a criar regras e tomar decisões no seu código utilizando condições e encapsular lógica em funções reutilizáveis.

## 🧠 O que você vai aprender
- `if`, `else` e `else if`
- operadores de comparação
- operadores lógicos
- truthy/falsy de forma introdutória
- funções
- parâmetros
- retorno (`return`)

## 📚 O que estudar
- **Condicionais (if/else)**: Como criar bifurcações no código. "Se isso for verdade, faça A. Se não, faça B."
- **Operadores de comparação e lógicos**: Como combinar testes. "Se for maior que X E menor que Y".
- **Truthy e Falsy**: Como o JavaScript avalia variáveis que não são booleanos puros dentro de um `if`.
- **Funções**: Blocos de código que têm um nome e podem ser chamados várias vezes.
- **Parâmetros**: Valores que a função recebe para trabalhar.
- **Retorno (`return`)**: O resultado que a função devolve para quem a chamou.

## 📝 Desafio
Crie um programa que recebe informações e toma decisões diferentes dependendo dos valores recebidos.

Você deve construir uma **função** que receba parâmetros (por exemplo, a idade do usuário, o tipo de assinatura dele e se o pagamento está em dia).

Dentro dessa função, use a lógica condicional para tomar decisões:
- Se ele não tiver idade suficiente, bloqueie o acesso.
- Se ele for maior de idade, mas a assinatura for de um tipo sem acesso, negue.
- Se ele for maior de idade, tiver a assinatura certa, mas não tiver pago, exiba uma mensagem diferente.
- Se ele cumprir todas as regras, libere o acesso.

## 📌 Requisitos
- O código deve estar dentro de uma função.
- A função deve receber dados através de parâmetros.
- A função deve usar condicionais (`if`, `else if`, `else`).
- A função deve usar a palavra-chave `return` para devolver o resultado.
- O resultado deve ser testado chamando a função com diferentes cenários.

## 🚫 Regras
- Não imprima o resultado com `console.log` diretamente dentro da função. A função deve retornar o valor, e você faz o log de fora.
- Tente resolver usando sua própria lógica.

## 💡 Dicas
- O operador lógico `&&` (E) exige que todas as condições sejam verdadeiras.
- O operador lógico `||` (OU) exige que apenas uma condição seja verdadeira.
- Chame a função várias vezes passando valores diferentes para ver os resultados.

## ✅ Checklist
- [O] Utilizei `if`, `else if` e `else`
- [X] Compreendi e apliquei operadores lógicos e de comparação
- [X] Entendi a ideia de Truthy e Falsy
- [X] Criei uma função que recebe parâmetros
- [X] Minha função tem um `return` e não apenas `console.log` interno
- [X] Desafio concluído
- [X] Consegui explicar minha solução
- [X] Fiz commit no Git

## 🏁 Antes de avançar
1. Qual a diferença entre os operadores `==` e `===`?
R: == existe para comparações de mesmo valores, não necessitando que sejam estreitamente iguais, pode ser 5 e '5'. Já o === obriga aos valores serem exatamente o mesmo, mesmo tipo, mesmo algorítmo...
2. Para que serve a palavra `return` dentro de uma função?
R: Significa que a função quando chamada irá retornar algo, seja uma mensagem, um valor, ou uma variável, por exemplo.
3. O que acontece se eu não colocar parâmetros em uma função, mas ela precisar de informações de fora?
R: A função poderá continuar a funcionar, pois ela consegue ver o que está no escopo global, mas será mais dificil de dar manutenção e/ou correção caso a solução quebre.