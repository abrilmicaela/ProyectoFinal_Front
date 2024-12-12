import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Status } from '../../interfaces/pedido.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from '../../interfaces/pedido.interface';
import { PedidosService } from '../../services/orders.service';
import { FormsModule } from '@angular/forms';
import { SelectorEstadoComponent } from '../selector-estado/selector-estado.component';

@Component({
    selector: 'app-encargado',
    standalone: true,
    imports: [CommonModule, FormsModule, SelectorEstadoComponent],
    templateUrl: './encargado.component.html',
    styleUrl: './encargado.component.css',
})
export class EncargadoComponent {
    @ViewChild('modalDetails') modalElement!: ElementRef;
    pedidos: Pedido[] = [];
    pedido: Pedido;
    pedidosRecientes: Pedido[] = [];

    constructor(private pedidoService: PedidosService) {
        this.pedido = {
            origen: '',
            destino: '',
            matricula_camion: '',
            estado: Status['Pendiente de pago'],
            fecha_salida: '',
        };
        this.pedidoService.getAllPedidos().subscribe({
            next: (response) => {
                console.log(response);
                this.pedidos = response.map((pedido) => ({
                    ...pedido,
                    fecha_salida: this.formatFecha(pedido.fecha_salida),
                }));
                this.filterPedidosRecientes();
            },
        });
    }

    // Formateamos la fecha al formato español 'dd/mm/yyyy'
    formatFecha(fecha: string): string {
        const date = new Date(fecha);
        if (isNaN(date.getTime())) {
            return '';
        }

        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        };

        return date.toLocaleDateString('es-ES', options); // Formato: dd/mm/yyyy
    }

    filterPedidosRecientes(): void {
        const now = new Date();

        // Creamos una copia temporal de los pedidos para trabajar sin modificar el original
        const pedidosCopia = [...this.pedidos];

        this.pedidosRecientes = pedidosCopia.filter((pedido) => {
            // Calculamos la diferencia en días
            const fechaPedido = new Date(pedido['fecha_salida']);
            const diferenciaDias = Math.floor(
                (now.getTime() - fechaPedido.getTime()) / (1000 * 60 * 60 * 24)
            );
            return diferenciaDias <= 30;
        });
    }

    async guardarPedido() {
        //TRY CATCH en caso de usar PROMISE
        // console.log('Submitting pedido:', this.pedido);
        // try {
        //     const updatedPedido = await this.pedidoService.updatePedido(
        //         this.pedido.id,
        //         this.pedido
        //     );
        //     alert('Pedido actualizado');
        //     console.log('Pedido updated successfully:', updatedPedido);
        // } catch (err) {
        //     console.error('Error al actualizar el pedido:', err);
        //     alert('Hubo un error al actualizar el pedido');
        // }

        this.pedidoService.updatePedido(this.pedido.id, this.pedido).then((	response) => {
			console.log(response);
		})
		// subscribe({
        //     next: (updatedPedido) => {
        //         alert('Pedido actualizado');
        //     },
        //     error: (err) => {
        //         console.error('Error al actualizar el pedido:', err);
        //     },
        // });
    }
}
