# 🔴 Dia 6 — JavaScript conversando com a internet

## 🎯 Objetivo
Aprender a buscar informações externas na internet, lidar com o tempo de espera dessas operações e exibir resultados dinamicamente na tela.

## 🧠 O que você vai aprender
- O que é uma API e HTTP de forma simples
- O que é JSON no contexto de APIs
- Fazendo requisições com `fetch`
- O que é uma Promise
- `async` / `await`
- Tratamento de erros básicos com `try/catch`
- Criação de estados de carregamento (loading)

## 📚 O que estudar
- **API (Application Programming Interface)**: Basicamente, um serviço na internet que fornece informações de forma estruturada. Você faz o pedido (requisição HTTP) e ela traz o dado de um servidor de volta para o seu código.
- **Fetch**: A função nativa do JavaScript para fazer esses pedidos na rede.
- **Assincronismo (Promises, async/await)**: Buscar algo na internet demora um tempo imprevisível. O JavaScript precisa de um mecanismo para não travar a página e aguardar (`await`) pacientemente o dado chegar enquanto faz outras coisas.
- **try/catch**: A internet falha. Um link pode estar quebrado, a API pode cair. O `try/catch` tenta executar um bloco de código e, se der erro, intercepta o problema de forma segura para não quebrar a sua aplicação.

## 📝 Desafio
Crie uma pequena interface que busque informações de uma API pública.

Você deve criar um campo onde o usuário digita uma informação e um botão para buscar. A página deve:
1. Mostrar uma mensagem visual de "Carregando..."
2. Fazer o fetch para a API de forma assíncrona.
3. Transformar a resposta recebida para JSON.
4. Remover a mensagem de carregamento e exibir os dados obtidos na tela.
5. Se houver algum erro, mostrar uma mensagem de erro na tela de forma elegante.

## 🌐 API sugerida
Escolha a que preferir:
- **PokeAPI (Pokémon)**: `https://pokeapi.co/api/v2/pokemon/` + nome do pokémon.
- **ViaCEP (Endereços)**: `https://viacep.com.br/ws/` + cep + `/json/`.
- **GitHub API (Perfis)**: `https://api.github.com/users/` + nome de usuário.

## ⚠️ Requisitos
- Uma interface com campo de texto e botão.
- Usar uma função `async`.
- Usar `await` com o `fetch` e com a conversão para `.json()`.
- Usar `try/catch` para lidar com problemas (como uma busca que não retorna resultados válidos).
- Feedback visual para o usuário quando a requisição estiver ocorrendo.

## 🚫 Regras
- Não tente manipular os dados da API sem antes aguardar o `.json()` ser resolvido.
- Os erros devem aparecer visualmente na tela, e não apenas no console.

## 💡 Dicas
- Inspecione a resposta da API dando um `console.log()` no JSON final para entender a estrutura dos dados (quais propriedades o objeto tem).
- Desligue sua conexão de internet rapidamente e tente buscar algo, apenas para testar se o seu `catch` está funcionando.

## ✅ Checklist
- [ ] Entendi o conceito de requisição e API
- [ ] Fiz uma chamada assíncrona usando `fetch`
- [ ] Tratei o assincronismo com `async` e `await`
- [ ] Mostrei e escondi o estado de carregamento
- [ ] Blindei meu código com `try/catch`
- [ ] Exibi as informações na tela usando manipulação do DOM
- [ ] Desafio concluído
- [ ] Consegui explicar minha solução
- [ ] Fiz commit no Git

## 🏁 Antes de avançar
1. Por que precisamos usar `await` em algumas operações?
2. O que o método `.json()` faz com a resposta inicial do fetch?
3. O que acontece se a requisição falhar e não houver um `try/catch`?
