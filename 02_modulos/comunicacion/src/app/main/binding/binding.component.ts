import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  sNombreInput: string;

  sNumber: number;

  isSpanish: boolean;

  constructor() { }

  ngOnInit() {
    this.sNombreInput= "Almudena";
    this.sNumber = 69 ;
    this.isSpanish = true;
  }

  btnBorrar() {
    this.sNombreInput = '';
  }
}
