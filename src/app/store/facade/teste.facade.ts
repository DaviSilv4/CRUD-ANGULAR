import { Injectable } from "@angular/core";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";

import { Store, Select } from "@ngxs/store";
import { Observable } from 'rxjs';

import { TodoModel } from "src/app/modules/crud/model/crud.model";
import { TesteAdd, TesteToggle } from "../actions/teste.action";
import { CrudSelector } from "../selector/teste.selectors";


@Injectable()
export class CrudFacade{
  @Select(CrudSelector.todoItems) todoItems$: Observable<TodoModel>;
  @Select(CrudSelector.toggleItems) toggleItems$: Observable<TodoModel>;

  constructor(private store: Store){}

  @Dispatch()
  addItem(name: string){
    return new TesteAdd(name)
  }

  @Dispatch()
  toogleItem(id: number){
    return new TesteToggle(id)
  }
}
