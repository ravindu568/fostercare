import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-user-freshffood',
  standalone: true,
  imports: [
    MatButton,
    MatPaginator
  ],
  templateUrl: './user-freshffood.component.html',
  styleUrl: './user-freshffood.component.scss'
})
export class UserFreshffoodComponent {

}
