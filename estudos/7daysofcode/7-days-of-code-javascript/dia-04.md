# 🔵 Dia 4 — JavaScript saindo do console

## 🎯 Objetivo
Sair da tela preta do console e começar a interagir com os elementos visuais de uma página web.

## 🧠 O que você vai aprender
- `document` e o DOM
- `querySelector` e `querySelectorAll`
- `textContent` e `innerHTML` (introdução)
- `classList`
- `addEventListener`
- eventos de click e input
- manipulação básica de elementos

## 📚 O que estudar
- **DOM (`document`)**: Como o JavaScript lê a estrutura da sua página HTML. O `document` é a porta de entrada.
- **Seletores (`querySelector`)**: Como encontrar um elemento (um botão, um texto, um input) na página para poder modificá-lo ou interagir com ele.
- **Conteúdo (`textContent` / `innerHTML`)**: Como alterar o texto ou o HTML que está dentro de uma tag.
- **Classes (`classList`)**: Como adicionar ou remover uma classe CSS de um elemento dinamicamente usando o JavaScript.
- **Eventos (`addEventListener`)**: Como fazer o JavaScript ficar "escutando" as ações do usuário (como clicar em um botão ou digitar em um campo).

## 📝 Desafio
Crie uma pequena interface HTML/CSS e use JavaScript para torná-la interativa.

Você deve construir uma página que contenha elementos com os quais o usuário possa interagir (botões, campos de texto, áreas de exibição).

O desafio deve envolver:
- Selecionar elementos usando JavaScript.
- Reagir a eventos de clique ou digitação.
- Alterar o conteúdo da tela com base nessas ações.
- Adicionar ou remover classes CSS dinamicamente.
- Atualizar a interface em tempo real.

## 🎨 Requisitos mínimos da interface
- Pelo menos um campo de interação (input, botão, etc).
- Pelo menos uma área de exibição que será alterada pelo JavaScript.
- Mudança de estilo (cor, tamanho, visibilidade) usando adição/remoção de classes no CSS.

## 🚫 Regras
- Não coloque os eventos diretamente no HTML (ex: `<button onclick="funcao()">`). Use SEMPRE `addEventListener` no arquivo JavaScript.

## 💡 Dicas
- `document.querySelector(".minha-classe")` funciona com a mesma sintaxe dos seletores do CSS.
- Usar `classList.toggle("minha-classe")` é muito útil para alternar estados (ex: ligar/desligar um botão, abrir/fechar um menu).

## ✅ Checklist
- [ ] Selecionei elementos HTML com `querySelector`
- [ ] Escutei eventos do usuário com `addEventListener`
- [ ] Alterei o conteúdo da tela (`textContent` ou `innerHTML`)
- [ ] Adicionei/removi classes CSS dinamicamente (`classList`)
- [ ] Desafio concluído
- [ ] Consegui explicar minha solução
- [ ] Fiz commit no Git

## 🏁 Antes de avançar
1. O que é o DOM?
2. Para que serve o `addEventListener`?
3. Por que manipular o `classList` é melhor do que alterar o estilo inline diretamente no JavaScript?
