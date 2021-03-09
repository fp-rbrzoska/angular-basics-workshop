import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [{
    name: 'prod1',
    price: 17.99,
    description: 'Description 1'
  }, {
    name: 'prod2',
    price: 0.99
  }];

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
