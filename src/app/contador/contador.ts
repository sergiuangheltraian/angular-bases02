import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `<h1>Hola {{ title }}</h1>
<hr>
<h3>Contador: {{ contador }}</h3>
<button (click)="incrementaPor(suma)">+{{ suma }}</button>
<button (click)="decrementaPor(resta)">-{{ resta }}</button>
<button (click)="reseteaContador()">reset</button>`,
  standalone: true,
})
export class contadorComponent {
  public title: string = "Sergiu Anghel";
  public contador: number = 0;
  public suma: number = 7;
  public resta: number = 3;

  //Este método recibe un número y lo suma al contador
  incrementaPor(suma: number) : void {
    this.contador += suma;
  }
  //Este método recibe un número y lo resta al contador
  decrementaPor(resta: number) : void {
    this.contador -= resta;
  }
  //Este método resetea el contador
  reseteaContador() : void {
    this.contador = 0;
  }
}
