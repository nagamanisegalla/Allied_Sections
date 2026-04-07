import React from "react";

function Variables({role}){
    let message;
    if(role == "admin"){
        message = "open admin page"
    }
    else if(role == "student"){
        message = "open student page"
    }
    else if(role == "faculty"){
        message = "open Faculty page"
    }
    else{
        message = "nothing should open"
    }
    return(
        <>
        <h1>{message}</h1>
        </>
    )
}
export default Variables;