
import React from "react";
import axios from "axios";
import "./Styles/OpenTickets.css"; // Import CSS file

class OpenedTickets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
        };
    }

    handleUpdate = (e, keyid) => {
        axios.patch(`http://localhost:3001/TicketDetails/${keyid}`, {
            description: e.target.value
        }).then((res) => { console.log(res) })
            .catch((err) => { console.log(err) });
    }

    render() {
        {{console.log(this.props.context)}}
        const {globalUsername,setUsername}=this.props.context
        return (<><h1 className="openheading">{globalUsername}{" "}OPENED TICKETS</h1>
            <div className="opened-tickets">
                {this.props.data.map((item) => (
                    <div key={item.id} className={`ticket priority-${item.priority}`}>
                        <p>Ticket-Issue: {item.issue}</p>
                        <p>Ticket-Status: {item.status}</p>
                        <p>Ticket-Priority: {item.priority}</p>
                        Solotion:
                        <textarea onChange={(e) => this.handleUpdate(e, item.id)}></textarea>
                        <br />
                        <button onClick={() => this.props.prop1(item.id)}>Close</button>
                        <br />
                    </div>
                ))}
            </div></>
        );
    }
}

export default OpenedTickets;
