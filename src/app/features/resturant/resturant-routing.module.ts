import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResturantComponent} from "./resturant.component";

const routes: Routes = [
  {
    path: '',
    component: ResturantComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResturantRoutingModule { }
