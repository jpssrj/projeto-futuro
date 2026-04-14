for (let i = 0; i < 5; i++){
    //console.log(i)
}

const usuarios = ["João", "Marcos", "Luis"];

for (let i = 0; i < usuarios.length; i++){
    //console.log(usuarios[i])
}

const catalogo = [
    {nome: "Livro", status: "pendente"},
    {nome: "Caderno", status: "concluído"},
    {nome: "Apostila", status: "concluído"}
]

for (let i = 0; i < catalogo.length; i++){
    if (catalogo[i].status == 'concluído'){
        //console.log(`Este item já está concluído: ${catalogo[i].nome}`)
    }
}
