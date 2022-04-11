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
  valid = false;
  constructor( private authService : AuthService) { }

  ngOnInit(): void {
    this.formLogin= new FormGroup({
     email: new FormControl('', [Validators.required, Validators.email]),
     password: new FormControl('', [Validators.required])
   });
 }

 get f() {
  return this.formLogin.controls;
}
 submit(){
   this.authService.login(this.formLogin.value['email'],this.formLogin.value['password']).subscribe(res =>{
        if(res != undefined){
          console.log('kenan');
        }
   })
 }
}
