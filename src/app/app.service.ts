import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
@Injectable({ providedIn:'root'})
export class AppService{
wishlist:any=[]
value:any
public newarray:any =[]
result:any
private subject = new Subject();
private sub = new Subject();
  constructor(private http:HttpClient){
  }
  // All Products fetching
  public getUsers(): Observable<any> {
    const url = 'https://fakestoreapi.com/products';
    // Returning Products
    return this.http.get<any>(url);
  }
  // Mens Products fetching
  public getmen():Observable<any> {
    const url = "https://fakestoreapi.com/products/category/men's clothing"
    // Returning Products
    return this.http.get<any>(url)
  }
  // single product fetching
  public getmenid(id:number): Observable<any>{
    const url= "https://fakestoreapi.com/products/"+id
    // Returning Products
    return this.http.get<any>(url)
  }
  // Womens Products fetching
  public getwomen(): Observable<any> {
    const url ="https://fakestoreapi.com/products/category/women's clothing"
    // Returning Products
    return this.http.get<any>(url)
  }
  // Jewell Products Fetching
  public getJwell(): Observable<any> {
    const url = "https://fakestoreapi.com/products/category/jewelery"
    // Returning Products
    return this.http.get<any>(url)
  }
  // Electronics Products Fetching
  public getElec(): Observable<any> {
    const url = "https://fakestoreapi.com/products/category/electronics"
    // Returning Products
    return this.http.get<any>(url)
  }
  // getting Id value
  addToCart(value:any) {
  this.subject.next(value)
  }
  // getting No of items value
  getvalue(Dvalue:any){
    this.sub.next(Dvalue)
  // console.log(Dvalue);
  }
  // returning ID value
  getVal(): Observable<any>{
    return this.sub.asObservable()
  }
  // Returning No of items Value
  getCart():Observable<any>{
    return this.subject.asObservable()
  }
}
