import React from "react";
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:2
        }
    }
    counterPositive=()=>{
         this.setState({data:this.state.data+1}
    )
}
    counterNegative=()=>{
        this.setState({data:this.state.data-1})
   }
    render(){
        {console.log("sdfghjm")}
        return(
            <>
            <button onClick={this.counterPositive}>+</button>
            <h1>{this.state.data}</h1>
            <button onClick={this.counterNegative}>+</button>
            </>
        )
    }
}
export default Counter;