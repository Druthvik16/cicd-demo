import { Component } from '@angular/core';
import { Comment, CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {
  comments: Comment[] = [];
  loading = true;
  error = '';
  count = 0;
  version = '';
  deployedAt = '';

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    this.loading = true;
    this.error = '';
    this.commentsService.getComments().subscribe({
      next: (res: any) => {
        this.comments = res.data.slice(0, 20); // show first 20
        this.count = res.count;
        this.version = res.version || '';
        this.deployedAt = res.deployedAt || '';
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load posts.';
        this.loading = false;
      },
    });
  }
}
