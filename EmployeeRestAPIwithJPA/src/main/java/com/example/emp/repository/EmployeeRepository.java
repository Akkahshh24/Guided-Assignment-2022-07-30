package com.example.emp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.emp.entity.Employee;

@RepositoryRestResource(path="emp")
@CrossOrigin("http://localhost:4200/")
public interface EmployeeRepository extends JpaRepository<Employee, Integer>{

}
