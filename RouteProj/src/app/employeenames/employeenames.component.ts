import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeenames',
  templateUrl: './employeenames.component.html',
  styleUrls: ['./employeenames.component.css']
})
export class EmployeenamesComponent implements OnInit {
  public employees: any = [];
  constructor(private eservice : EmployeeService) { }

  ngOnInit(): void {
    this.eservice.getEmployeeFromService()
    .subscribe(data => this.employees = data)
  }

}
