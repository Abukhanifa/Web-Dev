import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { VacancyComponent } from './vacancy/vacancy.component';

export const routes: Routes = [
    {path: 'companies', component: CompanyListComponent},
    {path: 'companies/:id', component: VacancyComponent}
];
