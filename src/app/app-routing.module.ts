import { PlatoDetalleComponent } from './plato/plato-detalle/plato-detalle.component';
import { PlatoEdicionComponent } from './plato/plato-edicion/plato-edicion.component';
import { PlatoInicioComponent } from './plato/plato-inicio/plato-inicio.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { PlatoComponent } from './plato/plato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//definiendo rutas
const appRoutes: Routes = [
    {path: 'plato', component: PlatoComponent, children:[
        {path: '', component: PlatoInicioComponent},
        {path: 'nuevo', component: PlatoEdicionComponent},
        {path: ':id', component: PlatoDetalleComponent},
        {path: ':id/editar', component: PlatoEdicionComponent}
    ]},
    {path: 'consumo', component: ConsumoComponent},
    {path: 'consulta', component: ConsultaComponent},
    {path: '', redirectTo: 'plato', pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
