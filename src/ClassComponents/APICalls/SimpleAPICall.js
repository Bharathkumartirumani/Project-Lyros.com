import React from "react";
class SimpleAPICall extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[]
        }
    }
    handleAPICall=(e)=>{
             e.preventDefault()
             fetch("http://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((res)=>this.setState({result:res})).catch((err)=>console.log(err))
    }
   
    render(){
        return(
            <>
           
            <button onClick={(e)=>this.handleAPICall(e)}>Click</button>
            {this.state.result.map((item)=>(
                <>
                <h1>{item.cname}</h1>
                <p>{item.cno}</p>
                </>
            ))}</>
        )
    }
    
}
export default SimpleAPICall