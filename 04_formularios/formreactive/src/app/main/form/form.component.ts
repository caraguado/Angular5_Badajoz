import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Libro {
  titulo: string ; autor: string ; editorial: string ; fecha: string;
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formLibros: FormGroup;
  aLibros: Array<Libro>;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.aLibros = [];
    this.formLibros = this.formBuilder.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      editorial: [''],
      fecha: ['2017']
    });
  }

  enviarFormLibros () {
        if (this.formLibros.valid) {
          console.log (this.formLibros.value);
          console.log (this.formLibros);
          this.aLibros.push(this.formLibros.value);
          
        }
      }

}
