import { Component, OnInit } from '@angular/core';
import {Company, Vacancy} from '../models';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { CompanyService } from '../company.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancy',
  standalone: true,
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css'],

  imports: [
    RouterModule,
    CommonModule
  ]
})
export class VacancyComponent implements OnInit {
  // @ts-ignore
  vacancy: Vacancy[] = [];
  // @ts-ignore
  name: string;
  constructor(private route: ActivatedRoute,
              private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.getCompanyVacancies();
  }

  getCompanyVacancies(): void {
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.companyService.getCompanyVacancies(id).subscribe((data) => {
        this.vacancy = data;
      });
    });
  }
}