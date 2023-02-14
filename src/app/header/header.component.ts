import { product } from './../data-type';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menutype:string='default';
  
  searchvalues:undefined | product[]
  constructor(private routes: Router , private productsearch:ProductService) {}

  ngOnInit(): void {

    

  } 
  searchproducts(query:KeyboardEvent){
    if(query){
      const element= query.target as HTMLInputElement
    this.productsearch.searchproduct(element.value).subscribe((data)=>{
      this.searchvalues=data;
     if(data.length>5){
      data.length=5;
     }
    })}
  }
 
  searchsubmit(val:string){
    // console.log(val)
    this.routes.navigate([`search/${val}`])
  }
}
