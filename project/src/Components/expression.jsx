import React from "react";

function Expression(props){
    return(
        <>
        <h1>name : {props.name}</h1>
        <h1>course : {props.course}</h1>
        <h1>marks : {props.marks}</h1>
        </>
    )
}
export default Expression;