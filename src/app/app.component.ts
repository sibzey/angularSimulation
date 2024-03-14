import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./components/product/product.component";
import { CategoryComponent } from "./components/category/category.component";
import { NaviComponent } from './components/navi/navi.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ProductComponent, CategoryComponent,NaviComponent]
})
export class AppComponent {
  title = 'angularSimulation';
}
