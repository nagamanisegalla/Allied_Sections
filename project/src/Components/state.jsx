import { useState } from "react";

export default function State(){
    const[count,setcount] = useState(0)
    const increment = () => setcount(count+1)
    return(
        <>
        <button onClick={increment}>Increment {count}</button>
        <button>{count}</button>
        </>
    )
}