import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <header>
      <nav class="bg-white-500 text-black border-bottom p-4">
        <ul class="flex justify-between">
          <li class="bold">Where in the world?</li>
          <li>Dark Mode</li>
        </ul>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: `
    header,
    main,
    footer {
      padding: 0 2rem;
      color: hsl(200, 15%, 8%);
    }

    main {
      background-color: hsl(0, 0%, 52%);
    }
  `,
})
export class AppComponent {
  title = 'rest-countries';
}
