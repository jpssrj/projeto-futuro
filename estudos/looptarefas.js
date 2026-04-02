// 1. O Filtro Duplo (E / &&)
// Percorra o array e dê um console.log apenas nas atividades que estão com status: "pendente" E têm prioridade: "alta".
// 2. O Relatório de Status
// Crie três variáveis de contagem: let concluidas = 0, let pendentes = 0 e let emProgresso = 0.
// Use um único for para percorrer a lista e, usando if/else if, incremente a variável correta dependendo do status de cada item. Ao final, mostre o total de cada uma.

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

/* let concluidas = 0;
let pendentes = 0;
let emProgresso = 0;

for (let i = 0; i < tarefas.length; i++){
    if (tarefas[i].status == 'concluído'){
        concluidas++
    } else if (tarefas[i].status == 'pendente') {
        pendentes++
    } else {
        emProgresso++
    }
}

console.log(`Essa é a relação de itens:`);
console.log(`Itens concluídos: ${concluidas}`);
console.log(`Itens pendentes: ${pendentes}`);
console.log(`Itens em progresso: ${emProgresso}`); */

/* for (let i = 0; i < tarefas.length; i++){
    if (tarefas[i].status == 'pendente' && tarefas[i].prioridade == 'alta'){
        console.log(`Você deve focar em: ${tarefas[i].atividade}`);
    }
} */