import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";
class SignInPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Username:"",
            Password:"",
            Confirm_Password:"",
            Passworderr:""
        }
    }
    handleChange=(e,keyid)=>{
        if(keyid==="username"){
              this.setState({Username:e.target.value})
        }
        if(keyid==="password1"){
            this.setState({Password:e.target.value})
      }
      else{
        this.setState({Confirm_Password:e.target.value})
      }
    }
    handleSubmit=(e)=>{
        if(this.state.Username!=="" && this.state.Password!=="" && this.state.Password===this.state.Confirm_Password){
            axios.post("http://localhost:3001/LoginDetails",{
                username:this.state.Username,
                password:this.state.Password
            }).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
            const {navigate}=this.props.navigate
            navigate("/")
        }
        else{
            this.setState({Passworderr:"You didnot enter the Username or Passowrd and Confirm Password are not matching"})
        }
    }
    render(){
        return(
            <>
            <h1>SignIn-Page</h1>
            Username:<input type="text" placeholder="enter username" onChange={(e)=>this.handleChange(e,"username")}></input><br/>
            Password:<input type="text" placeholder="enter password" onChange={(e)=>this.handleChange(e,"password1")}></input><br/>
            Confirm-Password:<input type="text" placeholder="confirm password" onChange={(e)=>this.handleChange(e,"password2")}></input><br/>
            {this.state.Passworderr}
            <button onClick={()=>this.handleSubmit()}>Sign-In</button>
            </>
        )
    }
}
export default SignInPage