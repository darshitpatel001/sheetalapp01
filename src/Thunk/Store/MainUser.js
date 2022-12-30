import React, { useEffect } from 'react';
import {useDispatch,useSelector}  from 'react-redux'
import { getUserList } from './Thunk/Action/Action';

export default function MainUser() {

    const data = useSelector(y=>y.user);

    const myDisa = useDispatch();

    console.log(data);

    useEffect(()=> {

        myDisa(getUserList());
    },[])
    
  return (
  <div>MainUser</div>
  )
}