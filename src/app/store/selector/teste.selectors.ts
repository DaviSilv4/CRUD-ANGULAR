import { TodoModel } from "src/app/modules/crud/model/crud.model";
import { Selector } from '@ngxs/store';
import { TodoStateModel } from "../state/teste.state";


export class CrudSelector{

  @Selector()
  static todoItems(state: TodoStateModel): TodoModel[]{
    return state.items;
  }
  @Selector()
  static toggleItems(state: TodoStateModel): TodoModel[]{
    return state.items;
  }
}
