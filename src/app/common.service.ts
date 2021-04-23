import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }

  createProduct(product): Observable<any> {
  return  this._http.post('http://localhost:3000/products', product);

  }

  updateProduct(product){
    return this._http.put('http://localhost:3000/products/' + product.id, product)

  }

  getAllProducts():Observable<any>

  {
    return this._http.get('http://localhost:3000/products');

  } 

  deleteProduct(product){
    return this._http.delete('http://localhost:3000/products/' + product.id);
  }

}
