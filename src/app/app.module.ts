import { PlatoFilterPipe } from './_pipe/plato-filter.pipe';
import { PlatoService } from './_service/plato.service';
import {AppRoutingModule } from './app-routing.module';
import { ComboBoxDirective } from './_directive/combobox.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlatoComponent } from './plato/plato.component';
import { PlatoDetalleComponent } from './plato/plato-detalle/plato-detalle.component';
import { PlatoEdicionComponent } from './plato/plato-edicion/plato-edicion.component';
import { PlatoInicioComponent } from './plato/plato-inicio/plato-inicio.component';
import { PlatoListaComponent } from './plato/plato-lista/plato-lista.component';

import {DataTableModule} from "angular2-datatable";

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    ConsumoComponent,
    HeaderComponent,
    FooterComponent,
    PlatoComponent,
    ComboBoxDirective,
    PlatoDetalleComponent,
    PlatoEdicionComponent,
    PlatoInicioComponent,
    PlatoListaComponent,
    PlatoFilterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DataTableModule,
    FormsModule
  ],
  providers: [
    PlatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
