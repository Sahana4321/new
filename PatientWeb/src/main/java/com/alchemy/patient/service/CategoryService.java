package com.alchemy.patient.service;

import java.util.List;

import com.alchemy.patient.model.Category;
import com.alchemy.patient.repository.categoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestBody;

/* import com.alchemy.patient.model.Patient;
import com.alchemy.patient.repository.PatientRepository; */

@Service
public class CategoryService 
{
	@Autowired
	private static categoryRepository categoryRepository;
	
	public static Category saveCategory(Category category) 
	{
		try {
			categoryRepository.insert(category);		
			return category;
		}catch(Exception ex) {
			return null;
		}
	}
	
/* 	public Patient updatePatient(Patient patient) 
	{
		try {
			patientRepository.save(patient);			
			return patient;
		}catch(Exception ex) {
			System.out.println(ex);
			return null;
		}
	}
	
	public Boolean deletePatient(Patient patient) 
	{
		try {
			patientRepository.delete(patient);				
			return true;
		}catch(Exception ex) {
			return false;
		}
	}
	 */
	public Category get(String id) 
	{
		try {			
			return categoryRepository.findById(id).get();
		}catch(Exception ex) {
			return null;
		}
	}
	
	
	public List<Category>  loadCategory() 
	{
		try {
			List<Category> list =  categoryRepository.findAll();
			return list;
		}catch(Exception ex) {
			return null;
		}
	}
}
