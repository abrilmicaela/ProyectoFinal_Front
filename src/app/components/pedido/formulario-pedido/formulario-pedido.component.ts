import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Pedido } from '../../../interfaces/pedido.interface';

@Component({
  selector: 'app-formulario-pedido',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, ReactiveFormsModule],
  templateUrl: './formulario-pedido.component.html',
  styleUrl: './formulario-pedido.component.css',
})
export class FormularioPedidoComponent {
  pedidoForm: FormGroup;
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)

  tipo: string = 'Nuevo';
  submitBtn: string = 'Enviar';
  ExpEmail = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,10}$/;

  constructor() {
    this.pedidoForm = new FormGroup({
      origen: new FormControl(null, [Validators.required]), 
      destino: new FormControl(null, [Validators.required]), 
      matricula: new FormControl(null, [Validators.required]), 
    });
  }

  checkValidation(control: string, validator: string) {
    return (
      this.pedidoForm.get(control)?.hasError(validator) &&
      this.pedidoForm.get(control)?.touched
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params.id) {
        this.tipo = 'Actualizar';
        this.submitBtn = 'Actualizar';
      }
    });
  }

  getFormData() {
    this.router.navigateByUrl('/dashboard')
    if(this.pedidoForm.valid){
    }
  }
}
