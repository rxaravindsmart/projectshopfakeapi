import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css']
})
export class JeweleryComponent implements OnInit {
  users = new Array<any>();
  star:any=[]
  public index:any=[]
  constructor(private Service: AppService) { }
  // Add to wishlist
  additem(index:any){
    this.index[index].val =false
  }
  // Remove to wishlist
  removeitem(index:any){
    this.index[index].val = true
  }
  // Jewelery products in array
  counter(i: number) {
   return new Array(i);
  }
  // Star Ratting
  onClickItem(index:any,i:any) {
    this.star[i].val=index
  }
  ngOnInit(): void {
    // jewelery Products subscribing using Services
    this.Service.getJwell().subscribe(response => {
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
