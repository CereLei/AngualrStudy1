import { ProductService,Product} from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private keyword:string;
  private titleFilter:FormControl=new FormControl();
  private imgUrla='http://placehold.it/320x150';
  private products:Product[];
  constructor(private productService:ProductService) {
    this.titleFilter.valueChanges
    .debounceTime(500)//停止输入500毫秒之后才会发送订阅
    .subscribe(

      value=>this.keyword=value
    )
   }
  //组建实例化之后会调用一次
  ngOnInit() {
    //不会向jquery一样操作DOM，而是操作后台数据变化改变前台
    // this.products=[
    //   new Product(1,'火影忍者',9.8,4,'忍者之间的大乱斗','../../assets/11.png'),
    //   new Product(2,'海贼王',9.7,5,'海贼们寻找宝藏','../../assets/22.png'),
    //   new Product(3,'死神',9.7,5,'死神与虚之间的大战','../../assets/33.png'),
    //   new Product(4,'K',8.2,4,'人类终于可以成为神了','../../assets/44.png'),
    //   new Product(5,'秦时明月',8,4,'爱情武侠古代战国刀剑','../../assets/55.png'),
    //   new Product(6,'复仇者联盟',7.8,3,'打架翻斗','../../assets/66.png'),
    //   new Product(7,'未闻花名',8.9,4,'小清晰','../../assets/77.png')

    // ]
    this.products=this.productService.getProducts();
  }

}
