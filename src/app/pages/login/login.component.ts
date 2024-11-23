import { Component } from '@angular/core';
// import { AppComponent } from '../app/app.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    ReactiveForm: FormGroup;

    constructor(
        private router: Router,
        private authService: AuthService
    ) {
        this.ReactiveForm = new FormGroup({
            email: new FormControl('', []),
            password: new FormControl('', []),
        });
    }

    checkUser() {
        const credentials = this.ReactiveForm.value;

        this.authService.authenticate(credentials).subscribe({
            next: (response) => {
                const userRole = response.user.rol;

                switch (userRole) {
                    case 'encargado':
                        this.router.navigate(['/dashboard/encargado'], {
                            queryParams: { name: response.user.nombre },
                        });
                        break;
                    case 'jefe':
                        this.router.navigate(['/dashboard']);
                        break;
                    default:
                        this.router.navigate(['/login']);
                        break;
                }
            },
            error: (err) => {
                console.error('Error al autenticar', err);
                alert('Credenciales incorrectas');
            },
        });
    }
}
