import { Routes } from '@angular/router';
import { EncargadoComponent } from './components/encargado/encargado.component';
import { PedidoComponent } from './components/pedido/pedido/pedido.component';
import { FormularioPedidoComponent } from './components/pedido/formulario-pedido/formulario-pedido.component';
import { InterfazComponent } from './pages/interfaz/interfaz.component';
import { LoginComponent } from './pages/login/login.component';
import { OperarioComponent } from './components/operario/operario.component';

export const routes: Routes = [
  // Redirección inicial a 'home'
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: InterfazComponent,
  },
  {
    path: 'encargado',
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
  {
    path: 'nuevo-pedido',
    component: FormularioPedidoComponent,
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
  {
    path: 'operario',
    component: OperarioComponent,
  },
  
  // Ruta comodín para manejar rutas no definidas
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
