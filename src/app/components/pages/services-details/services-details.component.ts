import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss']
})
export class ServicesDetailsComponent implements OnInit {

  constructor( private router: Router, private location: Location) { }

  currentYear: number = new Date(). getFullYear();
  
  ngOnInit(): void {
  }
  
  buttonBack(){
     this.location.back();
     this.router.navigate(['']);   
  }

}
