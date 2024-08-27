import React from "react";
import './StylingComponent.css'
class StylingComponent extends React.Component{
    constructor(props){
        super(props)
        this.fname="bharath"
        
    }
    change=()=>{
        this.fname="kumar"
       
        this.render();
    }
    render(){
        return(
            <>
            <h1 style={{color:"red"}}>Demo</h1>
            <h3 className="hii">{this.fname}</h3>
            <button onClick={this.change}>jiii</button>
            </>
        )
    }
}
export default StylingComponent