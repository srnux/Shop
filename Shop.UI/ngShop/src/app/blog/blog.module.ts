import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//feature module
import { BlogContentComponent } from '../blog-content/blog-content.component';
import { BlogComponent } from './blog.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BlogContentComponent, BlogComponent
  ]
})
export class BlogModule { }
