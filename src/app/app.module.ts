import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MiCmpComponent } from './mi-cmp/mi-cmp.component';
import { OtroCmpComponent } from './otro-cmp.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    MiCmpComponent,
    OtroCmpComponent,
    CmpDataBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
