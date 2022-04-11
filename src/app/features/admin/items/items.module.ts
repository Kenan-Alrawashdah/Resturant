import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { InputItemDialogComponent } from './input-item-dialog/input-item-dialog.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { FeatherModule } from 'angular-feather';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from 'src/app/core/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ItemsComponent,
    InputItemDialogComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    IconsModule,
    FeatherModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(DataService),

  ]
})
export class ItemsModule { }
