import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { CartListComponent } from './feature/cart-list/cart-list.component';
import { HomeComponent } from './feature/home/home.component';
import { AboutComponent } from './feature/about/about.component';
import { AngularmaterialModule } from './angular-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartListComponent,
    HomeComponent,
    AboutComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularmaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
