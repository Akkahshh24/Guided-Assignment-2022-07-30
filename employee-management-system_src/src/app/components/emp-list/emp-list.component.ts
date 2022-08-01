import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/common/employee';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees:Employee[];

  constructor(
    private empService:EmpService,
    private route:Router,
    private activedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(() => {
      this.getAllEmployees()
    });
  }

  getAllEmployees(){
    this.empService.getAllEmployees().subscribe(
      data => {
        this.employees = data;
      }
    );
  }

  updateEmployee(id:number){
    this.route.navigateByUrl("/editEmp/" + id)
  }

  deleteEmployee(id:number){
    if(confirm("Are you sure you want to delete this item?")){
      this.empService.deleteEmployee(id).subscribe(data => {console.log('deleted')
      this.getAllEmployees();
    });
    }
  }

}
