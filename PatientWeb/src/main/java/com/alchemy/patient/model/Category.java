package com.alchemy.patient.model;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
@AllArgsConstructor
public class Category 
{
	@Id
	private String categoryId;
	private String categoryName;
	
	public String getcategoryId() {
		return categoryId;
	}




	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}




	public String getCategoryName() {
		return categoryName;
	}




	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}






	@Override
	public String toString() {
		return "Category [categoryId=" + categoryId + ", categoryName=" + categoryName + "]";
	}
	
	
}
