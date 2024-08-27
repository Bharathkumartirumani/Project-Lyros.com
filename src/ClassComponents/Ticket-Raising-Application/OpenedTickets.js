import React from "react";
import DiscriptionPage from "./TicketsPageClass";
import axios from "axios";
class OpenedTickets extends React.Component{
    constructor(props){
        super(props)
        this.state={
            description:""
        }
    }
    // discription=(e)=>{
    //     const {navigate}=this.props.navigate
    //     navigate('/discriptionPage')
    // }
handleUpdate=(e,keyid)=>{
    axios.patch(`http://localhost:3001/TicketDetails/${keyid}`,{
               description:e.target.value
            }
            ).then((res)=>{console.log(res)})
            .catch((err)=>{console.log(err)})
}

    render(){
        return(
            <>
            <h1>OPENED-TICKETS</h1>
           {this.props.data.map((item)=>(
            <>
            <p>Ticket-Id:{item.id}</p>
            <p>Ticket-Status:{item.status}</p>
            <p>Ticket-Priority:{item.priority}</p>
            <p>Ticket-Discription:{item.description}</p>
            Discription:<textarea onChange={(e)=>this.handleUpdate(e,item.id)}></textarea>
            <br/>
            <button onClick={(e)=>this.props.prop1(item.id)}>Close</button>
            <br></br>
            </>
           ))}
            </>
        )
    }
}
export default OpenedTickets