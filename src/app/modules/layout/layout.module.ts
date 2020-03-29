import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoudComponent } from './page-not-foud/page-not-foud.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoudComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class LayoutModule { }
