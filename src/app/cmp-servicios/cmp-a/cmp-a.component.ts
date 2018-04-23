import { Component, OnInit } from '@angular/core';
import{ ItemsService } from '../items.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styles: []
})
export class CmpAComponent implements OnInit {

  items: Array<string>;

  constructor(private itemsService: ItemsService) {   }

  ngOnInit() {
    this.items = this.itemsService.getItems();
  }

  guardar(item){
    this.itemsService.guardarItem(item);
  }

  enviar(item){
    this.itemsService.emitirMensaje(item);
  }

}
