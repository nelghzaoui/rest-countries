import { Component } from '@angular/core';
import { CountryCardComponent } from '../components/country-card.component';

@Component({
  template: ` <country-card></country-card> `,
  styles: ``,
  imports: [CountryCardComponent],
})
export class HomePage {}
