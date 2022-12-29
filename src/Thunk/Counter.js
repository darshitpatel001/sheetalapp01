import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asncminus, Minus, Plus } from './Action/Action';

export default function Counter() {
    const data = useSelector(y => y.counter);

    const myDis = useDispatch();

    const increment  = () =>{
        myDis(Plus())
    }

    const decrement  = () =>{
        myDis(Minus())
    }

    const decrementCounter  = () =>{
        myDis(asncminus(4))
    }
  return (
    <div>
        {data}
        <button onClick={increment}> Plus + </button>
        <button onClick={decrement}>Mynus - </button>
        <button onClick={decrementCounter}>- Counter</button>
    </div>
  )
}
