import axios from "axios";
import React from "react";
class AdminLoginClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            errusername:"",
            errpassword:"",
        }
    }
   
    handleSubmit=(e)=>{
        const {navigate}=this.props.navigate
        axios.get(`http://localhost:3001/LoginDetails?username=${this.state.username}&&password=${this.state.password}`).then((res)=>{
            const response=res.data[0]
            console.log(response)
    
            if(this.state.username!=="" && this.state.password!==""){
                if(response===undefined && response===undefined){
                    navigate('/signInPage')
                }
                if(response.username===this.state.username && response.password===this.state.password){
                    navigate('/tickets')
                }
        }
        else{
            navigate("/signInPage")
        }
    }).catch((err)=>console.log(err))

}    
   handleChange=(e,keyword)=>{
        if(keyword==="username"){
        if(e.target.value){
            this.setState({username:e.target.value})
        }
        else{
            this.setState({errusername:"please enter username"})
        }
        }
        else{
            if(e.target.value){
                this.setState({password:e.target.value})
            }
            else{
                this.setState({errpassword:"please enter password"})
            }
        }
   }
    render(){
        return(
        <>
          UserName:<input type="text" placeholder="please enter username" onChange={(e)=>this.handleChange(e,"username")}></input><br/>
          {this.state.errusername}<br/>
          Password:<input type="text" placeholder="please enter password" onChange={(e)=>this.handleChange(e,"password")}></input><br/>
          {this.state.errpassword}<br/>
          <button onClick={(e)=>this.handleSubmit()}>Submit</button>
          </>
        )
    }
}
export default AdminLoginClass