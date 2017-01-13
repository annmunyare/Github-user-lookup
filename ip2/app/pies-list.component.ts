import { Component } from '@angular/core';

@Component({
  selector: 'pies',
  template: `
  <div class="pies">
    <h3>Various meals of a Day!</h3>
    <div *ngFor="let currentPie of favoritePies">
      <p>{{ currentPie }}</p>
    </div>
  </div>
  `
})

export class PiesListComponent {
  favoritePies: string[] = ["Breakfast", "Lunch", "Dinner/Supper"];
}
