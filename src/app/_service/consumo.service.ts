import { Pedido } from './../_model/pedido';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'


@Injectable() 
export class ConsumoService{

    private url: string = 'https://localhost:3000/consumo';

    constructor(private http: HttpClient){}

    registrar(pedido: any){
        return this.http.post(`${this.url}/registrar`, pedido);
    }

}