// 3. Filtro de Candidato em Tecnologia
//
// Crie um algoritmo para um processo seletivo. O candidato informa sua idade e quantos projetos tem no GitHub.
// Para ser aprovado para a entrevista, ele deve ter mais de 18 anos E pelo menos 5 projetos postados.

const leia = require('readline-sync');

const idade = Number(leia.question('Insira a sua idade: '))
const numProjetos = Number(leia.question('Insira a quantidade de projetos que tens no GitHub: '))

if (idade >= 18 && numProjetos >= 5) {
    console.log('Parabéns, a primeira etapa do seu recrutamento foi APROVADA!')
} else {
    console.log('Infelizmente sua candidatura foi RECUSADA, mas não desanime, você ainda tem muito caminho pela frente!')
}