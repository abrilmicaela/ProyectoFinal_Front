import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncargadoComponent } from './components/encargado/encargado.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EncargadoComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Proyecto';
}
