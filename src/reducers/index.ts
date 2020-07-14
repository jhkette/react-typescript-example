import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { Todo } from "../actions";
// you expect combinereducer to return an object - todos
// with an array of todos. Useful also because interface explains
// what is in the store
export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
