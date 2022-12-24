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
        collage:"",
        mobileNumber:"",
        email:"",
        country:"",
        State:"",
        city:"",
        zipcode:"",
        EnquiryDate:"",
        enquirynumber:"",
        EnquiryTakenBy:""
        
      });
      const Handler = (e) => {
         setForm({...form ,[e.target.name]:[e.target.value]})
        }
        const mysubmit = (e) => {
          e.preventDefault()
          console.log(form)
        }
  return (
    <div class="w-50 mx-auto  m-3 rounded-3" >
      <form onSubmit={mysubmit}>
        <h3 className="text-center">Student Inquiry Form</h3>
        <label for="">Student Name : </label>
        <input type="text" name="studentname" className="form-control" onChange={Handler} />    <br />
        <label for="">Parents Name : </label>
        <input type="text" name="parentsname" onChange={Handler}className="form-control" />    <br />
        <label for="">Birth Date : </label>
        <input type="date" name="birthdate" onChange={Handler}className="form-control" />    <br />
        <label>Gender : Male </label>
        <input type="radio" name="gender" value="Male " onClick={Handler} />  
        <label> Female </label>
        <input type="radio" name="gender" value="Female" onClick={Handler} />    
        <br /><br />
        <label for="">Education : </label>
        <input type="text" name="education" onChange={Handler}className="form-control" />    <br />
        <label for="">Collage : </label>
        <input type="text" name="collage" onChange={Handler}className="form-control" /><br />
        <h3 className="text-center">Student Contact Details </h3>
        <label for="">Mobile Number: </label>
        <input type="number" name="mobileNumber" onChange={Handler}className="form-control" /><br />
        <label for="">Email : </label>
        <input type="text" name="email" onChange={Handler}className="form-control" /><br />
        <label for="">Country : </label>
        <input type="text" name="country" onChange={Handler}className="form-control" /><br />
         <label for="">State : </label>
        <input type="text" name="State" onChange={Handler}className="form-control" /><br />
         <label for="">City : </label>
        <input type="text" name="city" onChange={Handler}className="form-control" /><br />
        <label for="">Zip Code : </label>
        <input type="number" name="zipcode" onChange={Handler}className="form-control" /><br />
        <h3 className="text-center">Enquiry Details </h3>
        <label for="">Enquiry Date : </label>
        <input type="date" name="EnquiryDate" onChange={Handler}className="form-control" />    <br />
        <label for="">Enquiry Number : </label>
        <input type="number" name="enquirynumber" onChange={Handler}className="form-control" /><br />
        <label for="">Enquiry Taken By : </label>
        <select name="EnquiryTakenBy" onChange={Handler} className="form-control">
          <option>Course</option>
          <option value="10th">10th</option>
          <option value="12th">12th</option>
          <option value="CCC">CCC</option>
          <option value="IELTS">IELTS</option>
        </select><br/>
        <input type="submit" class="form-control btn btn-outline-primary" value="Sign-in" />
      </form>
    </div>
  );
}