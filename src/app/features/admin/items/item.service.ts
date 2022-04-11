import { filter, map } from 'rxjs';
import { Item } from 'src/app/core/interfaces/item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generateUUID } from 'src/app/core/utils/generateUUID';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUrl = '/api/items/';
  private imageUrl = '/api/image/';
  constructor(private http : HttpClient) { }

  getItem(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemUrl);
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete(this.itemUrl + id);
  }


  createItem(item: Item): Observable<Item> {
    item.id = generateUUID();
    return this.http.post<Item>(this.itemUrl, item);
  }

  editItem(event: Item): Observable<Item> {
    return this.http.put<Item>(this.itemUrl + event.id, event)
  }
}
