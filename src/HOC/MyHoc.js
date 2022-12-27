import React from 'react'
import PropTypes from 'prop-types'
import HeadersHoc from './HeaderHoc'
import FooterHoc from './FooterHoc';

const MyHoc = (Component) => () => (
    <div>
      <HeadersHoc />
      <FooterHoc />
    </div>
  );

export default MyHoc;