import { ProductService,Comment} from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product } from '../shared/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
   productTitle:string;
   product:Product;
   productId:number;
   comments:Comment[];
   newRating:number=5;
   newComment:string="";
   isCommentHidden=true;
  constructor(
    private routeInfo:ActivatedRoute,
    private productService:ProductService
  ) { }

  ngOnInit() {

    this.productId=this.routeInfo.snapshot.params['productId'];
    var ss=this.productId;
     this.product=this.productService.getProduct(ss);  
    this.comments=this.productService.getCommentsForProductId(ss);
    }
    addComment(){
      let comment=new Comment(0,this.product.id,new Date().toISOString(),"某人",this.newRating,this.newComment);
      this.comments.unshift(comment);

      let sum=this.comments.reduce((sum,comment)=>sum+comment.rating,0
      )
      this.product.rating=sum/this.comments.length;
      this.newComment=null;
      this.newRating=5;
      this.isCommentHidden=true;
    }
}
