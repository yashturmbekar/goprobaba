import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-six',
  templateUrl: './home-six.component.html',
  styleUrls: ['./home-six.component.scss']
})
export class HomeSixComponent implements OnInit {

  constructor(private router: Router) { }
  currentYear: number = new Date(). getFullYear();
  ngOnInit() {
  }

  openLetterClick(){
    this.router.navigate(['services-details']);
  }

  gotoBlogPage(id) {
    this.router.navigate(['works-details']);
    console.log(id);
    let element = document.getElementById(id);
    element.scrollIntoView();
  }

}
