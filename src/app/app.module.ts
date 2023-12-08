import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing.Module';
import { ProductDetailComponent } from './product-details/product-detail/product-detail.component';
import { AppService } from './app.service';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JeweleryComponent } from './jewelery/jewelery.component';
import { ElectronicsComponent } from './electronics/electronics.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MensComponent,
    WomensComponent,
    HeaderComponent,
    ProductDetailComponent,
    FooterComponent,
    JeweleryComponent,
    ElectronicsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
