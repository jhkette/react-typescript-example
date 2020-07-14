import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteToDo } from '../actions';
import { StoreState } from "../reducers";

// interface for props
// WE ARE ALWAYS GOING TO NEED THIS INTERFACE WITH A CLASS
// OR FUNCTIONAL COMPONENT THAT TAKES PROPS. THIS IS THEN
// ADDED AS A GENERIC 

interface AppProps {
  todos: Todo[];
  // fetchToDos actually returns a promise
  // which is a function - we are using redux thunk to fetch data
  // it is NOT returning an action object which is what the type
  // definition file expects. If we add 'Function' as opposed
  // to typeof fetchToDo as a workaround the problem is solved.
  // we do not need to do this for deleteToDO as it simply returns
  // an action object
  fetchTodos: Function;
  deleteToDo: typeof deleteToDo;
}
// AGAIN WE NEED TO ADD APPSTATE INTERFACE HERE AS WE ARE MAKING
// USE OF LOCAL STATE, WE ADD AS GENERIC 
interface AppState {
  fetching: Boolean
}

class _App extends React.Component<AppProps, AppState>{
  // we are using a constructor to declare state here
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteToDo(id);
  };
  // the method will return an array of JSX.Elements 
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
          <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
            {todo.title}
          </div>
      );
    });
  }
  render() {
    return (
      <div>
        {this.state.fetching ? 'LOADING' : null}
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};
// redux connect function that has connect function
// with mapStateToProps and the actions we are used.
//It is called on the component itself _App. We export this
// as App
export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteToDo }
)(_App);

// export default App;
