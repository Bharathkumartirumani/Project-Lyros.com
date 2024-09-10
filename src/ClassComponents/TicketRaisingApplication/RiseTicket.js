import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
function RiseTicket(){
      const [username,setUsername]=useState("");
      const [issue,setIssue]=useState("")
      const [priority,setPriority]=useState()
      const navigate=useNavigate();
    const handleChange=(e,keyid)=>{
        if(keyid==="uname"){
                setUsername(e.target.value)
        }
        else if(keyid==="issue"){
            setIssue(e.target.value)
        }
        else{
            setPriority(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
          axios.post("http://localhost:3001/TicketDetails",
            {
                priority:priority,
                status:"open",
                issue:issue
            }
          )
    }
  return(
    <>
    Username:<input type="text" placeholder="please enter username" onChange={(e)=>handleChange(e,"uname")}></input>
    Ticket-issue:<input type="text" placeholder="enter issue" onChange={(e)=>handleChange(e,"issue")}></input>
    Ticket-Priority:<input type="text" placeholder="enter priority" onChange={(e)=>handleChange(e,"priority")}></input>
    <button onClick={(e)=>handleSubmit(e)}>Submit</button>
    <button onClick={()=>navigate("/userTicket")}>DashBoard</button>
    <button onClick={()=>navigate("/viewTicket")}>View-Tickets</button>
    </>
  )
}
export default RiseTicket