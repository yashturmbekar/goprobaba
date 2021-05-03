import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import {WorksDetailsComponent} from 'src/app/components/pages/works-details/works-details.component'

@Component({
  selector: 'app-home-six',
  templateUrl: './home-six.component.html',
  styleUrls: ['./home-six.component.scss']
})
export class HomeSixComponent implements OnInit {

  constructor(private router: Router, @Inject(DOCUMENT) document) { }
  currentYear: number = new Date(). getFullYear();
  ngOnInit() {
  }

  openLetterClick(){
    this.router.navigate(['services-details']);
  }

  gotoBlogPage(id) {
    console.log(id);
    this.router.navigate(['works-details']);
    console.log(id);
    let element = document.getElementById(id);
    console.log(id);
    element.scrollIntoView();
  }

  gotoBlogPage1() {
    this.router.navigate(['works-details']);
  }
}
