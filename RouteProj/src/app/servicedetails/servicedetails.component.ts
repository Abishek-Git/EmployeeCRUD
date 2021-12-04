import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrls: ['./servicedetails.component.css']
})
export class ServicedetailsComponent implements OnInit {

  constructor(private router :Router, private aroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  serviceId : any;
  showTrainings(){
    this.router.navigate(['./training'], { relativeTo: this.aroute });

  }

  showCertifications(){
    this.router.navigate(['./certification'], { relativeTo: this.aroute });

  }

}
