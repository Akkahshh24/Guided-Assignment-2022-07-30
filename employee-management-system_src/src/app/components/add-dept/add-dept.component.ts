import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/common/department';
import { DeptService } from 'src/app/services/dept.service';

@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.css']
})
export class AddDeptComponent implements OnInit {

  dept:Department = new Department();
  editable:boolean = false;

  constructor(
    private deptService:DeptService,
    private route:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {this.getDepartmentById()});
  }

  getDepartmentById() {
    const id = +this.activatedRoute.snapshot.paramMap.get("id");
    if(id > 0){
      this.editable = true;
      this.deptService.getDepartmentById(id).subscribe(data => {this.dept = data});
    }
  }

  addDepartment(){
    if(this.editable){
      this.deptService.updateDepartment(this.dept).subscribe(data => {
        console.log(data)
        this.route.navigateByUrl("/deptList");
      })
    }
    else{
    this.deptService.saveDepartment(this.dept).subscribe(data => {
      console.log(data);
      this.route.navigateByUrl("/deptList");
    });
    }
  }

}
