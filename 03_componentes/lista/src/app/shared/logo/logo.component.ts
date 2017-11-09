import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor() { }

  public sLogo: string;

  ngOnInit() {
    this.sLogo = '../../assets/angular-logo.svg';
  }

}
