import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  users = new Array<any>();
  star:any=[]
  public index:any=[]
  constructor(private Service:AppService) { }
  // Add to wishlist
  additem(index:any){
    this.index[index].val =false
  }
  // Remove to wishlist
  removeitem(index:any){
    this.index[index].val = true
  }
  // Electronics in Array
  counter(i: number) {
    return new Array(i);
  }
  // Star Ratting
  onClickItem(index:any,i:any) {
    this.star[i].val=index
  }
  ngOnInit(): void {
    // Electronics products subscribing using Services
    this.Service.getElec().subscribe(response => {
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
