import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product();

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.data
    .pipe(
      map(data => data['product']),
    )
    .subscribe(res => this.product = res);
  }

}
