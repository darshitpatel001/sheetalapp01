import React from 'react'
import PropTypes from 'prop-types';

export default function DefaultProps(props) {
  return (
    <div>I am {props.name}</div>
  )
}
DefaultProps.propTypes  = {
    name: 'Darshit'
  };
  DefaultProps.propTypes = {
    name: PropTypes.string
  };