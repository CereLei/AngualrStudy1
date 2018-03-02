import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products:Product[]=[
    new Product(1,'火影忍者',9.8,4,'忍者之间的大乱斗','../../assets/11.png'),
    new Product(2,'海贼王',9.7,5,'海贼们寻找宝藏','../../assets/22.png'),
    new Product(3,'死神',9.7,5,'死神与虚之间的大战','../../assets/33.png'),
    new Product(4,'K',8.2,4,'人类终于可以成为神了','../../assets/44.png'),
    new Product(5,'秦时明月',8,4,'爱情武侠古代战国刀剑','../../assets/55.png'),
    new Product(6,'复仇者联盟',7.8,3,'打架翻斗','../../assets/66.png'),
    new Product(7,'未闻花名',8.9,4,'小清晰','../../assets/77.png')

  ]
  private comment:Comment[]=[
    new Comment(1,1,"2018-01-01 22:00:03","小明",3,"东西不错"),
    new Comment(2,1,"2018-01-11 14:02:13","小红",3,"可以的啊"),
    new Comment(3,1,"2018-01-18 09:00:52","小绿",3,"好看"),
    new Comment(4,2,"2018-01-22 16:30:38","小蓝",3,"老铁你赢了"),
  ]
  constructor() { }
  getAllCategories():string[]{
    return ['热血','科幻','古侠']
  }
  getProducts(){
    return this.products;
  }
   getProduct(id:number):Product{
    return this.products.find((product)=>product.id==id)
  } 
getCommentsForProductId(id:number):Comment[]{
  return this.comment.filter((comment:Comment)=>comment.productId==id)
}
}
export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public imgUrl:string
  ){

  }
}
export class Comment{
  constructor (
    public id:number,
    public productId:number,
    public timestmap:string,
    public name:string,
    public rating:number,
    public content:string

  ){

  }
}

