import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CrudContainerComponent } from './components/crud.container.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CrudContainerComponent
  }
];

@NgModule({
  declarations: [
    CrudContainerComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: []
})
export class CrudModule { }
