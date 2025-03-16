import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: '',
  imports: [MatIconModule, MatButtonModule],
  template: `
    <button mat-fab extended>
      <mat-icon>favorite</mat-icon>
      Basic
    </button>

    @if(country(); as c) {
    <img
      class="w-full object-cover"
      [src]="c.flags.svg"
      [alt]="c.name.common"
    />
    <h1 class="text-xl font-semibold">
      {{ c.name.common }}
    </h1>
    <ul class="text-gray-600 mt-2">
      <li>Native Name: {{ c.name.nativeName }}</li>
      <li>Population: {{ c.population }}</li>
      <li>Region: {{ c.region }}</li>
      <li>Sub Region: {{ c.subregion }}</li>
      <li>Capital: {{ c.capital }}</li>
    </ul>

    <!-- <ul class="text-gray-600 mt-2">
      <li>Top Level Domain: {{ c.tld.first() }}</li>
      <li>Currencies: {{ c.currencies.first().name }}</li>
      <li>Languages: {{ c.languages }}</li>
    </ul> -->

    <h2>Border Countries:</h2>

    <ul>
      <li></li>
    </ul>
    }
  `,
  styles: ``,
})
export class DetailPage {
  private readonly countriesService = inject(CountriesService);

  country = this.countriesService.selectedCountry;
}
