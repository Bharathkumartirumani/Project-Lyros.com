import React from "react";
class SampleClassComponent extends React.Component{
    constructor(props){
           super(props)
    }
    render(){
        return(
            <>
            {console.log(this.props)}
            <h1>Class Components Name:{this.props.name}</h1>
            </>
        )
    }
}
export default SampleClassComponent;