import { Component, Input } from '@angular/core';
import { Review } from '../../../../core/interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent {
  @Input() review: Review | undefined;

  starsFilled(size: any) {
    return Array.from({ length: size }, (_, index) => index + 1);
  }

  starsBlank(size: any) {
    return Array.from({ length: Math.ceil(5 - size) }, (_, index) => index + 1);
  }
}
