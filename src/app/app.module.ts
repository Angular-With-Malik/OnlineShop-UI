import { ProductDetailsComponent } from './modules/products/product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './modules/products/products.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './modules/products/product/product.component';

const appRouting: Routes = [
  {
    path: '',
    children: [
      {
        path: '', loadChildren: () => ProductsModule
      },
    ]
  }
  // { path: '', component: ProductComponent },
  // { path: 'product-details:/productName', component: ProductDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    RouterModule.forRoot(appRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
