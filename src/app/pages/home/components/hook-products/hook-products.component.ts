import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hook-products',
  standalone: true,
  imports: [],
  templateUrl: './hook-products.component.html',
  styleUrl: './hook-products.component.css'
})
export class HookProductsComponent {

  constructor(private router: Router) {}

  showCategory(categoryName: string) {
    this.router.navigate(['category', categoryName.replaceAll(' ', '')]);
  }

}
