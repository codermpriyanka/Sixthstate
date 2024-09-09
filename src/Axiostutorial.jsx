import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axiostutorial() {
    const[userData,setuserData]=useState([])//Second thing is hame iss userData pe display karwana hai API ki data
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setuserData(response.data)//here we require only data of API
            
        })
    },[])
  return (
    <div>
      Axios Tutorial
      {userData.map((data)=>{
        return(
            <div>{data.name}</div>
        )
      })}
    </div>
  )
}

export default Axiostutorial
