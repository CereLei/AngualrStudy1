import { PicturesComponent } from './pictures/pictures.component';
import { MapComponent } from './map/map.component';
import { FirstComponent } from './first/first.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path:'',component:FirstComponent,children:[
    {path:'' ,component:HomeComponent},
    {path:'product/:productId',component:ProductDetailComponent}
  ]},
  {path:'pictures',component:PicturesComponent},
  {path:'map',component:MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
