import axios from 'axios'
// we need to import the dispatch interface from the redux type library
import {Dispatch} from 'redux'
import {ActionTypes} from './types'

// interface for todos
// this is for the object that comes back from API
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
// interface that is meant to describe dispatch action 
export interface FetchToDosAction {
    type: ActionTypes.fetchToDos;
    payload: Todo[]

}

const url = 'https://jsonplaceholder.typicode.com/todos/'
export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        // add an array of ToDo - s for type safety
        const response = await axios.get<Todo[]>(url)

        // this generic type - make sure you are always passing in
        // an action that has the right action and paylod
        // this means you can't accidently add 'delete' todos etc.
        // or not get back an array of todos from payload
        dispatch<FetchToDosAction>({
            type: ActionTypes.fetchToDos,
            payload: response.data
        })

    }
}