import {FeatherModule} from 'angular-feather';
import {IconsModule} from './../icons/icons.module';
import {NavbarComponent} from './navbar/navbar.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    IconsModule,
    FeatherModule,
    RouterModule
  ],
  exports : [
    // components
    NavbarComponent,
    FooterComponent,

    // modules
    IconsModule,
    FeatherModule,
  ]
})
export class LayoutModule { }
