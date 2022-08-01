import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Department } from '../common/department';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  private deptUrl = "http://localhost:8080/api/dept";

  constructor(private httpClient:HttpClient) { }

  getAllDepartments():Observable<Department[]>{
    return this.httpClient.get<GetDepartmentResponse>(this.deptUrl).pipe(map(response => response._embedded.departments));
  }

  saveDepartment(dept:Department):Observable<Department>{
    console.log(dept)

    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.post<Department>(this.deptUrl, dept, httpOptions);
  }

  getDepartmentById(id:number):Observable<Department>{
    const deptURL = this.deptUrl + "/" + id;
    return this.httpClient.get<Department>(deptURL);
  }

  updateDepartment(dept:Department):Observable<Department>{
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.put<Department>(this.deptUrl + `/${dept.deptno}`,dept, httpOptions);
  }

  deleteDepartment(id:number):Observable<Department>{
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.delete<Department>(this.deptUrl + `/${id}`,httpOptions);
  }
}

interface GetDepartmentResponse{
  _embedded:{
    departments:Department[];
  }
}