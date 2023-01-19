import { React, useState } from "react";

export default function Level3Form() {
  const [data, setdata] = useState({
    fname: "",
    lname: "",
    address: "",
    city: "",
    state: "",
    country: "",
  });
  const [dataeducation, setdataeducation] = useState([
    {
      edu: "",
      university: "",
      degree: "",
      sdatee: "",
      enddatee: "",
    },
  ]);
  const [dataexper, setdataexper] = useState([
    {
      company: "",
      designation: "",
      startdate: "",
      enddate: "",
      check: "",
    },
  ]);
const [isDisable, setIsdisable] = useState(false);
const handleInputChangeexpp = (e, index) => {

        if (e.target.type == 'checkbox') {

            if (e.target.checked == true) {
                setIsdisable(true)
                setdata({ ...dataexper, "enddateexp": "" })
            } else {
                setIsdisable(false)
            }

        } else {
            const { name, value } = e.target;
            const list = [...dataexper];
            list[index][name] = value;
            setdataexper(list);

        }
    };





  const handleRemoveClick = (index) => {
    const list = [...dataeducation];
    list.splice(index, 1);
    setdataeducation(list);
  };
  const handleAddClick = () => {
    setdataeducation([
      ...dataeducation,
      {
        edu: "",
        university: "",
        degree: "",
        sdateedu: "",
        enddateedu: "",
      },
    ]);
  };
  const handleInputChangeedu = (e, index) => {
    const { name, value } = e.target;
    const list = [...dataeducation];
    list[index][name] = value;
    setdataeducation(list);
  };



  const AddExperience = () => {
    setdataexper([
      ...dataexper,
      {
        edu: "",
        university: "",
        degree: "",
        sdateedu: "",
        enddateedu: "",
      },
    ]);
  };
  const handleInputChangeexp = (e, index) => {
    const { name, value } = e.target;
    const list = [...dataexper];
    list[index][name] = value;
    setdataexper(list);
  };
  const handleRemoveClickexp = (index) => {
    const list = [...dataexper];
    list.splice(index, 1);
    setdataexper(list);
  };

  const handleInputChange = (e, index) => {
    setdata({...data,[e.target.name]:e.target.value})
  };

  const DataSubmit = (e) => {
    e.preventDefault();
    console.log(data, dataeducation, dataexper);
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    this.setState({
      itemvalues: [{}],
    });
  };
  return (
    <div>
      <div>
        <form class="w-50 mx-auto" onSubmit={DataSubmit}>
          <h2 class='text-center'>Basic information</h2>
          <label  class="form-label">FirstName:</label>
          <input
            type="text"
            class="form-control"
            name="fname"
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <label class="form-label">LastName:</label>
          <input
            type="text"
            class="form-control"
            name="lname"
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <label class="form-label">Address:</label>
          <input
            type="text"
            class="form-control"
            name="address"
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <label class="form-label">City:</label>
          <input
            type="text"
            name="city"
            class="form-control"
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <label class="form-label">State:</label>
          <input
            type="text"
            class="form-control"
            name="state"
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <label class="form-label">Country:</label>
          <input
            type="text"
            class="form-control"
            name="country"
            onChange={(e) => handleInputChange(e)}
          />
          <br />
        

          {dataeducation.map((value, i , index) => {
            return (
              <div key={index}>
                <h2 class='text-center'>Education Details</h2>
                <label class="form-label">Education Level : </label>
                <select
                  name="edu"
                  onChange={(e) => handleInputChangeedu(e, i)}
                  value={value.edu}
                >
                  <option>Select</option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                </select>
                <br />
                <label class="form-label">University:</label>
                <input
                  type="text"
                  class="form-control"
                  name="university"
                  onChange={(e) => handleInputChangeedu(e, i)}
                  value={value.university}
                />
                <br />
                <label class="form-label">Degree:</label>
                <input
                  type="text"
                  class="form-control"
                  name="degree"
                  onChange={(e) => handleInputChangeedu(e, i)}
                  value={value.degree}
                />
                <br />
                <label class="form-label">StartDate:</label>
                <input
                  type="date"
                  class="form-control"
                  name="sdatee"
                  onChange={(e) => handleInputChangeedu(e, i)}
                  value={value.sdateedu}
                />
                <br />
                <label class="form-label">EndDate:</label>
                <input
                  type="date"
                  class="form-control"
                  name="enddatee"
                  onChange={(e) => handleInputChangeedu(e, i)}
                  value={value.enddateedu}
                />
                <br />

                <div className="btn-box">
                  {dataeducation.length !== 1 && (
                    <button
                      className="mr10"
                      onClick={() => handleRemoveClick(i)}
                    >
                      Remove
                    </button>
                  )}
                  {dataeducation.length - 1 === i && (
                    <button class="form-control btn btn-outline-primary"  onClick={handleAddClick}>Add</button>
                  )}
                </div><br/>
              </div>
            );
          })}
          {/* <div>{JSON.stringify(dataeducation)}</div> */}
          {dataexper.map((value, i , index) => {
            return (
              <div key={index}>
                <h2 class='text-center'>Experience Details</h2>
                <label class="form-label">Company Name:</label>
                <input
                  type="text"
                  class="form-control"
                  name="company"
                  onChange={(e) => handleInputChangeexp(e, i)}
                  value={value.company}
                />
                <br />
                <label class="form-label">Designation:</label>
                <input
                  type="text"
                  class="form-control"
                  name="designation"
                  onChange={(e) => handleInputChangeexp(e, i)}
                  value={value.designation}
                />
                <br />
                <label class="form-label">StartDate:</label>
                <input
                  type="date"
                  name="startdate"
                  class="form-control"
                  onChange={(e) => handleInputChangeexp(e, i)}
                  value={value.sdateexp}
                />
                <br />
                <label class="form-label">EndDate:</label>
                <input
                  type="date"
                  name="enddate"
                  class="form-control"
                  disabled={isDisable}
                  onChange={(e) => handleInputChangeexp(e, i)}
                  value={value.enddateexp}
                />
                <br />
                <input
                  type="checkbox"
                  name="check"
                  onClick={handleInputChangeexpp}
                  value={value.check}
                />
                are you currently working in this company
                <br />
                <div className="btn-box">
                  {dataexper.length !== 1 && (
                    <button
                      className="mr10"
                      onClick={() => handleRemoveClickexp(i)}
                    >
                      Remove
                    </button>
                  )}
                  {dataexper.length - 1 === i && (
                    <button onClick={AddExperience} class="form-control btn btn-outline-primary" >Add...</button>
                  )}
                </div>
              </div>
            );
          })}
          {/* <div>{JSON.stringify(dataexper)}</div> */}
          {/* <input type="submit" value="Save" class="form-control btn btn-outline-primary"  /> */}
          <div className="text-center">
          <input type="submit" value="save" className="btn" />
          <button onClick={handleReset} className="btn ">
            Reset
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}
