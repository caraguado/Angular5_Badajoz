import { LibrosService } from './../../services/libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google',
  templateUrl: './lista-google.component.html',
  styleUrls: ['./lista--google.component.css']
})
export class ListaGoogleComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;

  constructor(public librosService: LibrosService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    this.aLibros =
      this.librosService.buscarLibros(this.sClave);
  }

}
