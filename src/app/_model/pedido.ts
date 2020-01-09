import { Detalle } from './detalle';
import { Cliente } from './cliente';

export class Pedido{
    _id: number;
    cliente: Cliente;
    fechaPedido: Date;
    total: number;
    detalle: Detalle[];
}