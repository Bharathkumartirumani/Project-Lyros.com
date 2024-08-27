import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
function ParentComponent(){
    const [name,setName]=useState("BHARATH")
    let change=()=>{
        setName("kumar")
    }
    return(
        <>
        <ChildComponent name={name} fname={change}></ChildComponent></>
    )
}
export default ParentComponent