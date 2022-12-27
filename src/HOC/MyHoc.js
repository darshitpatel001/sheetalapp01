import React from 'react'
import PropTypes from 'prop-types'
import HeadersHoc from './HeaderHoc'

const MyHoc = (Component) => () => (
    <div>
      <HeadersHoc />
    </div>
  );

export default MyHoc;