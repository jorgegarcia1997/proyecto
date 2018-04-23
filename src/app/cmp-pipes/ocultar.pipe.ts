import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    let exp = new RegExp("no","gi");

    value = value.replace(exp, "&");

    return value;

  }

}
