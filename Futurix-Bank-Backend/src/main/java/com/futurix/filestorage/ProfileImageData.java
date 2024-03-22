package com.futurix.filestorage;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.futurix.entities.TblCustomer;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Image_Data")
public class ProfileImageData {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private String type;
	private String filePath;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JsonIgnore
	private TblCustomer customer;
	
	public ProfileImageData() {
	}

	public ProfileImageData(int id, String name, String type, String filePath) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.filePath = filePath;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getFilePath() {
		return filePath;
	}
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	public TblCustomer getCustomer() {
		return customer;
	}

	public void setCustomer(TblCustomer customer) {
		this.customer = customer;
	}

	@Override
	public String toString() {
		return "FileData [id=" + id + ", name=" + name + ", type=" + type + ", filePath=" + filePath + "]";
	}
	
	
}

