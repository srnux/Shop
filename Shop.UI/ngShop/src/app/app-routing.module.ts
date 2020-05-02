import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent} from './product/product.component'
import { BlogComponent } from "./blog/blog.component";
import { BlogContentComponent } from "./blog-content/blog-content.component";


const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'blog', component: BlogComponent },
  {path: 'blog/:path', component: BlogContentComponent},
  { path: '',
    redirectTo: '/product',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
