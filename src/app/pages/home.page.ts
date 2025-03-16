import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { CountryCardComponent } from '../components/country-card.component';
import { FilterRegionComponent } from '../components/filter.component';
import { SearBarComponent } from '../components/search-bar.component';

@Component({
  template: `
    <section class="flex flex-col lg:flex-row lg:justify-between pb-2 lg:pb-8">
      <search-bar (search)="onSearch($event)" />
      <filter-region />
    </section>

    <section class="flex flex-col items-center lg:flex-wrap gap-16 ">
      @for(country of searchedCountries(); track country.numericCode) {
      <country-card [country]="country" class="w-full h-full lg:w-1/4" />
      }
    </section>
  `,
  styles: ``,
  imports: [CountryCardComponent, SearBarComponent, FilterRegionComponent],
})
export class HomePage {
  private readonly countriesService = inject(CountriesService);
  private readonly countries = this.countriesService.countries;
  readonly query = signal('');
  readonly searchedCountries = computed(() => {
    const query: string = this.query().toLowerCase();

    if (!query) return this.countries();

    return this.countries().filter((country) =>
      country.name.common.toLowerCase().includes(query)
    );
  });

  onSearch(query: string) {
    this.query.set(query);
  }
}
