import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product();

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.product.id =  this.route.snapshot.paramMap.get('id');
  }

}
