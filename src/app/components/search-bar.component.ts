import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search-bar',
  template: `
    <mat-form-field class="w-full lg:w-auto" appearance="outline">
      <input
        placeholder="Search for a country..."
        matInput
        type="search"
        [(ngModel)]="value"
      />
    </mat-form-field>
  `,
  styles: `
    ::ng-deep .mat-mdc-text-field-wrapper {
      background-color: white !important;
      border:1px solid white;
      border-radius:4px !important;
      padding:0 2rem !important;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    ::ng-deep .mdc-notched-outline__leading,
    ::ng-deep .mdc-notched-outline__trailing {
      display: none !important;
    }

  `,
  imports: [MatInputModule, MatIconModule, FormsModule],
})
export class SearBarComponent {
  value: string = '';
}
