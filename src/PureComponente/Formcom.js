import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Formcom extends Component {
    state = {
        firstName : "",
        lastName : "",
        Address : {}

    }

     mySubmit = (e)=> {
        e.preventDefault();
        console.log(this.state);
    }

    Handler = (e)=> {
        this.setState({...this.state, [e.target.name] : e.target.value});
    }

  render() {
    return (
      <div>

        <form onSubmit={this.mySubmit}>

            <input type="text" value={this.state.firstName} name="firstName" onChange={this.Handler} />
            <input type="text" value={this.state.lastName}  name="lastName" onChange={this.Handler}/>
            <input type="submit" value="save" />

        </form>

      </div>
    )
  }
}