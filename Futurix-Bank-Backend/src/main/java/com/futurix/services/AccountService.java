package com.futurix.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblAccount;
import com.futurix.entities.TblCustomer;
import com.futurix.exception.InsufficientAmountException;
import com.futurix.repositories.AccountRepo;
import com.futurix.repositories.CustomerRepo;

import jakarta.mail.MessagingException;

@Service
public class AccountService {
	@Autowired
	private AccountRepo accountRepo;
	@Autowired
	private CustomerRepo customerRepo;
	
//	@Autowired
//	private EmailSenderService emailSender;
	
	@Autowired
	private TransactionService transactionService;
	
	//	Create Account
	public void createAccount(TblAccount account , int id) throws MessagingException {

		Random rand = new Random();
	    String accountNumber = "100";
	    for (int i = 0; i < 8; i++)
	    {
	        int n = rand.nextInt(10) + 0;
	        accountNumber += Integer.toString(n);
	    }
		
		account.setDateofopening(LocalDate.now());
		account.setLastactivitydate(LocalDate.now());
		account.setAccountnumber(Long.parseLong(accountNumber));
		
		TblCustomer foundCustomer =  customerRepo.findById(id).orElse(null);
		account.setBalance((double) 0);
		account.setStatus("Not Verified");
		accountRepo.save(account);
		//	Sending Mail to Customer that they are registered successfully ...
		System.out.println("Email Start");
//		String imagePathString = "C:\\Users\\DELL\\OneDrive\\Desktop\\TYProject\\futurix-bank-development\\Futurix-Bank-Backend\\documents\\goku.webp";
//		emailSender.sendMailWithAttachment(foundCustomer.getEmail(), 
//				"Account open process is completed", "Welcome", imagePathString
//				);
		System.out.println("Email End");
		foundCustomer.setAccount(account);
		customerRepo.save(foundCustomer);
		
		account.setCustomer(foundCustomer);
		accountRepo.save(account);
		
	}
	
	//	Select all Account
	public List<TblAccount> retreiveAllAccount(){
		return accountRepo.findAll();	
	}
	
	
	//	Select one account
	public TblAccount findAccount(int id) {
		TblCustomer foundCustomer = customerRepo.findById(id).orElse(null);
		TblAccount foundAccount =  foundCustomer.getAccount();		
		return foundAccount;
	}
	
	
	//	Delete Account 
	public void deleteAccount(int  id) {
   TblCustomer foundCustomer =  customerRepo.findById(id).orElse(null);
	TblAccount foundAccount = foundCustomer.getAccount();
	accountRepo.delete(foundAccount);
	}
	
	//	Update Account
	public void updateAccount(int id ,  TblAccount account) {
		TblCustomer foundCustomer = customerRepo.findById(id).get();
		TblAccount foundAccount = foundCustomer.getAccount();
		foundAccount =  account;
		accountRepo.save(foundAccount);
	}
	
	// Deposit in Account
	public void depositInAccount(int accId, int amount, String desc) {
		 TblAccount tblAccount = accountRepo.findById(accId).get();
		 TblCustomer foundCustomer = tblAccount.getCustomer();
		 		 
//		 String mailMessage = """
//		 		<h1>Rs. %s Depositted To Your Account Successfully</h1>
//		 		""".formatted(tblAccount.getAccountnumber());
		 //emailSender.sendSimpleEmail(foundCustomer.getEmail(), "Money Deposit", mailMessage);
		 
		 Double balance = tblAccount.getBalance();	 
		 tblAccount.setBalance(balance + amount);
		 
		 transactionService.addTransaction(tblAccount, "Deposit", desc, amount);
		 accountRepo.save(tblAccount);
	}
	
	// Withdraw from Account
	public void withdrawFromAccount(int accId, int amount, String desc) {
		TblAccount tblAccount = accountRepo.findById(accId).get();
		
		
		
//		TblCustomer foundCustomer = tblAccount.getCustomer();
//		 String mailMessage = """
//		 		<h1>Rs. %s Withdrawn From Your Account Successfully</h1>
//		 		""".formatted(tblAccount.getAccountnumber());
//		 emailSender.sendSimpleEmail(foundCustomer.getEmail(), "Money Withdrawl", mailMessage);
		
		Double balance = tblAccount.getBalance();
		
		if(amount > balance) {
			throw new InsufficientAmountException("Sorry not enough balance....!");
		}else {
			tblAccount.setBalance(balance - amount);
			transactionService.addTransaction(tblAccount, "Withdraw", desc, amount);
		}
		
	}
	
	
	// Transfer from one account to another account
	public void transferFromOneAccountToAnother(int accId, int amount, int accountNumber, String desc) {
		TblAccount senderAccount = accountRepo.findById(accId).get();
		TblAccount recieverAccount = null;
		Double balance = senderAccount.getBalance();
		
		if(amount > balance) {
			throw new InsufficientAmountException("Sorry not enough balance....!");
		}else {
			senderAccount.setBalance(balance - amount);
			transactionService.addTransaction(senderAccount, "Money Send", desc, amount);
			
			recieverAccount = accountRepo.findByAccountnumber(accountNumber);
			balance = recieverAccount.getBalance() + amount;
			recieverAccount.setBalance(balance);
			
			transactionService.addTransaction(recieverAccount, "Money Recieve", desc, amount);

			accountRepo.save(recieverAccount);	
		}
	}
	
}
