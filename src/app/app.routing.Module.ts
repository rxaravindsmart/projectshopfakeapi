import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { ProductDetailComponent } from './product-details/product-detail/product-detail.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JeweleryComponent } from './jewelery/jewelery.component';

const approutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mens', component: MensComponent },
  { path: 'womens', component: WomensComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'jewelery', component: JeweleryComponent },
  { path: 'details/:type/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
