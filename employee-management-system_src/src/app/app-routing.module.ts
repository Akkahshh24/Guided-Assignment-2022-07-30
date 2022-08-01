import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeptComponent } from './components/add-dept/add-dept.component';
import { AddEmpComponent } from './components/add-emp/add-emp.component';
import { DeptListComponent } from './components/dept-list/dept-list.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'empList', component:EmpListComponent},
  {path:'deptList', component:DeptListComponent},
  {path:'addEmp', component:AddEmpComponent},
  {path:'addDept', component:AddDeptComponent},
  {path:'editEmp/:id', component:AddEmpComponent},
  {path:'editDept/:id', component:AddDeptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
