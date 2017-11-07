import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() miNombre: string;

  // Usamos el decorador Output
   @Output() eventOutPutRecibido = new EventEmitter();
  // @Output() eventOutPutRecibido: EventEmitter<any>;

  apellido: string;

  constructor() { }

  ngOnInit() {
    this.apellido = 'GOMEZ';
    // this.eventOutPutRecibido = new EventEmitter();
  }

  lanzar() {
    // Usamos el método emit
    this.eventOutPutRecibido.emit();
  }

}
