import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileRoutingModule} from './profile-routing.module';
import {IconsModule} from 'src/app/icons/icons.module';
import {FeatherModule} from 'angular-feather';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {DataService} from 'src/app/core/data.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from "./profile.component";


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    IconsModule,
    FeatherModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(DataService),

  ]
})
export class ProfileModule { }
