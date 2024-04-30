package com.futurix.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futurix.entities.TblAdmin;
import com.futurix.exception.NotFoundException;
import com.futurix.repositories.AdminRepo;

@Service
public class AdminService {
	@Autowired
	private AdminRepo adminRepo;
	
	public void createAdmin(TblAdmin admin) {
		adminRepo.save(admin);
	}
	
	public TblAdmin getAdminById(int id) {
		return adminRepo.findById(id).get();
	}
	
	public List<TblAdmin> getAllAdmins() {
		return adminRepo.findAll();
	}
	
	public TblAdmin getAdminByEmail(String email) {
		
		TblAdmin foundAdmin = adminRepo.findByAdminEmail(email).orElse(null);
		if(foundAdmin == null) {
			throw new NotFoundException("Sorry Admin not found with this email... "+email);
		}
		return foundAdmin;
	}
	
	public void updateAdmin(int id, TblAdmin admin) {
		
		TblAdmin foundAdmin = adminRepo.findById(id).get();
		foundAdmin = admin;
		adminRepo.save(foundAdmin);
	}
	
	public void deleteAdmin(int id) {
		adminRepo.deleteById(id);
	}
}
