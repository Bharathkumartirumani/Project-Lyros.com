
import React from "react";
import axios from "axios";
import ClosedTickets from "./ClosedTickets";
import OpenedTickets from "./OpenedTickets";
import "./Styles/AdminDashBoardInOrder.css"; // Import CSS file

class AdminDashBoardInOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3001/TicketDetails")
            .then((res) => this.setState({ data: res.data.sort((a, b) => a.priority - b.priority) }))
            .catch((err) => { console.log(err) });
    }

    handleClosed = () => {
        const closed = this.state.data.filter((item) => item.status === "closed");
        return closed;
    }

    handleOpened = () => {
        const open = this.state.data.filter((item) => item.status === "open");
        return open;
    }

    closeTicket = (idd) => {
        axios.patch(`http://localhost:3001/TicketDetails/${idd}`,{
            status:"closed"
        }).then((res)=>{
            const temp=this.state.data
            const index=temp.findIndex((item)=>item.id===idd)
            temp.splice(index,1,res.data)
            this.setState({data:temp})
        });
    }
    openTicket=(idd)=>{
        axios.patch(`http://localhost:3001/TicketDetails/${idd}`,{
            status:"open"
        }).then((res)=>{
            const temp=this.state.data
            const index=temp.findIndex((item)=>item.id===idd)
            temp.splice(index,1,res.data)
            this.setState({data:temp})
        })
    }
    render() {
        const context=this.props.context
        const navigate=this.props.navigate
        return (
            <div className="admin-dashboard-in-order">
                <OpenedTickets data={this.handleOpened()} prop1={this.closeTicket} prop2={this.state.data} context={context}/>
                <ClosedTickets data={this.handleClosed()} prop3={this.openTicket}/>
                <button onClick={()=>navigate("/tickets")} className="button">DashBoard</button>
            </div>
        );
    }
}

export default AdminDashBoardInOrder;
