import { Component, OnInit } from '@angular/core';
import { IProduct, IProductResponse } from './product';
import { ProductService} from './product.service'
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  //products: IProduct[]
  products: Array<IProduct> = [];
  loading = true;
  error: any;

  constructor(private productService: ProductService,private apollo: Apollo) { 

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.apollo
      .watchQuery<IProductResponse>({
        query: gql`
        {
          products{
            id, displayName,
              mainCategories{
                name,
                description
              }
          }
        }  
        `,
      })
      .valueChanges.subscribe(result => {
        this.products= result.data.products;
        this.loading = result.loading;
        this.error = result.errors;
      });
    
    //this.productService.getProducts().subscribe(products=>this.products=products);
  }

  delete(IProduct): void{
    //this.productService.getProducts().subscribe(products=>this.products=products);
  }
}
