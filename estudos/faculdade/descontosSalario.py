import math

def salarioLiquido(salarioBruto):
    descontoINSS = 0.08
    convenioMedico = 22.45
    descontosTotais = (salarioBruto * descontoINSS) + convenioMedico
    resultadoLiquido = salarioBruto - descontosTotais
    return (f"O salário líquido, já com os descontos fica em {resultadoLiquido:.2f} reais.")

print(salarioLiquido(1000))