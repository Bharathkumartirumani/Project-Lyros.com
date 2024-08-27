import React from "react";
import _isEqual from "lodash/isEqual"
class ArchiveComponent extends React.Component{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(newprops){
       if(_isEqual(this.props.prop1,newprops.prop1)){
        return false
       }
       else{
        return true
       }
    }
    render(){
        {console.log("archive")}
        return(
            <>
            <h1>ArchiveComponents</h1>
            {this.props.prop1.map((item)=>(
                <>
                <h3>{item.name}</h3>
                <p>{item.age}</p>
                <button onClick={()=>this.props.prop3(item.id)}>UnArchive</button>
                </>
            ))}
           
            </>

           
        )
    }
}
export default ArchiveComponent