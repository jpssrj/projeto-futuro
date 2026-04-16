const numberAdd = Number(prompt('Insira o número desejado: '));
const numberText = document.getElementById('title-number');
const text = document.getElementById('text');

numberText.innerHTML = numberAdd;
text.innerHTML = [
    `<p>Raíz quadrada: ${Math.sqrt(numberAdd)} </br>
    ${numberAdd} é inteiro: ${Number.isInteger(numberAdd)} </br>
    É NaN: ${Number.isNaN(numberAdd)} </br>
    Arredondando para baixo: ${Math.floor(numberAdd)} </br> 
    Arredondando para cima: ${Math.ceil(numberAdd)} </br>
    Com duas casas decimais: ${numberAdd.toFixed(2)}</p>`
]