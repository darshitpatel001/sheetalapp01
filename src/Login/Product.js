import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((y) => y.json())
      .then((d) => {
        setdata(d);
      });
  }, []);

  const myNav = useNavigate();

  const myLogout = () => {
    localStorage.removeItem("userInfo");
    myNav("/");
  };

  return (
    <div className="row">
      <button onClick={myLogout}>Log Out</button>
      {data.map((ele) => {
        return (
          <div className="text-center col-4">
            <div className="card m-3">
              <div className="card-body">
                <h3>{ele.category}</h3>

                <h5 className="card-title">{ele.title}</h5>
                <h5 className="card-title">{ele.price}</h5>
                <h6 className="card-title">{ele.description}</h6>
                <img src={ele.image} className="w=50 mx-auto" />
                <a href="#" className="btn btn-outline-primary">
                  Click
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
