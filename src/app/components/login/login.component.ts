import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
