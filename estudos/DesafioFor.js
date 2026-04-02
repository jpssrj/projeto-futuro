/* Último desafio de for (O Gran Finale)
Para fechar com chave de ouro essa parte de loops e arrays antes de você avançar para coisas mais complexas:

    O Desafio do "Ranking de Prioridade"

    Imagine que você quer criar um novo array chamado prioritarias. Você deve percorrer o array tarefas original e, se
    a prioridade for "alta", você deve adicionar o objeto inteiro dentro desse novo array.

    A lógica seria:

    Criar um array vazio: let prioritarias = [];

Rodar o for.

Se prioridade == 'alta', usar o método .push() para colocar o objeto lá dentro.

    Ao final, dê um console.log(prioritarias) e veja se ele te mostra uma lista menor, apenas com as 4 tarefas importantes. */

const tarefas = [
    { id: 1, atividade: "Estudar JavaScript", status: "concluído", prioridade: "alta" },
    { id: 2, atividade: "Fazer exercícios de Logística", status: "pendente", prioridade: "media" },
    { id: 3, atividade: "Configurar ambiente Node", status: "pendente", prioridade: "alta" },
    { id: 4, atividade: "Assistir aula do UNASP", status: "concluído", prioridade: "baixa" },
    { id: 5, atividade: "Ler documentação de React", status: "pendente", prioridade: "media" },
    { id: 6, atividade: "Atualizar o Dashboard de internet", status: "em progresso", prioridade: "alta" },
    { id: 7, atividade: "Revisar Arquitetura de Computadores", status: "pendente", prioridade: "alta" },
    { id: 8, atividade: "Ajustar microfone do projeto Scala", status: "concluído", prioridade: "baixa" },
    { id: 9, atividade: "Backup do banco de dados", status: "pendente", prioridade: "media" },
    { id: 10, atividade: "Reunião de equipe", status: "em progresso", prioridade: "baixa" }
];

let prioritarias = [];

for (let i = 0; i < tarefas.length; i++){
    if (tarefas[i].prioridade == 'alta'){
        prioritarias.push(tarefas[i].atividade)
    }
    else {
    }
}

console.log(prioritarias)