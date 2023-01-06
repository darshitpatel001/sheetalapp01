import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './ReducerTool';

export default function CounterTool() {

    const count = useSelector(y=>y.counter);
    const disp = useDispatch();
  return (
    <div>
        {count}
        <button onClick={() =>{disp(increment())}}>Increment</button>
        <button onClick={() =>{disp(decrement())}}>Decrement</button>
    </div>
  )
}
