import React from "react";
import axios from "axios";
import ClosedTickets from "./ClosedTickets";
import OpenedTickets from "./OpenedTickets";
class AdminDashBoardInOrder extends React.Component{
    constructor(props){
        super(props)
    this.state={
          data:[]
    }
}

componentDidMount(){
     axios.get("http://localhost:3001/TicketDetails").then((res)=>this.setState({data:res.data.sort((a,b)=>a.priority-b.priority)})).catch((err)=>{console.log(err)})
}
handleClosed=()=>{
    const closed=this.state.data.filter((item)=>item.status==="closed")
    return closed
}
handleOpened=()=>{
    const open=this.state.data.filter((item)=>item.status==="open")
    return open
}
closeTicket=(idd)=>{
    const temp=this.state.data
    const obj=temp.find((item)=>item.id===idd)
    obj.status="closed"
    this.setState({data:temp})
    console.log(temp)
    console.log(obj)
}


render(){
    return(
      <>
      {console.log("render")}
      <OpenedTickets data={this.handleOpened()} prop1={this.closeTicket} prop2={this.state.data}></OpenedTickets>
      <ClosedTickets data={this.handleClosed()}></ClosedTickets>
      </>
    )
}
}
export default AdminDashBoardInOrder