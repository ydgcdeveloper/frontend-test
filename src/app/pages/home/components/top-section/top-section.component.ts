import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-section',
  standalone: true,
  imports: [],
  templateUrl: './top-section.component.html',
  styleUrl: './top-section.component.css'
})
export class TopSectionComponent {
  constructor(private router: Router) {}

  showCategory(categoryName: string) {
    this.router.navigate(['category', categoryName.replaceAll(' ', '')]);
  }
}
