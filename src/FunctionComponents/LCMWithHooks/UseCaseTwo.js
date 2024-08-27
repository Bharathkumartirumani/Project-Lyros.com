import { useEffect, useState } from "react"

function UseCaseTwo(props){
    const [count,setCount]=useState(0)
    useEffect(
        ()=>{
            console.log("inside useeffect")
        }
    )
    return(
        <>
        {console.log("render")}
        <h1>LCM in hooks {count}</h1>
        <button onClick={(e)=>setCount(count+1)}>+</button>
        </>
        
    )
}
export default UseCaseTwo