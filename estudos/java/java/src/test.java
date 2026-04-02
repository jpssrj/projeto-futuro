import java.util.Scanner;

public class test {
    public static void main(String[] args){
        Scanner leitorIdade = new Scanner(System.in);

        System.out.println("Digite sua idade");
        int idade = leitorIdade.nextInt();

        if (idade >= 18){
            System.out.println("você é maior de idade");
        } else {
            System.out.println("Você é menor de idade");
        }




    }
}

