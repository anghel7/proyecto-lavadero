import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTrabajoViewComponent } from './components/lista-trabajo-view/lista-trabajo-view.component';
import { CrearTrabajoFormComponent } from './components/crear-trabajo-form/crear-trabajo-form.component';
import { VerTrabajoViewComponent } from './components/ver-trabajo-view/ver-trabajo-view.component';


const routes: Routes = [
  {
    path: 'lista',
    component: ListaTrabajoViewComponent
  },
  {
    path: 'crear',
    component: CrearTrabajoFormComponent
  },
  {
    path: 'ver',
    component: VerTrabajoViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabajosRoutingModule { }
