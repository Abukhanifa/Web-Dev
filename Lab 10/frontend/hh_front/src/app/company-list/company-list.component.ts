import { Component, OnInit } from '@angular/core';
import { Company } from '../models';
import { CompanyService } from '../company.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-company-list',
  standalone: true,
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],

  imports: [
    RouterModule,
    CommonModule,
  ]

})
export class CompanyListComponent implements OnInit {
  // @ts-ignore
  companies: Company[] = [];
  loaded: boolean;
  constructor(private companyservice: CompanyService) { 
    this.loaded = false;
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies():void{
    this.loaded = false;
    this.companyservice.getCompanies().subscribe((data) => {
      this.companies = data;
      this.loaded = true;
    });
  }
  
}
