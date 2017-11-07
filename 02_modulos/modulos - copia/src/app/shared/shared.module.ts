import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PieComponent, CabeceraComponent],
  declarations: [PieComponent, CabeceraComponent, LogoComponent]
})
export class SharedModule { }
