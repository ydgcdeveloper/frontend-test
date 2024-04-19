import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopSectionComponent } from './components/top-section/top-section.component';
import { HookProductsComponent } from './components/hook-products/hook-products.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    TopSectionComponent,
    HookProductsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  constructor(private router: Router) {}

  showCategory(categoryName: string) {
    this.router.navigate(['category', categoryName.replaceAll(' ', '')]);
  }
}
