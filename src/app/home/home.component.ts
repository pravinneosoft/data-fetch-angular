import { product } from './../data-type';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
p=1;
  trendproduct:any;
  constructor(private popular_product:ProductService) { }

  ngOnInit(): void {
    
    this.popular_product.trendingproduct().subscribe((data)=>{
      console.log(data)
      this.trendproduct=data;
    })

  }

}
