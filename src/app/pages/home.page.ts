import { Component, inject, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { CountryCardComponent } from '../components/country-card.component';
import { FilterRegionComponent } from '../components/filter.component';
import { SearBarComponent } from '../components/search-bar.component';

@Component({
  template: `
    <section class="flex flex-col lg:flex-row lg:justify-between pb-2 lg:pb-8">
      <search-bar />
      <filter-region />
    </section>

    <section class="flex flex-col items-center lg:flex-wrap gap-16 ">
      @for(country of countries(); track country.numericCode) {
      <country-card [country]="country" class="w-full h-full lg:w-1/4" />
      }
    </section>
  `,
  styles: ``,
  imports: [CountryCardComponent, SearBarComponent, FilterRegionComponent],
})
export class HomePage implements OnInit {
  private readonly countriesService = inject(CountriesService);
  countries = this.countriesService.countries;

  ngOnInit(): void {}
}
