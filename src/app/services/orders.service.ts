import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
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

    getById(id: number) {
        return firstValueFrom(this.http.get<Pedido>(`${this.apiUrl}/${id}`))
    }

    insertPedido(pedido : Pedido) : Promise<Pedido>{
        return firstValueFrom(this.http.post<Pedido>(`${this.apiUrl}`, pedido));
    }

    updatePedido(id: number, pedido: Pedido): Observable<Pedido> {
        const { origen, destino, matricula_camion, estado } = pedido;
        const url = `${this.apiUrl}/${id}`;
        return this.http.put<Pedido>(url, pedido);
    }
}
