import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string; catchPhrase: string; };
  address: { city: string; };
}


export interface ApiResponse {
  success: boolean;
  source: string;
  count: number;
  data: User[];
}



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = '/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}
