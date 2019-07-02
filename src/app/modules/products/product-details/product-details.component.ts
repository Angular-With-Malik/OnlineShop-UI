import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productName: string;
  productLabel: string;
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.productName = params['productName'];
        this.productLabel = params['productLabel'];
      });
    console.log(this.productName);
    this.displayProductDetails(this.productName);
  }

  displayProductDetails(productName) {

  }
}
