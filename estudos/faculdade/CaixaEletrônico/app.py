from ast import While
from unittest import case

from users import users

consultaSaldo = input("Digite o Usuário: ")

match consultaSaldo:

    case "1":
        print(f"Saldo do usuário {users[0]['nome']}: R${users[0]['saldo']}")

        while True:

            print("\n==============================")
            print("       CAIXA ELETRÔNICO")
            print("==============================")
            print("1 - Consultar saldo")
            print("2 - Sacar")
            print("3 - Depositar")
            print("4 - Sair")
            print("==============================")

            opcao = input("Escolha uma opção: ")
            operacoes = 0

            match opcao:

                case "1":
                    print(f"\nSaldo disponível: R$ {users[int(opcao) - 1]['saldo']:.2f}")

                case "2":

                    while True:

                        valor = float(input("\nValor do saque: R$ "))

                        if valor <= 0:
                            print("Valor inválido.")

                        elif valor > 500:
                            print("O limite máximo por saque é R$ 500.")

                        elif valor > users[int(consultaSaldo) - 1]['saldo']:
                            print("Saldo insuficiente.")

                        elif valor % 10 != 0:
                            print("O valor deve ser múltiplo de R$ 10.")

                        else:
                            break

                    users[int(consultaSaldo) - 1]['saldo'] -= valor
                    operacoes += 1

                    print(f"Saque realizado: R$ {valor:.2f}")
                    print(f"Novo saldo: R$ {users[int(consultaSaldo) - 1]['saldo']:.2f}")

                case "3":

                    while True:

                        valor = float(input("\nValor do depósito: R$ "))

                        if valor > 0:
                            break

                        print("O valor deve ser maior que zero.")

                    users[int(consultaSaldo) - 1]['saldo'] += valor
                    operacoes += 1

                    print(f"Depósito realizado: R$ {valor:.2f}")
                    print(f"Novo saldo: R$ {users[int(consultaSaldo) - 1]['saldo']:.2f}")

                case "4":

                    print("\nSistema encerrado.")
                    print(f"Operações realizadas: {operacoes}")
                    print(f"Saldo final: R$ {users[int(consultaSaldo) - 1]['saldo']:.2f}")
                    break

                case _:
                    print("\nOpção inválida!")

    case "2":
        print(f"Saldo do usuário {users[1]['nome']}: R${users[1]['saldo']}")

        while True:
        
                    print("\n==============================")
                    print("       CAIXA ELETRÔNICO")
                    print("==============================")
                    print("1 - Consultar saldo")
                    print("2 - Sacar")
                    print("3 - Depositar")
                    print("4 - Sair")
                    print("==============================")
        
                    opcao = input("Escolha uma opção: ")
                    operacoes = 0
        
                    match opcao:
        
                        case "1":
                            print(f"\nSaldo disponível: R$ {users[int(opcao) - 1]['saldo']:.2f}")
        
                        case "2":
        
                            while True:
        
                                valor = float(input("\nValor do saque: R$ "))
        
                                if valor <= 0:
                                    print("Valor inválido.")
        
                                elif valor > 500:
                                    print("O limite máximo por saque é R$ 500.")
        
                                elif valor > users[int(consultaSaldo) - 1]['saldo']:
                                    print("Saldo insuficiente.")
        
                                elif valor % 10 != 0:
                                    print("O valor deve ser múltiplo de R$ 10.")
        
                                else:
                                    break
        
                            users[int(consultaSaldo) - 1]['saldo'] -= valor
                            operacoes += 1
        
                            print(f"Saque realizado: R$ {valor:.2f}")
                            print(f"Novo saldo: R$ {users[int(consultaSaldo) - 1]['saldo']:.2f}")
        
                        case "3":
        
                            while True:
        
                                valor = float(input("\nValor do depósito: R$ "))
        
                                if valor > 0:
                                    break
        
                                print("O valor deve ser maior que zero.")
        
                            users[int(consultaSaldo) - 1]['saldo'] += valor
                            operacoes += 1
        
                            print(f"Depósito realizado: R$ {valor:.2f}")
                            print(f"Novo saldo: R$ {users[int(consultaSaldo) - 1]['saldo']:.2f}")
        
                        case "4":
        
                            print("\nSistema encerrado.")
                            print(f"Operações realizadas: {operacoes}")
                            print(f"Saldo final: R$ {users[int(consultaSaldo) - 1]['saldo']:.2f}")
                            break
        
                        case _:
                            print("\nOpção inválida!")
        

    case "3":
        print(f"Saldo do usuário {users[2]['nome']}: R${users[2]['saldo']}")

        while True:
        
                    print("\n==============================")
                    print("       CAIXA ELETRÔNICO")
                    print("==============================")
                    print("1 - Consultar saldo")
                    print("2 - Sacar")
                    print("3 - Depositar")
                    print("4 - Sair")
                    print("==============================")
        
                    opcao = input("Escolha uma opção: ")
                    operacoes = 0
        
                    match opcao:
        
                        case "1":
                            print(f"\nSaldo disponível: R$ {users[int(opcao) - 1]['saldo']:.2f}")
        
                        case "2":
        
                            while True:
        
                                valor = float(input("\nValor do saque: R$ "))
        
                                if valor <= 0:
                                    print("Valor inválido.")
        
                                elif valor > 500:
                                    print("O limite máximo por saque é R$ 500.")
        
                                elif valor > users[int(consultaSaldo) - 1]['saldo']:
                                    print("Saldo insuficiente.")
        
                                elif valor % 10 != 0:
                                    print("O valor deve ser múltiplo de R$ 10.")
        
                                else:
                                    break
        
                            users[int(consultaSaldo) - 1]['saldo'] -= valor
                            operacoes += 1
        
                            print(f"Saque realizado: R$ {valor:.2f}")
                            print(f"Novo saldo: R$ {users[int(consultaSaldo) - 1]['saldo']:.2f}")
        
                        case "3":
        
                            while True:
        
                                valor = float(input("\nValor do depósito: R$ "))
        
                                if valor > 0:
                                    break
        
                                print("O valor deve ser maior que zero.")
        
                            users[int(consultaSaldo) - 1]['saldo'] += valor
                            operacoes += 1
        
                            print(f"Depósito realizado: R$ {valor:.2f}")
                            print(f"Novo saldo: R$ {users[int(consultaSaldo) - 1]['saldo']:.2f}")
        
                        case "4":
        
                            print("\nSistema encerrado.")
                            print(f"Operações realizadas: {operacoes}")
                            print(f"Saldo final: R$ {users[int(consultaSaldo) - 1]['saldo']:.2f}")
                            break
        
                        case _:
                            print("\nOpção inválida!")
        
    case _:
        print("Usuário não encontrado")