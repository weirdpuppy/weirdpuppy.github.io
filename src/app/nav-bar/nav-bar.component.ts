import { Component, OnInit } from '@angular/core';

interface Page {
  title: string,
  route: string,
  available: boolean
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  pages: Page [];
  resetPages: Page [];

  constructor() { 
    this.pages = [
      {
        title: "DESIGN",
        route: "/design",
        available: false
      },
      {
        title: "ILUSTRATION",
        route: "/illustration",
        available: false
      },
      {
        title: "PHOTOGRAPHY",
        route: "/photography",
        available: false
      },
      {
        title: "ARTWORK",
        route: "/artwork",
        available: false
      },
      {
        title: "POETRY",
        route: "/poetry",
        available: false
      }
    ];
    //creates copy of original array for resetting purposes later
    this.resetPages = JSON.parse(JSON.stringify(this.pages));
  }

  ngOnInit() {
  }

  //changes page to coming soon on hover
  comingSoon(page) {
    let ele = document.getElementById(page.title);
    ele.innerHTML = "COMING SOON";
  }

  //resets pages to original configuration
  reset() {
    this.pages = JSON.parse(JSON.stringify(this.resetPages));
  }
}
