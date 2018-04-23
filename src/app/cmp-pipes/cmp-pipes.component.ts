import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {

  texto: string;
  numero: number;
  mascotas: Array<string>;
  fecha: Date;
  lema: string;
  mensaje;

  constructor() { 
    this.numero = 4.435464;
    this.texto = 'Hola Mundo';
    this.mascotas = ['Perro','Gatue'];
    this.fecha = new Date(2000,3,13);
    this.lema = 'Escuchad mis palabras, sed testigos de mi juramento ... La noche se avecina, ahora empieza mi guardia. No terminará hasta el día de mi muerte. No tomaré esposa, no poseeré tierras, no engendraré hijos. No llevaré corona, no alcanzaré la gloria. Viviré y moriré en mi puesto. Soy la espada en la oscuridad. Soy el vigilante del Muro.'
    this.mensaje = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('un mensaje muy importante...');
    }, 2000);
  });
}

  addMascota(nuevaMascota){
    this.mascotas.push(nuevaMascota);
  }

  ngOnInit() {
  }

}
