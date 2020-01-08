import { PlatoService } from './../../_service/plato.service';
import { Plato } from './../../_model/plato';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-plato-detalle',
  templateUrl: './plato-detalle.component.html',
  styleUrls: ['./plato-detalle.component.css']
})
export class PlatoDetalleComponent implements OnInit {
  id: number;
  plato: Plato;

  constructor(private platoService: PlatoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) =>{
      this.id = params['id'];
      console.log(this.id);
      this.plato = this.platoService.getPlatos()[this.id];
      console.log(this.plato);
    });

  }

  editarPlato(){
    this.router.navigate(['editar'], {relativeTo: this.route});
  }

}
