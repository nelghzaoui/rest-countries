import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule],
  template: `
    <header
      class="border border-gray-300 shadow-md bg-gray-100 px-2 py-4 lg:px-16 lg:py-0 relative z-10"
    >
      <nav class="text-black py-4 px-2 ">
        <ul class="flex justify-between">
          <li class="bold">Where in the world?</li>
          <li class="flex align-items-center justify-start ">
            <mat-icon
              class="mr-2"
              aria-hidden="false"
              aria-label="Example user verified icon"
            >
              dark_mode
            </mat-icon>
            <span>Dark Mode</span>
          </li>
        </ul>
      </nav>
    </header>

    <main class="p-4 lg:px-16">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: `
    header,
    main,
    footer {
      color: hsl(200, 15%, 8%);
    }

    main {
      background-color: hsl(0, 0%, 98%);
    }
  `,
})
export class AppComponent {
  title = 'rest-countries';
}
