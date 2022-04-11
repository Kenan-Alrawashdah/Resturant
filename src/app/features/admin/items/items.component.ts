import { CategoryService } from './../categories/category.service';
import {Item} from 'src/app/core/interfaces/item';
import {ItemService} from './item.service';
import {Component, OnInit} from '@angular/core';
import { Category } from 'src/app/core/interfaces/category';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

   items: Item[] = [];
   categoriesLookup: {[key: string]: Category} = {};
   modalItem!: Item
   visiable = false;

  constructor(private itemService:ItemService, private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategorys().subscribe((categories) => {
      if (categories && categories.length) {
          for (const category of categories) {
            this.categoriesLookup[category.id] = category;
          }

        this.getItems();
      }
    });
  }

  getItems(){
    this.itemService.getItem().subscribe(res => this.items = res);
  }

  saveItem(event:Item){
    if(event.id === ''){
      this.itemService.createItem(event).subscribe(res => this.items.push(res));
    }else{
      this.itemService.editItem(event).subscribe(_ => {
        this.items = this.items.filter(el => el.id !== event.id )
        this.items.push(event)
      })
    }

  }

  delete(id:string){
    console.log(id);
     this.itemService.deleteItem(id).subscribe(res =>
       this.items = this.items.filter(item => item.id != id));
  }

  update(item:Item){
    this.modalItem = item
    this.openModal()
  }

  openModal(){
    this.visiable = true;
  }
  closeModal(){
    this.visiable = false;
    this.modalItem = {id: '', name: '', description:'', image:'', categoryId:'', price:0};
  }
}
