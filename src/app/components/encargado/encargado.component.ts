import { Component, ElementRef, ViewChild } from '@angular/core';
import { users } from './conf/bbdd';
import { User } from '../../interfaces/encargado.model';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-encargado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './encargado.component.html',
  styleUrl: './encargado.component.css',
})
export class EncargadoComponent {
  @ViewChild('modalDetails') modalElement!: ElementRef;
  public user: User = {
    id: null,
    nombre: '',
    apellidos: '',
    origen: '',
    destino: '',
    fecha: '',
    estado: '',
    contacto: '',
  };
  public users: User[] = users; // Inicializa la propiedad users

  openModalDetails(userId: number) {
    this.getUserDetails(userId);
    var myModal = new bootstrap.Modal(document.getElementById('modalDetails'));
    myModal.show();
  }

  getUserDetails(id: number) {
    this.user = this.users[id - 1]; // Cambia a this.users
    console.log(this.user);
  }

  getPedidosRecientes() {
    const now = new Date();

    return this.users.filter((user) => { // Cambia a this.users
      const [day, month, year] = user.fecha.split('/').map(Number);
      const fechaPedido = new Date(year, month - 1, day);
      const diferenciaDias = Math.floor(
        (now.getTime() - fechaPedido.getTime()) / (1000 * 60 * 60 * 24)
      );

      return diferenciaDias <= 30;
    });
  }
}
