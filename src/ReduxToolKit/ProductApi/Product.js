import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from './Reducer';

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
        {list?.map((element ,index) => {
          return (
            <tr key={index}>
              {" "}
              <td> {element.id}</td>
              <td> {element.title}</td> <td> {element.price}</td>
              <td> {element.description}</td>
              <td>
                <img src={element.image} />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Posts; 