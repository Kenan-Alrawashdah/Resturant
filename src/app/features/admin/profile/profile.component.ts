import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Resturant} from "../../../core/interfaces/resturant";
import {ProfileService} from "./profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  editMode= false
  formGroup!: FormGroup ;
  resturant!: Resturant;
  imageFile!: File;
  image!: string;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      text: new FormControl('', [Validators.required, Validators.minLength(10)])
    })

    this.profileService.getResturant('1').subscribe(res => {
      this.resturant = res
      this.formGroup.patchValue({
        name: res.name,
        text: res.text
      })
      this.image = res.image
    })
  }

  onFileSelected(event: any) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.image = <string>reader.result;
    };
  }

  submit($event: any) {

    this.profileService.update({...this.formGroup.value,image:this.image, id: this.resturant.id}).subscribe(_ => {
      this.resturant = {...this.formGroup.value, id: this.resturant.id}
    })
    this.editMode= false
  }
  cancel(){
    this.editMode= false;
    this.formGroup.patchValue({
      name: this.resturant.name,
      text: this.resturant.text
    })
    this.image = this.resturant.image
  }
}
