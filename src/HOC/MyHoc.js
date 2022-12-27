import React from 'react'
import PropTypes from 'prop-types'
import HeaderHoc from './HeaderHoc'
import FooterHoc from './FooterHoc';


const MyHoc = (Component) => () => (
    <div>
        <HeaderHoc/>
      <div >
        <Component />
      </div>
      
      <FooterHoc/>
    </div>
  );

export default MyHoc;