const tarefas = [
    { descricao: 'Estudar JavaScript', status: 'pendente' },
    { descricao: 'Fazer exercícios', status: 'concluído' },
    { descricao: 'Revisar loops', status: 'pendente' }
];

console.log('Tarefas pendentes:');
for (let i = 0; i < tarefas.length; i++){
    if (tarefas[i].status == 'pendente'){
        console.log(tarefas[i].descricao)
    }
}