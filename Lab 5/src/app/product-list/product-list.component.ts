import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  // @ts-ignore
  public categoryId: number 

  constructor(private route: ActivatedRoute){ }

  ngOnInit() {
    const routep = this.route.snapshot.paramMap;
    this.categoryId = Number(routep.get('categoryId'));
      
  }

  

 
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/