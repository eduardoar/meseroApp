import { Pedido } from './../_model/pedido';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConsultaService{

    private url: string = 'https:localhost:3000/consulta';

    pedidos: Pedido[] = [];

    constructor(private http: HttpClient){}

    getPedidos(tipoRango: string, fecha1: string, fecha2: string){
        return this.http.get<Pedido[]>(`${this.url}/listar/${tipoRango}/${fecha1}/${fecha2}`);
    }

}