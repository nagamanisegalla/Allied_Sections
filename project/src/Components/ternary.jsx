import React from "react";

export default function Ternary({name,isStudent}){
    return(
        <div>
        <h2>{isStudent ? `${name}is student` : name+ "is not a student"}</h2>
      <h2>{isStudent ? <p>hey it is true</p> : <p>Hey it is not true</p>}</h2>

      <h3>{isStudent && <p>And operator is executed</p>}</h3>
        </div>


    )
    
}
