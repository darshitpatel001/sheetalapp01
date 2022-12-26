import React, { useState ,useEffect } from 'react'

const useFatch = (url) => {
    const [loading,setloading] = useState(true);
    const [data,setData] = useState([]);

    const getData  =async ()=> {

        const response = await fetch(url);
        const mydata = await response.json();

        setData(mydata);
        setloading(false);
    }

    useEffect(() =>{
        getData(url);
    },[url])
 
    return{loading,data}
}

export default useFatch;
