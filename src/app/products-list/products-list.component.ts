import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'fp-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
    this.products$ = productsService.getAllProducts();
  }

  ngOnInit(): void {
  }

}
