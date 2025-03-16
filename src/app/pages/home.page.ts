import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CountriesService } from '../services/countries.service';
import { CountryCardComponent } from '../components/country-card.component';
import { FilterRegionComponent } from '../components/filter.component';
import { SearBarComponent } from '../components/search-bar.component';

@Component({
  template: `
    <section class="flex flex-col flex-lg-row justify-between pb-8">
      <search-bar />
      <filter-region />
    </section>

    <section class="flex flex-wrap gap-16 ">
      @for(country of (countries$ | async); track country.numericCode) {
      <country-card
        [country]="country"
        class="w-full h-full sm:w-1/2 lg:w-1/4"
      />
      }
    </section>
  `,
  styles: ``,
  imports: [
    CountryCardComponent,
    AsyncPipe,
    SearBarComponent,
    FilterRegionComponent,
  ],
})
export class HomePage implements OnInit {
  private readonly countriesService = inject(CountriesService);
  countries$ = this.countriesService.countries$;

  ngOnInit(): void {}
}
