
import React from "react";
import "./Styles/TicketsPageClass.css"; // Import CSS file

class UserTicketClass extends React.Component {
    handleClick = () => {
        const { navigate } = this.props.navigate;
        navigate('/riseTicket');
    }

    handleClickInOrder = () => {
        const { navigate } = this.props.navigate;
        navigate('/viewTicket');
    }

    render() {
        return (
            <div className="experiment">
            <div className="tickets-page">
                <button onClick={this.handleClick}>Rise a Ticket</button>
                <button onClick={this.handleClickInOrder}>View Tickets</button>
            </div></div>
        );
    }
}

export default UserTicketClass;
