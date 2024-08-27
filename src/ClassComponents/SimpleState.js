import React from "react";
class SimpleState extends React.Component{
    constructor(){
        super();
        this.state={
            data:"hiii",
            data1:"dfghjkl"
        }
    }
    change=()=>{
         this.setState({data:"hello",data1:"234567"})
         console.log("called")
    }
    render(){
        {console.log("render")}
        return(
            <>
            <h1>
                {this.state.data}</h1>
                <h1>{this.state.data1}</h1>
                <button onClick={this.change}>HIIIIIII</button></>
        )
    }
}
export default SimpleState;