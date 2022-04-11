import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Resturant} from "../../../core/interfaces/resturant";


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {
  }

  getResturant(id: string): Observable<Resturant>{
    return this.http.get<Resturant>('api/resturant/'+id);
  }

  update(resturant: Resturant): Observable<any>{
    console.log(resturant)
    return this.http.put<Resturant>('api/resturant/' + resturant.id, resturant)
  }
}
