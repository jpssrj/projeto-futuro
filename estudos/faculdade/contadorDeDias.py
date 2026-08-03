import math

def comparadorAnos(ano1, ano2):
    diasAno = 365
    totalAnos = ano1 - ano2
    resultadoComparacao = abs(totalAnos * diasAno)
    return (f"A comparação de dias é de {resultadoComparacao} dias")

print(comparadorAnos(2000, 2020))