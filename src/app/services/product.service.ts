import { HttpClient } from '@angular/common/http';
import { product } from './../data-type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  trendingproduct(){
    return this.http.get<product[]>('http://localhost:3000/products');
  }
  searchproduct(query:string){
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`);
  }
}
