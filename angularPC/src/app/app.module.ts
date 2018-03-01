import { ProductService } from './shared/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './pipe/filter.pipe';
// 使用NgModule装饰器  // declarations声明模块中有什么东西【只能声明组件指令和管道】
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    FooterComponent, 
    ProductDetailComponent,
    HomeComponent,
    StarsComponent,
    SearchComponent,
    CarouselComponent,
    FilterPipe
  ],
  // 正常运行还需要什么模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    //如果使用响应式编程
    ReactiveFormsModule,
    FormsModule
  ],
  // 模块中声明的服务【服务】
  providers: [ProductService],
  // 什么模块的主组件是什么
  bootstrap: [AppComponent]
})
export class AppModule { }
