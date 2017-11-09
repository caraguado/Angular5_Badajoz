import { UserModel } from './../../models/user';
import { DepartmentoModel } from './../../models/departments';
import { Printer , PrinterModel} from './../../models/printers';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  aImpresoras: Array<Printer>;
  isColor: boolean;
  isClaro: boolean;
  impresoraSeleccionada: Printer;

  aDepartamentos: Array<DepartmentoModel>;
  departamentoSeleccionado= DepartmentoModel;

  mostrarFinal: boolean;
  user: UserModel;
  print: string;
  sName: string;

  @ViewChild('formulario') formulario: ElementRef;

  constructor() { }

  ngOnInit() {
    this.aImpresoras =  [new PrinterModel( 1 , 'hp', 'aa'), new PrinterModel( 1 , 'asus', 'bb'),  {id: 2 , modelo: 'acer', tipo: 'cc' } ];
    this.aDepartamentos =  [new DepartmentoModel('aaa', 'bbb')];

    this.user = new UserModel( 'leo', 'carlos', 'amigo');

    console.log(this.formulario);
  }

  avisarPrint() {}

  avisarDepartamento() {

  }

  enviar() {
  this.mostrarFinal = true;
  }

  borrar() {
    console.log("borrar");
    this.formulario.reset();
  }
}
