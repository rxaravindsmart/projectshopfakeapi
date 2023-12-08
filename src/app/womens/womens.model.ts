export class Womens {
  public id: number;
  public title:string;
  public src: string;
  public price: string;
  public image: string;

  constructor( src: string,price: string, id:number,title:string, image: string) {
    this.price = price;
    this.id =id;
    this.src=src;
    this.title=title;
    this.image = image;
  }
}
