import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';

import { HttpClientModule } from '@angular/common/http';

import {ProductService} from './product/product.service';
import { GraphQLModule } from './graphql.module'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GraphQLModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
