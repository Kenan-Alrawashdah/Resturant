import { Resturant } from './interfaces/resturant';
import { generateUUID } from 'src/app/core/utils/generateUUID';
import { Injectable } from '@angular/core';
import { Category } from './interfaces/category';
import { Item } from './interfaces/item';
import { Admin } from './interfaces/admin';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService  {

  constructor() { }

  createDb() {

    const resturant: Resturant[] = [
      {
        id : '1',
        name:"Resturant Name",
        text: 'some text',
        image : "assets/image.jpg"
      }
    ];

    const admins: Admin[] =[
      {
        id: '1',
        firstName:"Resturant",
        lastName: 'Hasan',
        email: 'admin@gmail.com',
        password:'12345',
        resurantId: resturant[0].id
      }
    ];

     const categorys : Category[] = [
       {id :'1', name:'categoryName1',description : 'this is  description to category1'},
       {id :'2', name:'categoryName2',description : 'this is  description to category2'},
       {id :'3', name:'categoryName3',description : 'this is  description to category3'},
     ];
     const items : Item[] = [
       {id:'1', name:'itemName1', price:50, description:'this is description to item1',
        image:'assets/food1.png', categoryId:categorys[0].id},
       {id:'2', name:'itemName2', price:40, description:'this is description to item2',
        image:'assets/food2.jpeg', categoryId:categorys[0].id},
       {id:'3', name:'itemName3', price:20, description:'this is description to item3',
        image:'assets/food3.png', categoryId:categorys[0].id},

        {id:'4', name:'itemName1', price:50, description:'this is description to item1',
        image:'assets/food4.jpg', categoryId:categorys[1].id},
       {id:'5', name:'itemName2', price:40, description:'this is description to item2',
        image:'assets/food5.jpeg', categoryId:categorys[1].id},
       {id:'6', name:'itemName3', price:20, description:'this is description to item3',
        image:'assets/food6.jpg', categoryId:categorys[1].id},

        {id:'7', name:'itemName1', price:50, description:'this is description to item1',
        image:'assets/food7.jpg', categoryId:categorys[2].id},
       {id:'8', name:'itemName2', price:40, description:'this is description to item2',
        image:'assets/image.jpg', categoryId:categorys[2].id},
       {id:'9', name:'itemName3', price:20, description:'this is description to item3',
        image:'assets/food8.jpeg', categoryId:categorys[2].id},
     ]

      return {categorys, items , resturant, admins };
  }


}
