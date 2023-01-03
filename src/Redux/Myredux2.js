import { connect } from 'react-redux'
import React from 'react'

const mapStateToProps = (state) => {
   return {
    count : state.counter
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment : () => dispatch({type :'INCREMENT'})
    }
}

 function Myredux2({count,increment}) {
  return (
    <div>
        {count}
        <button onClick={increment}>Increment2</button>
    </div>
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(Myredux2);