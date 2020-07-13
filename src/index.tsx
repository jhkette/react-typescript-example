import React from 'react';
import ReactDom from 'react-dom';

interface AppProps {
    color: string
}

// Typescript for how you do functional compaonnent
// the props - needs to have the AppProps type
// 
const App = (props: AppProps): JSX.Element => {
    return <div>{props.color}</div>
}


// class App extends React.Component<AppProps> {
//     // constructor(props: AppProps) {
//     //     super(props);
//     //     this.state = { counter: 0 }
//     // }
//     // if we initialise state here we do not need the extra interface
//     state ={ counter: 0}

//     onIncrement = (): void => {
//         this.setState({ counter: this.state.counter + 1 })
//     }
//     onDecrement = (): void => {
//         this.setState({ counter: this.state.counter - 1 })
//     }
//     render() {
//         return <div>
//             <p>{this.state.counter}</p>
//             <button onClick={this.onIncrement}>Increment</button>
//             <button onClick={this.onDecrement}>Decrement</button>

//         </div>
//     }
// }


ReactDom.render(
    <App color="red" />,
    document.querySelector("#root")
)