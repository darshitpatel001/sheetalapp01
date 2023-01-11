import PropTypes from 'prop-types'
import React, { Component ,PureComponent } from 'react'

export default class Compo2 extends PureComponent {
  static propTypes = {second: third}

  render() {
    alert('This is PureFunction')
    return (
      <div>
        
      </div>
    )
  }
}
