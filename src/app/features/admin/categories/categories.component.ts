import {CategoryService} from './category.service';
import {Category} from 'src/app/core/interfaces/category';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-bar',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories : Category[]=[];
  modalCategory= {name: '', description: '', id: ''}
  visiable = false;

  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.categoryService.getCategorys().subscribe(res => this.categories = res);
  }

  delete(id:string){
    this.categoryService.deleteCategory(id).subscribe(res =>{
      this.categories = this.categories.filter(el => el.id !== id)
    });
  }


  saveCategory(category: Category) {
    if(category.id === ''){
      this.categoryService.createCategory(category)
        .subscribe(res => this.categories.push(res))
    }else{
      this.categoryService.editCategory(category)
        .subscribe(_ => {
            this.categories = this.categories.filter(el => el.id !== category.id)
            this.categories.push(category)
        })
    }
    this.modalCategory = {name: '', description: '', id: ''}
  }

  update(category: Category) {
    this.modalCategory = category
    this.openModal()
  }

  closeModal() {
    this.visiable = false;
    this.modalCategory = {name: '', description: '', id:''}
  }

  openModal(){
    this.visiable = true
  }

}
