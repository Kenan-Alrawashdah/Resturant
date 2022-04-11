import { generateUUID } from 'src/app/core/utils/generateUUID';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Category } from 'src/app/core/interfaces/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categorysUrl = 'api/categorys/';
  constructor(private http: HttpClient) { }

  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categorysUrl);
  }

  createCategory(category: Category): Observable<Category> {
    category.id = generateUUID();
    return this.http.post<Category>(this.categorysUrl, category);
  }

  editCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(this.categorysUrl + category.id, category);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(this.categorysUrl + id);
  }
}
