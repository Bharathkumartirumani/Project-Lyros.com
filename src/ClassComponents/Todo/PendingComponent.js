import React from "react";
import _isEqual from "lodash/isEqual"
class PendingComponent extends React.Component{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(newprop){
        if(_isEqual(this.props.prop1,newprop.prop1)){
            console.log(this.props.prop1)
            return false
        }
        else{
            return true
        }
    }
    render(){
        {console.log("pending")}
        return(
            <>
             <h1>Pending Task</h1>
            {this.props.prop1.map((item)=>(
                <>
                <h3>{item.name}</h3>
                <p>{item.age}</p>
                <button onClick={()=>this.props.prop2(item.id)}>done</button>
                </>
            ))}</>
        )
    }
}
export default PendingComponent