import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {filter, map, Observable} from "rxjs";
import {Category} from "../../core/interfaces/category";
import {Item} from "../../core/interfaces/item";

@Injectable({
  providedIn: 'root'
})
export class ResturantService {

  selectedCategoryId =  ''
  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('api/categorys/');
  }


  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('api/items');
  }

}
