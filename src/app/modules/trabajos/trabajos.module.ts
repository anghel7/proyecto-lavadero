import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajosRoutingModule } from './trabajos-routing.module';
import { CrearTrabajoFormComponent } from './components/crear-trabajo-form/crear-trabajo-form.component';
import { VerTrabajoViewComponent } from './components/ver-trabajo-view/ver-trabajo-view.component';
import { ListaTrabajoViewComponent } from './components/lista-trabajo-view/lista-trabajo-view.component';


@NgModule({
  declarations: [CrearTrabajoFormComponent, VerTrabajoViewComponent, ListaTrabajoViewComponent],
  imports: [
    CommonModule,
    TrabajosRoutingModule
  ]
})
export class TrabajosModule { }
