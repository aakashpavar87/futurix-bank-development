package com.futurix.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.emailSender.EmailSenderService;
import com.futurix.entities.TblAccount;
import com.futurix.entities.TblCustomer;
import com.futurix.entities.TblTransaction;
import com.futurix.exception.InsufficientAmountException;
import com.futurix.exception.NotFoundException;
import com.futurix.repositories.AccountRepo;
import com.futurix.repositories.CustomerRepo;

import jakarta.mail.MessagingException;

@Service
public class AccountService {
	@Autowired
	private AccountRepo accountRepo;
	@Autowired
	private CustomerRepo customerRepo;

	@Autowired
	private BankBalanceService bankBalanceService;

	@Autowired
	private EmailSenderService emailSender;

	@Autowired
	private TransactionService transactionService;

	// Create Account
	public TblAccount createAccount(String account_type, int id) throws MessagingException {

		TblAccount account = new TblAccount();

		account.setAccountType(account_type);
		Random rand = new Random();
		String accountNumber = "100";
		for (int i = 0; i < 8; i++) {
			int n = rand.nextInt(10) + 0;
			accountNumber += Integer.toString(n);
		}

		account.setDateofopening(LocalDate.now());
		account.setLastactivitydate(LocalDate.now());
		account.setAccountnumber(Long.parseLong(accountNumber));

		TblCustomer foundCustomer = customerRepo.findById(id).orElse(null);
		if (foundCustomer == null)
			throw new NotFoundException("Account not found with " + id);

		account.setBalance((double) 0);
		Boolean active = foundCustomer.getActive();
		if (active) {
			account.setStatus(true);
		} else {
			account.setStatus(false);
		}
		// Sending Mail to Customer that they are registered successfully ...
		System.out.println("Email Start");
		String imagePathString = "C:\\Users\\DELL\\OneDrive\\Desktop\\TYProject\\futurix-bank-development\\Futurix-Bank-Backend\\documents\\goku.webp";
		emailSender.sendMailWithAttachment(foundCustomer.getEmail(), 
				"Account open process is completed", "Welcome", imagePathString
				);
		System.out.println("Email End");
		foundCustomer.setAccount(account);
//		customerRepo.save(foundCustomer);

		account.setCustomer(foundCustomer);
		return accountRepo.save(account);

	}

	// Select all Account
	public List<TblAccount> retreiveAllAccount() {
		return accountRepo.findAll();
	}

	// Select one account
	public TblAccount findAccount(int id) {

		TblCustomer foundCustomer = customerRepo.findById(id).orElse(null);

		if (foundCustomer == null)
			throw new NotFoundException("Account not found with " + id);

		TblAccount foundAccount = foundCustomer.getAccount();

		return foundAccount;
	}

	// Delete Account
	
	public String deleteAccountByAccountId(int id) {
		accountRepo.deleteById(id);
		return "Account Deletion success";
	}
	
	public String deleteAccount(int id) {
		TblCustomer foundCustomer = customerRepo.findById(id).orElse(null);
		if (foundCustomer == null) {
			throw new RuntimeException("Customer not found with this id" + id);
		}
		TblAccount foundAccount = foundCustomer.getAccount();
		System.out.println(foundAccount.getStatus());
//		accountRepo.deleteById(foundAccount.getId());
		return deleteAccountByAccountId(foundAccount.getId());
	}

	// Update Account
	public void updateAccount(int id, TblAccount account) {
		TblCustomer foundCustomer = customerRepo.findById(id).get();
		TblAccount foundAccount = foundCustomer.getAccount();
		foundAccount = account;
		accountRepo.save(foundAccount);
	}

	// Deposit in Account
	public void depositInAccount(int accId, int amount, String desc) {
		TblAccount tblAccount = accountRepo.findById(accId).get();
		 TblCustomer foundCustomer = tblAccount.getCustomer();

		 String mailMessage = """
		 		<h1>Rs. %s Depositted To Your Account Successfully</h1>
		 		""".formatted(tblAccount.getAccountnumber());
		 emailSender.sendSimpleEmail(foundCustomer.getEmail(), "Money Deposit",
		 mailMessage);

		Double balance = tblAccount.getBalance();
		tblAccount.setBalance(balance + amount);

		TblTransaction transaction = transactionService.addTransaction(tblAccount, "Deposit", desc, amount, 0);

		bankBalanceService.addBankBalance(amount, transaction);

		accountRepo.save(tblAccount);
	}

	// Withdraw from Account
	public void withdrawFromAccount(int accId, int amount, String desc) {
		
		TblAccount tblAccount = accountRepo.findById(accId).get();

		TblCustomer foundCustomer = tblAccount.getCustomer();
		 String mailMessage = """
		 		<h1>Rs. %s Withdrawn From Your Account Successfully</h1>
		 		""".formatted(tblAccount.getAccountnumber());
		 emailSender.sendSimpleEmail(foundCustomer.getEmail(), "Money Withdrawl", mailMessage);

		Double balance = tblAccount.getBalance();

		if (amount > balance) {
			throw new InsufficientAmountException("Sorry not enough balance....!");
		} else {
			tblAccount.setBalance(balance - amount);
			TblTransaction transaction = transactionService.addTransaction(tblAccount, "Withdraw", desc, amount, 0);
			bankBalanceService.substractBankBalance(amount, transaction);
		}

	}

	// Transfer from one account to another account
	public void transferFromOneAccountToAnother(int accId, int amount, long accountNumber, String desc) {

		TblAccount senderAccount = accountRepo.findById(accId).get();

		TblAccount recieverAccount;

		Double balance = senderAccount.getBalance();

		if (amount > balance) {
			throw new InsufficientAmountException("Sorry not enough balance....!");
		} else {
			senderAccount.setBalance(balance - amount);
			recieverAccount = accountRepo.findByAccountnumber(accountNumber);
			transactionService.addTransaction(senderAccount, "Money Send", desc, amount,
					recieverAccount.getAccountnumber());
			balance = recieverAccount.getBalance() + amount;
			
			recieverAccount.setBalance(balance);

			transactionService.addTransaction(recieverAccount, "Money Recieve", desc, amount,
					senderAccount.getAccountnumber());

			accountRepo.save(recieverAccount);
		}
	}

}
