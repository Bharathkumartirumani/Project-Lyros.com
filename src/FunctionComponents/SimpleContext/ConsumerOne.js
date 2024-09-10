import { useContext, useState } from "react"
import SimpleContext from "./SimpleContext"

function ConsumerOne(){
    const {username,setUsername}=useContext(SimpleContext)
    return(
        <>
        {username}
        <button onClick={()=>setUsername("kumar")}>Change-name</button>
        </>
    )
}
export default ConsumerOne