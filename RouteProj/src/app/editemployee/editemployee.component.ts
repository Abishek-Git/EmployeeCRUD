import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  employeedata : IEmployee= {
    eid: 0,
    ename: '',
    email: '',
    password: '',
    gender: '',
    filename: '',
    EPicture: []
  };


  // employeedata : any = {} will work
  eid : any = this.aroute.snapshot.params['eid'];
  constructor(private route : Router, private eservice :EmployeeService, private aroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.eservice.getEmployeeById(this.eid).subscribe(data => this.employeedata = data)
    console.log(this.employeedata);
  }
  
  
  updateEmployee(){
    this.eservice.updateEmployee(this.employeedata).subscribe((data : {} )=> this.route.navigate(['/employeelist']));
  }

}
