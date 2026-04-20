import { Routes } from '@angular/router';
import { UsersComponent } from './app/users/users/users.component';
import { PostsComponent } from './app/posts/posts/posts.component';
import { CommentsComponent } from './app/comments/comments/comments.component';
import { AlbumsComponent } from './app/albums/albums/albums.component';

export const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: '**', redirectTo: '' },
];
