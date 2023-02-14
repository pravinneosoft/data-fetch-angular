import { product } from './../data-type';
import { ProductService } from './../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
   searchvalue:undefined | product[]
  constructor(private activeroute:ActivatedRoute , private searchproducts:ProductService) { }

  ngOnInit(): void {
    let querys=this.activeroute.snapshot.paramMap.get('query');
    // console.log(querys)
    querys && this.searchproducts.searchproduct(querys).subscribe((result)=>{
        this.searchvalue=result;
     })
  }

}
