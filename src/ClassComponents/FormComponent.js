import React from "react";
class FormComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            pwd:""
        }
    }
    handleUname=(e)=>{
        // console.log(e.target.value)
        this.setState({username:e.target.value})
    }
    handlePwd=(e)=>{
        // console.log(e.target.value)
        this.setState({pwd:e.target.value})
    }
    handleClick=()=>{
        console.log(this.state.username,this.state.pwd)
    }

    render(){
        return(
            <>
            <h1>LoginForm</h1>
            Username:<input type="text" onChange={(e)=>this.handleUname(e)}></input>
            Password:<input type="text" onChange={(e)=>this.handlePwd(e)}></input>
            <button onClick={this.handleClick}></button></>
        )
    }

}
export default FormComponent;