import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {
  public Mens :any=[]
  star:any=[]
public index:any=[]
  users = new Array<any>();
  constructor(private Service:AppService) { }
  // Add to wishlist
  additem(index:any){
    this.index[index].val =false
  }
  // Remove to wishlist
  removeitem(index:any){
  this.index[index].val = true
  }
  // mens products in Array
  counter(i: number) {
    return new Array(i);
  }
  // Star Ratting
  onClickItem(index:any,i:any) {
  this.star[i].val=index
  }

  ngOnInit(): void {
    // Men products subscribing using Services
    // this.Mens = this.Service.getMen();
    this.Service.getmen().subscribe(response => {
      this.users = response;
      // Pushing whishlist value,and id
      for(let i= 1;i<=this.users.length;i++){
        const val={val: false,id: i}
        this.index.push(val)
       }
       // Pushing star ratting value,and id
       const value= -1
       for(let i=1;i<=this.users.length;i++){
        var obj={val:value,id:i}
        this.star.push(obj)
      }
     })
  }

}
