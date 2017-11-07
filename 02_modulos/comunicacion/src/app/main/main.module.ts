import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PadreComponent, HijoComponent],
  declarations: [PadreComponent, HijoComponent]
})
export class MainModule { }
