import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ data: any }>()
);
export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: any }>()
);
