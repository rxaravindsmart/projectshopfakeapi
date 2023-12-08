import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  myarray:any=[];
  public id:any;
  value:any=[]
  single:any=[];
  public type:any
  index:number = -1;
  wishlist:boolean=false
  trigger=["men's clothing", "women's clothing", "jewelery", "electronics"]
  constructor(private Service:AppService,private route: ActivatedRoute) {}
// Add to Cart
onclick(){
  // alert message
  alert('Item added successfylly')
  // Condition for type
  if(this.type==this.trigger[0]){
    this.Service.addToCart(this.myarray)
  }
  else if(this.type==this.trigger[1]){
    this.Service.addToCart(this.myarray)
  }
  else if(this.type==this.trigger[2]){
    this.Service.addToCart(this.myarray)
  }
  else if(this.type==this.trigger[3]){
    this.Service.addToCart(this.myarray)
  }
  else {
    alert('Something error occured')
  }
  // getting no of items value
  this.Service.getvalue(this.value)
}
// no of Stars
counter(i: number) {
  return new Array(i);
}
// star ratting
onClickItem(index:any) {
  this.index = index;
}
// getting single product item
getitem(){
  //  subscribing single product item
  this.single=this.route.paramMap.subscribe(params=>{
    // getting id and type
    this.id =params.get('id')
    this.type =params.get('type')
    // Condition for type
    if(this.type == this.trigger[0]){
      // this.Service.getmenid(this.id)
      this.Service.getmenid(this.id).subscribe(response => {
        // pushing result=0
        response.result =0
        // response pushing into another array
        this.myarray.push(response);
    })
    }
    else if (this.type == this.trigger[1]) {
      // this.Service.getmenid(this.id)
      this.Service.getmenid(this.id).subscribe(response => {
        // pushing result=0
        response.result =0
        // response pushing into another array
        this.myarray.push(response);
    })
    }
    else if ( this.type == this.trigger[2]){
      // this.Service.getmenid(this.id)
      this.Service.getmenid(this.id).subscribe(response => {
        // pushing result=0
        response.result =0
        // response pushing into another array
        this.myarray.push(response);
    })
    }
    else if (this.type == this.trigger[3]){
      // this.Service.getmenid(this.id)
      this.Service.getmenid(this.id).subscribe(response => {
        // pushing result=0
        response.result =0
        // response pushing into another array
        this.myarray.push(response);
      })
    }
    else {
      alert('Somthing else occured')
    }
  })
}
// add to wishlist
additem(){
  this.wishlist=false
}
// remove to wishlist
removeitem(){
  this.wishlist =true
}
// input storing global variable
inputReader(val:any){
  this.value=val
}
ngOnInit(): void {
  this.getitem();
  }
}
