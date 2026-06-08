let resultado = document.getElementById('res');

function sortear() {
    let quantidadeNumeros = Number(document.getElementById('quantidade').value);
    let deX = Number(document.getElementById('de').value);
    let ateY = Number(document.getElementById('ate').value);

    // Proteção de entrada de dados
    if (quantidadeNumeros <= 0 || ateY <= deX) {
        alert('Por favor, insira apenas números maiores que zero e certifique-se de que "ate" seja maior que "de".');
        return;
    }

    let resultado = [];

    while (quantidadeNumeros > 0) {
        // Operação que sorteia um número de X a Y ( valores que serão indicados pelo usuário );
        let randomizar = parseInt(Math.random() * (ateY - deX + 1) + deX);
        console.log(randomizar);
        resultado.push(randomizar);
        quantidadeNumeros--
    }
    res.innerHTML = 'Números sorteados: ' + resultado;
    alterarStatusBotao();
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao')
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo" id="res">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}