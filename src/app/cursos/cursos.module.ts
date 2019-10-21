import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoComponent } from './curso/curso.component';

@NgModule({
  declarations: [
    CursoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursoComponent
  ]

})
export class CursosModule { }
