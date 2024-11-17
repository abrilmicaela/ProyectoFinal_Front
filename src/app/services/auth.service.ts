import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrlBase = 'http://localhost:3000/api/users/';

  constructor(private http: HttpClient) {}

  authenticate(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrlBase}authenticate`, credentials);
  }
}
