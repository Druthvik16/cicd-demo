import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Album {
  id: number;
  userId: number;
  title: string;
}

export interface AlbumsResponse {
  success: boolean;
  source: string;
  count: number;
  data: Album[];
  version: string;
  deployedAt: string;
}

@Injectable({ providedIn: 'root' })
export class AlbumsService {
  private apiUrl = '/api/albums';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<AlbumsResponse> {
    return this.http.get<AlbumsResponse>(this.apiUrl);
  }
}