import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  public employees: any = [];
  constructor(private sanitizer: DomSanitizer, private eservice:EmployeeService, private route : Router,private cd : ChangeDetectorRef) { }
  public image : any;
  

  ngOnInit(): void {
    this.eservice.getEmployeeFromService().subscribe(data =>{ 
      this.employees = data;
      let imageBinary : string = data[0].EPicture; //image binary data response from api
      let imageBase64String= btoa(imageBinary);
      this.image = 'data:image/jpeg;base64,' + imageBase64String;
      console.log(this.image);
      
    });
  }
   
 
  
  delete(emp: any){
    if (window.confirm('Are your sure, you want to delete?')){
    this.eservice.deleteEmployee(emp.eid).subscribe(data=> {
      
      this.route.navigate(['employeelist'])
    });
    
  }
}


search(eids:any){
  this.eservice.getEmployeeById(eids).subscribe(data=> this.employees = data);
}

}
