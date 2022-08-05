CREATE DATABASE EmployeeManagement;
USE EmployeeManagement;

CREATE TABLE department (
	deptno INT PRIMARY KEY,
    deptname TEXT,
    location TEXT
);

CREATE TABLE employee (
	empno INT PRIMARY KEY AUTO_INCREMENT,
    empname TEXT,
    job TEXT,
    hiredate DATE,
    managerid INT,
    salary INT,
    commission INT,
    deptno INT,
    FOREIGN KEY (deptno) REFERENCES department(deptno)
);



DESC department;
DESC employee;

INSERT INTO 
	department
VALUES
	(1, "AIML", "Mumbai"),
    (2, "Blockchain", "Hyderabad"),
    (3, "DevOps", "Chennai");
    
INSERT INTO 
		employee
VALUES
	(101, "Dariya Budhani", "ML Engineer", "2022-04-01", 10, 25000, 5000, 1),
    (102, "Manish Sonkamble", "Blochchain Developer", "2022-06-01", 11, 26000, 3000, 2),
    (103, "Samar Chakradeo", "DevOps Engineer", "2022-03-01", 12, 27000, 4000, 3);
    
DROP TABLE employee;
DROP TABLE department; 

SELECT * FROM department;
SELECT * FROM employee;

ALTER TABLE employee AUTO_INCREMENT=104;

DELETE FROM employee WHERE deptno is NULL;