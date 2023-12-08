import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  statusClass = 'not-active';

  constructor(private Service:AppService) { }
  users = new Array<any>();
  public index:any=[]
  star:any=[]
// Add to Wishlist
additem(index:any){
    this.index[index].val =false
}
// Remove to Wishlist
removeitem(index:any){
  this.index[index].val = true
}
// Getting All Products in Array
counter(i: number) {
  return new Array(i);
}
// Star Ratting
onClickItem(index:any,i:any) {
  this.star[i].val=index
}
getuser(){
  // All Products subscribing using Services
  this.Service.getUsers().subscribe(response => {
    this.users = response;
      for(let i= 1;i<=this.users.length;i++){
      const val={val: false,id: i}
      // Pushing whishlist value,and id
      this.index.push(val)
    }
      const value= -1
      for(let i=1;i<=this.users.length;i++){
      var obj={val:value,id:i}
      // Pushing Star Ratting value,and id
      this.star.push(obj)
    }
  })
}
  ngOnInit(): void {
    this.getuser()
  }
}
