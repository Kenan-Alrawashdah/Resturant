import { DataService } from './../../../core/data.service';
import { CategoriesRoutingModule } from './categories-routing.module';
import { FeatherModule } from 'angular-feather';
import { IconsModule } from './../../../icons/icons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { InputCategoryDialogComponent } from './input-category-dialog/input-category-dialog.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';



@NgModule({
  declarations: [
    CategoriesComponent,
    InputCategoryDialogComponent,
  ],
  imports: [
    CommonModule,
    IconsModule,
    FeatherModule,
    CategoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(DataService),

  ],
})
export class CategoriesModule { }
