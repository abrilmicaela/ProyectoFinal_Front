import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Usuario } from '../interfaces/usuario';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrlBase = `${environment.API_URL}/users/login`;
    private http = inject(HttpClient);

    // authenticate(credentials: {
    //     email: string;
    //     password: string;
    // }): Observable<any> {
    //     return this.http.post(`${this.apiUrlBase}`, credentials);
    // }

    login(credentials: { email: string; password: string }) {
        return firstValueFrom(this.http.post<{message:string, token:string}>(`${this.apiUrlBase}`,credentials)
        )
    }
}
