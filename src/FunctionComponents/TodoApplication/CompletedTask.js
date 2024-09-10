import React from "react"
import _isEqual from "lodash/isEqual"
function CompletedTask(props){
   return(
    <>
    <h1>Completed Tasks</h1>
    {/* {console.log("completed")} */}
    {props.data.map((item)=>(
               <>
               <h1>{item.title}</h1>
               <p>{item.desc}</p>
               <button onClick={()=>props.prop1(item.id)}>undone</button>
               <button onClick={()=>props.prop2(item.id)}>trash</button>
               </>

    ))}
    </>
   )
}
export default React.memo(CompletedTask,(prevProps,newProps)=>{
   if(_isEqual(prevProps.data,newProps.data)){
      return true
   }
   else{
      return false
   }
})