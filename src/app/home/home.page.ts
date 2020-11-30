import { Component } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public products: Product[];

  constructor(private pService: ProductService , private cartService: CartService) {
    this.products = this.pService.getProducts();
  }

  public addToCart(p: Product): void {
    this.cartService.updateCart(p);
  }

}
