package com.futurix.restControllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.futurix.entities.TblAdmin;
import com.futurix.entities.TblBankBalance;
import com.futurix.entities.TblTransaction;
import com.futurix.repositories.BankBalanceRepo;
import com.futurix.repositories.TransactionRepo;
import com.futurix.services.AdminService;

@RestController
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	@Autowired
	private BankBalanceRepo bankBalanceRepo;
	
	@Autowired
	private TransactionRepo transactionRepo;
	
	@GetMapping("/admin/{adminId}")
	public TblAdmin getOneAdmin(@PathVariable int adminId) {
		return adminService.getAdminById(adminId);
	}
	
	@GetMapping("/admin")
	public List<TblAdmin> getAllAdmins() {
		return adminService.getAllAdmins();
	}
	
	@GetMapping("/admin/balance")
	public TblBankBalance getBankBalance() {
		List<TblBankBalance> bankBalances = bankBalanceRepo.findAll();
		return bankBalances.get(bankBalances.size() - 1);
	}
	
	@GetMapping("/admin/transactions")
	public List<TblTransaction> getAllTrasactions() {
		return transactionRepo.findAll();
	}
	
	@PostMapping("/admin")
	public ResponseEntity<TblAdmin> addAdmin(@RequestBody TblAdmin admin) {
		adminService.createAdmin(admin);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(admin.getId())
				.toUri();
		return ResponseEntity.created(location ).build();
	}
	
	@PutMapping("/admin/{adminId}")
	public ResponseEntity<TblAdmin> updateAdmin(@PathVariable int adminId, @RequestBody TblAdmin admin)
	{
		adminService.updateAdmin(adminId, admin);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(admin.getId())
				.toUri();
		return ResponseEntity.created(location ).build();
	}
	
	@DeleteMapping("/admin/{adminId}") 
	public ResponseEntity<Void> deleteAdmin(@PathVariable int adminId) {
		adminService.deleteAdmin(adminId);
		return ResponseEntity.noContent().build();
	}
}
