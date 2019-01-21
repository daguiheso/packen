import { Component, OnInit } from '@angular/core';
import { sectionBrand, sectionFull } from './store.data';

@Component({
  selector: 'packen-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  listBrand = sectionBrand;
  listBrandFull = sectionFull;

  constructor() { }

  ngOnInit() {
  }

}
