import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudContainerComponent } from './modules/crud/components/crud.container.component';

const routes: Routes = [
  {
    path: 'inicio2', loadChildren: () => import('./modules/crud/crud.module').then(m => m.CrudModule)
  },
  // {
  //   component: CrudContainerComponent,
  //   path: 'inicio'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
