import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details.component';
import { ProductInfoComponent } from './components/product-info.component';
import { ProductSpecsComponent } from './components/product-specs.component';
import { ProductComponent } from './components/product.component';

const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: 'product', component: ProductComponent,
    children: [
      {path: 'details', component: ProductDetailsComponent,
        children: [
          {path: 'info', component: ProductInfoComponent},
          {path: 'specs', component: ProductSpecsComponent},
          {path: '**', redirectTo: 'details', pathMatch:"full"}
        ]}
    ]},
  {path: '**', redirectTo: '/', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
