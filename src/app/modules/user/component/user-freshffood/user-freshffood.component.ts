import { Component } from '@angular/core';
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatPaginator} from "@angular/material/paginator";
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-user-freshffood',
  standalone: true,
  imports: [
    MatButton,
    MatPaginator,
    MatIcon,
    MatFabButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatHint,

  ],
  templateUrl: './user-freshffood.component.html',
  styleUrl: './user-freshffood.component.scss'
})
export class UserFreshffoodComponent {

}
