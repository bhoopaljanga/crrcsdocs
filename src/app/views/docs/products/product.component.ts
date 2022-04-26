import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
 

import { ShoppingCartService, CartItem, Totals } from '../shopping-cart.service';

@Component({
  selector: 'app-prodcut',
  templateUrl: './product.component.html' 
})
export class ProdcutComponent implements OnInit   {

  name = 'Shopping Cart';
  cartState$ = this.shoppingCartService.state$;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void { 
  }

  addItemToCart(item: CartItem) {
    this.shoppingCartService.addCartItem(item);
  }

  remove(item: CartItem): void {
    this.shoppingCartService.removeCartItem(item);
  }

}
