import React, { Component } from "react";

export default class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  handleClick = () => {
    this.setState(({ counter : this.state.counter +1}));
  }
  render() {
    if (this.state.counter === 3) {
      throw new Error("I crashed!");
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}
