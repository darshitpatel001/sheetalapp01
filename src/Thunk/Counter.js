import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asncminus, Minus, Plus } from './Action/Action';

export default function Counter() {
    const data = useSelector(y=y.Counter);

    const myDis = useDispatch();

    const increment  = () =>{
        myDis(Plus())
    }

    const decrement  = () =>{
        myDis(Minus())
    }

    const decrementCounter  = () =>{
        myDis(asncminus())
    }
  return (
    <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={decrementCounter}>- Counter</button>
    </div>
  )
}
