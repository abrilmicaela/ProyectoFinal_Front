import { Component } from '@angular/core';

import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ReactiveForm: FormGroup;

  constructor() {
    this.ReactiveForm = new FormGroup({
      Email: new FormControl('', []),
      Password: new FormControl('', []),
    });
  }

  cargardatos() {
    console.log(this.ReactiveForm.value);
  }
}




