import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];

  constructor() {
    this.products.push({
      name: 'Perro',
      photo: 'https://picsum.photos/id/237/300/300',
      description: 'cachorro Pitbul hembra',
      price: 100,
      cant: 1
    });
    this.products.push({
      name: 'Gato',
      photo: 'https://picsum.photos/id/238/300/300',
      description: 'Descripcion de gato',
      price: 200,
      cant: 1
    });
    this.products.push({
      name: 'Tlacuache',
      photo: 'https://picsum.photos/id/239/300/300',
      description: 'Descripción de tlacuache',
      price: 500,
      cant: 1
    });
  }

  public getProducts(): Product[] {
    return this.products;
  }
}
