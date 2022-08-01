import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private empUrl = "http://localhost:8080/api/emp"; 

  constructor(private httpClient:HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    return this.httpClient.get<GetEmployeeResponse>(this.empUrl).pipe(map(response => response._embedded.employees));
  }

  saveEmployee(emp:Employee):Observable<Employee>{
    console.log(emp)

    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.post<Employee>(this.empUrl, emp, httpOptions);
  }

  getEmployeeById(id:number):Observable<Employee>{
    const empURL = this.empUrl + "/" + id;
    return this.httpClient.get<Employee>(empURL);
  }

  updateEmployee(emp:Employee):Observable<Employee>{
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.put<Employee>(this.empUrl + `/${emp.empno}`, emp, httpOptions);
  }

  deleteEmployee(id:number):Observable<Employee>{
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.delete<Employee>(this.empUrl + `/${id}`,httpOptions);
  }
}

interface GetEmployeeResponse{
  _embedded:{
    employees:Employee[];
  }
}
