import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-user-context',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './user-context.component.html',
  styleUrl: './user-context.component.scss'
})
export class UserContextComponent {

}
