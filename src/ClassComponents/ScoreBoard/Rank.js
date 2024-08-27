import React from "react";
import response from "./data";
import NavBarComponent from "./NavBarComponent";
import { Link } from "react-router-dom";
import Table from "./Table";
class Rank extends React.Component{
    constructor(props){
        super(props)
    
    this.state={
         data:[],
    }
}
componentDidMount(){
    this.setState({data:[...response.list].sort((a,b)=>a.rank-b.rank)})
}
render(){
    return(
        <>
        <NavBarComponent keyword={1}></NavBarComponent>
        <Table data={this.state.data}></Table>
        </>
    )
}
}
export default Rank