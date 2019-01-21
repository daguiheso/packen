import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'shopping',
    component: ShoppingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
