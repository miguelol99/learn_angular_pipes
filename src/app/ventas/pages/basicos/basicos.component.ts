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

  nombre: string = 'feRNAndO hERRerA'
  fecha: Date = new Date()

}
