import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operario',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importamos FormsModule
  templateUrl: './operario.component.html',
  styleUrls: ['./operario.component.css']
})
export class OperarioComponent {
  tareas: any[] = [];
  filterText: string = '';

  constructor() {}

  ngOnInit(): void {
    // Inicializar datos de prueba
    this.tareas = [
      { id: 1, descripcion: 'Entrega en almacén A', estado: 'Pendiente', fecha: new Date() },
      { id: 2, descripcion: 'Revisión de inventario', estado: 'En proceso', fecha: new Date() },
      { id: 3, descripcion: 'Recolección de pedidos', estado: 'Completado', fecha: new Date() }
    ];
  }

  actualizarEstado(tarea: any, nuevoEstado: string): void {
    tarea.estado = nuevoEstado;
    console.log(`Tarea ${tarea.id} actualizada a: ${nuevoEstado}`);
  }

  filtrarTareas(): void {
    console.log(`Filtrando tareas que contienen: ${this.filterText}`);
    // Simular filtrado
    if (this.filterText.trim() === '') {
      this.ngOnInit(); // Restaurar todas las tareas si no hay filtro
    } else {
      this.tareas = this.tareas.filter(tarea =>
        tarea.descripcion.toLowerCase().includes(this.filterText.toLowerCase())
      );
    }
  }
  

  eliminarTarea(id: number): void {
    console.log(`Eliminar tarea con ID: ${id}`);
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }
}

