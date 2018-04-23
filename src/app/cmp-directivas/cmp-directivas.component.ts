import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  colorLetra: string;
  mascota: string;
  centrado: boolean;
  mostrar : boolean;
  items: Array<string>;

  constructor() { 
    this.mascota = "nada";
    this.items = ["item1", "item2", "item3"];
    this.colorLetra = 'blue';
    this.centrado = true;
    this.mostrar = true;
  }

  ngOnInit() {
  }

  getStyles(){
    return{
      color: 'white',
      backgroundColor:'purple'
    };
  }

  izquierda(){

    this.centrado = !this.centrado;
    return this.centrado;

  }  
  cambiarMostrar(){
    this.mostrar = !this.mostrar;
  }
}
