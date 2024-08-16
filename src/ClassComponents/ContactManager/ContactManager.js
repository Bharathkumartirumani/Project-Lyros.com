import React from "react";
import axios from 'axios'
class ContactManager extends React.Component{
    constructor(props){
        super(props)
    this.state={
        Contacts:[],
        id:"",
        name:"",
        no:"",
        email:"",
        status:false,
        isUpdated:false
    }
    }
    componentDidMount=()=>{
         axios.get("http://localhost:3001/ContactsDetails").then((res)=>this.setState({Contacts:res.data})).catch((err)=>console.log(err))
    }
handleChange=(e,keyword)=>{
    if(keyword==="contactname"){
        this.setState({name:e.target.value})
    }
    else if(keyword==="contactno"){
        this.setState({no:e.target.value})
    }
    else{
        this.setState({email:e.target.value})
    }
}
handleSubmit=(e)=>{
    e.preventDefault()
    if(this.state.isUpdated){
        axios.put(`http://localhost:3001/ContactsDetails${this.state.id}`,{
            cname:this.state.name,
            cno:this.state.no,
            cemail:this.state.email
        }).then((res)=>{
            const temp=this.state.Contacts
            const index=temp.findIndex((item)=>item.id===res.data.id)
             temp.splice(index,1,res.data)
             console.log(temp)
            this.setState({Contacts:temp})}).catch((err)=>this.setState({status:"error"}))
            this.setState({isUpdated:!(this.state.isUpdated)})
    }
    else{
    axios.post("http://localhost:3001/ContactsDetails",{
        cname:this.state.name,
        cno:this.state.no,
        cemail:this.state.email
    }).then((res)=>{console.log("post method") 
        const temp=[...this.state.Contacts,res.data]
        this.setState({Contacts:temp})
        this.setState({status:"created successfullly"})}).catch((err)=>console.log(err))
    }
}
// e.preventDefault()
// axios.post("http://localhost:3001/ContactsDetails",{
//     cname:this.state.name,
//     cno:this.state.no,
//     cemail:this.state.email
// }).then((res)=>{console.log("post method") 
//     this.setState({status:"created successfullly"})}).catch((err)=>console.log(err))

// setTimeout(()=>{axios.get("http://localhost:3001/ContactsDetails").then((res)=>{console.log("get method")
//         this.setState({Contacts:res.data})}).catch((err)=>console.log(err))
//     },1000)
//}
// handleUpdate=(e)=>{

//      axios.put("http://localhost:3001/ContactsDetails/b740",{
//         cname:"bharath"
//      }
//      ).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
// }
// handleUpdate=(e,idd)=>{

//     axios.patch(`http://localhost:3001/ContactsDetails/${idd}`,{
//        cname:"bharath"
//     }
//     ).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
// }
handleUpdate=(e,keyid)=>{
    this.setState({isUpdated:!(this.state.isUpdated)})
    this.setState({id:keyid})
 }
// handleDelete=(e,idd)=>{
//     axios.delete(`http://localhost:3001/ContactsDetails/${idd}`).then((res)=>{this.setState({Contacts:this.state.Contacts.filter((item)=>item.id!=idd)})}).catch((err)=>{console.log(err)})
// }
handleDelete=(e,idd)=>{
    axios.delete(`http://localhost:3001/ContactsDetails/${idd}`).then((res)=>{
        const temp=this.state.Contacts
        const index=temp.findIndex((item)=>{item.id=idd})
        temp.splice(index,1)
        this.setState({Contacts:temp})
    }).catch((err)=>console.log(err))
}


    render(){
        return(
            <>
            <form>
            Name:<input type="text" onChange={(e)=>this.handleChange(e,"contactname")}></input>
            No:<input type="text" onChange={(e)=>this.handleChange(e,"contactno")}></input>
            E-Mail:<input type="text" onChange={(e)=>this.handleChange(e,"contactemail")}></input>
            <button onClick={(e)=>this.handleSubmit(e)}>{(this.state.isUpdated)?"Update Contact":"Create Contact"}</button>
            {/* <button onClick={(e)=>this.handleUpdate(e)}>Update Contact</button> */}
            </form>
            <>
            <p style={{color:"red"}}>{this.state.status}</p>
            {this.state.Contacts.map((item)=>(
                <>
                <h1>Name:{item.cname}</h1>
                <p>Number:{item.cno}</p>
                <p>E-Mail{item.cemail}</p>
                <button onClick={(e)=>this.handleDelete(e,item.id)}>Delete Contact</button>
                <button onClick={(e)=>this.handleUpdate(e,item.id)}>Update Contact</button>
                </>
            )
            )}
            </>
            </>
        )
    }
}
export default ContactManager