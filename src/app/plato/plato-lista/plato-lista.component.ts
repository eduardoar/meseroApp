import { PlatoService } from './../../_service/plato.service';
import { Plato } from './../../_model/plato';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plato-lista',
  templateUrl: './plato-lista.component.html',
  styleUrls: ['./plato-lista.component.css']
})
export class PlatoListaComponent implements OnInit {

  platos: Plato[];
  filterQuery = "";

  constructor(private platoService: PlatoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.platos = this.platoService.getPlatos();
  }

  crearNuevoPlato(){
    this.router.navigate(['nuevo'], { relativeTo: this.route});
  }

}
