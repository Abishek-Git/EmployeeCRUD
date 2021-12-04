import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-maper',
  templateUrl: './maper.component.html',
  styleUrls: ['./maper.component.css'],
})
export class MaperComponent implements OnInit {
  employee: any = {};
  lat = 51.678418;
  lng = 7.809007;
  locationchosen = false;
  constructor(private eservice: EmployeeService) {}

  ngOnInit(): void {  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      
      navigator.geolocation.getCurrentPosition(position=>{
        const coords = position.coords;
        const latLong = [coords.latitude, coords.longitude];
        this.lat = latLong[0]
        this.lng = latLong[1]
      }, this.error, {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
      });

    }
  }
  error(err : any) {
  }
  
addMarker(latitude: number, longitude: number) {
    console.log(`latitude: ${latitude}, longitude: ${longitude}`);
    this.lat = latitude;
    this.lng = longitude;
  }








  

}
