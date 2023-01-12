import PropTypes from "prop-types";
import React, { Component, PureComponent } from "react";

export default class Compo2 extends PureComponent {

  render() {
    return <div>{alert("This is PureFunction")}</div>;
  }
}
