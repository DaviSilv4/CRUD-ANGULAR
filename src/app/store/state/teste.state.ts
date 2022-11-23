import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";
import { TodoModel } from "src/app/modules/crud/model/crud.model";
import { TesteAdd, TesteToggle } from "../actions/teste.action";

export interface TodoStateModel{
  items: TodoModel[];
}

@State<TodoStateModel>({
  name: 'crud'
})

@Injectable()
export class FirstState {

  @Action(TesteAdd)
  addItem(ctx: StateContext<TodoStateModel>, action: TesteAdd){
    const {name} = action;

    const state = ctx.getState();

    const todoItem: TodoModel = {
      id: Math.floor(Math.random() * 1000),
      name: name,
      isDone: false,
    }

    ctx.setState({
      ...state,
      items: [...state.items, todoItem]
    })

    // ctx.patchState({
    //   ...state,
    //   items: { ...state.items, ...action}
    //   })

    console.log(ctx.getState());
  }

  @Action(TesteToggle)
  toggleItem(ctx: StateContext<TodoStateModel>, action: TesteToggle){
    const state = ctx.getState();

    const newTodoItem = state.items.map((item) =>{
      if(item.id === action.id){
        return{
          ...item,
          isDone: !item.isDone
        }
      }

      return item
    })

    ctx.patchState({
      ...state,
      items: { ...newTodoItem}
    })
  }
}
