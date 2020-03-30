import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService} from './product.service'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: IProduct[]

  constructor(private productService: ProductService) { 

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.productService.getProducts().subscribe(products=>this.products=products);
  }

  delete(IProduct): void{
    //this.productService.getProducts().subscribe(products=>this.products=products);
  }
}
