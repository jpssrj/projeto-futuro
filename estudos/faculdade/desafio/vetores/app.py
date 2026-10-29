'''
Exercício: Multiplicação Escalar e Diferença entre Vetores
Elabore um programa em Python que:
Leia dois vetores de números inteiros, A e B, cada um com 30 posições.
Crie um terceiro vetor, C, em que cada elemento da posição i seja o resultado de:
                             vetor A[i] * 2 - vetor B[i]
(ou seja, o dobro do valor de A menos o valor de B na mesma posição).
Imprima na tela os valores resultantes armazenados no vetor C juntamente com seus respectivos índices.

Requisitos e Boas Práticas:
Utilize uma constante para definir a quantidade de posições (teste primeiro com um valor menor, como 3 ou 4).
Utilize laços de repetição (for) para ler os dados e popular as listas.
Garanta que os valores lidos sejam convertidos para inteiros (int).
'''

vetorA = []
vetorB = []
tamanho = 3

print(f"Carregue com os valores respectivos ao vetor A:")
for i in range(tamanho):
    valor = int(input(f"Adicione o valor respectivo ao índice {i} do vetor A: "))
    vetorA.append(valor)

print(f"Carregue com os valores respectivos ao vetor B:")
for i in range(tamanho):
    valor = int(input(f"Adicione o valor respectivo ao índice {i} do vetor B: "))
    vetorB.append(valor)

vetorC = []

print(f"Executaremos os cálculos dos vetores: ")
for i in range(tamanho):
    calculo = (vetorA[i] * 2) - vetorB[i]
    vetorC.append(calculo)

print(f"Calculos executados. Segue as respostas:")
print(f"Vetor A = {vetorA}")
print(f"Vetor B = {vetorB}")
print("---------------------")
print(f"Vetor C = {vetorC}")