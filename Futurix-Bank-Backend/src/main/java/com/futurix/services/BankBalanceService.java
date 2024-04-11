package com.futurix.services;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblBankBalance;
import com.futurix.entities.TblTransaction;
import com.futurix.repositories.BankBalanceRepo;

@Service
public class BankBalanceService {

	@Autowired
	private BankBalanceRepo bankBalanceRepo;

	public BigDecimal getLatestBankBalance() {
		List<TblBankBalance> bankBalances = bankBalanceRepo.findAll();
		TblBankBalance latestBalance = bankBalances.get(bankBalances.size() - 1);
		return latestBalance.getTotalBalance();
	}

	public String addBankBalance(int balance, TblTransaction transaction) {

		try {
			TblBankBalance newBalance = new TblBankBalance();
			BigDecimal newAmount = new BigDecimal(balance);
			BigDecimal latestBalance = getLatestBankBalance();
			newBalance.setTotalBalance(latestBalance.add(newAmount));
			newBalance.setTransaction(transaction);
			bankBalanceRepo.save(newBalance);
			return "Balance is stored successfully ...";
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new RuntimeException("Sorry some error has occured while updating the balance");
		}
	}

	public String substractBankBalance(int balance, TblTransaction transaction) {

		try {
			
			TblBankBalance newBalance = new TblBankBalance();
			
			BigDecimal newAmount = new BigDecimal(balance);
			
			BigDecimal latestBalance = getLatestBankBalance();
			
			if(latestBalance.compareTo(newAmount) < 0) {
				throw new RuntimeException("Sorry you can't withdraw this amount...");
			} else {
				
				newBalance.setTotalBalance(latestBalance.subtract(newAmount));
				
				newBalance.setTransaction(transaction);
				
				bankBalanceRepo.save(newBalance);
				
				return "Balance is stored successfully ...";
			}			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new RuntimeException("Sorry some error has occured while updating the balance");
		}
	}

}
