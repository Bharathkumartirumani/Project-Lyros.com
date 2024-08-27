import React from "react";
import response from "./data";
import NavBarComponent from "./NavBarComponent";
import Table from "./Table";
import { Link } from "react-router-dom";
class Age extends React.Component{
    constructor(props){
        super(props)
    
    this.state={
         data:[],
    }
}
componentDidMount(){
    this.setState({data:[...response.list].sort((a,b)=>a.age-b.age)})
}
render(){
    return(
        <>
        <NavBarComponent keyword={2}></NavBarComponent>
        <Table data={this.state.data}></Table></>
    )
}
}
export default Age