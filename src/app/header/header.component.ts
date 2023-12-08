import { Component, OnDestroy} from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements   OnDestroy{
  public isMenuCollapsed = true;
  public menu=true
  public array:any
  public id:any
  public firstSubscription:any=Subscription
  products: any[] = [];
  value = 0;
  result =0;
  constructor(private Service:AppService) {
  }
  // getting cart products
getCart(){
  this.Service.getCart().subscribe(product=>{
      this.products.push(product)
    })
    //  getting cart no of items
    this.Service.getVal().subscribe(item =>{
        var single=this.products.length-1
        this.products[single].value=item
        this.products[single][0].result=this.products[single].value * this.products[single][0].price
        // Cart Total Value
        this.result +=this.products[single][0].result
        // Item Total Value
        this.value +=this.products[single].value
  })
  // Open cart nav
  }
  openNav(){
    let element:HTMLElement = document.getElementById('mySidenav') as HTMLElement
    element.style.width='40%'
  }
  // Close cart nav
  closeNav(){
    let element:HTMLElement = document.getElementById('mySidenav') as HTMLElement
    element.style.width='0px'
  }
  // Delete Product items, results , cart count
  delete(i:any){
    this.result -=  this.products[i][0].result
    this.value -= this.products[i].value
    if(i > -1){
      this.products.splice(i,1)
    }
  }
  // input changing products count, quantity
  changeSubtotal(product:any, index:any) {
    // Cart Total value
    product.result =product.value * product[0].price
    // Item Total value
    product[index].result =product.value * product[0].price
    for(let i=0; i<=this.products.length;i++){
      this.result = this.products.reduce((acc,obj)=>{
        return acc + obj.result
      },0)
    }
    // Count Value
    for(let i=0;i<=this.products.length;i++){
      this.value=this.products.reduce((acc,obj)=>{
        return acc + obj.value
      },0)
    }
  }
  ngOnInit(): void {
    this.getCart()
    }
ngOnDestroy(): void
 {}
}
