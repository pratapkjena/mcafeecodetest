import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: any [];
  constructor(
  ) {
    this.productList = [
      {id: 1, productName: 'Product 1' , src: './image1', price: '15000'},
      {id: 1, productName: 'Product 2' , src: './image1', price: '567'},
      {id: 1, productName: 'Product 3' , src: './image1', price: '15000'}
    ];
  }

  getProductList(){
    return this.productList;
  }
}
