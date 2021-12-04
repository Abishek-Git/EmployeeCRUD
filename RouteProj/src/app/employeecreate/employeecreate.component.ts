import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeecreate',
  templateUrl: './employeecreate.component.html',
  styleUrls: ['./employeecreate.component.css']
})
export class EmployeecreateComponent implements OnInit {

  constructor(public eservice: EmployeeService, private route:Router) { }
  @Input()
  employee = {
    ename : "",
    email : "",
    password : "",
    gender : "",
   
  }
  EPicture : any;
  ngOnInit(): void {
  }

  createEmployee(){
    this.eservice.createEmployee(this.employee).subscribe(data=> this.route.navigate(['/employeelist'])  )
  }

  filer : any;
   fileByteArray :any = [];

  onChange(event: any) {

      var reader = new FileReader();
      this.filer = event.target.files[0]
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event : any) => { // called once readAsDataURL is completed
        this.EPicture = event.target.result;
      }
 }

 

}
