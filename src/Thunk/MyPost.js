import React from 'react'
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'

export default function MyPost() {

    const myDis = useDispatch();

    const mydata = useSelector(y=>y.posts.data);

    useEffect(() => {
      myDis({
        type:'FATCH_REQUEST_POST'
      })
    }, [])
    
  return (
    <div>
    <table> {mydata?.map((m , index) => {
      return (
        <tr key={index}>
          <td>{m.id}</td>
          <td>{m.name}</td>
          <td>{m.tagline}</td>
          <td>{m.first_brewed}</td>
          <td>{m.description}</td>
          <td>{m.counties}</td>
          <td>{m.launchYear}</td>
          <td>{m.type}</td>
        </tr>
      );
    })}
    </table>
</div>
  )
}
