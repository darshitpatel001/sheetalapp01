import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function CounterSaga() {

    const count = useSelector(y=>y.counter);

    const disp = useDispatch();

    const increment = () => {
        disp({type:'INCREMENT'});
    }

    const Multi = () => {
        disp({type:'MULTIPLECATION'});
    }

    const devision = () => {
        disp({type:'DEVISION'});
    }
  return (
    <div>
        {count}
        <button onClick={increment}>Increment</button>
        <button onClick={Multi}>Multiplecation</button>
        <button onClick={devision}>Devision</button>
    </div>
  )
}
