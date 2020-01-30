import { ConsultaService } from './_service/consulta.service';
import { ConsumoService } from './_service/consumo.service';
import { ClienteService } from './_service/cliente.service';
import { PlatoFilterPipe } from './_pipe/plato-filter.pipe';
import { PlatoService } from './_service/plato.service';
import {AppRoutingModule } from './app-routing.module';
import { ComboBoxDirective } from './_directive/combobox.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { HttpClientModule } from '@angular/common/http';
import { ConfirmModalComponent } from './componentes/modal/confirm-modal/confirm-modal.component';

import { ModalModule } from 'ngx-bootstrap';
import { Ng2CompleterModule } from 'ng2-completer';


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
    PlatoFilterPipe,
    ConfirmModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    Ng2CompleterModule
  ],
  providers: [
    PlatoService,
    ClienteService,
    ConsumoService,
    ConsultaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
