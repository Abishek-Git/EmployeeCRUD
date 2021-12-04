import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public services = [
    {id:1 , name: 'Training'},
    {id:2 , name: 'Certification'},
  ]
  constructor(public router : Router) { }

  onClick(service:any){
    this.router.navigate(['/services/' , service.id])
  }

  ngOnInit(): void {
  }

}
