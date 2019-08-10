import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/modals/post';
import { POSTS } from '../../mock/mock-posts';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  posts:Post[] = POSTS;
  constructor() { }

  ngOnInit() {
  }

}
