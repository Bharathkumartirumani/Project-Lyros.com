import React from "react";
import hocAPICall from "./hocAPICall";
class PlainComponent extends React.Component{
    constructor(props){
        super(props)
        
    }
   
    render(){
        return(
           <>
           {this.props.result.map((item)=>(
            <>
            <h>{item.name}</h>
            <p>{item.username}</p>
            </>
        ))}
            </>

        )
    }
    
}
export default hocAPICall(PlainComponent)