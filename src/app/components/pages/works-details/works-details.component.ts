import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-works-details',
  templateUrl: './works-details.component.html',
  styleUrls: ['./works-details.component.scss']
})
export class WorksDetailsComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }
  
  currentYear: number = new Date(). getFullYear();

  ngOnInit(): void {
  }
  buttonBack(){
    this.location.back();
    this.router.navigate(['']);
  }

}
