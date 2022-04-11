import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() autherized = false;
  scrolled = false;
  constructor() { }

  ngOnInit(): void {
  }


  @HostListener("window:scroll", []) onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 10) {
      this.scrolled = true
    }else {
      this.scrolled = false
    }
  }

}
