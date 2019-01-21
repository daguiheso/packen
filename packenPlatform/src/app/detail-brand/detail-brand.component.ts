import { Component, OnInit } from '@angular/core';
import { brands } from './detail-brand.data';

@Component({
  selector: 'packen-detail-brand',
  templateUrl: './detail-brand.component.html',
  styleUrls: ['./detail-brand.component.scss']
})
export class DetailBrandComponent implements OnInit {

  listBrands = brands;

  constructor() { }

  ngOnInit() {
  }

}
