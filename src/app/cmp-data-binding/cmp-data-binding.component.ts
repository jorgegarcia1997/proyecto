import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})

export class CmpDataBindingComponent implements OnInit {
  @Input() nombre: string;
  @Input() apellido: string;
  escribir: boolean;
 @Output('unEvento') miEvento;
  
  constructor() { 
    this.miEvento = new EventEmitter<string>();
    this.nombre = "Jorge";
    this.apellido = "Garcia"
    this.escribir = true;
  }

  ngOnInit() {
  }

  habilitarEdicion(){
    this.escribir = !this.escribir;
    this.miEvento.emit(`Se ha ${this.escribir ? 'deshabilitado' : 'habilitado'} la edicion.`);
  }

  nombreCompleto(){
    return this.nombre + ' ' + this.apellido;
  }

  cambiarNombreCompleto(nombreCompleto){
    let nombreYApellido = nombreCompleto.split(" ");
    this.nombre = nombreYApellido.shift();
    this.apellido = nombreYApellido.join(' ');
  }


}
