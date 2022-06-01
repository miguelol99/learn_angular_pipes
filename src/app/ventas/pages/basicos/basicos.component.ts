import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [`
    .list-group-item, .list-group {
      background-color: var(--surface-b);
      color: var(--text-color);
    }
  `
  ]
})

export class BasicosComponent  {

  nombreLower: string = 'fernando'
  nombreUpper: string = 'FERNANDO'
  nombreCompleto: string = 'feRNando herERrA'
  fecha: Date = new Date()

}
