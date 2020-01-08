import { Plato } from './../_model/plato';
import { Injectable } from '@angular/core'

@Injectable() 
export class PlatoService{ //Clase disponible para toda la app (app.module)

    platos: Plato[] = [
        new Plato(1,'Hamburguesa','https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg',10),
        new Plato(2,'Jugo de Naranja','https://radiocumbiamix.com/wp-content/uploads/2018/11/jugp-de-natarak.jpg',5)
    ];

    constructor(){}

    getPlatos(){
        return this.platos;
    }

}