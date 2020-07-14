import { Todo, Action, ActionTypes } from "../actions";

// We are using the 'Action' type here - imported from the '../actions/index 
// file. 
export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchToDos:
      return action.payload;
    case ActionTypes.deleteToDo:
        return state.filter((todo: Todo)=> todo.id !== action.payload)
    default:
      return state;
  }
};
