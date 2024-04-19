import { IProduct } from './../../core/interfaces/product.interface';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductState } from '../../core/redux';
import { Store } from '@ngrx/store';
import { selectProductsByCategory } from '../../core/redux/product';
import { NavbarComponent } from '../home/components/navbar/navbar.component';
import { FooterComponent } from '../home/components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export default class CategoryComponent {
  products!: (IProduct | undefined)[];

  @Input()
  set name(categoryName: string) {
    this.store
      .select(selectProductsByCategory(categoryName?.replaceAll(' ', '')))
      .subscribe((products) => {
        this.products = products;
        if (!this.products) {
          this.router.navigateByUrl('home');
        }
      });
  }

  constructor(private router: Router, private store: Store<ProductState>) {}
}
