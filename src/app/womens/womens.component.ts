import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})

export class WomensComponent implements OnInit {
public Womens :any=[]
star:any=[]
public index:any=[]
users = new Array<any>();
  constructor(private Service:AppService) {}
// Add to Wishlist
additem(index:any){
    this.index[index].val =false
}
// Remove to Wishlist
removeitem(index:any){
  this.index[index].val = true
}
// Get Products in Array
counter(i: number) {
  return new Array(i);
}
// Star Ratting
onClickItem(index:any,i:any) {
  this.star[i].val=index
}
  ngOnInit(): void {
// get womens Products subscribing using Services
  // this.Womens = this.Service.getWomen();
    this.Service.getwomen().subscribe(response => {
      this.users = response;
      // Pushing whishlist value,and id
      for(let i= 1;i<=this.users.length;i++){
      const val={val: false,id: i}
       this.index.push(val)
      }
      // Pushing Star ratting value,and id
      const value= -1
      for(let i=1;i<=this.users.length;i++){
         var obj={val:value,id:i}
         this.star.push(obj)
     }
  })
}
}
