const pedidos = [
    { id: 101, produto: "Teclado Mecânico", regiao: "Sudeste" },
    { id: 102, produto: "Monitor 24pol", regiao: "Norte" },
    { id: 103, produto: "Mouse Pad", regiao: "Sul" },
    { id: 104, produto: "Cabo HDMI", regiao: "Nordeste" },
    { id: 105, produto: "Fonte 600W", regiao: "Centro-Oeste" },
    { id: 106, produto: "Placa de Vídeo", regiao: "Sudeste" },
    { id: 107, produto: "Memória RAM", regiao: "Regiao Inexistente" } // Para testar o default!
];

const lugar = {
    "sudeste": "Entrega em 2 dias",
    "sul": "Entrega em 4 dias",
    "centroOeste": "Entrega em 5 dias",
    "nordeste": "Entrega em 8 dias",
    "norte": "Entrega em 12 dias"
//  "default: "Região não atendida"
}

for (let i = 0; i < pedidos.length; i++){
    switch (pedidos[i].regiao){
        case 'Sudeste':
            console.log(`Produto: ${pedidos[i].produto} | Destino: ${pedidos[i].regiao} | ${lugar["sudeste"]}`);
            break;
        case 'Sul':
            console.log(`Produto: ${pedidos[i].produto} | Destino: ${pedidos[i].regiao} | ${lugar["sul"]}`);
            break;
        case 'Centro-Oeste':
            console.log(`Produto: ${pedidos[i].produto} | Destino: ${pedidos[i].regiao} | ${lugar["centroOeste"]}`);
            break;
        case 'Nordeste':
            console.log(`Produto: ${pedidos[i].produto} | Destino: ${pedidos[i].regiao} | ${lugar["nordeste"]}`);
            break;
        case 'Norte':
            console.log(`Produto: ${pedidos[i].produto} | Destino: ${pedidos[i].regiao} | ${lugar["norte"]}`);
            break;
        default:
            console.log(`Produto: ${pedidos[i].produto} | Destino: ${pedidos[i].regiao} | Região não atendida`);
    }
}