import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../interfaces/pedido.interface';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  private apiUrl = 'http://localhost:3000/api/pedidos';

  constructor(private http: HttpClient) {}

  // Método para obtener todos los pedidos
  getAllPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.apiUrl);
  }

  updatePedido(id: number, pedido: Pedido): Observable<Pedido> {
	  const { origen, destino, matricula_camion, estado } = pedido;
	  console.log(id, pedido);
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Pedido>(url, pedido);
  }
}
