package com.alchemy.patient.controller;

import java.util.List;

import com.alchemy.patient.model.Category;
import com.alchemy.patient.service.CategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class categoryController{
	@Autowired
	private CategoryService categoryService;
	
	@PostMapping("/save")
	public ResponseEntity saveCategory(@RequestBody Category category) 
	{
		System.out.println();
		Category newCategory = categoryService.saveCategory(category);	
		if(newCategory==null)
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);		
		else
			return ResponseEntity.ok(newCategory);
	}

/* 	@PostMapping("/save")
	public ResponseEntity savePatient(@RequestBody Patient patient) 
	{
		System.out.println(patient);
		Patient newPatient = patientService.savePatient(patient);	
		if(newPatient==null)
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);		
		else
			return ResponseEntity.ok(newPatient);
	} */
	@GetMapping("/load")
	public ResponseEntity loadCategory() 
	{
		List<Category> list =  categoryService.loadCategory();
		return ResponseEntity.ok(list);
	}
}