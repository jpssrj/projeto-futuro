import java.util.Scanner;

public class notinha {
    public static void main(String[] args){
        Scanner leitorNotas = new Scanner(System.in);

        System.out.println("Digite sua nota do trabalho: ");
        int trabalho = leitorNotas.nextInt();

        System.out.println("Digite sua nota da prova: ");
        int prova = leitorNotas.nextInt();

        System.out.println("Digite sua nota do simulado: ");
        int simulado = leitorNotas.nextInt();

        int media = (trabalho + prova + simulado) / 3;

        if (media >= 7){
            System.out.println("Parabéns, você passou! Sua média foi: " + media);
        } else if (media >=5 && media <=6) {
            System.out.println("Você vai precisar fazer a recuperação! Sua média foi: " + media);
        } else {
            System.out.println("Infelizmente você não passou! Sua média foi: " + media);
        }
    }
}
