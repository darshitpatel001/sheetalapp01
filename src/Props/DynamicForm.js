import React from "react";
import { useState } from "react";

export default function DynamicForm() {
  const [data, setdata] = useState([
    {
      name: "",
      educ: "",
      startdate: "",
      enddate: "",
      degree: "",
    },
  ]);

  const handler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const Add = (e) => {
    let all = {
      name: "",
      educ: "",
      startdate: "",
      enddate: "",
      degree: "",
    };
    setdata([...data, all]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {data.map((val) => {
          return (
            <>
              <label>Full Name:</label>
              <input
                type="text"
                name="name"
                onChange={handler}
                value={val.name}
              />
              <label>Education:</label>
              <input
                type="text"
                name="educ"
                onChange={handler}
                value={val.educ}
              />
              <label>Start Date:</label>
              <input
                type="date"
                name="startdate"
                onChange={handler}
                value={val.startdate}
              />
              <label>End Date:</label>
              <input
                type="date"
                name="enddate"
                onChange={handler}
                value={val.enddate}
              />
              <label>Degree:</label>
              <input
                type="text"
                name="degree"
                onChange={handler}
                value={val.degree}
              />
              <input type="submit" value="Save" />
              <button onClick={Add}>Add...</button>
            </>
          );
        })}
      </form>
    </div>
  );
}
