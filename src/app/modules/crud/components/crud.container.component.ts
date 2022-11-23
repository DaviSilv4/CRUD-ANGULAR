import { Component, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { Observable } from 'rxjs';
import { TesteAdd, TesteToggle } from 'src/app/store/actions/teste.action';
import { CrudFacade } from 'src/app/store/facade/teste.facade';
import { CrudSelector } from 'src/app/store/selector/teste.selectors';
import { TodoModel } from '../model/crud.model';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.container.component.html',
  styleUrls: ['./crud.container.component.scss'],
  providers: [CrudFacade]
})
export class CrudContainerComponent implements OnInit {

  name!: string

  @Select(CrudSelector.todoItems) todoItems$: Observable<TodoModel>;
  @Select(CrudSelector.toggleItems) toggleItems$: Observable<TodoModel>;

  constructor(public todoFacade: CrudFacade) { }

  ngOnInit() {
  }

  addItem(){
    this.todoFacade.addItem(this.name);
  }

  toggleItem(){
    this.todoFacade.toogleItem(1);
  }
}
