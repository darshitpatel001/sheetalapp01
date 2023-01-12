import PropTypes from "prop-types";
import React, { Component } from "react";
import Compo2 from "./Compo2";

export default class Compo1 extends Component {
  constructor() {
    super();
    this.state = { array: [], input: "" };
  }

  MyHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  input;

  DataSubmit = (e) => {
    e.preventDefault();
    let d = [this.state.array];
    d.push(this.state.input);
    this.setState({ ...this.state, array: d });
  };
  render() {
    return (
      <div>
        <input type="text" name="input" onChange={this.MyHandler} />
        <button type="button" onClick={this.DataSubmit}>
          Add
        </button>
        {this.state.array}
        <Compo2 />
      </div>
    );
  }
}
