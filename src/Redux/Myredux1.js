import { connect } from 'react-redux'
import React from 'react'

const mapStateToProps = (state) => {
    return {
        count : state.counter
    }
}

function Myredux1({count,dispatch}) {

    const increment =()=>{
        dispatch({type : 'INCREMENT'})
    }
  return (
    <div>
        {count}
        <button onClick={increment}>Increment1</button>
    </div>
  )
}

export default connect(mapStateToProps)(Myredux1);