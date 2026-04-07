import React from "react";
import { useState } from "react";
export default function Effects(){
    const[increase,setincrease] = useState(0)
    const setfunction = setincrease(increase+1)
    return(
        <>
        <button onClick={setfunction}>count is {increase}</button>
        </>
    )
}