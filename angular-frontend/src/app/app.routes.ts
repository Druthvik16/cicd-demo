import { Routes } from '@angular/router';
import { UsersComponent } from './app/users/users/users.component';
import { PostsComponent } from './app/posts/posts/posts.component';
import { CommentsComponent } from './app/comments/comments/comments.component';

export const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'comments', component: CommentsComponent },
  { path: '**', redirectTo: '' },
];
