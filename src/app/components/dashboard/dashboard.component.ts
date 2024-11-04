import { Component } from '@angular/core';
import { EncargadoComponent } from '../encargado/encargado.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [EncargadoComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
