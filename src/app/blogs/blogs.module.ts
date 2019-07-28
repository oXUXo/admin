import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';



@NgModule({
  declarations: [BlogListComponent, BlogDetailComponent],
  imports: [
    SharedModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
