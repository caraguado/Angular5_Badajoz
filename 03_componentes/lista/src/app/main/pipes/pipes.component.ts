import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  sNombre: string;
  nNumber: number;
  nPrecio: number;
  oDatos: {autor: string ; libro: string};
  dFecha: Date;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe perez';
    this.nNumber = 13;
    this.nPrecio = 180;
    this.dFecha = new Date();

    this.oDatos = {autor : 'fran', libro : 'tittttt'};
  }

}
