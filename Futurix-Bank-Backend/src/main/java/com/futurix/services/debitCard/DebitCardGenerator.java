package com.futurix.services.debitCard;
import java.util.Random;


public class DebitCardGenerator {
	// Generate a random debit card number
    public static String generateDebitCardNumber() {
        // Choose a random IIN (Issuer Identification Number)
        Random random = new Random();
        String iin = generateRandomIIN(random);
        
        // Generate random customer account number (12 digits)
        StringBuilder accountNumber = new StringBuilder();
        for (int i = 0; i < 12; i++) {
            accountNumber.append(random.nextInt(10)); // Append a random digit
        }
        
        // Calculate the check digit using Luhn algorithm
        String cardNumber = iin + accountNumber.toString();
        int checkDigit = calculateCheckDigit(cardNumber);
        
        // Combine all parts to get the final card number
        return cardNumber + checkDigit;
    }
    
    // Generate a random IIN (Issuer Identification Number)
    private static String generateRandomIIN(Random random) {
        String[] iinOptions = {"4", "5"}; // Visa or Mastercard
        String randomIIN = iinOptions[random.nextInt(iinOptions.length)];
        for (int i = 0; i < 5; i++) {
            randomIIN += random.nextInt(10); // Append 5 random digits
        }
        return randomIIN;
    }
    
    // Calculate the check digit using Luhn algorithm
    private static int calculateCheckDigit(String cardNumber) {
        int sum = 0;
        boolean alternate = false;
        for (int i = cardNumber.length() - 1; i >= 0; i--) {
            int digit = Integer.parseInt(cardNumber.substring(i, i + 1));
            if (alternate) {
                digit *= 2;
                if (digit > 9) {
                    digit = digit % 10 + 1;
                }
            }
            sum += digit;
            alternate = !alternate;
        }
        return (10 - (sum % 10)) % 10;
    }
}
