import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPowermode]'
  
})
export class PowermodeDirective {

  @HostBinding('style.color') color: string;
  @HostBinding('style.marginTop') margenTop: string;
  @HostBinding('style.marginLeft') margenIzquierda: string;
  colores:Array<string>;
  mostrar:boolean;

  constructor() { 

    this.margenIzquierda = "10px";
    this.margenTop = "0px";
    this.color = "black";
    this.colores = ['green','red','pink','blue','purple','grey','brown','yellow','orange'];
    this.mostrar = true;

  }

  @HostListener("input")cambiarcolor(){
    let random = Math.floor(Math.random()*this.colores.length);
    this.color = this.colores[random];

    
    this.margenTop = "30px";
    this.margenIzquierda = "30px";
    setTimeout (()=> {
      this.margenTop = "0px";
      this.margenIzquierda = "10px";

    },100); 
  } 



}
