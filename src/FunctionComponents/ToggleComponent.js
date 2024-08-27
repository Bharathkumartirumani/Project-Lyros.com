import React, { useState } from "react";
function ToggleComponent(){
    const [isEnabled,setIsEnabled]=useState(false)
    let toggle=()=>{
        setIsEnabled(!isEnabled)
    }
    return(
        <>
        {isEnabled?
        <>
        <h1>Welcome</h1>
        <button onClick={()=>toggle()}>SignOut</button>
        </>:<>
        <h1>Please SignIn</h1>
        <button onClick={()=>toggle()}>SignIn</button></>}
        </>
    )
}
export default ToggleComponent