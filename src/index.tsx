import React from 'react';
import ReactDom from 'react-dom';

interface AppProps {
    color: string
}
interface AppState {
    counter: number
}

// interfaces here are added as generics
// We need to add a props interface as a generic
// We need to add to add a state interface
// We only need to add an interface as its extennding the
// react component class and we are using a constructor 
// to accesss the state property in the parent class - that expects
// a class - it needs to be described by a generic object S
class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = { counter: 0 }
    }

    onIncrement = (): void => {
        this.setState({ counter: this.state.counter + 1 })
    }
    onDecrement = (): void => {
        this.setState({ counter: this.state.counter - 1 })
    }
    render() {
        return <div>
            <p>{this.state.counter}</p>
            <button onClick={this.onIncrement}>Increment</button>
            <button onClick={this.onDecrement}>Decrement</button>

        </div>
    }
}


ReactDom.render(
    <App color="red" />,
    document.querySelector("#root")
)