import {LayoutModule} from './../../layout/layout.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    LayoutModule,
  ]
})
export class AdminModule { }
