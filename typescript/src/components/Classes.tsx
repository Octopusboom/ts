import React, { Component } from "react";

// Define props interface
interface CounterProps {
  initialCount?: number; // Optional prop with a default value
}

// Define state interface
interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {
    // Partial is a utility type that makes all properties of an object optional.
  static defaultProps: Partial<CounterProps> = {
    initialCount: 0,
  };

  // Initialize state
  state: CounterState = {
    count: this.props.initialCount || 0,
  };

  // Method to increment count
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  // Method to decrement count
  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  // Render method
  render() {
    return (
      <div>
        <h1>Class-Based Counter</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
