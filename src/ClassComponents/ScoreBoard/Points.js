import React from "react";
import response from "./data";
import NavBarComponent from "./NavBarComponent";
import Table from "./Table";
class Points extends React.Component{
    constructor(props){
        super(props)
    
    this.state={
         data:[],
    }
}
componentDidMount(){
    this.setState({data:[...response.list].sort((a,b)=>a.points-b.points)})
}
render(){
    return(
        <>
        <NavBarComponent keyword={4}></NavBarComponent>
        <Table data={this.state.data}></Table></>
    )
}
}
export default Points