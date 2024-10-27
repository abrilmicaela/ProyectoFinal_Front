import { Component, ElementRef, ViewChild } from '@angular/core';
import { users } from './conf/bbdd';
import { User, Status } from '../../interfaces/encargado.model';
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
    estado: Status['Pendiente de pago'],
    contacto: '',
  };
  public users: User[] = users;

  openModalDetails(userId: number) {
    this.getUserDetails(userId);
    var myModal = new bootstrap.Modal(document.getElementById('modalDetails'));
    myModal.show();
  }

  getUserDetails(id: number) {
    this.user = this.users[id - 1];
  }

  getUserStatus(estado: Status): string {
    console.log(estado); // Aquí se imprime el estado correcto

    if (estado === Status.Aceptado) {
      return 'bg-primary';
    } else if (estado === Status.Cancelado) {
      return 'bg-danger';
    } else if (estado === Status['En revisión']) {
      return 'bg-warning text-dark';
    } else if (estado === Status.Entregado) {
      return 'bg-success';
    } else if (estado === Status.Enviado) {
      return 'bg-purple';
    } else if (estado === Status['Pendiente de envío']) {
      return 'bg-secondary text-light';
    } else if (estado === Status['Pendiente de pago']) {
      return 'bg-light text-dark';
    } else {
      return '';
    }
  }

  getPedidosRecientes() {
    const now = new Date();

    return this.users.filter((user) => {
      // Cambia a this.users
      const [day, month, year] = user.fecha.split('/').map(Number);
      const fechaPedido = new Date(year, month - 1, day);
      const diferenciaDias = Math.floor(
        (now.getTime() - fechaPedido.getTime()) / (1000 * 60 * 60 * 24)
      );

      return diferenciaDias <= 30;
    });
  }
}
