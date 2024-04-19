import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProducts from './product.reducers';

export const selectProductsState = createFeatureSelector<fromProducts.ProductsState>(
  fromProducts.productsFeatureKey
);

export const selectAllProducts =
  fromProducts.adapter.getSelectors(selectProductsState).selectAll;

export const selectProductById = (productId: number) =>
  createSelector(selectProductsState, (state) => state.entities[productId]);

export const selectLoadingProducts = createSelector(
  selectProductsState,
  (state) => state.loading
);
