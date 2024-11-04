import { Routes } from '@angular/router';
import { EncargadoComponent } from './components/encargado/encargado.component';
import { PedidoComponent } from './components/pedido/pedido/pedido.component';
import { FormularioPedidoComponent } from './components/pedido/formulario-pedido/formulario-pedido.component';
import { InterfazComponent } from './pages/interfaz/interfaz.component';

export const routes: Routes = [
  // RUTAS COMENTADAS HASTA NO TENER LAS VISTAS HECHAS
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  // {path:'login', component:loginComponent},
  {
    path: 'home',
    component: InterfazComponent,
    children: [
      {
        path: 'jefe',
        component: /*jefeComponent*/ EncargadoComponent,
        children: [
          {
            path: 'nuevo-empleado',
            component: /*formularioEmpleadoComponent*/ EncargadoComponent,
          },
          {
            path: 'actualizar-empleado/:id',
            component: /*formularioEmpleadoComponent*/ EncargadoComponent,
          },
          {
            path: 'nuevo-almacen',
            component: /*formularioAlmacenComponent*/ EncargadoComponent,
          },
          {
            path: 'actualizar-almacen/:id',
            component: /*formularioAlmacenComponent*/ EncargadoComponent,
          },
        ],
      },
      {
        path: 'camionero',
        component: /*camioneroComponent*/ EncargadoComponent,
      },
      {
        path: 'pedido/:id',
        component: PedidoComponent,
      },
      {
        path: 'pedido/:id/actualizar',
        component: FormularioPedidoComponent,
      },
    ],
  },

  { path: '**', redirectTo: 'home' },
];
