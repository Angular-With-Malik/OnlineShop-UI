import { DisplayProduct } from './../../../model/product.model';
import { ProductService } from './../../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayProduct: DisplayProduct[];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllDisplayProduct();
  }

  getAllDisplayProduct() {
    this.productService.getAllDisplayProduct().subscribe(
      (product) => {
        this.displayProduct = product;
      }
    )
  }
}
