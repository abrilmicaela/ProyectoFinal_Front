import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operario',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importamos los módulos necesarios
  templateUrl: './operario.component.html',
  styleUrls: ['./operario.component.css']
})
export class OperarioComponent {
  tareas: any[] = [];
  filterText: string = '';
  nuevoPedido: any = {
    nombre: '',
    origen: '',
    destino: '',
    fecha: '',
    estado: 'Pendiente',
    contacto: ''
  };

  constructor() {}

  ngOnInit(): void {
    // Inicializar datos de prueba
    this.tareas = [
      {
        id: 1,
        nombre: 'Pedido 1',
        origen: 'Almacén A',
        destino: 'Cliente X',
        estado: 'Pendiente',
        fecha: new Date(),
        contacto: 'contacto1@example.com'
      },
      {
        id: 2,
        nombre: 'Pedido 2',
        origen: 'Almacén B',
        destino: 'Cliente Y',
        estado: 'En proceso',
        fecha: new Date(),
        contacto: 'contacto2@example.com'
      },
      {
        id: 3,
        nombre: 'Pedido 3',
        origen: 'Almacén C',
        destino: 'Cliente Z',
        estado: 'Completado',
        fecha: new Date(),
        contacto: 'contacto3@example.com'
      }
    ];
  }

  crearPedido(): void {
    const nuevoPedidoConId = {
      id: this.tareas.length + 1,
      ...this.nuevoPedido // Copia todos los valores del formulario
    };

    this.tareas.push(nuevoPedidoConId);
    console.log('Pedido añadido:', nuevoPedidoConId);

    // Reiniciar el formulario
    this.nuevoPedido = {
      nombre: '',
      origen: '',
      destino: '',
      fecha: '',
      estado: 'Pendiente',
      contacto: ''
    };
  }

  actualizarEstado(tarea: any, nuevoEstado: string): void {
    tarea.estado = nuevoEstado;
    console.log(`Tarea ${tarea.id} actualizada a: ${nuevoEstado}`);
  }

  eliminarTarea(id: number): void {
    console.log(`Eliminar tarea con ID: ${id}`);
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }
}
