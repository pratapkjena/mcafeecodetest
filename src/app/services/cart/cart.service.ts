import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cart } from '../cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  listOfCart: Cart[];
  constructor(private httpClient: HttpClient) {
    this.listOfCart = [
      { id: '1', name: 'Headphone', orderId: '324fc', address: 'Bangalore', price: 324},
      { id: '2', name: 'laptop', orderId: '3244fc', address: 'Bangalore', price: 3244},
      { id: '3', name: 'Headphone', orderId: '3254fc', address: 'Bangalore', price: 3224},
      { id: '4', name: 'Headphone', orderId: '3524fc', address: 'Bangalore', price: 3224},
      { id: '5', name: 'Headphone', orderId: '3234fc', address: 'Bangalore', price: 3214},
      { id: '6', name: 'Headphone', orderId: '3224fc', address: 'Bangalore', price: 3124}
    ];
   }

  getProductList(){
     return this.listOfCart;
  }
}
