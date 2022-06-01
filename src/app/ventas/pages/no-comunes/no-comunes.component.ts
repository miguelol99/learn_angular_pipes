import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nselect
  nombre: string = 'Fernando'
  sexo: string = 'masculino'

  selectMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Eduardo', 'Rodigro', 'Miguel']
  pluralMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  // KeyValue Pipe
  persona = {
    nombe: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  //Json Pipe 
  heroes = [
    { nombre: 'superman', vuela: true },
    { nombre: 'robin', vuela: false },
    { nombre: 'spiderman', vuela: false },
  ]

  //Async Pipe
  miObservable = interval(5000) //1,2,3,4,5
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Fin de la promesa')
    }, 3500)
  })

  constructor() { }

  changePerson() {
    console.log('CambiarPersona');
    
    if (this.nombre == 'Fernando') {
      this.nombre = "Amanda"
      this.sexo = 'femenino'
    }
    else {
      this.nombre = 'Fernando'
      this.sexo = 'masculino'
    }
  }

  deleteClient() {
    this.clientes.pop()
  }

  resetArray() {
    let arr  = ['María', 'Pedro', 'Eduardo', 'Rodigro', 'Miguel']
    this.clientes = arr
  }



}
