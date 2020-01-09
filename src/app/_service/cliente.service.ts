import { Cliente } from './../_model/cliente';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'


@Injectable() 
export class ClienteService{ //Clase disponible para toda la app (app.module)

    url: string = "http://localhost:3000/cliente";

    constructor(private http: HttpClient){}

    getClientes(){
        return this.http.get<Cliente[]>(`${this.url}/listar`);
    }

    registrar(nomreCliente: string){
        let cliente: Cliente = new Cliente();
        cliente.nombreCompleto = nomreCliente;
        cliente.dni = '00000000';
        return this.http.post<Cliente>(`${this.url}/registrar`,cliente)
    }

}