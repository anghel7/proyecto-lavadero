import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEgresoViewComponent } from './components/lista-egreso-view/lista-egreso-view.component';
import { CrearEgresoFormComponent } from './components/crear-egreso-form/crear-egreso-form.component';


const routes: Routes = [
  {
    path: 'lista',
    component: ListaEgresoViewComponent
  },
  {
    path: 'crear',
    component: CrearEgresoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EgresosRoutingModule { }
