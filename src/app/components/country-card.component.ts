import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'country-card',
  template: `
    <div (click)="onCountrySelected(country)">
      <img src="https://flagcdn.com/ke.svg" alt="Kenya" />
      <h3>Congo</h3>
      <ul>
        <li>Population: 100000</li>
        <li>Region: Africa</li>
        <li>Capital: Nairobi</li>
      </ul>
    </div>
  `,
  styles: ``,
})
export class CountryCardComponent {
  country = input<Country>();
  @Output() countrySelected = new EventEmitter<Country>();

  constructor() {}

  onCountrySelected(country: Country) {
    this.countrySelected.emit(country);
  }
}

export interface Country {
  name: string;
}
