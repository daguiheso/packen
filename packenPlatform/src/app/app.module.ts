import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { SearchComponent } from './search/search.component';
import { ShoppingComponent } from './shopping/shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    NavFooterComponent,
    SearchComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
