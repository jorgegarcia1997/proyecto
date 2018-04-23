import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  mensajePadre: string;
  title = 'app';

  mostrarMensaje(mensaje){
    console.log(mensaje);
    this.mensajePadre = mensaje;
  }
  
}

