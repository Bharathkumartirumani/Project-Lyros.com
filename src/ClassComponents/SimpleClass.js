import React from "react";
class SimpleClass extends React.Component{
    constructor(){
        super()
         this.fname="bharath"
    }
    change=()=>{
        this.fname="kumar";
        console.log("hii",this.fname)
    }
    render(){
        {console.log("render")}
        return(
            <>
            <h1>{this.fname}</h1>
            <button onClick={this.change}></button>
            </>
        )
    }
}
export default SimpleClass