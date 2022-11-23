import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstState } from './store/state/teste.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrudContainerComponent } from './modules/crud/components/crud.container.component';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';





@NgModule({
  declarations: [
    AppComponent,
    CrudContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([FirstState]),
    NgxsDispatchPluginModule.forRoot(),
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
