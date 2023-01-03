import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
     count : state.counter
    }
 }

const Increment = ()=> {
    return  { type : 'INCREMENT'}
}
function Myredux3(data) {

  return (
    <div>
        {data.count}
        <button onClick={()=>{
            data.Increment()
        }}>Increment3</button>
    </div>
  )
}

export default connect(mapStateToProps,{Increment})(Myredux3);