import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Post, PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  posts: Post[] = [];
  loading = true;
  error = '';
  count = 0;
  version = '';
  deployedAt = '';

   constructor(private postsService: PostsService) {}

    ngOnInit(): void {
    this.loadPosts();
  }
 
  loadPosts(): void {
    this.loading = true;
    this.error = '';
    this.postsService.getPosts().subscribe({
      next: (res: any) => {
        this.posts = res.data.slice(0, 20); // show first 20
        this.count = res.count;
        this.version = res.version || '';
        this.deployedAt = res.deployedAt || '';
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load posts.';
        this.loading = false;
      }
    });
  }

}
