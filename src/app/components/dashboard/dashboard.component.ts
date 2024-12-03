import { Component, inject } from '@angular/core';
import { EncargadoComponent } from '../encargado/encargado.component';
import { Usuario } from '../../interfaces/usuario';
import { AuthService } from '../../services/auth.service';
import { JefeComponent } from "../jefe/jefe.component";
import { OperarioComponent } from "../operario/operario.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [EncargadoComponent, JefeComponent, OperarioComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
    authService = inject(AuthService);
    usuarioRol: string | null = null;
    
    ngOnInit() {
        this.usuarioRol = this.authService.getUserRole();
    }
    
    hasRole(role: string): boolean {
        console.log(this.usuarioRol);
        return this.usuarioRol === role;
    }
}
