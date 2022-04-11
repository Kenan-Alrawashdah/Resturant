import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin! : FormGroup;
  invalid = false;
  progress: boolean = false;

  constructor(
    private authService : AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formLogin= new FormGroup({
     email: new FormControl('', [Validators.required, Validators.email]),
     password: new FormControl('', [Validators.required])
   });
 }

 get formControls() {
  return this.formLogin.controls;
}
 submit(){
   this.progress = true;
   this.authService.login(this.formLogin.value.email,this.formLogin.value.password).subscribe(isLoggedIn =>{
      if(isLoggedIn){
        this.router.navigate(['/admin/profile']);
      } else {
        this.invalid = true;
      }
      this.progress = false;
   })
 }
}
