import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlmacenService {
  private baseUrl = 'http://localhost:3000/api/almacenes'; // Ruta del backend para almacenes

  constructor(private http: HttpClient) {}

  // Obtener todos los almacenes
  getAlmacenes(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Crear un nuevo almacén
  crearAlmacen(almacen: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, almacen);
  }

  // Editar un almacén existente
  editarAlmacen(almacen: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${almacen.id}`, almacen);
  }

  // Eliminar un almacén
  eliminarAlmacen(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
