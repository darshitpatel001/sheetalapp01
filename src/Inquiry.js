import React from "react";
import { useState } from "react";

export default function Inquiry() {
    const [form, setForm] = useState({
        studentname: "",
        parentsname: "",
        birthdate: "",
        mobileNumber: "",
        gender: "",
        education:"",
        
      });
      const Handler = (e) => {
         setForm({...form ,[e.target.name]:[e.target.value]})
        }
  return (
    <div>
      <form>
        <h3>Student Inquiry Form</h3>
        <label for="">Student Name : </label>
        <input type="text" name="studentname" className="form-control" onChange={Handler} />    <br />
        <label for="">Parents Name : </label>
        <input type="text" name="parentsname" onChange={Handler} />    <br />
        <label for="">Birth Date : </label>
        <input type="date" name="birthdate" onChange={Handler} />    <br />
        <label>Gender : Male </label>
        <input type="radio" name="gender" value="Male" onClick={Handler} />  
        <label> Female </label>
        <input type="radio" name="gender" value="Female" onClick={Handler} />    
        <br />
        <label for="">Education : </label>
        <input type="text" name="education" onChange={Handler} />    <br />
        <label for="">Collage : </label>
        <input type="text" name="collage" onChange={Handler} /><br />
        <h3>Student Contact Details </h3>
        <label for="">Mobile Number: </label>
        <input type="text" name="mobileNumber" onChange={Handler} /><br />
        <label for="">Email : </label>
        <input type="text" name="email" onChange={Handler} /><br />
        <label for="">Country : </label>
        <input type="text" name="country" onChange={Handler} /><br />
        <input type="submit" class="form-control btn btn-outline-primary" value="Sign-in" />
      </form>
    </div>
  );
}