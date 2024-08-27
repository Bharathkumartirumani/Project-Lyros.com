import React from "react";
class TicketsPageClass extends React.Component{
    constructor(props){
        super(props)
    }
    handleClick=()=>{
        const {navigate}=this.props.navigate
        navigate('/adminDashboard')
    }
    handleClickInOrder=()=>{
        const {navigate}=this.props.navigate
        navigate('/adminDashboardInOrder')
    }
    render(){
        return(
            <>
            <button onClick={()=>this.handleClick()}>Tickets-In-Random-Order</button>
            <button onClick={()=>this.handleClickInOrder()}>Tickets-In-Priority-Order</button>
            </>
        )
    }
}
export default TicketsPageClass