import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
// 使用NgModule装饰器  // declarations声明模块中有什么东西【只能声明组件指令和管道】
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    FooterComponent, 
     StarsComponent,
    SearchComponent,
    CarouselComponent
  ],
  // 正常运行还需要什么模块
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // 模块中声明的服务【服务】
  providers: [],
  // 什么模块的主组件是什么
  bootstrap: [AppComponent]
})
export class AppModule { }
