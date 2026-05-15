let resultado = document.getElementById('res');

function sortear() {
    let quantidadeNumeros = Number(document.getElementById('quantidade').value);
    let deX = Number(document.getElementById('de').value);
    let ateY = Number(document.getElementById('ate').value);

    let resultado = [];

    while (quantidadeNumeros > 0) {
        // Operação que sorteia um número de X a Y ( valores que serão indicados pelo usuário );
        let randomizar = parseInt(Math.random() * (ateY - deX + 1) + deX);
        console.log(randomizar);
        resultado.push(randomizar);
        quantidadeNumeros--
    }
    res.innerHTML = 'Números sorteados: ' + resultado;
}
