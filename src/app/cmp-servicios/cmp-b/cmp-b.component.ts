import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styles: []
})
export class CmpBComponent implements OnInit {

  items: Array<string>;
  mensaje: string;

  constructor(private itemsService: ItemsService) {   }

  ngOnInit() {
    this.items = this.itemsService.getItems();
    this.itemsService.emitirEvento.subscribe(
      (msg) => {
        this.mensaje = msg;
      }
    )
  }

  guardar(item){
    this.itemsService.guardarItem(item);
  }

}
