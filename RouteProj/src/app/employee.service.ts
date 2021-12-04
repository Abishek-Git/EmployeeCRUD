import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from './IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private restUrl: string ='http://localhost:8080/springmvc/employee';
    constructor(private http : HttpClient) { }  

  getEmployeeFromService():Observable<IEmployee[]>{    
    return this.http.get<IEmployee[]>(this.restUrl+ "/allemp")
  }

    httpOptions = {
      headers : new HttpHeaders({
        'content-Type' : 'application/json'
      })
    }
    
  createEmployee(employee:any):Observable<IEmployee>{
    return this.http.post<IEmployee>(this.restUrl+"/createemp", JSON.stringify(employee),this.httpOptions );
  }

  deleteEmployee(eid:any){
    return this.http.delete<IEmployee>(this.restUrl+"/deleteemp/"+eid);
  }

  getEmployeeById(eid: any):Observable<IEmployee>{
    return this.http.get<IEmployee>(this.restUrl + '/getempbyid/'+ eid, this.httpOptions)
  }

  updateEmployee(employee: any): Observable<IEmployee>{
    return this.http.put<IEmployee>(this.restUrl + '/updateemp/',JSON.stringify(employee), this.httpOptions)
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Codeeee : ${error.status} \n Error Messageeee : ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
