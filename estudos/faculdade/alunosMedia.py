'''
2. Elabore um algoritmo que leia as notas de uma classe de 10 alunos, calcule a média e imprima a
quantidade de alunos acima da média.
'''

classe = []
qntAlunos = 3
acimaDaMedia = 0

for i in range(qntAlunos):
    print(f"Carregamento de notas dos alunos: ")
    nota1 = float(input(f"Insira a primeira nota do aluno {i + 1}: "))
    nota2 = float(input(f"Insira a segunda nota do aluno {i + 1}: "))
    media = (nota1 + nota2) / 2
    classe.append(media)

print(f"Calculando médias de alunos e exibindo alunos acima da média:")
for i in range(qntAlunos):
    if classe[i] >= 6.0:
        acimaDaMedia += 1
        
print(classe)
print(acimaDaMedia)