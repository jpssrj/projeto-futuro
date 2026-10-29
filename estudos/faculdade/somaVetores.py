'''
1. Elabore um algoritmo que leia, some e imprima o resultado da soma de dois vetores inteiros de 50 posições.
'''
tamanho = 5
vetor1 = []
vetor2 = []

print(f"Carregamento das informações do primeiro vetor:")
for i in range(tamanho):
    valor = int(input(f"Digite o {i} valor para o Vetor 1: "))
    vetor1.append(valor)

print(f"Carregamento das informações do segundo vetor:")
for i in range(tamanho):
    valor = int(input(f"Digite o {i} valor para o Vetor 2: "))
    vetor2.append(valor)

vetorSoma = []

print(f"Executando as somas dos vetores")
for i in range(tamanho):
    valorSoma = vetor1[i] + vetor2[i]
    vetorSoma.append(valorSoma) 

print(f"Resultado da soma dos vetores foi:")
print(f"Vetor 1 = {vetor1}")
print(f"Vetor 2 = {vetor2}")
print(f"Soma dos vetores resultou em:")
print(f"Vetores Somados: {vetorSoma}")
