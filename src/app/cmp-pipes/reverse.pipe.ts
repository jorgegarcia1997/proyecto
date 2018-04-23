import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
   
    let nuevo =  value.split('');

    nuevo.reverse();
    
    return  nuevo.join('');
    

  }

}
