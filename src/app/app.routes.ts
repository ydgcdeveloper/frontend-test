import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'product-details/:id',
    loadComponent: () => import('./pages/product-details/product-details.component'),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/home/home.component'),
  },
];
