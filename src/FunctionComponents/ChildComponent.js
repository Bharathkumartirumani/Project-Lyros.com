import React from "react";
function ChildComponent(props){
    return(
      <>
      {props.name}
      <button onClick={()=>props.fname()}>change</button></>
    )
}
export default ChildComponent