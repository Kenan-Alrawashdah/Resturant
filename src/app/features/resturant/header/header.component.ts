import { Resturant } from './../../../core/interfaces/resturant';
import { ProfileService } from './../../admin/profile/profile.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Input() headerText = "it's not just Food, it's an Experience"
  @Input() image = "assets/image.jpg"

  resturant!: Resturant;
  constructor(private profileService : ProfileService) { }


  ngOnInit(): void {
  this.getResturant();
  }

   getResturant(){
     this.profileService.getResturant('1').subscribe(res =>
     {
      this.resturant = res
      console.log('iiiii :' + this.resturant.image)
     });
   }
}
