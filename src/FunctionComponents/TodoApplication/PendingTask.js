import React from "react"
import _isEqual from "lodash/isEqual"
function PendingTask(props){
    return(
     <>
     <h1>Pending Tasks</h1>
     {/* {console.log("pending")} */}
     {props.data.map((item)=>(
                <>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button onClick={()=>props.prop1(item.id)}>done</button>
                <button>trash</button></>
                
 
     ))}
     </>
    )
 }
 export default React.memo(PendingTask,(prevProps,newProps)=>{
    if(_isEqual(prevProps.data,newProps.data)){
       return true
    }
    else{
       return false
    }
})