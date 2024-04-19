import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private PRODUCT_FILE_DATA_PATH = 'assets/data/DatosScraping.json';

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  loadProducts() {
    return this.http.get<any[]>(this.PRODUCT_FILE_DATA_PATH).pipe(
      map((products: { [key: string]: any }) => {
        const productArray = Object.keys(products).map(key => products[key]);
        return productArray.map((product: any, index: number) => ({ ...product, id: index }));
      })
    );
  }

  readJsonFile(filePath: string): Observable<any> {
    return this.http.get<any>(filePath);
  }
}
