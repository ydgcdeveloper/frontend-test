import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public showMenu = false;
}
