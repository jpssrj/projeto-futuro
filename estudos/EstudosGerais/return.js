function aprendendoReturn(nome, idade, cidade) {
    let texto = `Olá, meu nome é ${nome}, tenho ${idade} de idade e nasci em ${cidade}.`;
    return texto;
}

console.log(aprendendoReturn('Thyago', 26, 'Santa Cruz da Serra'));

function media(num1, num2) {
    let soma = num1 + num2;
    let divisao = Number(soma) / 2;
    let totalMedia = divisao;
    return totalMedia;
}

console.log(media(2,2));