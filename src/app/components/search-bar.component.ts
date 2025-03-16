import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search-bar',
  template: `
    <mat-form-field class="example-form-field">
      <mat-label>Search for a country...</mat-label>
      <input matInput type="search" [(ngModel)]="value" />
    </mat-form-field>
  `,
  styles: ``,
  imports: [MatInputModule, MatIconModule, FormsModule],
})
export class SearBarComponent {
  value: string = '';
}
