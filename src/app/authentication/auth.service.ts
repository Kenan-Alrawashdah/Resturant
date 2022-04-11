import { Admin } from './../core/interfaces/admin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private adminUrl = '/api/admins/';
  constructor(private http : HttpClient) { }

  login(email : string , password : string): Observable<Admin> {
    return this.http.get<Admin[]>(this.adminUrl)
       .pipe(
        map(resturants => {
          return resturants.filter(admin => admin.email === email && admin.password === password)[0];
        })
      )
  }
}
