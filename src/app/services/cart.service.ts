import { ɵDomAdapter } from '@angular/common';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart ;
  constructor() {
    this.cart = {
      products : [],
      subtotal : 0,
      iva : 0,
      total : 0,
      qtyprod : 0,
      date : new Date()
    };
  }
  public getCart(): Cart {
    return this.cart;
  }

  public updateCart(prod: Product): Cart {
    let c = 1;
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.cart.products.length; index++) {
      if (this.cart.products[index].name === prod.name){
        c++;
        this.cart.products[index].cant ++;
      }
    }

    if (c === 1){
      this.cart.products.push(prod);
      this.cart.subtotal += prod.price;
      this.cart.iva = this.cart.subtotal * 0.16;
      this.cart.total = this.cart.subtotal + this.cart.iva;
      this.cart.date = new Date();
      this.cart.qtyprod ++ ;
    }
    else{
      this.cart.subtotal += prod.price;
      this.cart.iva = this.cart.subtotal * 0.16;
      this.cart.total = this.cart.subtotal + this.cart.iva;
      this.cart.date = new Date();
      this.cart.qtyprod ++ ;
    }
    c = 1;
    return this.cart;
  }

}
