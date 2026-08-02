import math

'''numberA = int(input("Digite o valor de A: "))
numberB = int(input("Digite o valor de B: "))
numberC = int(input("Digite o valor de C: "))'''

def formulaBhaskara(numberA, numberB, numberC):
    delta = numberB ** 2 - 4 * numberA * numberC
    if delta < 0:
        print("O valor de Delta é menor que zero, por isso a conta foi finalizada aqui.")
    else:
        numberX1 = (-numberB + math.sqrt(delta)) / (2 * numberA)
        numberX2 = (-numberB - math.sqrt(delta)) / (2 * numberA)
        return (f"Os valores de x1 e x2 são: {numberX1} e {numberX2} respectivamente.")

print(formulaBhaskara(1, -5, 6))