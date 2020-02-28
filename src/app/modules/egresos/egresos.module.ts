import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EgresosRoutingModule } from './egresos-routing.module';
import { CrearEgresoFormComponent } from './components/crear-egreso-form/crear-egreso-form.component';
import { ListaEgresoViewComponent } from './components/lista-egreso-view/lista-egreso-view.component';


@NgModule({
  declarations: [CrearEgresoFormComponent, ListaEgresoViewComponent],
  imports: [
    CommonModule,
    EgresosRoutingModule
  ]
})
export class EgresosModule { }
