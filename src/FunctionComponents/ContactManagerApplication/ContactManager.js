import axios from "axios";
import React, { useEffect, useState } from "react";
function ContactManager(){
    const [data,setData]=useState([])
    const [name,setName]=useState("")
    const [no,setNo]=useState("")
    const [email,setEmail]=useState("")
    const [msg,setMsg]=useState("")
    const [updated,setUpdated]=useState(false)
    const [id,setId]=useState("")
    useEffect(
        ()=>{
           axios.get("http://localhost:3001/ContactsDetails").then((res)=>setData(res.data)).catch((err)=>console.log(err))
        }
    )
    useEffect(
        ()=>{
           axios.get("http://localhost:3001/ContactsDetails").then((res)=>setData(res.data)).catch((err)=>console.log(err))
        },[msg]
    )
   const handleChange=(e,keyid)=>{
        if(keyid==="name"){
            setName(e.target.value)
        }
        if(keyid==="number"){
            setNo(e.target.value)
        }
        else{
            setEmail(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        if(updated){
            axios.put(`http://localhost:3001/ContactsDetails/${id}`,{
                cname:name,
                cno:no,
                cemail:email
            }).then((res)=>setMsg("updated suceessfully"))
            setUpdated(!updated)
        }
        else{
        axios.post("http://localhost:3001/ContactsDetails",{
            cname:name,
            cno:no,
            cemail:email
        }).then((res)=>{setMsg("created successfully")})
    }
}
    const handleDelete=(e,keyid)=>{
          axios.delete(`http://localhost:3001/ContactsDetails/${keyid}`).then((res)=>setMsg("deleted successfully"))
    }
    const handleUpdate=(e,keyid)=>{
      setUpdated(!updated)
      setId(keyid)

    }
    return(
        <>
        <>
        <h1>Enter Details</h1>
        Contact Name<input type="text" placeholder="please enter name" onChange={(e)=>handleChange(e,"name")}></input>
        Contact Number<input type="text" placeholder="please enter number" onChange={(e)=>handleChange(e,"number")}></input>
        Contact E-mail<input type="text" placeholder="please enter email" onChange={(e)=>handleChange(e,"email")}></input>
        <button onClick={(e)=>handleSubmit(e)}>{(updated?"Update":"Create")}</button>
        </>
        <>
        {
            data.map((item)=>(
                <>
                <h3>{item.cname}</h3>
                <h3>{item.cno}</h3>
                <h3>{item.cemail}</h3>
                <button onClick={(e)=>handleDelete(e,item.id)}>Delete</button>
                <button onClick={(e)=>handleUpdate(e,item.id)}>Update</button>
                </>
            ))
        }
        </>
        </>
    )
}
export default ContactManager