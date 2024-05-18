import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatPaginator} from "@angular/material/paginator";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-user-meat-locker',
  standalone: true,
  imports: [
    MatButton,
    MatPaginator,
    RouterLink
  ],
  templateUrl: './user-meat-locker.component.html',
  styleUrl: './user-meat-locker.component.scss'
})
export class UserMeatLockerComponent {

}
