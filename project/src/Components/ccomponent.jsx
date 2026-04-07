import React from "react";
import { Component } from "react";

class Basic2 extends Component{
    render(){
        return(
            <>
            <h1>Class Component{this.props.name}</h1>
            <h2>second class line{this.props.mail}</h2>
            </>
        )
    }
}
export default Basic2