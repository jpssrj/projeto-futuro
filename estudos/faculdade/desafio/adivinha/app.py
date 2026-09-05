from random import randint

print(f"Boas vindas ao jogo de adivinhação!")
random = randint(0, 10)
chances = 3
pontuacao = 100

for i in range(chances):
    chute = input(f'Chute um número entre 0 e 10: ')
    if chute.isnumeric():
        chute = int(chute)
        chances = chances - 1

        if chute == random:
            print(f'Você acertou o número secreto! O número era {random} e você ainda tinha {chances} chances. Sua pontuação final foi de {pontuacao}')
            break
        else:
            if chute > random:
                print(f'O número secreto é menor que {chute}, ainda te restam {chances} tentativas.')
                pontuacao = pontuacao - 20
            else:
                print(f'O número secreto é maior que {chute}, ainda te restam {chances} tentativas.')
                pontuacao = pontuacao - 20
            
        if chances == 0:
            print(f'Você atingiu o máximo de chances possíveis para esse desafio, tente novamente na próxima. O número secreto era: {random}.')
            break

    else:
        print(f'A informação enviada não é um número válido.')
        break
''' 
## Pesquisa:
1. randint(a, b): Função do módulo random que retorna um número inteiro aleatório incluindo os dois extremos

2. .isnumeric(): Método de strings que retorna True se todos os caracteres da cadeia forem numéricos (dígitos) e houver ao menos um caractere, se não, retorna False

3. break: Declaração de controle de fluxo que interrompe imediatamente o laço de repetição interno (for ou while), transferindo a execução para a linha seguinte fora do loop.

## Explicação do código antigo(proposto incialmente para fins de análise):
* Inicialização e Configurações: Sorteia o número alvo com randint, declara variáveis de controle (chute e chances) com valores padrão.
* While: Mantém o jogo em execução contínua enquanto o palpite atual for diferente do número secreto.
* Validação de Entrada (if chute.isnumeric()): Garante que o texto digitado pode ser convertido para inteiro com segurança, evitando falhas de execução (ValueError).
* Verificação de Vitória: Checa se chute == random. Se true, avisa a vitória e usa break para encerrar o programa.
* Dicas: Se errar, compara os valores para informar se o número secreto é maior ou menor e atualiza a quantidade de chances restantes.
* Checagem de Derrota (if chances == 0): Encerra o jogo via break caso o jogador tenha esgotado suas tentativas.

## Explicação do que foi feito:
A fim de reduzir a quantidade de código utilizado, abordei uma ideia mais rápida e curta de se fazer, tirando o 'chute = 0' inicialmente, pois corria um grande risco da prórpia máquina usar o número 0 como o número secreto.
Outra grande mudança foi adotar f-strings como método para declarar variáveis dentro das linhas de print, pois dessa forma fica muito mais fácil a interpretação e leitura do que está escrito.
A utização do for para laço de repetição auxilia a não existir erros quanto a quantidade de vezes que o bloco de código irá se repetir, mesmo que para o funcionamento não seja necessário, foi utilizado na linha 11 'chances = chances - 1' apenas para poder utilizar essa variável como dado nas dicas entregues caso o número secreto seja maior ou menor que o chute.

## Adição final:
Incrementado um sistema de pontuação, que ao fim, retorna qual foi o seu total de pontos durante a partida, onde o mesmo vai decaindo quanto mais erros tiver.
'''