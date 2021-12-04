import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RouteProj';

  searchId :any ;
constructor(private route : Router){

}
  search(){
    
  }

  toMap(){
    this.route.navigate(['mapper'])
  }


}
