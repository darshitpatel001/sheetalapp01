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
      <form onSubmit={handleSubmit} class="w-50 mx-auto">
        {data.map((val) => {
          return (
            <>
            <h1 class='text-center'>Education Form</h1>
              <label class="form-label">Full Name : </label>
              <input
                type="text"
                class="form-control"
                name="name"
                onChange={handler}
                value={val.name}
              /><br/>
              <label class="form-label">Education:</label>
              <input
                type="text"
                class="form-control"
                name="educ"
                onChange={handler}
                value={val.educ}
              /><br/>
              <label class="form-label">Start Date:</label>
              <input
                type="date"
                class="form-control"
                name="startdate"
                onChange={handler}
                value={val.startdate}
              /><br/>
              <label class="form-label">End Date:</label>
              <input
                type="date"
                name="enddate"
                class="form-control"
                onChange={handler}
                value={val.enddate}
              /><br/>
              <label>Degree:</label>
              <input
                type="text"
                name="degree"
                class="form-control"
                onChange={handler}
                value={val.degree}
              /><br/>
              <input type="submit" class="form-control btn btn-outline-primary" value="Save" /><br/>
              <button class="form-control btn btn-outline-primary" onClick={Add}>Add...</button>
            </>
          );
        })}
      </form>
    </div>
  );
}
