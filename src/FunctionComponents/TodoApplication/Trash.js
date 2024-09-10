import React from "react"
import _isEqual from "lodash/isEqual"
function Trash(props){
    return(
     <>
     <h1>Trash</h1>
     {/* {console.log("trash")} */}
     {props.data.map((item)=>(
                <>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button onClick={()=>props.prop2(item.id)}>untrash</button></>
 
     ))}
     </>
    )
 }
 export default React.memo(Trash,(prevProps,newProps)=>{
    if(_isEqual(prevProps.data,newProps.data)){
        return true
     }
     else{
        return false
     }
})