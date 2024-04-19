import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from "rxjs";
import * as productActions from './product.actions';
import { CommonService } from "../../../services/common.service";

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productActions.loadProducts),
      exhaustMap(() =>
        this.productService
          .loadProducts()
          .pipe(
            map((data) =>
            productActions.loadProductsSuccess({
                data,
              })
            ),
            catchError((error) =>
              of(productActions.loadProductsFailure({ error }))
            )
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private productService: CommonService
  ) {}
}