import React from "react";
import { useState } from "react";
export default function Controlled(){
    const [data,setdata] = useState({
        name: "",
        email : ""
    })

    const handledata = (e) => {
        setdata({
            ...data,
            [e.target.name] : e.target.value
        })

    }
    const handlesubmit = (e) => {
        e.preventDefault() 
        console.log("form submitted")
    }
    return(
        <>
        <form onSubmit={handlesubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" value={data.name} onChange={handledata}/>
            <label htmlFor="">Email</label>
            <input type="email" name="email" value={data.email} onChange={handledata}/>
            <input type="submit" />
        </form>
        <h1>name is : {data.name}</h1>
        <h1>email is : {data.email}</h1>
        </>
    )
}