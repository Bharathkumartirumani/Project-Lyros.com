import React from "react";
class ClosedTickets extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <h1>CLOSED-TICKETS</h1>
           {this.props.data.map((item)=>(
            <>
            <p>Ticket-Id:{item.id}</p>
            <p>Ticket-Status:{item.status}</p>
            <p>Ticket-Priority:{item.priority}</p>
            <p>Ticket-Description:{item.description}</p>
            <br></br>
            </>
           ))}
            </>
        )
    }
}
export default ClosedTickets