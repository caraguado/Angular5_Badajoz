import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista4',
  templateUrl: './lista4.component.html',
  styleUrls: ['./lista4.component.css']
})
export class Lista4Component implements OnInit {

    aIdeas4: Array<string>;
    sIdea4: string;
    constructor() { }
    ngOnInit() {
      this.aIdeas4 = new Array();
    }
    addIdea4() {
      this.aIdeas4.push(this.sIdea4);
    }

}
