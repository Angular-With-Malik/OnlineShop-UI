import { DisplayProduct, Product } from './../../model/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class ProductService {

  mockUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getAllDisplayProduct(): Observable<DisplayProduct[]> {
    return this.http.get<DisplayProduct[]>(this.mockUrl + '/' + 'DisplayProduct');
  }

  getAllLaptopProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.mockUrl + '/' + 'LaptopProduct');
  }

  getAllDesktopProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.mockUrl + '/' + 'DesktopProduct');
  }
}
