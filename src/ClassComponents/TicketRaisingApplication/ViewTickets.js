import React, { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ViewTickets(){
    const navigate=useNavigate();
   const [data,setData]=useState([])
    useEffect(()=>{
            axios.get("http://localhost:3001/TicketDetails")
                .then((res) =>setData(res.data))
                .catch((err) => { console.log(err) });
        },[])
        const Navigate=()=>{
              navigate("/userTicket")
        }
    return(
            <>
            <h1>Tickets</h1>
           {data.map((item)=>(
            <>
           <p>Ticket-Issue: {item.issue}</p>
          <p>Ticket-Status: {item.status}</p>
          <p>Ticket-Priority: {item.priority}</p>
          </>
           ))}
           <button onClick={()=>Navigate()}>DashBoard</button>
            </>
           
        )
}
export default ViewTickets