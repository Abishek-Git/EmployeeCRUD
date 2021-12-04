import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CertificationComponent } from './certification/certification.component';
import { ContactComponent } from './contact/contact.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeecreateComponent } from './employeecreate/employeecreate.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeenamesComponent } from './employeenames/employeenames.component';
import { HomeComponent } from './home/home.component';
import { MaperComponent } from './maper/maper.component';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';
import { ServicesComponent } from './services/services.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  { path: 'home', pathMatch: 'full', redirectTo: 'path' },
  {path : 'home' , component : HomeComponent },
  {path : 'aboutus' , component :   AboutusComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'services' , component : ServicesComponent},
  {path : 'mapper' , component : MaperComponent},

  
    {
      path: 'services/:id', 
      component: ServicedetailsComponent,
      children: [
        { path: 'training', component: TrainingComponent },
        { path: 'certification', component: CertificationComponent }
      ]
    },

    {path : 'employeelist' , component : EmployeelistComponent},
    {path : 'employeenames' , component : EmployeenamesComponent},
    {path : 'employeecreate' , component : EmployeecreateComponent},

    {path : 'editemployee/:eid' , component : EditemployeeComponent},

    



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
