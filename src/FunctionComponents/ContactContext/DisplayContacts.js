import { useContext } from "react"
import ContactContext from "./ContactContext"

function DisplayContacts(){
    const {contacts,dispatch}=useContext(ContactContext)
    const handleDelete=(e,keyid)=>{
        dispatch({type:"DELCONTACT",id:keyid})
    }
    return(
        <>
        {contacts.map((item)=>(
            <>
            <p>{item.id}</p>
            <p>{item.cname}</p>
            <p>{item.cemail}</p>
            <button onClick={(e)=>handleDelete(e,item.id)}>delete</button></>
        ))}
        </>
    )
}
export default DisplayContacts