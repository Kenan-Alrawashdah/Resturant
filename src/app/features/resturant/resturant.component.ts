import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ResturantService} from "./resturant.service";
import {Router} from "@angular/router";
import {Item} from "../../core/interfaces/item";
import {Category} from "../../core/interfaces/category";

@Component({
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.css']
})
export class ResturantComponent implements OnInit {

  private items : Item[] = []
  categories: Category[] = [];
  selectedCategoryId!: string
  constructor(
    private resturantService: ResturantService) { }

  ngOnInit(): void {
    this.resturantService.getItems().subscribe(res => this.items = res);
    this.resturantService.getCategories().subscribe(res => {
      this.categories = res
      this.selectedCategoryId = this.categories[0].id
    })
  }

  getItems(): Item[]{
    return this.items.filter(el => el.categoryId === this.selectedCategoryId)
  }


  ngOnDestroy() {
  }

  selectCategory(categoryId: string) {
    this.selectedCategoryId = categoryId
  }
}
