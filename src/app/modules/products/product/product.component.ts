import { ProductService } from './../../shared/product.service';
import { Product } from './../../../model/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  hpLaptop: string;
  dellLaptop: string;
  sonyLaptop: string;
  alinewareLaptop: string;
  allProducts: Product[];
  imageHeight = 100;
  imageWidth = 100;
  isButtonShow = false;
  title = 'Hide';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let productName;
    this.route.params.subscribe(
      (param) => {
        productName = param['productName'];
        console.log(productName);
      });
    this.getAllProductsByProductName(productName);
  }

  getAllProductsByProductName(productName: string) {
    if (productName === 'Laptop') {
      this.productService.getAllLaptopProduct().subscribe(
        (product) => {
          this.allProducts = product;
        });
    }
    if (productName === 'Desktop') {
      this.productService.getAllDesktopProduct().subscribe(
        (product) => {
          this.allProducts = product;
        });
    }


    // this.hpLaptop = '../../../../assets/hp laptop.png';
    // this.dellLaptop = '../../../../assets/dell laptop.png';
    // this.sonyLaptop = '../../../../assets/sony laptop.jpeg';
    // this.alinewareLaptop = '../../../../assets/alienware laptop.webp';
  }

  showAndHide(title) {
    if (title === 'Hide') {
      this.title = 'Show';
      this.isButtonShow = true;
    }
    if (title === 'Show') {
      this.title = 'Hide';
      this.isButtonShow = false;
    }
  }
}
