import { Component, Input, OnInit } from '@angular/core';
import { FooterComponent } from '../home/components/footer/footer.component';
import { Store } from '@ngrx/store';
import { selectProductById } from '../../core/redux/product';
import { ProductState } from '../../core/redux';
import { IProduct } from '../../core/interfaces/product.interface';
import { Router, RouterModule } from '@angular/router';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule, FooterComponent, ReviewsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export default class ProductDetailsComponent{
  product: IProduct | undefined;

  @Input()
  set id(productId: number) {
    this.store.select(selectProductById(productId)).subscribe((product) => {
      this.product = product;
      if (!this.product) {
        this.router.navigateByUrl('home');
      }
    });
  }

  constructor(
    private router: Router,
    private store: Store<ProductState>,
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }

  goToOriginal(){
    this.router.navigateByUrl('home');
  }
}
