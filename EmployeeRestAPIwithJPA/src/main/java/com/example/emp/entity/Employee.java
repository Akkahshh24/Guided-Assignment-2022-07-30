package com.example.emp.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="employee")
public class Employee {
	
	@Id		// primary key
	@GeneratedValue(strategy=GenerationType.IDENTITY)	// auto_increment
	@Column(name="empno")
	private Integer empno;
	
	@Column(name="empname")
	private String empname;
	
	@Column(name="job")
	private String job;
	
	@Column(name="hiredate")
	private Date hiredate;
	
	@Column(name="managerid")
	private Integer managerid;
	
	@Column(name="salary")
	private Integer salary;
	
	@Column(name="commission")
	private Integer commission;
	
	@Column(name="deptno")
	private Integer deptno;

	public Employee() {
		// default constructor
	}
	
	public Employee(Integer empno, String empname, String job, Date hiredate, Integer managerid, Integer salary,
			Integer commission, Integer deptno) {
		this.empno = empno;
		this.empname = empname;
		this.job = job;
		this.hiredate = hiredate;
		this.managerid = managerid;
		this.salary = salary;
		this.commission = commission;
		this.deptno = deptno;
	}

	public Integer getEmpno() {
		return empno;
	}

	public void setEmpno(Integer empno) {
		this.empno = empno;
	}

	public String getEmpname() {
		return empname;
	}

	public void setEmpname(String empname) {
		this.empname = empname;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public Date getHiredate() {
		return hiredate;
	}

	public void setHiredate(Date hiredate) {
		this.hiredate = hiredate;
	}

	public Integer getManagerid() {
		return managerid;
	}

	public void setManagerid(Integer managerid) {
		this.managerid = managerid;
	}

	public Integer getSalary() {
		return salary;
	}

	public void setSalary(Integer salary) {
		this.salary = salary;
	}

	public Integer getCommission() {
		return commission;
	}

	public void setCommission(Integer commission) {
		this.commission = commission;
	}

	public Integer getDeptno() {
		return deptno;
	}

	public void setDeptno(Integer deptno) {
		this.deptno = deptno;
	}
	
}
