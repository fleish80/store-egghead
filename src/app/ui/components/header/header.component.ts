import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo = 'assets/logo.svg';
  title = 'Store';
  links = [{
    label: 'Products',
    url: '/products'
  }]

  constructor() { }

  ngOnInit() {
  }

}
