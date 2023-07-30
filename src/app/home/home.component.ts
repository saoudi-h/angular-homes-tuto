import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// todo: créer une appli chouette
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
