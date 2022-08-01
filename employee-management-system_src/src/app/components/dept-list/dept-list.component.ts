import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/common/department';
import { DeptService } from 'src/app/services/dept.service';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  departments:Department[];

  constructor(
    private deptService:DeptService,
    private route:Router,
    private activedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(() => {
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

  updateDepartment(id:number){
    this.route.navigateByUrl("/editDept/" + id)
  }

  deleteDepartment(id:number){
    if(confirm("Are you sure you want to delete this item?")){
      this.deptService.deleteDepartment(id).subscribe(data => {console.log('deleted')
      this.getAllDepartments();
    });
    }
  }

}
