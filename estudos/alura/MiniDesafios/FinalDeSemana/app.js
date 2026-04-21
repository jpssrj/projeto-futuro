alert('Quiz do dia da semana');

console.log("Dias de finais de semana são Sábado e Domingo");

let chuteDia = prompt("Em qual dia da semana estamos? ");
console.log(`O chute do dia foi ${chuteDia}`);

if (chuteDia.toLowerCase() === "sábado" || chuteDia.toLowerCase() === "domingo") {
    alert("Bom final de semana!");
} else {
    alert("Boa semana!");
}