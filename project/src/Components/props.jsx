import React from "react";

export default function Props({name,marks,isStudent}){
    return(
        <div>
            <h1>name :{name}</h1>
            <h2>marks : {marks}</h2>
            <h2>isStudent : {isStudent}</h2>
        </div>
    )
}