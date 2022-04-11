import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path:'profile',
    loadChildren : () => import('./profile/profile.module')
      .then(m => m.ProfileModule)
  },
  {
    path:'categories',
    loadChildren : () => import('./categories/categories.module')
    .then(m => m.CategoriesModule)
  },
   {
     path: 'items',
     loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
