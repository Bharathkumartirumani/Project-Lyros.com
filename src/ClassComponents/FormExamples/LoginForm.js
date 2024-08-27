import React from "react";
import './Form.css'
class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
        username:'',
        password:'',
        errusername:'',
        errpassword:'',
        checkBoxStatus:false
        }
    }
    
    handleChange=(e,keyid)=>{
    if(keyid==="username"){
        this.setState({username:e.target.value})

    }
    else if(keyid==="password"){
        this.setState({password:e.target.value})
     }
     else{
        this.setState({checkBoxStatus:true})
     }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {username,password,errpassword,errusername,checkBoxStatus}=this.state
        if(username&&password&&errpassword===''&&errusername===''){
            alert("form is submitted")
        }
        else{
            if(!username){
                this.setState({errusername:"please enter username"})
            }
            else{
                this.setState({errusername:""})
            }
            if(!password){
                this.setState({errpassword:"please enter password"})
            }
            else{
                this.setState({errpassword:""})
            }
        }
    }
    render(){
        return(
            <>
            <div className="container">
            Username:<input type="text" placeholder="please enter username" onChange={(e)=>this.handleChange(e,"username")}></input><br/>
            {this.state.errusername}
            Password:<input type="text" placeholder="please enter Password" onChange={(e)=>this.handleChange(e,"password")}></input><br/>
            {this.state.errpassword}
            remember:<input type="checkbox" onChange={(e)=>this.handleChange(e,"box")}></input>
            {console.log(this.state.checkBoxStatus)}
            <button onClick={(e)=>this.handleSubmit(e)}>Submit</button>
            </div></>
        )
    }
}
export default LoginForm