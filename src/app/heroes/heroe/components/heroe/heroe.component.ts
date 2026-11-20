import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  template: `
  <h1>Hola, héroe</h1>
  <dl>
    <td>Nombre:</td>
    <dd>nombre</dd>
    <td>Edad:</td>
    <dd>edad</dd>
  </dl>

  <button class="btn btn-primary">
    Cambiar nombre
  </button>

  <button class="btn btn-primary">
    Cambiar edad
  </button>
  `,
  standalone: false
})

export class HeroeComponent {

}
