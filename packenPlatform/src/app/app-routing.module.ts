import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { DetailBrandComponent } from './detail-brand/detail-brand.component';

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'shopping',
    component: ShoppingComponent
  },
  {
    path: 'brand/:id',
    component: DetailBrandComponent
  },
  { path: '**', component: StoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
