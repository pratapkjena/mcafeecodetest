import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { HomeComponent } from './feature/home/home.component';
import { CartListComponent } from './feature/cart-list/cart-list.component';
import { AboutComponent } from './feature/about/about.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent,  },
  { path: 'product', component: ProductListComponent },
  {path: 'cart', component: CartListComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
