import React from 'react'
import axios from 'axios';
import { useEffect , useState } from 'react'

export default function ApiDelete() {
    const [data, setdata] = useState([]);
    const [visble,setvisible] = useState(true);

    
    useEffect(() => {
        axios.get("https://api.punkapi.com/v2/beers")
        .then((y)=>{
            setdata(y.data)
        })
      }, [data])

      const Deleteele = () => {
        setvisible((prev) =>!prev)
      }
  return (
    <div>
        <table> {data.map((ele) => {
          return (
            <tr>
              <td>{ele.id}</td>
              <td>{ele.naelee}</td>
              <td>{ele.tagline}</td>
              <td>{ele.first_brewed}</td>
              {/* <td>{ele.description}</td>
              <td>{ele.counties}</td>
              <td>{ele.launchYear}</td>
              <td>{ele.type}</td> */}
              {visble &&(
                <td><button onClick={Deleteele}>Delete</button></td>
              )}
            </tr>
          );
        })}
        </table>
    </div>
  )
}
