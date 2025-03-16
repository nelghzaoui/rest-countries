import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'filter-region',
  template: `
    <mat-form-field>
      <mat-label>Filter by Region</mat-label>
      <mat-select>
        @for (region of regions; track region) {
        <mat-option [value]="region">{{ region }}</mat-option>
        }
      </mat-select>
    </mat-form-field>
  `,
  styles: ``,
  imports: [MatSelectModule],
})
export class FilterRegionComponent {
  regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
}
