import { Component, inject, Input } from '@angular/core';
import { PedidosService } from '../../services/orders.service';

@Component({
    selector: 'app-selector-estado',
    standalone: true,
    imports: [],
    templateUrl: './selector-estado.component.html',
    styleUrl: './selector-estado.component.css',
})
export class SelectorEstadoComponent {
    @Input() pedido;
    pedidosService = inject(PedidosService);

    estados: any = [];
    estadoCambio = '';

    async ngOnInit() {
        this.estados = await this.pedidosService.getPedidosStatus();
    }

    async estadoChange(event: Event) {
        const target = event.target as HTMLSelectElement;
        console.log(this.pedido)
        this.pedidosService
            .updatePedido(this.pedido.id, this.pedido)
            .subscribe({
                next: (updatedPedido) => {
                    alert('Pedido actualizado');
                },
                error: (err) => {
                    console.error('Error al actualizar el pedido:', err);
                },
            });
    }
}
