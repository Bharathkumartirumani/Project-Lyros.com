
import React from "react";
import "./Styles/TicketsPageClass.css"; // Import CSS file

class TicketsPageClass extends React.Component {
    handleClick = () => {
        const { navigate } = this.props.navigate;
        navigate('/adminDashboard');
    }

    handleClickInOrder = () => {
        const { navigate } = this.props.navigate;
        navigate('/adminDashboardInOrder');
    }

    render() {
        return (
            <div className="experiment">
            <div className="tickets-page">
                <button onClick={this.handleClick}>Tickets In Random Order</button>
                <button onClick={this.handleClickInOrder}>Tickets In Priority Order</button>
            </div></div>
        );
    }
}

export default TicketsPageClass;
