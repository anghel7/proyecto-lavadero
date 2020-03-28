import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'trabajos',
    loadChildren: () => import('./modules/trabajos/trabajos.module').then(m => m.TrabajosModule)
  },
  {
    path: 'egresos',
    loadChildren: () => import('./modules/egresos/egresos.module').then(m => m.EgresosModule)
  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
