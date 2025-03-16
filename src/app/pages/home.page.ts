import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { CountryCardComponent } from '../components/country-card.component';
import { FilterRegionComponent } from '../components/filter.component';
import { SearchBarComponent } from '../components/search-bar.component';

@Component({
  template: `
    <section class="flex flex-col lg:flex-row lg:justify-between pb-2 lg:pb-8">
      <search-bar (search)="onSearch($event)" />
      <filter-region (selected)="onFilter($event)" />
    </section>

    <section class="flex flex-col items-center lg:flex-wrap gap-16 ">
      @for(country of filteredCountries(); track country.numericCode) {
      <country-card [country]="country" class="w-full h-full lg:w-1/4" />
      }
    </section>
  `,
  styles: ``,
  imports: [CountryCardComponent, SearchBarComponent, FilterRegionComponent],
})
export class HomePage {
  private readonly countriesService = inject(CountriesService);
  private readonly countries = this.countriesService.countries;
  readonly query = signal('');
  readonly region = signal('');
  readonly filteredCountries = computed(() => {
    const query: string = this.query().toLowerCase();
    const region: string = this.region();

    return this.countries().filter((country) => {
      const matchesQuery =
        !query || country.name.common.toLowerCase().includes(query);
      const matchesRegion = !region || country.region === region;
      return matchesQuery && matchesRegion;
    });
  });

  onSearch(query: string) {
    this.query.set(query);
  }

  onFilter(region: string) {
    console.log(region);

    this.region.set(region);
  }
}
