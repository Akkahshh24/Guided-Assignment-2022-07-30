import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/common/department';
import { Employee } from 'src/app/common/employee';
import { DeptService } from 'src/app/services/dept.service';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  departments:Department[];
  emp:Employee = new Employee();
  editable:boolean = false;

  constructor(
    private empService:EmpService,
    private deptService:DeptService,
    private route:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.getEmployeeById();
      this.getAllDepartments();
    });
  }

  getAllDepartments(){
    this.deptService.getAllDepartments().subscribe(
      data => {
        this.departments = data;
      }
    )
  }

  getEmployeeById() {
    const id = +this.activatedRoute.snapshot.paramMap.get("id");
    if(id > 0){
      this.editable = true;
      this.empService.getEmployeeById(id).subscribe(data => {this.emp = data});
    }
  }

  addEmployee(){
    if(this.editable){
      this.empService.updateEmployee(this.emp).subscribe(data => {
        console.log(data)
        this.route.navigateByUrl("/empList");
      })
    }
    else{
    this.empService.saveEmployee(this.emp).subscribe(data => {
      console.log(data);
      this.route.navigateByUrl("/empList");
    });
    }
  }

}
