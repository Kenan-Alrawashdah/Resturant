import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {LayoutModule} from 'src/app/layout/layout.module';
import {CategoryBarComponent} from './category-bar/category-bar.component';
import {RouterModule} from "@angular/router";
import {MealListComponent} from "./meal-list/meal-list.component";
import {ResturantRoutingModule} from "./resturant-routing.module";
import {ResturantComponent} from "./resturant.component";


@NgModule({
  declarations: [
    ResturantComponent,
    HeaderComponent,
    MealListComponent,
    CategoryBarComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    ResturantRoutingModule

  ],
  exports: [
    HeaderComponent
  ]
})
export class ResturantModule { }
