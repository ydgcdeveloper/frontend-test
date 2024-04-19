import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as productsActions from './product.actions';
import { IProduct } from '../../interfaces/product.interface';

export const productsFeatureKey = 'product';

export interface ProductsState extends EntityState<IProduct> {
  loading: boolean;
}

export const adapter = createEntityAdapter<IProduct>();

export const initialState: ProductsState = adapter.getInitialState({
  loading: false,
});

export const productsReducer = createReducer(
  initialState,

  on(productsActions.loadProducts, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(productsActions.loadProductsSuccess, (state, { data }) => {
    return adapter.setAll(data, {
      ...state,
      loading: false,
    });
  }),
  on(productsActions.loadProductsFailure, (state) => ({
    ...state,
    loading: false,
  }))
);
