import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { DashboardComponent } from "../../components/dashboard/dashboard.component";

@Component({
    selector: 'app-interfaz',
    standalone: true,
    imports: [RouterOutlet, NavbarComponent, FooterComponent, DashboardComponent],
    templateUrl: './interfaz.component.html',
    styleUrl: './interfaz.component.css',
})
export class InterfazComponent {}
