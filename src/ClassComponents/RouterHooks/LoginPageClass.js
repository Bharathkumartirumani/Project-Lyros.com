import React from "react";
import axios from "axios";
class LoginPageClass extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            password:'',
            unameErr:"",
            passwordErr:'',
        }
    }

    // componentDidMount(){
    //     axios.get(`http://localhost:3001/ContactsDetails?cname=${this.state.username}`).then((res)=>this.setState({data:res.data})).catch((err)=>console.log(err))
    // }

   
    handleSubmit=(e)=>{
        const {navigate}=this.props.navigate
        e.preventDefault()
        axios.get(`http://localhost:3001/ContactsDetails?cname=${this.state.username}`).then((res)=>{
        const response=res.data[0]
        if(!response){
            navigate('/pagenotfound')
           
        }
       if(response.cname===this.state.username){
            navigate(`/dashboard/${this.state.username}/admin`)
        }
       
       }).catch((err)=>console.log(err))
        
       
    }
    handleValidation=(e,keyword)=>{
        if(keyword==="username"){
            if(e.target.value){
                /** state is set */
                this.setState({username:e.target.value})
            }
            else{
                /**error message */
                this.setState({unameErr:"please enter username"})
            }
        }
        if(keyword==="password"){
            if(e.target.value){
                /** state is set */
                this.setState({password:e.target.value})
            }
            else{
                /**error message */
                this.setState({passwordErr:"please enter password"})
            }
        }
    }
    render(){
        return(
            <>
            <form>
              Username:  <input type="text" onBlur={(e)=>this.handleValidation(e,"username")}></input>
              <p style={{color:"red"}}>{this.state.unameErr}</p>
              Password:  <input type="text" onBlur={(e)=>this.handleValidation(e,"password")}></input>
              <p style={{color:"red"}}>{this.state.passwordErr}</p>
              <button onClick={(e)=>this.handleSubmit(e)}>submit</button>
            </form></>
        )
    }
}
export default LoginPageClass