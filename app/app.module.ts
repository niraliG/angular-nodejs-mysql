import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {CreateProductComponent} from './products/create-product/create-product.component';
import { ReadProductsComponent } from './read-products/read-products.component';
 
import { AppComponent } from './app.component';
import { from } from 'rxjs';

 
@NgModule({
  declarations: [
    AppComponent,
    ReadProductsComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule, HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }