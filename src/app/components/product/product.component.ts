import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  product1={productId:1, productName:'Pencil', CategoryId:1, UnitPrice:5}
  product2={productId:2, productName:'Notebook', CategoryId:1, UnitPrice:15}
  product3={productId:3, productName:'Laptop', CategoryId:2, UnitPrice:12000}
  product4={productId:4, productName:'Mouse', CategoryId:2, UnitPrice:300}

  products=[this.product1,this.product2,this.product3,this.product4]
}
