import { Component, OnInit } from '@angular/core';
//import { NgIf } from '../../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  //imports: [NgIf],
  selector: 'app-playamar',
  styleUrl: './playamar.css',
  templateUrl: './playamar.html',
})
export class Playamar implements OnInit{

  centros: Centro[] = [
    {
      centro_educativo: 'IES Los Manantiales',
      localidad: 'Torremolinos',
      familias: ['DAW', 'DAM', 'ASIR'],
      centro: 'IES LOS MANANTIALES',
      logo: 'https://pbs.twimg.com/profile_images/1477969119358115845/Iecaf4ta_400x400.jpg'
    },
    {
      centro_educativo: 'IES Playamar',
      localidad: 'Torremolinos',
      familias: ['DAW', 'DAM', 'ASIR'],
      centro: 'IES PLAYAMAR',
      logo: 'https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png'
    },
    {
      centro_educativo: 'IES Campanillas',
      localidad: 'Málaga',
      familias: ['DAW', 'DAM', 'ASIR'],
      centro: 'IES CAMPANILLAS',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDEgVYBHbrUu20AC_d-cjGP0C4wdZikzjb32XgrsXqh5HREdsBjHA_Xn4&s=10'
    }
  ];

  pila: Centro[] = [];
  posicion: number = 0;

   get centroActual(): Centro | undefined {
    return this.centros[this.posicion];
  }

  // Mostrar el centro anterior
  anterior(): void {
    if (this.posicion > 0) {
      this.posicion--;
    }
  }

  // Mostrar el centro siguiente
  posterior(): void {
    if (this.posicion < this.centros.length - 1) {
      this.posicion++;
    }
  }

  // Eliminar el centro seleccionado y guardarlo en la pila
  eliminar(): void {
    if (this.centros.length === 0) {
      return;
    }
    const eliminado = this.centros.splice(this.posicion, 1)[0];

    this.pila.push(eliminado);
    if (this.posicion >= this.centros.length && this.posicion > 0) {
      this.posicion--;
    }
  }

  insertar(): void {
    if (this.pila.length === 0) {
      return;
    }
    const recuperado = this.pila.pop()!;
    this.centros.splice(this.posicion, 0, recuperado);
  }

  public esplayamar: boolean = true;
  public centro_educativo: string = "IES Playamar";
  public localidad: string = "Torremolinos";
  public familias: string[] = ["Informática y Comunicaciones", "Transporte y Mantenimiento de Vehículos"];
  public centro: string = "IES PLAYAMAR";
  public logo: string = "https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png";

  cambiarDatos() {
    if (this.esplayamar) {
    this.centro_educativo = "IES Jacaranda";
    this.localidad = "Churriana";
    this.familias = ["Hostelería", "Turismo"];
    this.centro = "IES JACARANDA";
    this.logo = "https://pbs.twimg.com/profile_images/3059231666/21dd362313c922734bf3297b69b2da14_400x400.jpeg"
    } else {
      this.centro_educativo = "IES Playamar";
      this.localidad = "Torremolinos";
      this.familias = ["Informática y Comunicaciones", "Transporte y Mantenimiento de Vehículos"];
      this.centro = "IES PLAYAMAR";
      this.logo = "https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png"
    }
  }
  deshacerCambios() {
    this.centro_educativo = "IES Playamar";
    this.localidad = "Torremolinos";
    this.familias = ["Informática y Comunicaciones", "Transporte y Mantenimiento de Vehículos"];
    this.centro = "IES PLAYAMAR";
    this.logo = "https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png"
  }

  ngOnInit(): void {

  }
}

export interface Centro {
  centro_educativo: string,
  localidad: string,
  familias: string[],
  centro: string,
  logo: string
}
