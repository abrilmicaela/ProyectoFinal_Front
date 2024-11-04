import { Routes } from '@angular/router';
import { EncargadoComponent } from './components/encargado/encargado.component';
import { PedidoComponent } from './components/pedido/pedido/pedido.component';
import { FormularioPedidoComponent } from './components/pedido/formulario-pedido/formulario-pedido.component';
import { InterfazComponent } from './pages/interfaz/interfaz.component';

export const routes: Routes = [
  // Redirección inicial a 'home'
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    component: InterfazComponent,
  },
  {
    path: 'jefe',
    component: EncargadoComponent,
    children: [
      {
        path: 'nuevo-empleado',
        component: EncargadoComponent,
      },
      {
        path: 'actualizar-empleado/:id',
        component: EncargadoComponent,
      },
      {
        path: 'nuevo-almacen',
        component: EncargadoComponent,
      },
      {
        path: 'actualizar-almacen/:id',
        component: EncargadoComponent,
      },
    ],
  },
  {
    path: 'camionero',
    component: EncargadoComponent,
  },
  // Ruta para mostrar el pedido específico
  {
    path: 'pedido/:id',
    component: PedidoComponent,
  },
  // Ruta para actualizar un pedido específico
  {
    path: 'pedido/:id/actualizar',
    component: FormularioPedidoComponent,
  },

  // Ruta comodín para manejar rutas no definidas
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
