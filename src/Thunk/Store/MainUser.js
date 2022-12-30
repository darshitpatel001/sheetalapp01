import React, { useEffect } from 'react';
import {useDispatch,useSelector}  from 'react-redux'
import { Userasnc } from '../Action/Action';


export default function MainUser() {

    const data = useSelector(y=>y.user.data1.data);

    const myDisa = useDispatch();

    console.log(data);

    useEffect(()=> {

        myDisa(Userasnc());
    },[])
    
  return (
  <div>
   {
    data?.map((ele,index)=>{
      return(
        <div key={index}>
        <table>
        <tr>
          <td>{ele.id}</td>
          <td>{ele.email}</td>
          <td>{ele.first_name}</td>
          <td>{ele.last_name}</td>
          <td>{ele.avatar}</td>
        </tr>
      </table>
      </div>
      )
    })
   }
  </div>
  )
}