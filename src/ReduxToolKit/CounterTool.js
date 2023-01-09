// import React from 'react'
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { increment,decrement,incrementdecrement} from './ReducerTool';

// export default function CounterTool() {

//     const count = useSelector(y=>y.counter);
//     const disp = useDispatch();

//     const [data, setdata] = useState(0);

//     const mytext = (e) => {
//       setdata(e.target.value)
//     }

//   return (
//     <div>
//         {count.value}
//         <button onClick={() =>{disp(increment())}}>Increment</button>
//         <button onClick={() =>{disp(decrement())}}>Decrement</button><br></br>
        
//         <input type='text' onChange={mytext}/>
//         <button onClick={() =>{disp(incrementdecrement(data))}}>incrementdecrement</button>
//     </div>
//   )
// }
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from './ReducerTool';

const Posts = () => {
  const { list, status } = useSelector((y) => y.posts);
  const dispatch = useDispatch();

  console.log(list)
  useEffect(() => {
    dispatch(getPosts({ userId: 1 }));
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading.....</div>;
  }

  return (
    <div>
    <table>
      {list?.map((ele,index) => {
        return (
          <tr key={index}>
            {/* <td>{ele.date}</td> */}
            <td>{ele.localName}</td>
            <td>{ele.name}</td>
            <td>{ele.countryCode}</td>
            <td>{ele.fixed}</td>
            <td>{ele.global}</td>
            <td>{ele.counties}</td>
            <td>{ele.launchYear}</td>
            <td>{ele.type}</td>
          </tr>
        );
      })}
    </table>
  </div>
  );
};

export default Posts; 