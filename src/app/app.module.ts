import {AppRoutingModule } from './app-routing.module';
import { ComboBoxDirective } from './_directive/combobox.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlatoComponent } from './plato/plato.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    ConsumoComponent,
    HeaderComponent,
    FooterComponent,
    PlatoComponent,
    ComboBoxDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
