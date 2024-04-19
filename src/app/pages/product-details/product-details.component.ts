import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { FooterComponent } from '../home/components/footer/footer.component';
import { Store } from '@ngrx/store';
import { loadProducts, selectProductById } from '../../core/redux/product';
import { ProductState } from '../../core/redux';
import { IProduct } from '../../core/interfaces/product.interface';
import { Router } from '@angular/router';
import { ReviewsComponent } from './components/reviews/reviews.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FooterComponent, ReviewsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export default class ProductDetailsComponent implements OnInit {
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

  productId: number | undefined;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private store: Store<ProductState>
  ) {}

  ngOnInit(): void {}

  goToOriginal(){
    this.router.navigateByUrl('home');
  }
}
