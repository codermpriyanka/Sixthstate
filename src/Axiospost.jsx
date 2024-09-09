import React, { useState } from 'react'
import axios from 'axios'

function Axiospost() {
  const data={fname:"",lname:""}
  const[inputdata,setInputdata]=useState(data)
  const handelData=(e)=>{
     setInputdata({...inputdata,[e.target.name]:e.target.value})
  }
  const handelSubmit=(e)=>{
   e.preventDefault()
   axios.post("https://jsonplaceholder.typicode.com/users",inputdata)
   .then((response)=>{
    console.log(response)
   })
  }

  const handelUpdate=(e)=>{
    e.preventDefault();
    axios.put("https://jsonplaceholder.typicode.com/users/1",inputdata)//as per fake Api routes we use 1.
    .then((response)=>{
      console.log(response)
     })
  }


  const handelDelete=(e)=>{
    e.preventDefault();
    axios.delete("https://jsonplaceholder.typicode.com/users/1")//as per fake Api routes we use 1.
    .then((response)=>{
      console.log(response)
     })
  }
  return (
    <div>
    <label>FirstName:</label>
    <input type='text' name='fname' value={inputdata.fname}onChange={handelData}></input><br/>
    <label>LastName:</label>
    <input type='text' name='lname' value={inputdata.lname}onChange={handelData}></input><br/>
    <button onClick={handelSubmit}>Submit</button>
    <button onClick={handelUpdate}>Update</button>
    <button onClick={handelDelete}>Delete</button>
    </div>
  )
}

export default Axiospost
