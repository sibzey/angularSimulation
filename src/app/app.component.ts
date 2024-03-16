import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./components/product/product.component";
import { CategoryComponent } from "./components/category/category.component";
import { NaviComponent } from './components/navi/navi.component';
import { TodoComponent } from "./components/todo/todo.component";
import { HttpClientModule } from '@angular/common/http';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ProductComponent, CategoryComponent, NaviComponent, TodoComponent]
})
export class AppComponent {
  title = 'angularSimulation';
}
