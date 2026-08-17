import math

def salarioLiquido(salarioBruto):
    descontoINSS = 0.08
    convenioMedico = 22.45
    descontosTotais = (salarioBruto * descontoINSS) + convenioMedico
    resultadoLiquido = salarioBruto - descontosTotais
    return resultadoLiquido

print(salarioLiquido(1000))