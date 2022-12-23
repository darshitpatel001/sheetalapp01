import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'

export default function File() {
    const [data,setData]= useState(null);
    const [dataa,setDataa]= useState([]);

    const myhandler = (e) => {
        console.log(e.target.files)
        setData(e.target.files[0])
    }

    const myData = () =>{
        let formdata = new FormData();
        formdata.append("file",data);

        axios.post("http://localhost:8080/upload",formdata).then(y=> {
            console.log(y.data);
        })
    }

useEffect(() => {
    axios.get("http://localhost:8080/files")
    .then(d => {
        setDataa(d.data)
    })
 
}, []);

   
  return (
    <div>
    <input type="file" onChange={myhandler}/>
    <input type="button" value="Save"onClick={myData} />
   <table>
    {
        dataa.map((ele)=>{
            return(
                <tr>
                    <td>{ele.name}</td>
                    <td>{ele.url}</td>
                    <td> <a href={ele.url}>Download</a></td>
                </tr>
            )
        })
    }
   </table>
</div>
  )
}
