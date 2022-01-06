/* package com.alchemy.patient.repository;

import com.alchemy.patient.model.Category;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

//import com.alchemy.patient.model.Patient;

@Repository
public interface categoryRepository extends MongoRepository<Category, String>{

    void insert(java.util.Locale.Category category);

}
 */
package com.alchemy.patient.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.alchemy.patient.model.Category;
//import com.alchemy.patient.model.Patient;

@Repository
public interface categoryRepository extends MongoRepository<Category, String>{

}