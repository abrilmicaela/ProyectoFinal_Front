import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { AlmacenService } from '../../services/almacen.service';

@Component({
  selector: 'app-jefe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jefe.component.html',
  styleUrls: ['./jefe.component.css'],
})
export class JefeComponent implements OnInit {
  usuarios: any[] = [];
  almacenes: any[] = [];
  nuevoUsuario: any = { nombre: '', apellido: '', email: '', password: '0000', rol: '' }; // Contraseña fija inicializada
  nuevoAlmacen: any = { nombre: '', localizacion: '' };

  constructor(
    private usuarioService: UsuarioService,
    private almacenService: AlmacenService
  ) { }

  ngOnInit(): void {
    this.cargarUsuarios();
    this.cargarAlmacenes();
  }

  cargarUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      (data) => (this.usuarios = data),
      (error) => console.error('Error al cargar usuarios:', error)
    );
  }

  cargarAlmacenes(): void {
    this.almacenService.getAlmacenes().subscribe(
      (data) => (this.almacenes = data),
      (error) => console.error('Error al cargar almacenes:', error)
    );
  }

  crearUsuario(): void {
    console.log(this.nuevoUsuario); // Log de depuración
    this.usuarioService.crearUsuario(this.nuevoUsuario).subscribe(() => {
      this.cargarUsuarios(); // Refresca la lista de usuarios tras crear
      this.nuevoUsuario = { nombre: '', apellido: '', email: '', password: '0000', rol: '' }; // Reset con contraseña fija
    });
  }

  crearAlmacen(): void {
    this.almacenService.crearAlmacen(this.nuevoAlmacen).subscribe(() => {
      this.cargarAlmacenes();
      this.nuevoAlmacen = { nombre: '', localizacion: '' };
    });
  }

  editarUsuario(usuario: any): void {
    const nuevoNombre = prompt('Nuevo nombre del usuario:', usuario.nombre);
    if (nuevoNombre) {
      usuario.nombre = nuevoNombre;
      this.usuarioService.editarUsuario(usuario).subscribe(() => this.cargarUsuarios());
    }
  }

  editarAlmacen(almacen: any): void {
    const nuevaLocalizacion = prompt('Nueva localización del almacén:', almacen.localizacion);
    if (nuevaLocalizacion) {
      almacen.localizacion = nuevaLocalizacion;
      this.almacenService.editarAlmacen(almacen).subscribe(() => this.cargarAlmacenes());
    }
  }

  eliminarUsuario(id: number): void {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.usuarioService.eliminarUsuario(id).subscribe(() => this.cargarUsuarios());
    }
  }

  eliminarAlmacen(id: number): void {
    if (confirm('¿Estás seguro de eliminar este almacén?')) {
      this.almacenService.eliminarAlmacen(id).subscribe(() => this.cargarAlmacenes());
    }
  }
}

