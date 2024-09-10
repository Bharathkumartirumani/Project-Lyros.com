import {useState } from "react"
import { useContext } from "react"
import ContactContext from "./ContactContext"

function ContactConsumer(){
    const {contacts,dispatch}=useContext(ContactContext)
    const [name,setName]=useState("")
    const [mail,setEmail]=useState("")
    const [id,setid]=useState("")
    const handleChange=(e,keyid)=>{
        if(keyid==="name"){
            setName(e.target.value)
        }
        else{
            setEmail( e.target.value)
        }
    }
    const handleSubmit=(e)=>{
         dispatch({type:"ADDCONATCT",payload:{
            id:1,
            cname:name,
            cemail:mail
         }})
    }
    return(
        <>
        Name:<input type="text" onChange={(e)=>handleChange(e,"name")}></input>
        E-Mail:<input type="text" onChange={(e)=>handleChange(e,"mail")}></input>
        <button onChange={(e)=>handleSubmit(e)}></button>
        </>
    )
}
export default ContactConsumer