import { Routes } from '@angular/router';
import { EncargadoComponent } from './components/encargado/encargado.component';
import { PedidoComponent } from './components/pedido/pedido/pedido.component';
import { FormularioPedidoComponent } from './components/pedido/formulario-pedido/formulario-pedido.component';
import { InterfazComponent } from './pages/interfaz/interfaz.component';
import { LoginComponent } from './pages/login/login.component';
import { OperarioComponent } from './components/operario/operario.component';
import { JefeComponent } from './components/jefe/jefe.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    // Redirección inicial a 'home'
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        component: InterfazComponent, canActivate: [authGuard],
        children: [
            { path: 'encargado', component: EncargadoComponent },
            { path: 'jefe', component: JefeComponent },
            { path: 'operario', component: OperarioComponent },
        ],
    },

    { path: 'nuevo-pedido', canActivate: [authGuard], component: FormularioPedidoComponent },
    { path: 'pedido/:id', canActivate: [authGuard], component: PedidoComponent },
    { path: 'pedido/:id/actualizar', canActivate: [authGuard], component: FormularioPedidoComponent },

    {
        path: 'encargado',
        children: [
            { path: 'nuevo-empleado', component: JefeComponent },
            { path: 'actualizar-empleado/:id', component: JefeComponent },
            { path: 'nuevo-almacen', component: JefeComponent },
            { path: 'actualizar-almacen/:id', component: JefeComponent },
        ],
    },

    // Ruta comodín para manejar rutas no definidas
    { path: '**', pathMatch: 'full', redirectTo: 'login' },
];
