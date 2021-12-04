import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';
import { TrainingComponent } from './training/training.component';
import { CertificationComponent } from './certification/certification.component';
import { EmployeenamesComponent } from './employeenames/employeenames.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeecreateComponent } from './employeecreate/employeecreate.component';
import { FormsModule } from '@angular/forms';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { MaperComponent } from './maper/maper.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    ServicesComponent,
    ServicedetailsComponent,
    TrainingComponent,
    CertificationComponent,
    EmployeenamesComponent,
    EmployeelistComponent,
    EmployeecreateComponent,
    EditemployeeComponent,
    MaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5hxPaX_6yYlTy_7tsQFVeqsGiCmoZwYU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
