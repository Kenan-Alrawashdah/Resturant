import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../../core/interfaces/category";

@Component({
  selector: 'category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.css']
})
export class CategoryBarComponent  {
  @Input() categories!: Category[]
  @Input() selectedCategoryId!: string
  @Output() selectCategory = new EventEmitter()
  constructor() {
  }
}
