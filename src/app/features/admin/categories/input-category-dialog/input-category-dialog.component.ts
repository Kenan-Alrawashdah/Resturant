import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from "../../../../core/interfaces/category";

@Component({
  selector: 'app-input-category-dialog',
  templateUrl: './input-category-dialog.component.html',
  styleUrls: ['./input-category-dialog.component.css']
})
export class InputCategoryDialogComponent implements OnInit, OnChanges{

  @Input() visiable = false;
  @Input() category: Category = {name: '', description: '', id: ''};
  @Output() close = new EventEmitter();
  @Output() saveCategoryEvent = new EventEmitter();

  formCategory!: FormGroup;

  constructor() {
  }


  ngOnInit(): void {
     this.formCategory= new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl(''),
    });

  }

  ngOnChanges(changes: SimpleChanges) {
    this.formCategory?.patchValue({
      name: this.category.name,
      description: this.category.description
    })
  }

  get f() {
    return this.formCategory.controls;
  }

  submit() {
    const createdCategory = { ...this.formCategory.value, id: this.category.id}
    this.saveCategoryEvent.emit(createdCategory);
    this.formCategory.reset()
    this.closeModal()
  }


  closeModal() {
    this.close.emit()
  }

}
