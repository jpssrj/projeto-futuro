# Correções - Dia 1 e Dia 2

## Dia 1: Primeiros passos com JavaScript

### O que precisava ser melhorado no `dia-01.js`:
1. **Faltou o booleano de maior de idade:** O desafio pedia para indicar se a pessoa é maior de idade usando um booleano (`true` ou `false`).
2. **Uso do `console.log` em uma variável:** Você atribuiu `console.log` a uma variável `resposta`, mas `console.log` apenas imprime no console e não retorna nenhum valor (retorna `undefined`). O ideal é apenas chamar a função ou criar a string antes e depois imprimi-la.
3. **Conversão de tipo:** É bom garantir a conversão da entrada (`dataNascimento`) para `Number` antes de fazer a conta, apesar do JS fazer a coerção implícita na subtração.

### Código Corrigido (`dia-01.js`):
```javascript
const leia = require('readline-sync');
const date = new Date();

// Área de perguntas
const nome = leia.question('Informe seu nome: ');
const dataNascimento = leia.question('Informe seu ano de nascimento: ');
const endereco = leia.question('Qual seu endereco: ');

// Cálculos e lógicas
const anoAtual = date.getFullYear(); // Busca o ano atual através da biblioteca
const idade = anoAtual - Number(dataNascimento);
const ehMaiorDeIdade = idade >= 18; // Variável booleana

// Área de respostas
console.log(`Olá ${nome}, seja muito bem-vindo! Você mora em ${endereco} e possui ${idade} anos de idade.`);

if (ehMaiorDeIdade) {
    console.log(`Verificação: Acesso liberado (Maior de idade: ${ehMaiorDeIdade}). Bom proveito!`);
} else {
    console.log(`Verificação: Acesso restrito (Maior de idade: ${ehMaiorDeIdade}).`);
}
```

---

## Dia 2: Faça o JavaScript pensar

### O que precisava ser melhorado no `dia-02.js`:
1. **Retorno vs Console.log:** O exercício pedia explicitamente para **não** imprimir o resultado com `console.log` diretamente dentro da função. A função deve retornar o valor (texto/mensagem), e você faz o log do lado de fora.
2. **Múltiplas condições (if, else if, else):** O desafio pedia mensagens diferentes para cada situação (idade insuficiente, assinatura inválida, pagamento atrasado, acesso liberado). Você agrupou tudo em um único `if`, então ele só retornava "certo" ou "errado".
3. **Lógica separada para mensagens específicas:** O ideal é testar etapa por etapa para dar o feedback correto (ou usar `else if`).

### Código Corrigido (`dia-02.js`):
```javascript
function consultaDeAssinatura(idade, tipoAssinatura, pagamentoEmDia) {
    // Primeiro verificamos a idade
    if (idade < 18) {
        return 'Acesso bloqueado: Você não tem idade suficiente.';
    } 
    
    // Depois verificamos o tipo de assinatura
    // Supondo que apenas "Pro" e "Ultra" tenham acesso
    if (tipoAssinatura !== 'Pro' && tipoAssinatura !== 'Ultra') {
        return 'Acesso negado: Seu tipo de assinatura não permite acesso a este conteúdo.';
    } 
    
    // Por último verificamos o pagamento
    if (pagamentoEmDia === false) {
        return 'Acesso negado: Sua assinatura é válida, mas o pagamento não está em dia.';
    }
    
    // Se passar por todas as verificações
    return 'Acesso liberado: Bem-vindo ao sistema!';
}

// Testando a função com diferentes cenários (fazendo o console.log fora da função)
console.log("Cenário 1 (Menor de idade):", consultaDeAssinatura(16, 'Pro', true));
console.log("Cenário 2 (Assinatura errada):", consultaDeAssinatura(20, 'Free', true));
console.log("Cenário 3 (Inadimplente):", consultaDeAssinatura(25, 'Pro', false));
console.log("Cenário 4 (Tudo certo):", consultaDeAssinatura(30, 'Ultra', true));
```
