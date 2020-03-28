import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoudComponent } from './page-not-foud/page-not-foud.component';


@NgModule({
  declarations: [HomeComponent, PageNotFoudComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
