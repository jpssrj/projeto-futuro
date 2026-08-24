def calculandoIMC(peso, altura):
    imc = (peso / (altura**2))
    # Estrutura de seleção simples
    if imc > 30:
        return "Obesidade"
    elif imc < 30 and imc > 25:
        return "Acima do peso"
    elif imc < 25 and imc > 18.5:
        return "Peso normal"
    else:
        return "Abaixo do peso"

print(calculandoIMC(65,1.80))