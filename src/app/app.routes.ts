import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'product-details/:id',
    loadComponent: () => import('./pages/product-details/product-details.component'),
  },
  {
    path: 'category/:name',
    loadComponent: () => import('./pages/category/category.component'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
