import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CartService} from '../../services/cart/cart.service'
import { Cart } from 'src/app/services/cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  public columnDefinitions: any[];
  public selection = new SelectionModel<any>(true, []);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  private selectedRows: string[];
  public dataSource;
  public data ;
  public cardList: Cart[];
  constructor(
    private router: Router,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.getCartList();
    this.columnDefinitions = ['id', 'name', 'orderId', 'address' , 'price'];
  }
  getCartList(){
      this.cardList = this.cartService.getProductList();
      this.selection = new SelectionModel<Cart>(true, []);

      this.dataSource = new MatTableDataSource<Cart>(this.cardList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

}
