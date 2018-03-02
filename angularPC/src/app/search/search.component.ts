import { ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  formModel:FormGroup;
  //从服务获取下拉框数据
  categories:string[];
  constructor(
    private productService:ProductService
  ) { 
    let fb =new FormBuilder();
    this.formModel=fb.group({
      title:['',Validators.minLength(3)],
      price:[null,this.postiveNumberValidator],
      category:['-1']
    })
  }

  ngOnInit() {
    this.categories=this.productService.getAllCategories();
  }
  //写一个校验器来控制整数
postiveNumberValidator(control:FormControl):any{
  if(!control.value){
    return null;
  }else{
    let price=parseInt(control.value);
    if(price>0){
      return null;
    }else{
      return { postiveNumber:true};
    }
  }

}
onSearch(){
  debugger;
  if(this.formModel.valid){
    console.log(this.formModel.value)
  }
}
}
