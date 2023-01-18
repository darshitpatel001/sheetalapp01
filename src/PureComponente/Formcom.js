import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Formcom extends Component {
    state = {
        firstName : "",
        lastName : "",
        Address : {
          city:''
        }

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
        <form  class="w-50 mx-auto" onSubmit={this.mySubmit}>
            <label htmlFor="" class="form-label"> First Name : </label>
            <input value={this.state.lastName}  name="firstName" onChange={this.Handler} /><br/>
            <label htmlFor="" class="form-label"> Last Name : </label>
            <input type="text" value={this.state.lastName}  name="lastName" onChange={this.Handler}/><br/>
            <label htmlFor="" class="form-label"> Address :- </label><br/>
            <label htmlFor="" class="form-label"> City : </label>
            <input type="text" value={this.state.city}  name="city" onChange={this.Handler}/>
            {/* <input type="submit" value="save" /> */}
            <button class="form-control btn btn-outline-primary" type="button">Submit</button>
        </form>
      </div>
    )
  }
}