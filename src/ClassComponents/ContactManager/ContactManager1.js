import React from "react";
import axios from 'axios'
class ContactManager1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ipName:"",
            ipNo:"",
            ipEmail:"",
            contacts:[],
            ipId:"",
            isUpdated:false,
            status:""
        }
    }
    componentDidMount=()=>{
        axios.get("http://localhost:3001/ContactsDetails").then((res)=>{this.setState({contacts:res.data})}).catch((err)=>console.log(err))
    }
    handleChange=(e,keyid)=>{
         if(keyid=="contactName"){
            this.setState({ipName:e.target.value})
         }
         else if(keyid=="contactNo"){
            this.setState({ipNo:e.target.value})
         }
         else{
            this.setState({ipEmail:e.target.value})
         }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.isUpdated){
            axios.put(`http://localhost:3001/ContactsDetails${this.state.id}`,{
                cname:this.state.ipName,
                cno:this.state.ipNo,
                cemail:this.state.ipEmail
            }).then((res)=>{
                const temp=this.state.contacts
                const index=temp.findIndex((item)=>item.id===res.data.id)
                 temp.splice(index,1,res.data)
                 console.log(temp)
                this.setState({contacts:temp})}).catch((err)=>this.setState({status:"error"}))
                this.setState({isUpdated:!(this.state.isUpdated)})
            
        }
        else{
        axios.post("http://localhost:3001/ContactsDetails",{
            cname:this.state.ipName,
            cno:this.state.ipNo,
            cemail:this.state.ipEmail
        }).then((res)=>{console.log(res)
          this.setState({contacts:[...this.state.contacts,res.data]})    
    }).catch((err)=>console.log(err))
          }
}
    handleDelete=(keyid)=>{
           axios.delete(`http://localhost:3001/ContactsDetails/${keyid}`).then((res)=>{
            this.setState({contacts:this.state.contacts.filter((item)=>item.id!==keyid)})
           }).catch((err)=>console.log(err))
    }
    // handleUpdate=(e,keyid)=>{
    //     axios.put(`http://localhost:3001/ContactsDetails/${keyid}`,{
    //         cname:"bharath kumar",
    //         cno:"3969",
    //         cemail:"bh@"
    //     }).then((res)=>{console.log(res)}).catch((err)=>console.log(err))
    //}
    handleUpdate=(e,keyid)=>{
           this.setState({isUpdated:!(this.state.isUpdated)})
           this.setState({ipId:keyid})
    }
    render(){
        return(
            <>
            <form>
               Name:<input type="text" placeholder="enter contact name" onChange={(e)=>this.handleChange(e,"contactName")}></input>
               No:<input type="text" placeholder="enter contact name" onChange={(e)=>this.handleChange(e,"contactNo")}></input>
               E-mail<input type="text" placeholder="enter contact name" onChange={(e)=>this.handleChange(e,"contactEmail")}></input>
               <button onClick={(e)=>this.handleSubmit(e)}>{this.state.isUpdated?"Update Contact":"Create Account"}</button>
            </form>
            {this.state.contacts.map((item)=>(
                <>
                <h1> Name:{item.cname}</h1>
                <p>Number:{item.cno}</p>
                <p>E-Mail:{item.cemail}</p>
                <button onClick={()=>this.handleDelete(item.id)}>Delete Contact</button>
                <button onClick={(e)=>this.handleUpdate(e,item.id)}>Update Contact</button>
                </>
            ))}

            </>
        )
    }
}
export default ContactManager1