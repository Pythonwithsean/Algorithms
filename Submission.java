import java.util.Scanner;

public class Submission {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		String response = input.nextLine();
		char c = Character.toUpperCase(response.charAt(0));

		System.out.println(Character.BYTES);
		System.out.println(c - 'A' + 1);
		input.close();
	}
}