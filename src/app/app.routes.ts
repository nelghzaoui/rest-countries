import { Router, Routes } from '@angular/router';
import { HomePage } from './pages/home.page';
import { DetailPage } from './pages/detail.page';
import { inject } from '@angular/core';
import { CountriesService } from './services/countries.service';

export const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'detail/:name',
    component: DetailPage,
    canActivate: [
      () => {
        const service = inject(CountriesService);
        const router = inject(Router);

        return service.selectedCountry() ? true : router.createUrlTree(['/']);
      },
    ],
  },
];
