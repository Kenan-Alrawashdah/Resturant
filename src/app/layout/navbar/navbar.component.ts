import { AuthService } from './../../authentication/auth.service';
import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  autherized = false;
  scrolled = false;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => this.autherized = !!user);
  }


  @HostListener("window:scroll", []) onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 10) {
      this.scrolled = true
    }else {
      this.scrolled = false
    }
  }

  logout() {
    this.authService.logout()
  }

}
