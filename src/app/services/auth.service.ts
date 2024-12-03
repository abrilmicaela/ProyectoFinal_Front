import { inject, Injectable, ɵLocaleDataIndex } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { jwtDecode, JwtPayload } from 'jwt-decode';

interface payload extends JwtPayload {
    usuario_id: number;
    usuario_rol: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrlBase = `${environment.API_URL}/auth/login`;
    private http = inject(HttpClient);
    data: any;

    // authenticate(credentials: {
    //     email: string;
    //     password: string;
    // }): Observable<any> {
    //     return this.http.post(`${this.apiUrlBase}`, credentials);
    // }

    login(credentials: { email: string; password: string }) {
        return firstValueFrom(
            this.http.post<{ message: string; token: string }>(
                `${this.apiUrlBase}`,
                credentials
            )
        );
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

getUserRole(): string | null {
    const token = this.getToken();
    if (!token) {
      console.warn('Token is null, cannot decode');
      return null;
    }

    try {
      const data = jwtDecode<payload>(token);
      console.log('Decoded token payload:', data);
      return data.usuario_rol || null;
    } catch (err) {
      console.error('Error decoding token:', err);
      return null;
    }
  }
}
