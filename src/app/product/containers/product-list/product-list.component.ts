import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []; 

  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.data.pipe(
      map(data => data['products'])
    ).subscribe(res => this.products = res);
  }

}
