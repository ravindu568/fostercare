import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    RouterLink
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

}
