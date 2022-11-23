import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CrudContainerComponent } from './components/crud.container.component';
import { RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CrudContainerComponent
  },
];

@NgModule({
  declarations: [
    // CrudContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  providers: [],
  bootstrap: []
})
export class CrudModule { }
