import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: number, args?: any, arg2: number = 0): any {
    // if(arg2){
      return value * args + arg2;
    // }
    // return value * args + args;
  }

}
