import { Subject } from 'rxjs';
import { Plato } from './../_model/plato';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'


@Injectable() 
export class PlatoService{ //Clase disponible para toda la app (app.module)

    platosCambio = new Subject<Plato[]>();

    url: string = "http://localhost:3000/plato";

    /*platos: Plato[] = [
        new Plato(1,'Hamburguesa','https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg',10),
        new Plato(2,'Jugo de Naranja','https://radiocumbiamix.com/wp-content/uploads/2018/11/jugp-de-natarak.jpg',5)
    ];*/

    constructor(private http: HttpClient){}

    getPlatos(){
        return this.http.get<Plato[]>(`${this.url}/listar`); 
    }

    getPlato(id: string){
        return this.http.get<Plato>(`${this.url}/leer/${id}`); 
    }

    agregarPlato(plato: Plato){
        return this.http.post(`${this.url}/registrar`, plato).subscribe(data =>{
            if(data === 1){
                this.getPlatos().subscribe(platos =>{
                    this.platosCambio.next(platos);
                })
            }
        });
    }

    actualizarPlato(plato: Plato){
        return this.http.put(`${this.url}/actualizar`, plato).subscribe(data =>{
            if(data === 1){
                this.getPlatos().subscribe(platos =>{
                    this.platosCambio.next(platos);
                })
            }
        });
    }

    eliminarPlato(plato: Plato){
        return this.http.delete(`${this.url}/eliminar/${plato._id}`).subscribe(data =>{
            if(data === 1){
                this.getPlatos().subscribe(platos =>{
                    this.platosCambio.next(platos);
                })
            }
        });
    }

}