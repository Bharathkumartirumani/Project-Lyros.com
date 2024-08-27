import React from "react";
import response from "./data";
import NavBarComponent from "./NavBarComponent";
import Table from "./Table";
class Name extends React.Component{
    constructor(props){
        super(props)
    
    this.state={
         data:[],
    }
}
componentDidMount(){
    this.setState({data:[...response.list].sort((a,b)=>a.name.localeCompare(b.name))})
}
render(){
    return(
        <>
        <NavBarComponent keyword={3}></NavBarComponent>
        <Table data={this.state.data}></Table></>
    )
}
}
export default Name