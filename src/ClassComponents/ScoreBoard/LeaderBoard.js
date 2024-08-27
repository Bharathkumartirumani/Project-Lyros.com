import React from "react";
import response from "./data";
import './LeaderBoard.css'
import Table from "./Table";
import { Link } from "react-router-dom";
import NavBarComponent from "./NavBarComponent";
class LeaderBoard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        this.setState({data:response.list})
    }
    render(){
        return(
            <>
            {/* <NavBarComponent></NavBarComponent> */}
            <h1>Data with no order</h1>
            <Table data={this.state.data}></Table>
            </>
        )
    }

}
export default LeaderBoard