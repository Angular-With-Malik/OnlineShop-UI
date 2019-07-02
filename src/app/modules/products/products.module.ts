import { ProductService } from './../shared/product.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

const appRouting: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'product/:productName', component: ProductComponent },
  { path: 'product/:productLabel/:productName', component: ProductDetailsComponent }
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRouting),
    HttpClientModule
  ],
  exports: [
    ProductComponent,
    ProductDetailsComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
