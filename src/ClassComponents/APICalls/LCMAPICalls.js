import React from "react";
import axios from "axios"
class LCMAPICall extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[]
        }
    }
    componentDidMount(){
        // fetch("http://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((res)=>this.setState({result:res})).catch((err)=>console.log(err))
        axios.get("http://jsonplaceholder.typicode.com/users").then((res)=>this.setState({result:res.data})).catch((error)=>console.log(error))

    }
    render(){
        return(
            <>
            {this.state.result.map((item)=>(
                <>
                <h1>{item.name}</h1>
                <p>{item.username}</p>
                </>
            ))}</>
        )
    }
    
}
export default LCMAPICall