# 🟣 Dia 5 — Formulários e LocalStorage

## 🎯 Objetivo
Aprender a capturar dados inseridos pelo usuário em formulários e salvá-los no navegador para que não se percam quando a página for recarregada.

## 🧠 O que você vai aprender
- formulários e o evento de `submit`
- `preventDefault`
- acessando dados de campos com `value`
- validação básica
- `localStorage`
- `JSON.stringify` e `JSON.parse`

## 📚 O que estudar
- **Eventos de Formulário**: Ao invés de escutar o clique no botão, você escuta o evento `submit` do `<form>`. E precisa usar `event.preventDefault()` para impedir que a página recarregue sozinha.
- **.value**: Como pegar exatamente o que a pessoa digitou em um campo (`<input>`, `<textarea>`).
- **Validação básica**: Como verificar via código se um campo está vazio ou incorreto antes de salvar.
- **LocalStorage**: Um banco de dados simples do navegador que guarda informações em texto. Sobrevive a recarregamentos de página.
- **JSON**: O formato padrão de texto para guardar e trocar dados na web. `stringify` transforma objetos/arrays do JS em texto. `parse` transforma o texto de volta em arrays/objetos do JS.

## 📝 Desafio
Crie uma pequena aplicação de gerenciamento de dados. 

Pode ser uma lista de tarefas, anotações, contatos ou itens (você escolhe o tema).

A aplicação deve:
- Receber dados por meio de um formulário HTML.
- Validar se as informações não estão vazias.
- Adicionar os novos dados à interface.
- Salvar os dados no LocalStorage do navegador.
- Recuperar os dados salvos do LocalStorage ao recarregar a página (para que nada se perca).
- Permitir alguma ação de remoção de itens.

## 📌 Requisitos
- Capturar o envio de um formulário usando o evento `submit` e `preventDefault()`.
- Validar as informações antes de salvar.
- Usar `localStorage.setItem` e `localStorage.getItem`.
- Usar `JSON.stringify()` e `JSON.parse()` para salvar e ler os dados corretamente.
- Ler os dados salvos sempre que a página carregar.

## 🚫 Regras
- Não salve os itens como strings puras soltas. Salve um Array completo no LocalStorage.
- Não permita salvar formulários vazios.

## 💡 Dicas
- Se ao fazer o `getItem` ele não encontrar nada, ele retorna `null`. Lembre-se de definir que seu array inicial seja um array vazio `[]` nesse caso.
- É muito comum ter uma função `renderizarDados()` que apaga a tela e redesenha tudo baseando-se no que está no array atualmente.

## ✅ Checklist
- [ ] Capturei o submit do formulário e usei `preventDefault()`
- [ ] Peguei os valores usando `.value`
- [ ] Fiz uma validação básica
- [ ] Transformei dados usando JSON
- [ ] Salvei e recuperei dados do LocalStorage
- [ ] Implementei a remoção de itens
- [ ] Desafio concluído
- [ ] Consegui explicar minha solução
- [ ] Fiz commit no Git

## 🏁 Antes de avançar
1. Por que precisamos usar `event.preventDefault()` em formulários?
2. Se o LocalStorage só aceita textos, como podemos salvar um Array cheio de objetos dentro dele?
3. Para que serve o `JSON.parse()`?
