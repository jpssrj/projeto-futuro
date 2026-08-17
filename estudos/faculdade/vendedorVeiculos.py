def salarioVendedor(vendasNoMes):
    # Dados para execução
    fixo = 998
    comissaoPorTotal = 0.05
    inss = 0.08
    convenioMedico = 22.45

    # Cálculo para o salário limpo
    salarioBruto = fixo + (vendasNoMes * comissaoPorTotal)
    calculoLiquido = salarioBruto - ((salarioBruto * inss) + convenioMedico)
    return calculoLiquido

print(salarioVendedor(10))