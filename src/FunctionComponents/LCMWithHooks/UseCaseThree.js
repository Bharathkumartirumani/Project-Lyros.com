import React, { useEffect, useState } from "react";
function UseCaseThree(props){
    const [name,setName]=useState("bharath")
    const [age,setAge]=useState(0)
    useEffect(
        ()=>{
            console.log("useeffect")
        },[props,name]
    )
    return(
        <>
        {name}
        {age}
        {console.log("render")}
        <button onClick={()=>setName("kumar")}>CLICK</button>
        </>
    )
}
export default UseCaseThree