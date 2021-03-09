import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'fp-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [{
    name: 'prod1',
    price: 17.99,
    description: 'Description 1'
  }, {
    name: 'prod2',
    price: 0.99
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
