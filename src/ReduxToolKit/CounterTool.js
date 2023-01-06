import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementdecrement} from './ReducerTool';

export default function CounterTool() {

    const count = useSelector(y=>y.counter);
    const disp = useDispatch();

    // const [data, setdata] = useState(0);

    // const mytext = () => {
    //   setdata(e.target.value)
    // }

  return (
    <div>
        {count.value}
        <button onClick={() =>{disp(increment())}}>Increment</button>
        <button onClick={() =>{disp(decrement())}}>Decrement</button>
        
        {/* <input type='text' onChange={mytext}/>
        <button onClick={() =>{disp(incrementdecrement(data))}}></button> */}
    </div>
  )
}
