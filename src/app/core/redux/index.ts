import { isDevMode } from '@angular/core';
import {
  MetaReducer
} from '@ngrx/store';
import * as productReducer from './product';


export interface ProductState {
  productState: productReducer.ProductsState,
}

export const metaReducers: MetaReducer<ProductState>[] = isDevMode() ? [] : [];
