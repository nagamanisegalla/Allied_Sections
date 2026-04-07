import React from "react";
function Conditions({name,isStudent}){
    if(isStudent){
        return(
            <div>
                <h1>{name} is a Student</h1>
            </div>
        )
    }
    else{
    return(
        <div>
            <h1>{name} is not a student</h1>
        </div>
    )
}
}
export default Conditions;