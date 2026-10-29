def ordena(v, n):
    for i in range(1, n):
        chave = v[i]
        j = i - 1
        while j >= 0 and v[j] > chave:
            v[j + 1] = v[j]
            j = j - 1
            v[j + 1] = chave


# Exemplo de teste
vetor = [12, 11, 13, 5, 6, 7]
print("Antes:", vetor)
# Passa o vetor e o tamanho dele (len(vetor))
ordena(vetor, len(vetor))
print("Depois:", vetor)