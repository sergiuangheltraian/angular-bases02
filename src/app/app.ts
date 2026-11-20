import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { contadorComponent } from './contador/contador';
import { Heroe } from './heroes/heroe/components/heroe/heroe';
import {Playamar} from './centros/playamar/playamar';

@Component({
  imports: [RouterOutlet, contadorComponent, Heroe,Playamar,CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
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

