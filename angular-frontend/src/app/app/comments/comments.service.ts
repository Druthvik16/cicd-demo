import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Comment {
  id: number;
  postId: number;
  email: string;
  body: string;
  name: string;
}

export interface CommentsResponse {
  success: boolean;
  source: string;
  count: number;
  data: Comment[];
  version: string;
  deployedAt: string;
}

@Injectable({ providedIn: 'root' })
export class CommentsService {
  private apiUrl = '/api/comments';

  constructor(private http: HttpClient) {}

  getComments(): Observable<CommentsResponse> {
    return this.http.get<CommentsResponse>(this.apiUrl);
  }
}