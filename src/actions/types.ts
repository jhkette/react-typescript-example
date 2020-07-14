import {FetchToDosAction, DeleteToDoAction} from './todos'


// we do not need to assign anything to this. This will
// automatically be assigned with the value 1, then2 etc
export enum ActionTypes {
  fetchToDos,
  deleteToDo,
}

// type union - we create a type Action for different type of actions
// to be used in reducer
export type Action = FetchToDosAction | DeleteToDoAction
