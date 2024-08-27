import React from "react";
class DashBoardClass extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // const {username}=this.props.data
        return(
            <>
            <h1>{this.props.data.username}</h1>
            <h1>{this.props.data.role}</h1>
            </>
        )
    }
}
export default DashBoardClass