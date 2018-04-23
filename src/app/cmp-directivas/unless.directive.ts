import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor (private tempRef :TemplateRef<any>, private vcRef:ViewContainerRef) 
  {


   }

   @Input() set appUnless(condicion: boolean){
     if (!condicion){
       this.vcRef.createEmbeddedView(this.tempRef);
     }else{
       this.vcRef.clear();
     }
   }

}
