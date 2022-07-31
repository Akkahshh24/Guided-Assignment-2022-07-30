package com.example.emp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="department")
public class Department {
	
	@Id		// primary key
	@Column(name="deptno")
	private Integer deptno;
	
	@Column(name="deptname")
	private String deptname;
	
	@Column(name="location")
	private String location;
	
	public Department() {
		//default constructor
	}

	public Department(Integer deptno, String deptname, String location) {
		this.deptno = deptno;
		this.deptname = deptname;
		this.location = location;
	}

	public Integer getDeptno() {
		return deptno;
	}

	public void setDeptno(Integer deptno) {
		this.deptno = deptno;
	}

	public String getDeptname() {
		return deptname;
	}

	public void setDeptname(String deptname) {
		this.deptname = deptname;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	
}
