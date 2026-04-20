import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostsResponse {
  success: boolean;
  source: string;
  count: number;
  data: Post[];
  version: string;
  deployedAt: string;
}

@Injectable({ providedIn: 'root' })
export class PostsService {
  private apiUrl = '/api/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostsResponse> {
    return this.http.get<PostsResponse>(this.apiUrl);
  }
}