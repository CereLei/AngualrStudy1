
// 从angular/core引入装饰器
import { Component} from '@angular/core';


// 所有的组件都@Component做注解，@装饰器
@Component({
  // 里面的属性叫元数据
  // 组件可以通过 app-root标签调用
  selector: 'app-root',
  // 模板是组件必备属性，页面布局和内容
  templateUrl: './app.component.html',
  // 组件模板中的样式
  styleUrls: ['./app.component.css']
})
// 标准的TS类
export class AppComponent {
  title = 'app';

}