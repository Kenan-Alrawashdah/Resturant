import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Admin } from './../core/interfaces/admin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser$ = new BehaviorSubject<any>(null);

  private adminUrl = '/api/admins/';
  constructor(private http : HttpClient, private router: Router) { }


  get currentUser() {
    return this.currentUser$.asObservable();
  }

  login(email : string , password : string): Observable<boolean> {
    return this.http.get<Admin[]>(this.adminUrl)
       .pipe(
        map(resturants => {
          const admin =  resturants.filter(admin => admin.email === email && admin.password === password)[0];
          this.currentUser$.next(admin);
          return admin? true : false;
        })
      )
  }

  logout() {
    this.currentUser$.next(null);
    this.router.navigate(['/home']);
  }
}
