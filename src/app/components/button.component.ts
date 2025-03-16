import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'button-link',
  imports: [RouterLink, MatIconModule],
  template: `
    <div
      class="relative bg-white border border-white hover:bg-amber-300 shadow-xl px-8 py-1 inline-block"
    >
      <a
        href="#"
        [routerLink]="link()"
        class="before:content-[''] before:absolute before:inset-0"
        >{{ label() }}</a
      >
    </div>
  `,
  styles: ``,
})
export class ButtonComponent {
  link = input<string>();
  label = input<string>();
}
