import {ItemService} from './../item.service';
import {CategoryService} from './../../categories/category.service';
import {Category} from 'src/app/core/interfaces/category';
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Item} from 'src/app/core/interfaces/item';

@Component({
  selector: 'app-input-item-dialog',
  templateUrl: './input-item-dialog.component.html',
  styleUrls: ['./input-item-dialog.component.css']
})
export class InputItemDialogComponent implements OnInit, OnChanges {

  @Input() visiable = false;
  @Input() item: Item = {id: '', name: '', description:'', image:'', categoryId:'', price:0};
  @Output() close = new EventEmitter();
  @Output() saveItemEvent = new EventEmitter()
  formItem!: FormGroup;
  imageFile!: File;
  imageBase64!: string;
  categories: Category[] = [];
  valaiRequiredImage = false;

  constructor(private categoryServiec: CategoryService, private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.formItem = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.formItem?.patchValue({
      name: this.item.name,
      price: this.item.price,
      categoryId: this.item.categoryId,
      description: this.item.description,
    })
    this.imageBase64 = this.item?.image
  }

  getCategories() {
    this.categoryServiec.getCategorys().subscribe(res => this.categories = res);
  }

  submit() {
    if (this.imageFile === null && this.item.image === '') {
      this.valaiRequiredImage = true;
    } else {
      const createdItem = {...this.formItem.value, image: this.imageBase64, id: this.item.id}
      this.saveItemEvent.emit(createdItem);
    }
    this.formItem.reset()
    this.closeModal()
  }

  get formControls() {
    return this.formItem.controls;
  }

  closeModal() {
    this.close.emit()
  }

  onFileSelected(event: any) {
    this.valaiRequiredImage = false;
    this.imageFile = <File>event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.imageBase64 = <string>reader.result;
    };
  }

}
